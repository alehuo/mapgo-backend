# Määrittelydokumentaatio

## Minkä ongelman ohjelma ratkaisee?

Ohjelma vertailee verkkoalgoritmien toimintaa piirtämällä kartan sille annetusta verkosta.

## Mitä syötteitä ohjelma saa ja miten näitä käytetään?

Ohjelma saa syötteenä verkon vieruslistaesityksen ja jonkin aloituspisteen. Verkkoalgoritmit käyttävät (ja vaativat) vieruslistaa laskiessaan reittejä.
Aloituspistettä käytetään nimensä mukaisesti aloituspisteenä, josta verkkoalgoritmit aloittavat etsinnän.

Kun reitinhakualgoritmi saa reitin/reitit valmiiksi, palauttaa se JSON-objektin, joka sisältää visualisoinnin.

## Mitä tietorakenteita käytän ja miksi valitsin ne?

Projektin tietorakenteita ovat mm. keko, jono ja lista. Dijkstran algoritmi käyttää minimikeon toteutusta, BFS-algoritmi käyttää jonoa.
Listaa käytetään esim. vieruslistassa.

### Tietorakenteiden aikavaativuuksia

(Tässä on tällä hetkellä toteutettujen tietorakenteiden aikavaativuudet)

#### Keko
- parent O(1)
- left O(1)
- right O(1)
- heapify O(log n)
- heap-del-min O(log n)
- heap-min O(1)

#### Lista
- add O(1)
- get O(1)

#### Jono
- Tietorakennetta ei ole vielä toteutettu, TBA

### Algoritmien aika- ja tilavaativuuksia

Algoritmi | Aika              | Tila
----------|----------------------------|--------------
Dijkstra  | O(\|E\| + \|V\| log \|V\|) | O(\|V\|) 
BFS       | O(\|V\| + \|E\|) | O(\|V\|)

## Mitä algoritmejä käytän?

Aluksi toteutan projektiini Dijkstran ja BFS-algoritmin. Myöhemmin tarkoituksena on toteuttaa kolmas reittialgoritmi, jonka speksaan ja toteutan itse.

## Lähteet

Lähteinä on käytetty mm. Wikipediaa, Javan dokumentaatiota ja tärkeimpänä tiran luentokalvoja.
