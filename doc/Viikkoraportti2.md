# Viikkoraportti 2

## Tuntimäärä

Tällä viikolla työskentelin arviolta 11 tuntia projektin parissa.

## Mitä olen tehnyt tällä viikolla?

Tällä viikolla kirjoittelin testejä mm. Dijkstran algoritmille. Samalla tuli configuroitua codecov oikein, jotta testejä ei näytetä rivikattavuudessa.

Konfiguroin projektin myös niin, että tsc ei compilaa TypeScript-tiedostoja suoraan samaan kansioon vaan ne luodaan erilliseen dist-kansioon.

Toteutin tällä viikolla Algorithm-luokan, jota kaikki reitinhakualgoritmit käyttävät. Tämä mahdollistaa algoritmin seurannan, josta voi sitten piirrellä kartan. Tavoitteena olisi vielä luoda erillinen Statistics-luokka, joka sitten injektoidaan konstruktorissa sisään algoritmille. Tällä hetkellä toteutus on melko hajanainen.

Toteutin myös Server-luokan, jonka sisällä pyörii Express. Tätä käytetään, kun front end pyytää back endiä laskemaan kartan piirto-ohjeet.

## Miten ohjelma on edistynyt?

Ohjelma osaa nyt laskea valmiiksi määritetylle kartalle pienimmän etäisyyden kartan Dijkstran algoritmillä. Projektiin rakennettu Express-palvelin palauttaa JSON-muotoisen merkkijonon joka sisältää reitinhaun suoritusvaiheet.

## Mitä opin tällä viikolla / tänään?

Tällä viikolla opin lisää TypeScriptiä ja yleisesti JavaScriptiä. Minulla oli vaikeuksia luoda importeille ns. globaali tiedosto, jotta jokaista tiedostoa ei tarvitse vaatia erikseen import-komennolla, vaan importit löytyvät kansion index.ts -tiedostosta.

Tutustuin canvakselle piirtämiseen ja sain Front endiin testattua **react-konva**a.

## Mikä jäi epäselväksi tai tuottanut vaikeuksia? Vastaa tähän kohtaan rehellisesti, koska saat tarvittaessa apua tämän kohdan perusteella.

Olen pohtinut pitkään, miten back-endin laskema algoritmin edistyminen kannattaa lähettää palvelimelle. Yksittäisenä palasena selain menee täysin tukkoon, joten se pitäisi pilkkoa. Ongelmia on myös ollut ymmärtää JavaScriptin objektien suhdetta. Esimerkiksi viittaukset samaan olioon ovat tulleet yllätyksenä minulle (esim. Javassa tämä toimii eri tavalla)

## Mitä teen seuraavaksi?

Ensi viikolla aion tutkia, voisiko WebSocketia käyttää projektissa. Tämä mahdollistaisi reitti-JSON:n pilkkomisen osiin ja sen lähettämistä palvelimelle osissa (Käyttäisin esimerkiksi jonoa, joka sitten lähettää tietyin väliajoin reitin seuraavan askeleen)

Tarkoituksena on myös parantaa Algorithm-luokkaa ja yleistä testikattavuutta.