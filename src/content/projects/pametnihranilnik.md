---
naslov: "Pametni šparovec"
avtor:
  - "Nace Kepa"
datum: 2026-05-27
tags: ["elektronika", "IoT", "programiranje"]
stroji:
  - "Raspberry Pi 3B"
  - "OLED Display"
  - "Rotary Encoder"
  - "TCS3200 Color Sensor"
  - "L298N Motor Driver"
slika: "/projekti/sparovec/sparovec (1).PNG"
galerija:
  - /projekti/sparovec/sparovec (1).JPG

opis: "Pametni Šparovec je elektronski hranilnik na osnovi Raspberry Pi 3B z OLED zaslonom, barvnim senzorjem in motornim pogonom. Projekt združuje vgrajene sisteme, programiranje in mehanske komponente za pametno upravljanje prihrankov."
---
Pametni Šparovec je projekt, ki sem ga razvil kot dijak na Šolskem centru Kranj, smer industrijska avtomatika in elektrotehnika. Namen projekta je izdelava pametnega elektronskega hranilnika, ki z uporabo vgrajenih sistemov preseže klasični hranilnik ter omogoča samodejno zaznavanje valut, interaktivno upravljanje in sledenje prihrankov.

Projekt je zahteval veliko ur samostojnega dela – od prvih testov elektronike do končnega delujočega sistema. Trud se je obrestoval: na dveh slovenskih tekmovanjih smo osvojili drugo mesto.

Celoten sistem sem zasnoval in razvil samostojno – od elektronike in ožičenja do programske logike in menijskega vmesnika. Projekt temelji na Raspberry Pi 3B z OLED zaslonom za prikaz podatkov, rotacijskim enkodrom za navigacijo, TCS3200 barvnim senzorjem za prepoznavanje kovancev in bankovcev ter L298N motornim gonilnikom za mehanski vnos denarja v hranilnik.

Velik del razvoja je temeljil na samostojnem učenju. Programiranja v Pythonu, dela z GPIO, načrtovanja menijske strukture in kalibracije senzorjev sem se naučil skozi lastno raziskovanje in eksperimentiranje.

## Opis projekta

- **Zaznavanje valut:** dual IR senzorja zaznata vstavljeni kovanec ali bankovec in preverita veljavnost z merjenjem časa padca
- **Prepoznavanje barv:** TCS3200 barvni senzor identificira Euro kovance in bankovce po barvnem profilu
- **OLED zaslon:** prikazuje trenutno stanje prihrankov, meni in zgodovino transakcij v realnem času
- **Rotacijski enkoder:** omogoča intuitivno navigacijo po menijskem sistemu
- **Motorni pogon:** L298N gonilnik z enosmernim motorjem vleče denar v hranilnik
- **Trajna shramba:** stanje prihrankov in historia transakcij se ohranita tudi po izklopi napajanja
- **Kalibracijski sistem:** samodejno prilagajanje IR pragov glede na postavitev senzorjev

## Prihodnji razvoj

Projekt želim nadgraditi z dodatnimi funkcionalnostmi:

- mobilna aplikacija za brezžično spremljanje stanja prihrankov,
- postavljanje varčevalnih ciljev z vizualnim napredkom,
- razširjena podpora za več valut,
- izboljšano ohišje, natisnjeno na 3D tiskalniku.

## Orodja in tehnologije

Pri projektu uporabljam:

- **Python 3** za celotno programsko logiko in upravljanje strojne opreme,
- **RPi.GPIO** za komunikacijo z GPIO pini Raspberry Pi,
- **Adafruit SSD1306** knjižnico za OLED zaslon,
- **SolidWorks** za 3D modeliranje ohišja,
- **Bambu Studio** za pripravo modelov za 3D tisk.

Projekt združuje znanje z področja vgrajenih sistemov, elektronike, programiranja v Pythonu in mehanskega oblikovanja.

Pametni Šparovec je zame več kot šolski projekt – je dokaz, da se z vztrajnostjo in pravim znanjem da iz preprostih komponent ustvariti funkcionalen in zanimiv produkt.