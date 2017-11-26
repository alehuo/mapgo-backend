# Viikkoraportti 4

## Tuntimäärä

Tällä viikolla työskentelin arviolta 18 tuntia projektin parissa.

## Mitä olen tehnyt tällä viikolla?

Tällä viikolla olen koodannut ja viimeistellyt Front-endin. Korjasin myös muutaman bugin jotka löytyivät Statistiikkaluokasta.
Refaktoroin back-endin koodia siten, ettei se tarvitse enää Express -riippuvuutta. Koordinaattien muunnos xy-tasoon hoituu nyt myös back-endissä.

Generoin back-end -repositorioon koodin automaattiset dokumentaatiot doc/typedoc -kansioon.

Kytkin myös back-endin ja front-endin deployaamaan automaattisesti Herokuun, Travis CI:n kautta.

Vertailin Javan ArrayList-toteutusta omaan toteutukseeni, ja vertailun tulokset löytyvät **testausdokumentaatiosta.**

## Miten ohjelma on edistynyt?

Ohjelmaa pystyy nyt käyttämään front-endin kautta. Palvelu löytyy Herokusta, ja siihen pääsee käsiksi [tästä linkistä.](http://mapgo-front.herokuapp.com). Tästä lähtien tarkoituksena on keskittyä täysin Algoritmien puoleen, sillä ohjelman visuaalinen puoli ei tule muuttumaan (tai ainakaan en ole suunnitellut siihen mitään uutta tai muutoksia, sillä se näyttää nätiltä ja toimii hyvin).

## Mitä opin tällä viikolla / tänään?

Tällä viikolla opin käyttämään Visual Studio Coden debuggeria, sillä minulla oli ongelmia Statistiikka-luokan kanssa. Debuggerin konfigurointiin meni hetki aikaa, jonka jälkeen homma toimi hienosti.

## Mikä jäi epäselväksi tai tuottanut vaikeuksia? Vastaa tähän kohtaan rehellisesti, koska saat tarvittaessa apua tämän kohdan perusteella.

Tällä viikolla ei ole jäänyt mitään epäselvyyksiä.

## Mitä teen seuraavaksi?

Seuraavaksi aion kirjoittaa paljon testejä. Testikattavuus on laskenut ohjelman kehityskaaren aikana, kun ohjelma on mennyt eteenpäin. Varsinkin algoritmejä on syytä testata tarkasti.