# Toteutusdokumentaatio

## Ohjelman yleisrakenne

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

## Suorituskyky- ja O-analyysivertailu

Suorituskykyvertailua varten kts. [Testausdokumentaatio](https://github.com/alehuo/mapgo-backend/blob/master/doc/testausdokumentaatio.md)

## Työn mahdolliset puutteet ja parannusehdotukset

Front-endin tulisi käyttää React Reduxia järkevämmän tilanhallinnan kannalta.

## Lähteet

- Wikipedia
- Tietorakenteet ja algoritmit -kurssin luentomateriaali