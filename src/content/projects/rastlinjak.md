---
naslov: "Kovinski rastlinjak"
avtor:
  - "Rok Mohorič"
datum: 2026-05-27
tags: ["avtomatizacija", "CAD", "elektronika", "IoT", "obdelava materialov"]
stroji:
  - "Varilni aparat"
  - "Kotni brusilnik"
  - "Vrtalni stroj"
  - "ESP32"
  - "LoRa modul"
  - "Servo motor"
  - "Vodna črpalka"
slika: "/projekti/rastlinjak/rastlinjak-cover.png"


opis: "Kovinski rastlinjak dimenzij 6000×4000×1900 mm iz kvadratnih jeklenih cevi 50×50 in 20×20 mm z avtomatskim prezračevanjem in zalivanjem, krmiljenim z ESP32 mikrokontrolejem prek omrežja LoRaWAN — upravljanje na daljavo prek mobilnega telefona."
---

Kovinski rastlinjak je projekt, ki sem ga zasnoval in izdelal samostojno v okviru šolskega Fab Laba. Gre za jekleno konstrukcijo dimenzij 6000×4000×1900 mm s trikotno streho, katere sleme seže 400 mm nad vrh sten. Poleg same konstrukcije projekt vključuje avtomatizacijo — samodejno prezračevanje in zalivanje ter upravljanje na daljavo prek mobilnega telefona po omrežju **LoRaWAN**.

Celoten projekt sem zasnoval sam — od ideje in izračunov do tehničnih načrtov, montaže, elektronike in programiranja.

## Opis projekta

- **Konstrukcija:** jekleni okvir iz kvadratnih cevi 50×50×3 mm (navpične cevi in okvir) ter 20×20×2 mm (vodoravne palice)
- **Dimenzije:** 6000×4000 mm tloris, višina sten 1900 mm, sleme strehe +400 mm
- **Streha:** trikotna oblika z dvokapno streho, odpirajoči paneli na obeh straneh slemena za prezračevanje
- **Vrata:** dvodelna vrata 800×1750 mm na sredini sprednje stranice (4000 mm)
- **Avtomatizacija:** samodejno prezračevanje in zalivanje, krmiljeno z ESP32 prek LoRaWAN omrežja
- **Upravljanje na daljavo:** odpiranje/zapiranje panelov in vklop zalivanja prek mobilnega telefona

## Tehnični podatki konstrukcije

- **Navpične cevi 50×50:** 4 cevi vzdolž stranic 6000 mm (razmak 2000 mm), 2 cevi vzdolž stranic 4000 mm (samo kotni)
- **Vodoravne palice 20×20:** 2 palici na vsaki stranici, na višinah 650 mm in 1300 mm
- **Luknje za palice:** na 25 mm od roba, razmak med luknjami 2000 mm
- **Špirovci strehe:** dolžina 2040 mm, kot α = 11,3°
- **Skupno jeklo:** 22 navpičnih cevi, 2 odpirajoca strešna panela

## Avtomatsko prezračevanje — strešni paneli

Oba strešna panela se odpirati in zapirata samodejno glede na temperaturo znotraj rastlinjaka, po potrebi pa ju lahko ročno upravljamo tudi prek telefona.

### Kako deluje

Temperaturni senzor **DHT22** meri temperaturo in vlago zraka znotraj rastlinjaka. Ko temperatura preseže nastavljeno mejo (npr. 28 °C), ESP32 pošlje signal servo motorju, ki potisne panel odprt. Hkrati ESP32 prek **LoRa modula** pošlje sporočilo na telefon z obvestilom o stanju. Uporabnik lahko kadar koli ročno odpre ali zapre panel prek mobilne aplikacije — ukaz potuje prek LoRaWAN omrežja do ESP32, ki ga izvede.

### Komponente prezračevanja

- **ESP32** — osrednji krmilnik, programiran v Arduino IDE
- **LoRa modul (SX1276 / TTGO LoRa32)** — brezžična komunikacija na dolge razdalje brez mobilnega omrežja
- **LoRaWAN gateway** — vmesnik med LoRa modulom in internetom (TTN — The Things Network)
- **DHT22** — senzor temperature in relativne vlage
- **Servo motor (2×)** — eden za vsak strešni panel
- **Mobilna aplikacija** — prikaz podatkov in upravljanje panelov na daljavo

### Potek delovanja prezračevanja

1. DHT22 izmeri temperaturo vsakih 10 sekund
2. ESP32 primerja vrednost z nastavljenim pragom
3. Če je preveč vroče → servo odpre panel, na telefon pride obvestilo prek LoRaWAN
4. Ko se ohladi → servo samodejno zapre panel
5. Uporabnik lahko **kadar koli prek telefona** ročno odpre ali zapre panel ne glede na temperaturo
6. Trenutno stanje (temperatura, vlaga, položaj panelov) je vidno v aplikaciji v realnem času

## Avtomatsko zalivanje

Sistem samodejno zalije rastline, ko senzor zazna presuho zemljo. Zalivanje je mogoče sprožiti ali ustaviti tudi ročno prek telefona.

### Kako deluje

Senzorji vlage tal **capacitive soil moisture sensor** so vkopani v zemljo pri rastlinah. Ko vlaga pade pod nastavljeno vrednost, ESP32 vklopi vodno črpalko prek relejnega modula. Ko je zemlja dovolj namočena, se črpalka samodejno izklopi. Prek LoRaWAN omrežja uporabnik vidi vlago tal v realnem času in lahko zalivanje sproži ali ustavi ročno s telefonom.

### Komponente zalivanja

- **ESP32** — isti krmilnik kot za prezračevanje
- **LoRa modul** — skupna komunikacija za oba sistema
- **Capacitive soil moisture sensor (2–4×)** — senzorji vlage tal, razporejeni po rastlinjaku
- **Vodna črpalka 12V** — potopna ali peristaltična črpalka
- **Relijski modul** — za vklop/izklop črpalke
- **Cevi in razdelilec** — distribucija vode po rastlinjaku
- **Rezervoar za vodo** — posoda z vodo (zbrana deževnica ali vodovod)

### Potek delovanja zalivanja

1. Senzorji vlage tal merijo vlažnost vsakih 30 sekund
2. ESP32 prebere vrednosti in jih pošlje prek LoRaWAN na telefon
3. Če je zemlja presuha → relay vklopi črpalko, na telefon pride obvestilo
4. Črpalka teče določen čas ali dokler senzor ne zazna zadostne vlage
5. Uporabnik lahko **ročno prek telefona** vklopi ali izklopi zalivanje kadarkoli

## Komunikacija — LoRaWAN omrežje

LoRaWAN (Long Range Wide Area Network) je brezžično omrežje, ki omogoča komunikacijo na razdalji več kilometrov z zelo nizko porabo energije — idealno za rastlinjak na vrtu, ki je morda oddaljen od Wi-Fi signala.

### Kako je sistem povezan
- **ESP32** zbira podatke senzorjev in krmili aktuatorje
- **LoRa modul** pošilja podatke brezžično do gatewaya
- **Gateway** posreduje podatke na internet prek TTN (The Things Network) — brezplačna LoRaWAN infrastruktura
- **Mobilna aplikacija** prikazuje podatke v realnem času in pošilja ukaze nazaj do ESP32

## Skupna elektronska shema

| Komponenta | Priključek na ESP32 | Napajanje |
|---|---|---|
| DHT22 (temperatura/vlaga) | GPIO digitalni pin | 3.3V |
| Soil moisture sensor (×4) | GPIO analogni pin | 3.3V |
| Servo motor panel 1 | GPIO PWM pin | 5V |
| Servo motor panel 2 | GPIO PWM pin | 5V |
| Relay modul (črpalka) | GPIO digitalni pin | 5V signal / 12V izhod |
| LoRa modul SX1276 | SPI (MOSI/MISO/SCK/CS) | 3.3V |
| Vodna črpalka | Preko releja | 12V |

## Potek dela

1. **Načrtovanje** — izračun vseh mer, razporeditve cevi in pozicij lukenj
2. **CAD modeliranje** — 3D model v Fusion 360
3. **Tehnični načrti** — tloris, naris, stranski ris in načrt strehe (PDF, A3, M 1:20)
4. **Priprava materiala** — rezanje cevi na mere, vrtanje lukenj
5. **Varjenje** — sestavljanje okvirja, privaritev navpičnih cevi, montaža palice
6. **Streha** — montaža trikotnih čel, slemena in odpirajočih panelov
7. **Elektronika** — namestitev senzorjev, serv in črpalke, vezava na ESP32 in LoRa modul
8. **Programiranje** — koda za avtomatsko prezračevanje, zalivanje in LoRaWAN komunikacijo
9. **Testiranje** — kalibracija senzorjev, nastavitev pragov, testiranje dosega LoRa signala

## Prihodnji razvoj

- avtomatski zajem deževnice z usmerjanjem s strehe v rezervoar,
- solarne celice za napajanje celotnega sistema,
- dodatni senzorji (CO₂, svetloba) za optimizacijo pogojev rasti,
- lastna mobilna aplikacija z zgodovino podatkov in grafi.

## Orodja in tehnologije

Pri projektu sem uporabil:

- **Fusion 360** za 3D CAD modeliranje konstrukcije,
- **Python / ReportLab** za generiranje tehničnih načrtov v PDF formatu,
- **Arduino IDE** za programiranje ESP32 krmilnika,
- **TTN (The Things Network)** za LoRaWAN infrastrukturo in posredovanje podatkov,
- **varilni aparat** za spajanje jeklenih cevi,
- **kotni brusilnik** za rezanje in obdelavo materiala,
- **vrtalni stroj** za luknje v ceveh 50×50 mm.

Projekt združuje znanje iz kovinarstva, načrtovanja konstrukcij, CAD modeliranja, tehničnega risanja, elektronike, brezžičnih komunikacij in programiranja.

Rastlinjak predstavlja mojo strast do gradnje in praktičnega dela ter dokazuje, da je z natančnim načrtovanjem in vztrajnostjo mogoče samostojno zasnovati in zgraditi funkcionalno jekleno konstrukcijo z vgrajeno avtomatizacijo in upravljanjem na daljavo prek LoRaWAN omrežja.
--