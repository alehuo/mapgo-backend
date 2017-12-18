# Toteutusdokumentaatio

## Ohjelman yleisrakenne

Ohjelma on pilkottu kahteen osaan: front-endiin ja back-endiin. Front-endillä ei tässä projektissa ole niin suurta merkitystä, koska algoritmejä ei ole toteutettu sinne. Back-end sisältää kaikki projektin algoritmit ja WebSocket-rajapinnan, jota kautta käyttäjä pystyy pyytämään back-endiä laskemaan reitinhakualgoritmien avulla kartan piirto-ohjeita.

Ohjelman lähdekoodi löytyy ```src```-kansiosta. Testit löytyvät ```test```-kansiosta. ```src```-kansion sisällä on seuraavat kansiot:

## ```src/algo```

Kansio sisältää Dijkstran, A*- ja BFS-algoritmien toteutukset.

## ```src/comparator```

Kansio sisältää Dijkstran ja A* -algoritmien käyttämät solmun vertaamiseen käytetyt comparatorit.

## ```src/data```

Kansio sisältää back-endin käyttämien verkkonen json-tiedostot.

## ```src/enum```

Kansio sisältää enumeraattoreja mm. Algoritmien tyypeille ja solmujen värille.

## ```src/interface```

Kansio sisältää rajapintoja mm. back-endin ja front-endin väliseen tiedonsiirtoon ja Comparatorin ja Comparablen toteuttamiseen tarvittavat rajapinnat.

## ```src/struct```

Kansio sisältää itse toteutettuja tietorakenteita, mm. ArrayList, Heap, Queue ja Tuple. Kansiosta löytyy lisäksi yksittäisiä tietorakenteita solmun ja kaaren tietojen tallentamiseen.

## ```src/utils```

Kansio sisältää apufunktioita mm. taulukkojen täyttämiseen, verkon lataamiseen JSON-tiedostoista, lat-lon-koordinaattien muunnokseen ja suoritusstatistiikan laatimiseen.

## Saavutetut aika- ja tilavaativuudet (m.m. O-analyysit pseudokoodista)

Olkoon |V| solmujen ja |E| kaarien lukumäärä.

Algoritmi | Aika              | Tila
----------|----------------------------|--------------
Dijkstra  | O(\|E\| + \|V\| log \|V\|) | O(\|V\|)
A*  | O(\|E\| + \|V\| log \|V\|) | O(\|V\|)  
BFS       | O(\|V\| + \|E\|) | O(\|V\|)

Saavutin aika- ja tilavaativuudet, jotka mainitsin määrittelydokumentaatiossa. Kts. [määrittelydokumentaatio](määrittelydokumentaatio.md)

### Dijkstran algoritmin aika- ja tilavaativuuden analyysi

Tilavaativuus tälle algoritmille on O(|V|).

- Alustaminen init() ja initializeSingleSource() -metodilla vie aikaa O(|V|).
- Koska käytössä on keko, vievät keko-operaatiot O(log n) verran aikaa.
- Jos algoritmi joutuu käymään läpi kaikki kaaret, tulee keko-operaatioiden aikavaativuudeksi |E| log(|E|). Yhteensä silmukka suoriutuu ajassa O(\|E\| + \|V\| log \|V\|)

### BFS-algoritmin aika- ja tilavaativuuden analyysi

Tilavaativuus tälle algoritmille on O(|V|).

- Alustaminen init() -metodilla vie aikaa O(|V|).
- Maksimissaan käydään läpi |V| solmua ja |E| kaarta, siis aikavaativuudeksi saadaan O(|V| + |E|)

### A*-algoritmin aika- ja tilavaativuuden analyysi

Tilavaativuus tälle algoritmille on O(|V|).

- Alustaminen init() ja initializeSingleSource() -metodilla vie aikaa O(|V|).
- Koska käytössä on keko, vievät keko-operaatiot O(log n) verran aikaa.
- Jos algoritmi joutuu käymään läpi kaikki kaaret, tulee keko-operaatioiden aikavaativuudeksi |E| log(|E|). Yhteensä silmukka suoriutuu ajassa O(\|E\| + \|V\| log \|V\|)

## Suorituskyky- ja O-analyysivertailu

Suorituskykyvertailua varten kts. [Testausdokumentaatio](https://github.com/alehuo/mapgo-backend/blob/master/doc/testausdokumentaatio.md)

## Työn mahdolliset puutteet ja parannusehdotukset

Front-endin tulisi käyttää React Reduxia järkevämmän tilanhallinnan kannalta.

Muita mahdollisia puutteita ovat Dijkstran ja A* -algoritmien testien laajuus. Olen kuitenkin nykyiseen tilanteeseen tyytyväinen ja algoritmejä pystyy testaamaan monipuolisesti (A* -algoritmille pystyy syöttämään oman heuristiikkafunktion joita olen testannut testeillä kahdella eri periaatteella).

Dokumentaatiosta puuttuu luokkakaavio; sovellus on sen verran laaja, että luokkakaavio olisi hyvä olla.

## Lähteet

- Wikipedia
- Tietorakenteet ja algoritmit -kurssin luentomateriaali