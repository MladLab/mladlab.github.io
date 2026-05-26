# MladLab Website - Copilot Instructions

## Project
Astro static website for MladLab, a school makerspace at Šolski Center Kranj (SCKR), Slovenia.

## Language
- All UI text, labels, navigation, buttons, headings, and static content must be in Slovenian
- Content files (Markdown) are written by members in Slovenian
- Code, variable names, comments → English
- Do not translate technical terms (e.g. "makerspace", "3D printer", "laser cutter")

## Stack
- Astro + Tailwind CSS
- Content Collections for: projects, machines, members
- No framework (no React/Vue) unless strictly necessary
- Vanilla JS for interactive bits (API widget, filtering)

## Content Collections
- `projects` — student/member projects with author, tags, machines used, date, cover image
- `machines` — lab equipment with name, specs, status, photo
- `members` — current and alumni members, field: `status: current | alumni`
- `tools` — smaller tools, simpler schema

## Key pages
- `/` — landing/splash, hero, latest projects, live 3D farm stats
- `/projekti` — all projects grid with tag filtering
- `/stroji` — machines + tools grid with live printer status from API
- `/clani` — current members grid + alumni list
- `/o-nas` — about MladLab, SCKR, contact

## 3D Farm API
- Base URL: api.hyzeer.com (replace fake data for now)
- Fetch client-side on `/` and `/stroji`
- Show: active printers, jobs running, total print hours
- Handle fetch errors gracefully, show "podatki nedosegljivi" on fail

## Style
- Dark theme
- Industrial/makerspace feel, not corporate
- No stock photo aesthetics
- Grid-heavy layouts for machines and projects

## Conventions
- Slovenian URL slugs: `/projekti`, `/stroji`, `/clani`, `/o-nas`
- Frontmatter fields in English, values in Slovenian where user-facing
- Dates in Slovenian format where displayed (d. M. yyyy)

## Member roles
- `član` — regular member
- `koordinator` — coordinator  
- `vodja dijakov` — student lead
- `alumni` — ex-member (any past role)

## Members frontmatter example
---
ime: "Janez Novak"
vloga: "koordinator"
status: "current"  # current | alumni
leto_od: 2023
leto_do: null  # null if still active
slika: "./janez.jpg"
opis: "Kratka predstavitev..."
---