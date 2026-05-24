# 🎨 Jess Nails — Design System v1.0

*Premium component specifications, color guidance, and interaction patterns for the Jess Nails website and future brand extensions.*

---

## 1. Color Palette

### Primary Colors

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| **Rose/Pink** | `#ff2d95` | rgb(255, 45, 149) | Buttons, accents, hover states |
| **Violet** | `#8b5cf6` | rgb(139, 92, 246) | Gradients, secondary accents |
| **Lavender** | `#a78bfa` | rgb(167, 139, 250) | Subtle accents, dividers |

### Background Colors

| Name | Hex | Usage |
|------|-----|-------|
| **Black Deep** | `#0f0f0f` | Main page background |
| **Black Dark** | `#1a1a1a` | Secondary backgrounds, panels |
| **Grey Dark** | `#2a2a2a` | Card backgrounds, bordered elements |
| **Grey Light** | `#404040` | Tertiary elements, borders |

### Text Colors

| Name | Hex | Usage |
|------|-----|-------|
| **White Pure** | `#ffffff` | High-contrast headings |
| **White Off** | `#f5f5f5` | Body text, default |
| **Grey Neutral** | `#cfcfcf` | Captions, secondary text |
| **Grey Muted** | `#8a8a8a` | Disabled states, hints |

### Gradients

```css
/* Primary Gradient (Rose → Violet) */
linear-gradient(135deg, #ff2d95, #8b5cf6)

/* Subtle Glass Gradient */
linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))

/* Hero Background Gradient */
linear-gradient(135deg, rgba(139,92,246,0.08) 0%, rgba(255,45,149,0.04) 100%)
```

---

## 2. Typography

### Font Family

```css
/* Headings: Serif, Editorial, Elegant */
--font-heading: 'Playfair Display', serif;
font-weight: 700; /* Bold */
letter-spacing: -0.01em; /* Tight for elegance */

/* Body: Clean, Modern, Professional */
--font-body: 'Inter', system-ui, sans-serif;
font-weight: 400–500;
letter-spacing: 0;
```

### Type Scale

| Usage | Size | Weight | Line Height |
|-------|------|--------|-------------|
| **H1 (Hero Title)** | 3rem–4rem | 700 | 1.2 |
| **H2 (Section Title)** | 2rem–2.5rem | 700 | 1.3 |
| **H3 (Card Title)** | 1.5rem | 700 | 1.4 |
| **Body Text** | 1rem | 400 | 1.6 |
| **Small Text** | 0.875rem | 400 | 1.5 |
| **Caption** | 0.75rem | 500 | 1.4 |

### Text Styling Rules

- **Headings**: Apply `text-shadow` for depth (dark BG's)
  ```css
  text-shadow: 0 8px 30px rgba(0,0,0,0.7), 0 2px 8px rgba(0,0,0,0.4);
  ```

- **Body**: Ensure 4.5:1 contrast ratio for accessibility

- **Emphasis**: Use color (pink/violet) instead of bold for important terms

---

## 3. Spacing System

Consistent spacing using a `1rem` (16px) base unit:

| Scale | Value | Usage |
|-------|-------|-------|
| `xs` | 0.5rem (8px) | Tight spacing, icon gaps |
| `sm` | 1rem (16px) | Label spacing, small gaps |
| `md` | 1.5rem (24px) | Component spacing |
| `lg` | 3rem (48px) | Section spacing |
| `xl` | 4rem (64px) | Major section breaks |

**Examples**:
```css
/* Card padding */
padding: var(--spacing-lg); /* 3rem */

/* Section margins */
margin: var(--spacing-xl) 0; /* 4rem top/bottom */

/* Gap between grid items */
gap: var(--spacing-lg);
```

---

## 4. Shadows & Elevation

| Level | Shadow | Usage |
|-------|--------|-------|
| **Subtle (sm)** | `0 6px 20px rgba(0,0,0,0.35)` | Buttons, small cards |
| **Medium (md)** | `0 18px 44px rgba(0,0,0,0.45)` | Card hover, modals |
| **Deep (lg)** | `0 32px 80px rgba(0,0,0,0.6)` | Hero, featured cards |

**Glassmorphism Shadow** (for translucent cards):
```css
box-shadow: 0 20px 50px rgba(0,0,0,0.55), 0 2px 8px rgba(0,0,0,0.35);
```

---

## 5. Border Radius

| Scale | Value | Usage |
|-------|-------|-------|
| `sm` | 8px | Buttons, small inputs |
| `md` | 12px | Basic cards |
| `lg` | 16px | Large component cards |
| `full` | 50% or 999px | Avatars, circular elements |

---

## 6. Transitions & Animations

### Timing Functions

```css
/* Smooth, modern bounce curve */
--ease-smooth: cubic-bezier(0.2, 0.9, 0.3, 1);

/* Standard easing */
--ease-standard: cubic-bezier(0.25, 0.46, 0.45, 0.94);

/* Elastic exit */
--ease-elastic: cubic-bezier(0.34, 1.56, 0.64, 1);
```

### Duration Scale

| Duration | Use Case |
|----------|----------|
| `0.18s` | Micro interactions (button press) |
| `0.3s–0.35s` | Standard transitions (hover) |
| `0.5s–0.6s` | Card/element entrances |
| `1.2s–2s` | Scroll-triggered animations, counters |
| `3s–6s` | Ambient animations (floating, floating) |

### Motion Preferences
Always respect `prefers-reduced-motion`:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}
```

---

## 7. Component Patterns

### Hero Section
- **Background**: Gradient + parallax image overlay
- **Text**: Large H1 + supporting sentence
- **CTA Button**: Gradient button, elevated shadow
- **Entrance**: Fade in + slight upward motion on load
- **Parallax**: Move slower on scroll (0.5x scroll speed)

### Card (Glassmorphism)
```css
background: rgba(255, 255, 255, 0.05);
backdrop-filter: blur(12px);
border: 1px solid rgba(255, 255, 255, 0.06);
border-radius: 16px;
box-shadow: 0 20px 50px rgba(0,0,0,0.55);

/* Hover State */
transform: translateY(-8px) scale(1.02);
border-color: rgba(255, 255, 255, 0.12);
box-shadow: 0 32px 80px rgba(0,0,0,0.65);
```

### Button (Primary)
```css
background: linear-gradient(135deg, #ff2d95, #8b5cf6);
padding: 0.75rem 2rem;
border-radius: 8px;
border: 1px solid rgba(255, 255, 255, 0.06);
box-shadow: 0 12px 36px rgba(0,0,0,0.55);
transition: all 0.35s cubic-bezier(.2,.9,.3,1);

/* Hover */
transform: translateY(-4px) scale(1.02);
box-shadow: 0 28px 60px rgba(0,0,0,0.65);
```

### Animated Counter
```javascript
// Smooth number animation from 0 → target
// Duration: 2.5 seconds
// Easing: power2.out (smooth deceleration)
// Triggers on scroll into view
```

### Stat Box
- **Icon/Label**: Small caps, secondary color
- **Number**: Large, animated from 0 when visible
- **Suffix**: "%" or "ms" in primary pink

### Testimonial Card
- **Avatar**: Circular, 50px, gradient border
- **Quote**: Italic, indented
- **Meta**: Name (bold) + role (secondary text)
- **Scroll Animation**: Parallax + fade on scroll

### Service Card Grid
- **Layout**: 3-column on desktop, 1-column mobile
- **Gap**: `3rem`
- **Hover**: Lift + glow effect
- **Icon**: 64px emoji or SVG

---

## 8. Form Elements

### Input & Textarea
```css
border: 2px solid #2a2a2a;
background: rgba(255,255,255,0.02);
color: #f5f5f5;
padding: 0.75rem 1rem;
border-radius: 8px;
transition: all 0.3s cubic-bezier(.2,.9,.3,1);

/* Focus */
border-color: #ff2d95;
box-shadow: 0 0 0 3px rgba(255, 45, 149, 0.15);
```

### Select Dropdown
- Same styling as input
- Custom arrow icon (SVG)
- Drop shadow on open

### Checkbox/Radio
- Size: 18px × 18px
- Accent color: Primary pink
- Checked state: Gradient background

---

## 9. Responsive Breakpoints

```css
/* Desktop (default) */
1200px and above: Full experience

/* Tablet */
@media (max-width: 768px) {
  Grid: 2 columns → 1 column
  Font size: Reduce by 10–15%
  Spacing: Reduce by 25%
  Hide decorative elements
}

/* Mobile */
@media (max-width: 480px) {
  Single column layout
  Full-width buttons
  Compact spacing
  Touches: 44px minimum target size
}
```

---

## 10. Interaction Patterns

### Hover States
- **Desktop**: Elevation (transform), color shift, shadow increase
- **Mobile**: Only active/tap states (no hover simulators)
- **Keyboard**: Focus ring (2px solid #ff2d95)

### Loading States
- Skeleton screens or spinner (animated gradient)
- Opacity: 0.6 for disabled elements
- Cursor: `not-allowed` for disabled buttons

### Success/Error States
- **Success**: Green flash + checkmark animation
- **Error**: Red highlight + shake animation
- **Duration**: 2s display, then auto-hide

---

## 11. Accessibility Checklist

- ✅ **Color Contrast**: Min 4.5:1 for text
- ✅ **Focus Indicators**: Visible ring on all interactive elements
- ✅ **Keyboard Nav**: Tab order follows visual flow
- ✅ **Alt Text**: All images have descriptive alt
- ✅ **Semantic HTML**: Proper H1–H6, buttons, links
- ✅ **ARIA Labels**: Form inputs, icons, modals
- ✅ **Motion**: `prefers-reduced-motion` respected
- ✅ **Skip Link**: Jump to main content
- ✅ **Language**: HTML lang attribute set

---

## 12. Asset Specifications

### Images

| Asset | Dimensions | Format | Max Size |
|-------|-----------|--------|----------|
| **Hero Image** | 1920×1080 | WebP/JPG | 300KB |
| **Gallery Image** | 800×600 | WebP/JPG | 200KB |
| **Thumbnail** | 200×200 | WebP/JPG | 50KB |
| **Avatar** | 80×80 | WebP/JPG | 30KB |

### Icons

- **SVG preferred** (scalable, customizable)
- **Size**: 24px–64px depending on context
- **Color**: Inherit from text color or explicit hex
- **Stroke Width**: 2px for 24px icons

---

## 13. Performance Targets

| Metric | Target | Tool |
|--------|--------|------|
| **Lighthouse Performance** | 90+ | Chrome DevTools |
| **LCP (Largest Contentful Paint)** | < 2.5s | Web Vitals |
| **FID (First Input Delay)** | < 100ms | Web Vitals |
| **CLS (Cumulative Layout Shift)** | < 0.1 | Web Vitals |
| **Animation FPS** | 60 FPS | Performance Monitor |

---

## 14. Browser Support

- **Desktop**: Chrome, Firefox, Safari, Edge (latest 2 versions)
- **Mobile**: iOS Safari 13+, Chrome Android 90+
- **Polyfills**: CSS Grid, Flexbox (built-in)
- **JS Support**: ES6+ (no IE11 support)

---

## 15. Usage Examples

### Creating a New Card Component

```html
<div class="card card-glassmorphic">
  <h3 class="card__title">Service Title</h3>
  <p class="card__description">Brief description...</p>
  <button class="btn btn--primary">Learn More</button>
</div>
```

```css
.card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  box-shadow: var(--shadow-md);
  transition: var(--ease-smooth) 0.35s;
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-lg);
}
```

---

Last Updated: 20 de Marzo, 2026
**Status**: 🔄 Premium Design Phase
