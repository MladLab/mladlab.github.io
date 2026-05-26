---
naslov: "Robotska roka"
avtor: "Tim Zorman"
datum: 2024-03-15
tags: ["robotika", "elektronika", "3D tisk"]
stroji: ["Prusa MK4S", "Bambu Lab X1C"]
opis: "Robotska roka s 5 prostostnimi stopnjami, krmiljenjem prek Raspberry Pi in daljinskim upravljanjem."
---

Robotska roka z 5 prostostnimi stopnjami, ki jo krmilimo prek Raspberry Pi. Vsi mehanski deli so bili 3D tiskani, pogoni pa so servo motorji MG996R.

Projekt je nastal v okviru predmeta Mehatronika in traja že dve šolski leti. Trenutno delamo na nadgradnji z računalniškim vidom za avtonomno pobiranje predmetov.

## Tehnologije

- **Krmilnik:** Raspberry Pi 4 + PCA9685 (16-kanalni PWM)
- **Servo motorji:** 5× MG996R
- **Material:** PETG (konstrukcija) + PLA (kryt)
- **Komunikacija:** WebSocket, vmesnik v Pythonu
