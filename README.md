# Mapgo

![Mapgo logo](doc/mapgo_logo.png)


[![Build Status](https://travis-ci.org/alehuo/mapgo-backend.svg?branch=master)](https://travis-ci.org/alehuo/mapgo-backend)
[![codecov](https://codecov.io/gh/alehuo/mapgo-backend/branch/master/graph/badge.svg)](https://codecov.io/gh/alehuo/mapgo-backend)
[![TypeScript](https://badges.frapsoft.com/typescript/code/typescript.svg?v=101)](https://github.com/ellerbrock/typescript-badges/)
[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

Tämä repositorio sisältää back endin lähdekoodin Aineopintojen harjoitustyö: Tietorakenteet ja algoritmit -kurssin projektille. Front endin lähdekoodi löytyy [täältä](https://github.com/alehuo/mapgo-frontend). 
Projektin viikkoraportit tulevat löytymään back endin repositoriosta.

### Mapgo-sovellukseen pääset käsiksi [tästä](http://mapgo-front.herokuapp.com/)

## Projekti

Projektin ideana on toteuttaa web-sovellus, joka piirtää karttoja. Karttojen piirtämiseen käytetään reittienhakualgoritmejä, joita ovat mm. Dijkstran algoritmi, A* ja BFS.

Projektissa käytettävät tietorakenteet, algoritmit ja niihin kuuluvat testit koodataan TypeScriptillä. Front end tulee olemaan yksisivuinen Reactilla toteutettu sovellus. Front end ja back end yhdistetään käyttämällä WebSocket-yhteyttä.

## Sovelluksen käyttöohjeet

1. Kloonaa repo
2. Suorita komento ```yarn```
3. Tämän jälkeen aja testit komennolla ```yarn test```
4. ```npm start```

Tämän jälkeen siirry [Front-endin](https://github.com/alehuo/mapgo-frontend) repositorioon ja noudata siellä olevia ohjeita.

### Docker

Vaihtoehtoisesti voit hakea projektin Dockerin image repositoriosta ja suorittaa sen komennolla ```yarn run-container```. Ei aja itse testejä (vielä)

### Buildaaminen Dockerilla

1. Luo Docker-kuva komennolla ```yarn build-container```.
2. Käynnistä Docker-instanssi komennolla ```yarn run-container```

## Linkkejä

### [Front endin GitHub-repositorio](https://github.com/alehuo/mapgo-frontend)

### Viikkoraportit

- [Viikkoraportti 1](https://github.com/alehuo/mapgo-backend/blob/master/doc/Viikkoraportti1.md)

- [Viikkoraportti 2](https://github.com/alehuo/mapgo-backend/blob/master/doc/Viikkoraportti2.md)

- [Viikkoraportti 3](https://github.com/alehuo/mapgo-backend/blob/master/doc/Viikkoraportti3.md)

- [Viikkoraportti 4](https://github.com/alehuo/mapgo-backend/blob/master/doc/Viikkoraportti4.md)

- [Viikkoraportti 5](https://github.com/alehuo/mapgo-backend/blob/master/doc/Viikkoraportti5.md)

- [Viikkoraportti 6](https://github.com/alehuo/mapgo-backend/blob/master/doc/Viikkoraportti6.md)

- [Viikkoraportti 7](https://github.com/alehuo/mapgo-backend/blob/master/doc/Viikkoraportti7.md)

### [Määrittelydokumentaatio](https://github.com/alehuo/mapgo-backend/blob/master/doc/määrittelydokumentaatio.md)

### [Testausdokumentaatio](https://github.com/alehuo/mapgo-backend/blob/master/doc/testausdokumentaatio.md)

### [Toteutusdokumentaatio](https://github.com/alehuo/mapgo-backend/blob/master/doc/toteutusdokumentaatio.md)

### [Typedoc](http://htmlpreview.github.io/?https://github.com/alehuo/mapgo-backend/blob/master/doc/typedoc/index.html)

## Lisenssi

Tämä projekti on lisensoitu lisenssillä GNU General Public License 3.0.