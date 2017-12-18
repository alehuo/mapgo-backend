# Viikkoraportti 7 - Loppupalautus

## Tuntimäärä

Tällä viikolla työskentelin arviolta 20 tuntia projektin parissa.

## Mitä olen tehnyt tällä viikolla?

Tällä viikolla tein testit BFS- ja A* -algoritmeille. Lisäksi lisäsin mahdollisuuden valita algoritmin lopetuspiste.

## Miten ohjelma on edistynyt?

Ohjelma näyttää nyt front-endissä lopetus- ja aloituspisteet pisteinä. Korjasin A*-algoritmin toimintaa siten, että se lopettaa laskennan kun saavutetaan lopetussolmu. Algoritmin rakennetta on myös muokattu siten, että heuristiikkafunktion pystyy muuttamaan lennosta.

## Mitä opin tällä viikolla / tänään?

Tässä viikolla opin A*-algoritmin heuristiikkafunktioiden käyttöä.

## Mikä jäi epäselväksi tai tuottanut vaikeuksia? Vastaa tähän kohtaan rehellisesti, koska saat tarvittaessa apua tämän kohdan perusteella.

Vaikeuksia tuotti A*-algoritmin testaus. Jostain syystä Tietorakenteet ja algoritmit -kurssin loppupään tehtävässä esitetty Heuristiikkafunktio ei toiminut täydellisesti. Laitoin tästä huomautukset testeihin, mutta minun mielestäni testit osoittavat, että A*-algoritmi toimii oikein kunhan Heuristiikkafunktio on kunnossa. Testasin myös hakemalla GPS-koordinaatit kyseisen verkon kaupungeille, ja tarkkuus oli hämmentävän hyvä. *** Koordinaatit saattavat heittää siitä, miten ne ovat alunperin määritelty. Tämän takia kolmen solmun etäisyydet eivät laske oikein. Hyväksyn kuitenkin testauksen tarkkuuden. ***

## Mitä teen seuraavaksi?

Koska tämä on loppupalautus, niin saatan vapaa-ajalla siirtää Front-endin käyttämään Reduxia Reactin tilojen hallintaan. Dijkstran ja A* -algoritmin testejä pitäisi edelleen parantaa, mutta aika ei tähän riittänyt. Testikattavuus on kuitenkin mielestäni hyvällä tasolla.