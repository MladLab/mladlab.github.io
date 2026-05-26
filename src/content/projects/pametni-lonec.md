---
naslov: "Pametni cvetlični lonec"
avtor: "Ana Krajnc"
datum: 2024-01-20
tags: ["IoT", "elektronika", "3D tisk"]
stroji: ["Prusa MK4S"]
opis: "Samodejno zalivanje rastlin z ESP32 in senzorji vlažnosti tal, z alarmom prek Telegram bota."
---

Cvetlični lonec, ki sam zalijeva rastline, ko je zemlja presuha. ESP32 bere senzor vlažnosti tal in sproži pumpo. Stanje se pošilja prek Telegram bota.

Ohišje je 3D tiskano iz PLA in je oblikovano tako, da se elektronika skrije v spodnjem delu lonca.

## Komponente

- **Mikrokrmilnik:** ESP32-WROOM
- **Senzor:** Kapacitivni senzor vlažnosti tal v3
- **Pumpa:** 5V mini peristaltična pumpa
- **Napajanje:** 18650 Li-Ion z solarno ploščo 5W
