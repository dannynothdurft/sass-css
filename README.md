# CSS Root Variablen Dokumentation

Diese Dokumentation beschreibt die CSS-Variablen, die im `:root`-Block definiert sind. Diese Variablen dienen als Grundlage für das Design-System und ermöglichen eine konsistente und wartbare Gestaltung.

## Farben

### Primärfarben

- `--color-primary`: Hauptfarbe für Schaltflächen und wichtige Elemente.
- `--color-primary-light`: Hellere Variante der Primärfarbe.
- `--color-primary-dark`: Dunklere Variante der Primärfarbe.

### Sekundärfarben

- `--color-secondary`: Sekundärfarbe für unterstützende Elemente.
- `--color-secondary-light`: Hellere Variante der Sekundärfarbe.
- `--color-secondary-dark`: Dunklere Variante der Sekundärfarbe.

### Signalfarben

- `--color-success`: Farbe für Erfolgsmeldungen.
- `--color-success-light`: Hellere Variante für subtile Erfolge.
- `--color-success-dark`: Dunklere Variante für starke Erfolge.
- `--color-warning`: Farbe für Warnmeldungen.
- `--color-warning-light`: Hellere Variante für subtile Warnungen.
- `--color-warning-dark`: Dunklere Variante für starke Warnungen.
- `--color-error`: Farbe für Fehlermeldungen.
- `--color-error-light`: Hellere Variante für subtile Fehler.
- `--color-error-dark`: Dunklere Variante für starke Fehler.
- `--color-info`: Farbe für Informationsmeldungen.
- `--color-info-light`: Hellere Variante für subtile Informationen.
- `--color-info-dark`: Dunklere Variante für starke Informationen.

### Neutrale Farben

- `--color-white`, `--color-black`: Grundfarben für den Hintergrund und Text.
- `--color-gray-50` bis `--color-gray-900`: Graustufen für verschiedene UI-Elemente.

## Abstände

### Spacing

- `--space-xs`, `--space-sm`, `--space-md`, `--space-lg`, `--space-xl`, `--space-2xl`, `--space-3xl`: Vordefinierte Abstände für Margins und Paddings.

## Border Radius

- `--radius-sm`, `--radius-md`, `--radius-lg`, `--radius-full`: Vordefinierte Werte für die Abrundung von Ecken.

## Schatten

- `--shadow-sm`, `--shadow-md`, `--shadow-lg`, `--shadow-xl`: Vordefinierte Schatten für verschiedene Elevationseffekte.

## Typografie

### Schriftfamilien

- `--font-family-base`: Basis-Schriftfamilie für normalen Text.
- `--font-family-heading`: Schriftfamilie für Überschriften.
- `--font-family-mono`: Monospace-Schriftfamilie für Code.

### Schriftgrößen

- `--text-xs`, `--text-sm`, `--text-base`, `--text-lg`, `--text-xl`, `--text-2xl`, `--text-3xl`, `--text-4xl`, `--text-5xl`, `--text-6xl`: Vordefinierte Schriftgrößen.

### Schriftgewichte

- `--font-thin`, `--font-extralight`, `--font-light`, `--font-normal`, `--font-medium`, `--font-semibold`, `--font-bold`, `--font-extrabold`: Vordefinierte Schriftgewichte.

### Zeilenhöhen

- `--leading-none`, `--leading-tight`, `--leading-snug`, `--leading-normal`, `--leading-relaxed`, `--leading-loose`: Vordefinierte Zeilenhöhen.

### Buchstabenabstände

- `--tracking-tighter`, `--tracking-tight`, `--tracking-normal`, `--tracking-wide`, `--tracking-wider`, `--tracking-widest`: Vordefinierte Buchstabenabstände.

## Komponenten

### Basis-Komponenten

- `--component-padding-sm`, `--component-padding`, `--component-padding-lg`: Vordefinierte Paddings für Komponenten.
- `--component-height-sm`, `--component-height`, `--component-height-lg`: Vordefinierte Höhen für Komponenten.

### Input & Button Styles

- `--input-border-width`, `--input-border-color`, `--input-bg`, `--input-placeholder-color`: Vordefinierte Styles für Input-Felder.
- `--button-primary-bg`, `--button-primary-hover`: Vordefinierte Styles für Schaltflächen.

### Form-Elemente

- `--form-gap`: Abstand zwischen Form-Elementen.
- `--form-error-color`: Farbe für Fehlermeldungen in Formularen.

## Layout & Grid

### Grid

- `--grid-gap-sm`, `--grid-gap`, `--grid-gap-lg`: Abstände für Grid-Layouts.
- `--grid-cols-default`, `--grid-cols-auto`: Vordefinierte Spaltenanzahl für Grid-Layouts.

### Flex

- `--flex-gap-xs`, `--flex-gap-sm`, `--flex-gap`, `--flex-gap-lg`, `--flex-gap-xl`: Abstände für Flex-Layouts.
- `--flex-center`, `--flex-start`, `--flex-end`: Vordefinierte Ausrichtungsoptionen für Flex-Container.

## Sonstiges

### Scrollbar

- `--scrollbar-width`, `--scrollbar-height`: Breite und Höhe der Scrollbar.
- `--scrollbar-track-color`, `--scrollbar-thumb-color`: Farben für die Scrollbar.

### Icons

- `--icon-size-xs`, `--icon-size-sm`, `--icon-size`, `--icon-size-lg`, `--icon-size-xl`: Vordefinierte Größen für Icons.

### Medien

- `--aspect-ratio-square`, `--aspect-ratio-video`, `--aspect-ratio-portrait`: Vordefinierte Seitenverhältnisse für Medien.

### Ladezustände

- `--skeleton-bg`, `--skeleton-highlight`: Farben für Lade-Skelette.

## Verwendung

Diese Variablen können in deinem CSS verwendet werden, um ein konsistentes Design zu gewährleisten. Beispiel:

# UI Styles Dokumentation

Diese Dokumentation beschreibt die Stile, die in der Datei `_ui.scss` definiert sind. Diese Stile sind Teil des Design-Systems und sorgen für ein konsistentes Erscheinungsbild der Benutzeroberfläche.

## Button-Stile

Die `.btn`-Klasse definiert die grundlegenden Stile für Schaltflächen:

- `.btn-primary`: Stile für primäre Schaltflächen.

  - Hintergrundfarbe: `--color-primary`
  - Hover-Zustand: `--color-primary-dark`
  - Active-Zustand: `--color-primary-light`

- `.btn-secondary`: Stile für sekundäre Schaltflächen.

  - Hintergrundfarbe: `--color-secondary`
  - Hover-Zustand: `--color-secondary-dark`
  - Active-Zustand: `--color-secondary-light`

- `.btn-link`: Stile für Link-Schaltflächen.

  - Farbe: `--color-primary`
  - Hover-Zustand: `--color-primary-dark`
  - Active-Zustand: `--color-primary-light`

- `.btn-sm`: Kleinere Schaltflächen mit reduziertem Padding und Schriftgröße.
- `.btn-lg`: Größere Schaltflächen mit erhöhtem Padding und Schriftgröße.
- `.btn-block`: Schaltflächen, die die volle Breite des Containers einnehmen.

## Akkordeon-Stile

Die `.accordion`-Klasse definiert die Stile für Akkordeon-Elemente:

- `.accordion-header`: Stile für den Kopf des Akkordeons.
- `.accordion-content`: Stile für den Inhalt des Akkordeons, standardmäßig versteckt.

## Eingabefeld-Stile

Die `.input-field`-Klasse definiert die Stile für Eingabefelder:

- Fokuszustand: Ändert die Rahmenfarbe und fügt einen Schatten hinzu.

## Formular-Stile

Die `.form`-Klasse definiert die Stile für Formulare:

- `.form-group`: Stile für Gruppen von Formularelementen.

## Karten-Stile

Die `.card`-Klasse definiert die Stile für Karten:

- Hintergrundfarbe: `--surface-primary`
- Rahmen und Padding für die Karten.

## Verwendung

Diese Stile können in deinem HTML verwendet werden, um ein konsistentes Design zu gewährleisten. Beispiel:
