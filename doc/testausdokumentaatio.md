# Testausdokumentaatio

Tämä dokumentti sisältää testituloksia, kun olen testannut ja verrannut itse toteuttamiani tietorakenteita valmiisiin toteutuksiin.

## ArrayList

ArrayListiä on verrattu Javasta löytyvään ArrayListiin. Testisyötteenä on kokonaislukuja, joiden lukumäärä lisättynä listaan vaihtelee. Testit aloittavat yhdellä luvulla, sitten kaksi jne.. noudattaen kaavaa 2^n. Viimeinen testi lisää ArrayListiin hieman yli 8 miljoonaa lukua. Aika mitataan jokaisessa testitapauksessa ensimmäisen luvun lisäyksestä viimeisen luvun lisäykseen.

### insert()

Insert-operaation aikavaativuus on pahimmillaan O(n), sillä ArrayList-tietorakenne kasvattaa taulun kokoa dynaamisesti sitä mukaa, kun elementtejä lisätään listaan. Parhaimmillaan operaatio toimii vakioaikaisesti, eli sen parhaimman tapauksen aikavaativuus on O(1).

| Lukujen määrä taulukossa |      Java        |     JavaScript           | JavaScript (ilman Object.seal ja fill)  |
| ------------- | ------------- |-------------| ------|
| 1 | ~0.0 ms | ~0.0 ms | ~0.0 ms |
| 2 | ~0.0 ms | ~0.0 ms | ~0.0 ms |
| 4 | ~0.0 ms | ~0.0 ms | ~0.0 ms |
| 8 | ~0.0 ms | ~0.0 ms | ~0.0 ms |
| 16 | ~0.0 ms | ~0.0 ms | ~0.0 ms |
| 32 | ~0.0 ms | ~0.0 ms | ~0.0 ms |
| 64 | ~0.0 ms | ~0.0 ms | ~0.0 ms |
| 128 | ~0.0 ms | ~0.0 ms | ~0.0 ms |
| 256 | ~0.0 ms | ~0.0 ms | ~0.0 ms |
| 512 | ~0.0 ms | ~0.0 ms | ~0.0 ms |
| 1024 | ~0.0 ms | ~0.0 ms | ~0.0 ms |
| 2048 | 0.2 ms | 1.2 ms | 0.1 ms |
| 4096 | 0.3 ms | 2.8 ms | 0.1 ms |
| 8192 | 0.3 ms | 5.9 ms | 0.2 ms |
| 16384 | 0.8 ms | 8.8 ms | 0.1 ms |
| 32768 | 0.6 ms | 22.9 ms | 0.2 ms |
| 65536 | 1.1 ms | 63.8 ms | 1.6 ms |
| 131072 | 2.5 ms | 108 ms | 3.1 ms |
| 262144 | 2.6 ms | 302 ms | 5.5 ms |
| 524288 | 9 ms | 760 ms | 11 ms |
| 1048576 | 14 ms | 1869.6 ms | 25 ms |
| 2097152 | 34 ms | 2945.6 ms | 190 ms |
| 4194304 | 74 ms | 17070 ms | 299 ms |
| 8388608 | 95 ms | 27855 ms | 2724 ms |

Ylläolevasta taulukosta voidaan huomata, että Javalla toteutettu ArrayList on suurin piirtein yhtä nopea kuin JavaScriptillä toteutettu ArrayList (Missä taulukkoa ei suljeta Object.seal -metodilla). Kuitenkin taulukon koon kasvaessa JavaScript-toteutus hidastuu merkittävästi vrt. Java -toteutukseen.

Päivitän testausdokumentaatioon myöhemmin kaavion tilanteesta.

### get()

get() -metodi on vakioaikainen, joten sen testaamista en koe tarpeelliseksi.

## Heap

Suorituskykytestit tulossa.