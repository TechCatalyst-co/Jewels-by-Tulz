---
name: Jewels by Tulz
url: https://jewelsbytulz.com/
colors:
  primary: '#0F5233'
  background: '#FAF9F5'
  background-light: '#FFFFFF'
  background-subtle: '#E8D8B0'
  background-dark: '#1A1D1A'
  text-primary: '#1A1D1A'
  text-secondary: '#1A1D1A'
  text-muted: '#68675e'
  text-subtle: '#79786c'
  text-inverse: '#FFFFFF'
  accent-gold: '#C29B38'
  border-neutral: '#C29B38'
  border-subtle: '#E8D8B0'
typography:
  display:
    family: 'SyndicatGrotesk'
    size: 32px
    weight: 400
    line-height: 1.2
  heading:
    family: 'SyndicatGrotesk'
    size: 24px
    weight: 400
    line-height: 1.2
  body:
    family: 'SimonMono'
    size: 16px
    weight: 400
    line-height: 1.5
  small:
    family: 'SimonMono'
    size: 14px
    weight: 400
    line-height: 1.5
  caption:
    family: 'SimonMono'
    size: 12px
    weight: 400
    line-height: 1.5
  utility:
    family: 'SimonMono'
    size: 10px
    weight: 400
    line-height: 1.5
spacing:
  base: 4px
  scale: [4, 8, 12, 16, 24, 32, 40, 48, 64, 80, 128]
radius:
  sm: 2px
elevation:
  z-base: '0'
  z-above: '1'
  z-overlay: '3' # Inferred shadow
  z-header: '4' # Inferred shadow
  z-modal-background: '5' # Inferred shadow
  z-skip-link: '1000'
  z-widget: '999999'
  z-modal-overlay: '2147483645'
components:
  button-primary:
    bg: '{colors.primary}'
    text: '{colors.text-inverse}'
    border: '{colors.primary}'
    radius: '{radius.sm}'
    padding: '12px 24px' # Inferred from common button sizes
  card:
    bg: '{colors.background}'
    radius: '{radius.sm}'
    border: '1px solid {colors.border-subtle}'
    shadow: 'none'
motion:
  duration-fast: '150ms'
  duration-base: '300ms'
  easing-standard: 'ease-in'
layout:
  breakpoints:
    mobile-small: 390px
    mobile-large: 530px
    tablet: 768px
    desktop: 1024px
    desktop-large: 1440px
---

# Design System Inspired by Jewels by Tulz

## 1. Visual Theme & Atmosphere
Jewels by Tulz's design system exudes a refined and approachable luxury, achieved through a minimalist aesthetic that prioritizes product imagery and sophisticated typography. The primary palette consists of rich emerald green (`#0F5233`) on warm cream (`#FAF9F5`) and pure white backgrounds (`#FFFFFF`), creating a high-contrast foundation that allows the jewelry to stand out. An elegant warm metallic gold (`#C29B38`) is sparingly used for product highlights and subtle brand cues, reinforcing the precious metal and emerald theme.

The brand's visual identity is further defined by its distinctive typographic pairing: the modern sans-serif `SyndicatGrotesk` for headings and the classic monospace `SimonMono` for body text and utility information. This combination creates a unique blend of contemporary sharpness and timeless elegance. Photography is central, featuring high-quality, aspirational product shots and lifestyle imagery that convey a sense of everyday wearability. Subtle CSS animations, such as `onetrust-fade-in` and `ease-in` transitions, provide smooth, understated interactivity, maintaining a premium user experience.

**Key Characteristics**:
-   Emerald green (`#0F5233`) and warm cream (`#FAF9F5`) palette.
-   Minimalist layout with generous spacing (`32px` to `64px` section padding).
-   Dual typeface strategy: `SyndicatGrotesk` headings, `SimonMono` body.
-   Subtle gold accent (`#C29B38`) for product highlights.
-   Clean line iconography for navigation and actions.
-   High-quality product and lifestyle photography.
-   Understated `ease-in` CSS transitions for interaction.

## 2. Color Palette & Roles
Jewels by Tulz's color palette is intentionally restrained, focusing on a strong emerald and dark charcoal base with a single, elegant gold accent color to highlight its jewelry.

-   **Primary**
    -   `primary`: `#0F5233` – Used for primary text, interactive elements like buttons, and strong borders.
-   **Accent Colors**
    -   `accent-gold`: `#C29B38` – A warm, subtle gold used to highlight product details, pricing, and occasional brand accents, reflecting the precious materials.
-   **Interactive**
    -   `primary`: `#0F5233` – Base color for interactive elements like buttons and links.
    -   `primary-hover`: `#0F5233` with `opacity: 0.8` (inferred from screenshot) – Hover state for many interactive elements, reducing visual prominence.
    -   `text-inverse`: `#FFFFFF` – Text color on dark interactive backgrounds.
-   **Neutral Scale**
    -   `text-primary`: `#1A1D1A` – Dominant color for main body text, headings, and critical information.
    -   `text-secondary`: `#1A1D1A` – A slightly lighter dark charcoal used for secondary text elements and some headings.
    -   `text-muted`: `#68675e` – Used for less prominent text, such as descriptions or secondary information, providing a softer contrast.
    -   `text-subtle`: `#79786c` – A lighter muted grey, often found in captions or very subtle informational text.
    -   `text-inverse`: `#FFFFFF` – Used for text on dark backgrounds, ensuring readability.
-   **Surface & Borders**
    -   `background`: `#FAF9F5` – The predominant background color for the main content areas, providing a clean warm canvas.
    -   `background-light`: `#FFFFFF` – A pure white used for secondary content sections or card containers.
    -   `background-subtle`: `#E8D8B0` – A champagne gold for distinct background sections, specific content blocks, or subtle highlights.
    -   `background-dark`: `#1A1D1A` – Used for the website footer and other high-contrast sections.
    -   `border-neutral`: `#C29B38` – A warm gold used for dividing lines, input borders, and general structural outlines.
    -   `border-subtle`: `#E8D8B0` – A very light champagne gold used for faint borders on cards or subtle separators.

## 3. Typography Rules
-   **Font Family**:
    -   Primary Headings: `'SyndicatGrotesk'`, `ui-sans-serif`, `sans-serif`
    -   Body & Utility: `'SimonMono'`, `'Courier New'`, `Courier`, `monospace`
-   **Hierarchy**:
    -   **Display/H1**: `SyndicatGrotesk` `32px` `400` · line-height `1.2` · tracking `0.05em` · Used for prominent page titles and hero statements.
    -   **H2**: `SyndicatGrotesk` `24px` `400` · line-height `1.2` · tracking `0.05em` · Used for major section headings.
    -   **Body**: `SimonMono` `16px` `400` · line-height `1.5` · tracking `0` · Standard text for paragraphs and detailed content.
    -   **Small**: `SimonMono` `14px` `400` · line-height `1.5` · tracking `0` · Used for product descriptions, secondary information, and form labels.
    -   **Caption**: `SimonMono` `12px` `400` · line-height `1.5` · tracking `0` · Used for metadata, footnotes, and very small informational text.
    -   **Utility/Code**: `SimonMono` `10px` `400` · line-height `1.5` · tracking `0.02em` · Used for very small utility text or code snippets.
-   **Principles**:
    -   **Elegant Contrast**: Pair the modern sans-serif `SyndicatGrotesk` for impactful headings with the classic monospace `SimonMono` for readability in body text.
    -   **Clear Hierarchy**: Utilize distinct font sizes and weights from `SyndicatGrotesk` for headings to establish a clear visual hierarchy, from `32px` H1s to `24px` H2s.
    -   **Legible Body**: Employ `SimonMono` at `16px` with a `1.5` line-height for all body text to ensure maximum readability and a spacious feel.
    -   **Subtle Tracking**: Apply a slight letter-spacing of `0.05em` to headings for an open, airy feel, while body text maintains standard tracking.
    -   **Consistent Utility**: Use `SimonMono` with `0.02em` tracking for all small utility text, maintaining brand consistency across minor elements.

## 4. Component Stylings

### Buttons
Jewels by Tulz buttons are minimalist, focusing on strong typography and clear states. They feature subtle transitions for a smooth interactive experience.

#### Primary Button
A high-contrast button with a solid emerald green background and white text, used for primary calls to action like "Shop Now" or "Add to Cart." On hover, the button's opacity reduces, and when active, it maintains the reduced opacity. Disabled buttons appear with significantly reduced opacity.

```css
.button-primary {
  background-color: var(--color-primary, #0F5233);
  color: var(--color-text-inverse, #FFFFFF);
  font-family: var(--typography-small-family, 'SimonMono');
  font-size: var(--typography-small-size, 14px);
  font-weight: var(--typography-small-weight, 400);
  padding: 12px 24px; /* inferred from screenshot */
  border: 1px solid var(--color-primary, #0F5233);
  border-radius: var(--radius-sm, 2px);
  cursor: pointer;
  transition: opacity var(--motion-duration-base, 300ms) var(--motion-easing-standard, ease-in);
}

.button-primary:hover {
  opacity: 0.8; /* inferred from screenshot */
}

.button-primary:active {
  opacity: 0.6; /* inferred from screenshot */
}

.button-primary:disabled {
  opacity: 0.3; /* extracted from pseudoStates */
  cursor: default;
}
```

#### Secondary Button
A transparent button with an emerald green border and text, used for secondary actions or navigation links that need to stand out. On hover, the background fills with emerald green, and the text turns white.

```css
.button-secondary {
  background-color: transparent;
  color: var(--color-primary, #0F5233);
  font-family: var(--typography-small-family, 'SimonMono');
  font-size: var(--typography-small-size, 14px);
  font-weight: var(--typography-small-weight, 400);
  padding: 12px 24px; /* inferred from screenshot */
  border: 1px solid var(--color-primary, #0F5233);
  border-radius: var(--radius-sm, 2px);
  cursor: pointer;
  transition: background-color var(--motion-duration-base, 300ms) var(--motion-easing-standard, ease-in),
              color var(--motion-duration-base, 300ms) var(--motion-easing-standard, ease-in);
}

.button-secondary:hover {
  background-color: var(--color-primary, #0F5233); /* inferred from screenshot */
  color: var(--color-text-inverse, #FFFFFF); /* inferred from screenshot */
}

.button-secondary:active {
  background-color: var(--color-primary, #0F5233); /* inferred from screenshot */
  color: var(--color-text-inverse, #FFFFFF); /* inferred from screenshot */
  opacity: 0.9; /* inferred from screenshot */
}

.button-secondary:disabled {
  opacity: 0.3; /* extracted from pseudoStates */
  cursor: default;
  border-color: var(--color-border-neutral, #C29B38); /* inferred from screenshot */
  color: var(--color-border-neutral, #C29B38); /* inferred from screenshot */
}
```

#### Ghost Button
A text-only button with no background or border, primarily used for subtle actions or navigation within content. On hover, the text opacity reduces.

```css
.button-ghost {
  background-color: transparent;
  color: var(--color-primary, #0F5233);
  font-family: var(--typography-small-family, 'SimonMono');
  font-size: var(--typography-small-size, 14px);
  font-weight: var(--typography-small-weight, 400);
  padding: 8px 16px; /* inferred from screenshot */
  border: none;
  border-radius: var(--radius-sm, 2px);
  cursor: pointer;
  transition: opacity var(--motion-duration-fast, 150ms) var(--motion-easing-standard, ease-in);
}

.button-ghost:hover {
  opacity: 0.7; /* inferred from screenshot */
}

.button-ghost:active {
  opacity: 0.5; /* inferred from screenshot */
}

.button-ghost:disabled {
  opacity: 0.3; /* extracted from pseudoStates */
  cursor: default;
}
```

### Cards & Containers
Jewels by Tulz uses clean, white cards with subtle gold borders to showcase products and content, maintaining a light and airy feel.

#### Standard Card
A simple card with a white background and a subtle champagne border, used for product listings or informational blocks. On hover, the card's border darkens slightly, and a very subtle shadow appears, indicating interactivity.

```css
.card {
  background-color: var(--color-background-light, #FFFFFF);
  border: 1px solid var(--color-border-subtle, #E8D8B0);
  border-radius: var(--radius-sm, 2px);
  padding: var(--spacing-md, 16px); /* inferred from screenshot */
  box-shadow: none;
  transition: border-color var(--motion-duration-base, 300ms) var(--motion-easing-standard, ease-in),
              box-shadow var(--motion-duration-base, 300ms) var(--motion-easing-standard, ease-in);
}

.card:hover {
  border-color: var(--color-border-neutral, #C29B38); /* inferred from screenshot */
  box-shadow: 0px 1px 4px rgba(15,82,51,0.05); /* inferred from screenshot */
}
```

### Inputs & Forms
Form elements are minimal, focusing on clarity and ease of use with clear focus states.

#### Text Input
A standard text input with a light border and ample padding. On focus, a visible focus ring appears, and on disabled, the input dims.

```css
.input-text {
  background-color: var(--color-background-light, #FFFFFF);
  color: var(--color-text-primary, #1A1D1A);
  font-family: var(--typography-small-family, 'SimonMono');
  font-size: var(--typography-small-size, 14px);
  font-weight: var(--typography-small-weight, 400);
  padding: 10px 12px; /* inferred from screenshot */
  border: 1px solid var(--color-border-neutral, #C29B38);
  border-radius: var(--radius-sm, 2px);
  width: 100%;
  transition: border-color var(--motion-duration-fast, 150ms) var(--motion-easing-standard, ease-in),
              box-shadow var(--motion-duration-fast, 150ms) var(--motion-easing-standard, ease-in);
}

.input-text:focus {
  outline: none;
  border-color: var(--color-primary, #0F5233);
  box-shadow: 0 0 0 2px rgba(15,82,51,0.1); /* inferred from screenshot */
}

.input-text:disabled {
  background-color: var(--color-background, #FAF9F5);
  color: var(--color-text-muted, #68675e);
  opacity: 0.5; /* extracted from pseudoStates */
  cursor: default;
}
```

#### Form Label
Simple, clear labels for form fields, using the secondary text color.

```css
.form-label {
  display: block;
  color: var(--color-text-secondary, #1A1D1A);
  font-family: var(--typography-small-family, 'SimonMono');
  font-size: var(--typography-small-size, 14px);
  font-weight: var(--typography-small-weight, 400);
  margin-bottom: var(--spacing-xs, 4px); /* inferred from screenshot */
}
```

#### Checkbox/Radio
Custom-styled checkboxes and radio buttons with a distinct checked state.

```css
.checkbox-container {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs, 4px); /* inferred from screenshot */
  cursor: pointer;
}

.checkbox-input {
  appearance: none;
  width: 18px; /* inferred from screenshot */
  height: 18px; /* inferred from screenshot */
  border: 1px solid var(--color-border-neutral, #C29B38);
  border-radius: var(--radius-sm, 2px);
  position: relative;
  transition: background-color var(--motion-duration-fast, 150ms) var(--motion-easing-standard, ease-in),
              border-color var(--motion-duration-fast, 150ms) var(--motion-easing-standard, ease-in);
}

.checkbox-input:checked {
  background-color: var(--color-primary, #0F5233); /* extracted from pseudoStates */
  border-color: var(--color-primary, #0F5233);
}

.checkbox-input:checked::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(45deg);
  width: 6px; /* inferred from screenshot */
  height: 12px; /* inferred from screenshot */
  border: solid var(--color-text-inverse, #FFFFFF);
  border-width: 0 2px 2px 0;
}

.radio-input {
  appearance: none;
  width: 18px; /* inferred from screenshot */
  height: 18px; /* inferred from screenshot */
  border: 1px solid var(--color-border-neutral, #C29B38);
  border-radius: 50%;
  position: relative;
  transition: background-color var(--motion-duration-fast, 150ms) var(--motion-easing-standard, ease-in),
              border-color var(--motion-duration-fast, 150ms) var(--motion-easing-standard, ease-in);
}

.radio-input:checked {
  border-color: var(--color-primary, #0F5233);
}

.radio-input:checked::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 10px; /* inferred from screenshot */
  height: 10px; /* inferred from screenshot */
  background-color: var(--color-primary, #0F5233);
  border-radius: 50%;
}

.checkbox-label, .radio-label {
  color: var(--color-text-primary, #1A1D1A);
  font-family: var(--typography-small-family, 'SimonMono');
  font-size: var(--typography-small-size, 14px);
  font-weight: var(--typography-small-weight, 400);
}
```

### Navigation

#### Top Navigation Bar
A minimalist top navigation bar with a deep charcoal background and white text, featuring key categories and utility links. Links show a subtle underline on hover.

```css
.top-nav-bar {
  background-color: var(--color-background-dark, #1A1D1A);
  color: var(--color-text-inverse, #FFFFFF);
  padding: var(--spacing-sm, 8px) var(--spacing-lg, 24px); /* inferred from screenshot */
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px; /* inferred from screenshot */
  font-family: var(--typography-small-family, 'SimonMono');
  font-size: var(--typography-small-size, 14px);
  font-weight: var(--typography-small-weight, 400);
}

.top-nav-bar .nav-link {
  color: var(--color-text-inverse, #FFFFFF);
  text-decoration: none;
  padding: var(--spacing-xs, 4px) var(--spacing-sm, 8px); /* inferred from screenshot */
  transition: text-decoration var(--motion-duration-fast, 150ms) var(--motion-easing-standard, ease-in);
}

.top-nav-bar .nav-link:hover {
  text-decoration: underline;
  text-underline-offset: 4px; /* inferred from screenshot */
}

.top-nav-bar .nav-link.active,
.top-nav-bar .nav-link[aria-current="page"] {
  font-weight: var(--typography-small-weight, 500); /* inferred from screenshot */
  text-decoration: underline;
  text-underline-offset: 4px; /* inferred from screenshot */
}
```

#### Navigation Link
Individual navigation links within menus or content, typically dark charcoal text on a light background.

```css
.nav-link {
  color: var(--color-text-primary, #1A1D1A);
  text-decoration: none;
  font-family: var(--typography-small-family, 'SimonMono');
  font-size: var(--typography-small-size, 14px);
  font-weight: var(--typography-small-weight, 400);
  transition: text-decoration var(--motion-duration-fast, 150ms) var(--motion-easing-standard, ease-in);
}

.nav-link:hover {
  text-decoration: underline;
  text-underline-offset: 4px; /* inferred from screenshot */
}

.nav-link.active,
.nav-link[aria-current="page"] {
  font-weight: var(--typography-small-weight, 500); /* inferred from screenshot */
  text-decoration: underline;
  text-underline-offset: 4px; /* inferred from screenshot */
}
```

#### Dropdown Menu
A clean, minimalist dropdown menu with a white background and subtle borders, used for navigation or filtering.

```css
.dropdown-menu {
  background-color: var(--color-background-light, #FFFFFF);
  border: 1px solid var(--color-border-neutral, #C29B38);
  border-radius: var(--radius-sm, 2px);
  padding: var(--spacing-sm, 8px) 0;
  box-shadow: 0px 4px 12px rgba(15,82,51,0.08); /* inferred from screenshot */
  z-index: var(--elevation-z-overlay, 3);
  min-width: 180px; /* inferred from screenshot */
}

.dropdown-menu-item {
  color: var(--color-text-primary, #1A1D1A);
  font-family: var(--typography-small-family, 'SimonMono');
  font-size: var(--typography-small-size, 14px);
  font-weight: var(--typography-small-weight, 400);
  padding: var(--spacing-xs, 4px) var(--spacing-md, 16px);
  cursor: pointer;
  transition: background-color var(--motion-duration-fast, 150ms) var(--motion-easing-standard, ease-in);
}

.dropdown-menu-item:hover {
  background-color: var(--color-background, #FAF9F5); /* inferred from screenshot */
}
```

### Links

#### Standard Link
Default text links, typically dark charcoal, with an underline on hover for clear interaction feedback.

```css
.link-standard {
  color: var(--color-text-primary, #1A1D1A);
  text-decoration: none;
  font-family: var(--typography-body-family, 'SimonMono');
  font-size: var(--typography-body-size, 16px);
  font-weight: var(--typography-body-weight, 400);
  transition: text-decoration var(--motion-duration-fast, 150ms) var(--motion-easing-standard, ease-in);
}

.link-standard:hover {
  text-decoration: underline;
  text-underline-offset: 4px; /* inferred from screenshot */
}

.link-standard:visited {
  color: var(--color-text-primary, #1A1D1A); /* inferred from screenshot */
}
```

#### Secondary Link
Links with a muted text color, used for less prominent actions or informational text.

```css
.link-secondary {
  color: var(--color-text-muted, #68675e);
  text-decoration: none;
  font-family: var(--typography-small-family, 'SimonMono');
  font-size: var(--typography-small-size, 14px);
  font-weight: var(--typography-small-weight, 400);
  transition: color var(--motion-duration-fast, 150ms) var(--motion-easing-standard, ease-in),
              text-decoration var(--motion-duration-fast, 150ms) var(--motion-easing-standard, ease-in);
}

.link-secondary:hover {
  color: var(--color-text-primary, #1A1D1A); /* inferred from screenshot */
  text-decoration: underline;
  text-underline-offset: 4px; /* inferred from screenshot */
}

.link-secondary:visited {
  color: var(--color-text-muted, #68675e); /* inferred from screenshot */
}
```

### Badges
(none observed in source)

## 5. Layout Principles
-   **Spacing System**: Jewels by Tulz utilizes a `4px` base unit for its spacing system, creating a precise and consistent rhythm across the interface.
    -   Base `4px` → Scale: `[4, 8, 12, 16, 24, 32, 40, 48, 64, 80, 128]`
    -   **Usage Context**:
        -   `4px` (`xxs`): Smallest inline gaps, icon-to-text spacing.
        -   `8px` (`xs`): Gaps between small elements, padding for compact components.
        -   `12px` (`sm`): Minor vertical spacing, padding for dropdown items.
        -   `16px` (`md`): Standard component padding, spacing between form elements.
        -   `24px` (`lg`): Spacing between cards, larger internal component padding.
        -   `32px` (`xl`): Section padding on mobile, moderate vertical content separation.
        -   `40px` (`2xl`): Larger vertical gaps between content blocks.
        -   `48px` (`3xl`): Significant vertical spacing, padding on tablet layouts.
        -   `64px` (`4xl`): Generous section padding on desktop, major content dividers.
        -   `80px` (`5xl`): Large hero section padding.
        -   `128px` (`6xl`): Extra large spacing for hero sections or full-page breaks.
-   **Grid & Container**:
    _Note: container widths and column counts are not extracted from the source. The values below are reasonable defaults inferred from the visible layout density._
    -   **Max Width**: `1440px` (inferred from viewport)
    -   **Columns**: `12` (inferred from common practice)
    -   **Gutter**: `24px` (inferred from visual spacing)
    -   **Section Padding**: `64px` horizontal and vertical on desktop, `32px` on tablet, `24px` on mobile.
-   **Whitespace Philosophy**: Jewels by Tulz employs a philosophy of abundant whitespace, particularly around product imagery and core content. This intentional use of negative space creates a sense of luxury, allows individual elements to breathe, and directs the user's focus without visual clutter. It contributes to the brand's premium, minimalist aesthetic.
-   **Border Radius Scale**:
    -   `sm`: `2px` – Used for all interactive elements, cards, and input fields, providing a subtle softness without losing a modern, crisp feel.

## 6. Depth & Elevation
Jewels by Tulz's design system uses depth sparingly, primarily for interactive elements and transient UI components, maintaining an overall flat aesthetic. Shadows are subtle and soft, providing just enough lift to indicate hierarchy or interactivity.

-   **Base (z-0)**: `none` — Default stacking context for static content and background elements.
-   **Above (z-1)**: `none` — Used for images and elements that appear directly above the base content without casting a shadow.
-   **Overlay (z-3)**: `0px 4px 12px rgba(15,82,51,0.1)` (inferred from screenshot) — Used for dropdown menus and subtle tooltips, providing a light lift.
-   **Header (z-4)**: `0px 2px 8px rgba(15,82,51,0.05)` (inferred from screenshot) — Applied to the sticky header bar, giving it a slight separation from scrolling content.
-   **Modal Background (z-5)**: `0px 8px 24px rgba(15,82,51,0.15)` (inferred from screenshot) — Used for modal dialogs and larger popovers, creating a clear separation from the underlying page.
-   **Skip Link (z-1000)**: `none` — Utility element for accessibility, positioned very high but without visual shadow.
-   **Widget (z-999999)**: `none` — External third-party widgets, positioned at the highest level.
-   **Modal Overlay (z-2147483645)**: `none` — The absolute highest z-index for full-screen modal overlays, ensuring it covers all other content.

**Shadow Philosophy**: Jewels by Tulz's shadow philosophy is one of understated elegance. Shadows are minimal, soft, and typically used to indicate interactivity or temporary UI states rather than to create strong physical depth. This approach supports the brand's clean, luxurious aesthetic, ensuring that the focus remains on the product and content.

## 7. Do's and Don'ts

### Do's
-   **Do** use `SyndicatGrotesk` `32px` `400` for main page headings to establish a clear visual hierarchy.
-   **Do** ensure all body text uses `SimonMono` `16px` `400` with a `1.5` line-height for optimal readability.
-   **Do** apply `64px` of padding to major content sections on desktop to maintain a spacious, premium feel.
-   **Do** use `text-primary: #1A1D1A` on `background: #FAF9F5` for body text; measured ratio passes high accessibility standards.
-   **Do** use `accent-gold: #C29B38` for subtle product highlights and price points.
-   **Do** implement a `2px` `border-radius` for all interactive elements like buttons and inputs.
-   **Do** use `background-light: #FFFFFF` for secondary content sections to provide subtle visual separation.
-   **Do** ensure interactive elements like buttons have a `300ms ease-in` transition for smooth feedback.
-   **Do** use `text-muted: #68675e` on `background-light: #FFFFFF` for secondary text.
-   **Do** provide a `2px` focus ring around inputs, with a slight shadow, for accessibility.

### Don'ts
-   **Don't** use low-contrast text on background elements for critical information without checking readability.
-   **Don't** introduce custom spacing values; adhere strictly to the `4px` to `128px` spacing scale.
-   **Don't** use bold weights for body text; reserve `font-weight: 500` for active navigation links.
-   **Don't** apply strong, heavy shadows; use only the subtle shadows for overlays.
-   **Don't** use `accent-gold: #C29B38` for large blocks of text, as it lacks sufficient contrast for readability.
-   **Don't** deviate from `SimonMono` for any body or utility text to maintain brand consistency.
-   **Don't** place primary buttons without at least `24px` of vertical spacing from other content.
-   **Don't** use `background-dark: #1A1D1A` for content sections without pairing it with `text-inverse: #FFFFFF`.
-   **Don't** use an `opacity: 0.3` disabled state for buttons that are still clickable.
-   **Don't** apply decorative underlines to text; reserve underlines for interactive links on hover only.

## 8. Responsive Behavior
_Note: breakpoints below are measurements from the source._

-   **Suggested Breakpoints**:
    -   **Mobile Small** (~390px): Adjust typography to `14px` body, stack product cards vertically.
    -   **Mobile Large** (~530px): Refine grid layouts, ensure touch targets are accessible.
    -   **Tablet** (~768px): Navigation shifts to a wider layout, multi-column product grids.
    -   **Desktop** (~1024px): Full desktop navigation, larger image displays, up to 4-column grids.
    -   **Desktop Large** (~1440px): Maximize content width, optimize for high-resolution displays.
-   **Touch Targets**:
    -   Ensure all interactive elements, especially buttons and links, have a minimum touch target size of `44px` by `44px` (inferred from best practice).
    -   Maintain a minimum of `8px` spacing between touch targets to prevent accidental taps.
-   **Collapsing Strategy**:
    -   **Navigation**: Collapse main navigation links into a hamburger menu on screens below `768px`.
    -   **Cards**: Product cards transition from multi-column grids to single-column stacking on mobile breakpoints.
    -   **Typography**: Scale down `SyndicatGrotesk` headings by `4px` to `8px` on mobile for better fit.
    -   **Padding**: Reduce horizontal and vertical section padding from `64px` to `24px` on mobile.
    -   **Forms**: Form inputs should occupy `100%` width on mobile, with labels stacked above.
    -   **Spacing**: Adjust `spacing-lg` (`24px`) to `spacing-md` (`16px`) for vertical rhythm on smaller screens.

## 9. Agent Prompt Guide
-   **Quick Color Reference**:
    -   `primary`: `#0F5233`
    -   `background`: `#FAF9F5`
    -   `background-light`: `#FFFFFF`
    -   `background-subtle`: `#E8D8B0`
    -   `background-dark`: `#1A1D1A`
    -   `text-primary`: `#1A1D1A`
    -   `text-secondary`: `#1A1D1A`
    -   `text-muted`: `#68675e`
    -   `text-subtle`: `#79786c`
    -   `text-inverse`: `#FFFFFF`
    -   `accent-gold`: `#C29B38`
    -   `border-neutral`: `#C29B38`
    -   `border-subtle`: `#E8D8B0`
-   **Iteration Guide**:
    1. Always use `primary: #0F5233` for main CTA backgrounds and `text-inverse: #FFFFFF` for their text.
    2. Always set `SyndicatGrotesk` for all headings and `SimonMono` for all body and utility text.
    3. Always use the `4px` base spacing scale, preferring `8px`, `16px`, `24px`, `32px`, `64px` for common elements.
    4. Always apply a `2px` `border-radius` to all interactive components and cards.
    5. Always ensure standard cards have a `1px solid border-subtle: #E8D8B0` and no initial shadow.
    6. Always use `12px 24px` padding for primary and secondary buttons.
    7. Always include `:focus` state with a `2px` shadow ring for inputs.
    8. Always ensure navigation links in the top bar are `text-inverse: #FFFFFF` on `background-dark: #1A1D1A`.
    9. Always apply subtle shadows like `0px 4px 12px rgba(15,82,51,0.1)` only for dropdowns and modals.
    10. Always use `300ms ease-in` for general component transitions.
    11. Always collapse multi-column layouts to single column on screens below `768px`.
    12. Always verify text contrast against the warm cream background for optimal accessibility.