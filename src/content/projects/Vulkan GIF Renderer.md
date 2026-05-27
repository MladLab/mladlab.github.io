---
naslov: "Vulkan GIF Renderer"
avtor:
  - "Bruno Peternel"
datum: 2026-04-10
tags: ["programiranje"]
slika: "/projekti/vulkan-gif-player/original.gif"
galerija:
  - /projekti/vulkan-gif-player/original.gif
  - /projekti/vulkan-gif-player/modified.gif


opis: "Program za predvajanje animiranih/statičnih GIF slik na namizju."
---

## Opis projekta

`Konata Dancer Remake` je OSS različica [Konata Desktop Dancer](https://www.moddb.com/groups/anime-fans-of-moddb/downloads/konata-desktop-dancer).
Program je napisan v C++ in uporablja [Vulkan API](https://www.vulkan.org/), zato je učinkovita ter ne uporablja veliko računalniških virov.

## Dodatne funkcionalnosti

Pri programu sem dodal konfiguracijske argumente:

- Parameter `--file`/`-f` omogoči uporabo druge GIF animacije,
- `--debug`/`-d` vklopi dodatne zapise log-a,
- `--log`/`-l` shrani log v datoteko.

## Link do programa in dodatnega opisa

- [Github](https://github.com/konacoded/Konata-Dancer-Remake/releases/tag/development-release)
- [konacode software](https://software.konacode.com/#konata-dev)

Program trenutno še nima zgrajene executable datoteke za Windows
možne so alternative, kot:
 - [V1 branch](https://github.com/konacoded/Konata-Dancer-Remake/releases/tag/Konata-Dancer-Remake)
 - [Original](https://www.moddb.com/groups/anime-fans-of-moddb/downloads/konata-desktop-dancer)
vendar ne podpirajo argumentov navedenih pod `Dodatne funkcionalnosti`
