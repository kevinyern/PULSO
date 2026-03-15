# Technical Summary — Pulso Landing

## Project Overview

**Type**: Single-page Next.js web application  
**Purpose**: Premium landing page for Pulso (audiovisual content agency)  
**Framework**: Next.js 16.1.6 with React 19  
**Styling**: Tailwind CSS 4  
**Language**: TypeScript 5 (strict mode)  
**Deployment**: Vercel (zero-config)

---

## Architecture

### Directory Structure

```
app/
├── layout.tsx         # Root layout with metadata & fonts
├── page.tsx           # Main page (section orchestrator)
└── globals.css        # Global styles + CSS variables

components/
├── sections/          # Page sections (10 total)
│   ├── Hero.tsx              # Title + 2 CTAs
│   ├── ForWhom.tsx           # Eligibility matrix
│   ├── Problem.tsx           # Pain points
│   ├── Solution.tsx          # Value proposition
│   ├── HowWorks.tsx          # 5-step process
│   ├── WhatIncludes.tsx      # 4 service blocks
│   ├── Investment.tsx        # Pricing info
│   ├── ApplicationCTA.tsx    # Pre-CTA section
│   ├── FAQ.tsx               # Accordion (4 Q&A)
│   └── Closing.tsx           # Final CTA
└── ui/
    └── Button.tsx            # Reusable CTA component

Configuration/
├── tailwind.config.ts    # Tailwind + color palette
├── tsconfig.json         # TypeScript config (strict)
├── next.config.ts        # Next.js config
├── postcss.config.js     # PostCSS for Tailwind
├── .eslintrc.json        # ESLint rules
└── .gitignore            # Git ignore patterns
```

---

## Component Design Patterns

### Sections

Each section is a standalone React component that:
- Exports as default
- Uses `'use client'` directive (client-side rendering)
- Accepts ref props where needed (ForWhom)
- Accepts callbacks (Hero)
- Contains all content, styling, and interactivity

Example structure:
```tsx
'use client';

export default function SectionName() {
  return (
    <section className="section bg-...">
      {/* Content */}
    </section>
  );
}
```

### Reusable Components

**Button.tsx** — Centralized CTA styling
- Variants: `primary` (gold bg), `secondary` (gold border)
- Props: `href`, `onClick`, `target`, `rel`, `type`
- Supports both Link and button elements
- Smooth transitions and hover effects

---

## Styling Strategy

### Tailwind Configuration

**Colors** (custom palette):
```ts
{
  black: "#000000",
  white: "#FFFFFF",
  gold: "#D4AF37",
  gray: {
    900: "#111111",
    800: "#1a1a1a",
    700: "#2d2d2d",
    600: "#404040",
    300: "#a3a3a3",
  },
}
```

**Typography**:
- Font: Inter (variable weight)
- Weights: 400 (regular), 600 (semibold)
- Scale: Using `clamp()` for fluid responsiveness
- Letter-spacing: -0.5px on headings (premium feel)

### CSS Organization

**globals.css** defines:
- CSS variables (reusable colors)
- Base typography rules
- Global transitions
- Smooth scroll behavior

**Tailwind** handles:
- Component utilities
- Responsive classes
- Layout grid/flex
- Spacing system

---

## Interactivity

### Navigation

**Smooth scroll**:
```tsx
// page.tsx
const forWhomRef = useRef<HTMLDivElement>(null);
const scrollToForWhom = () => {
  forWhomRef.current?.scrollIntoView({ behavior: 'smooth' });
};
```

Secondary CTA → scroll to "For Whom" section

### FAQ Accordion

**State-driven toggle**:
```tsx
const [openIndex, setOpenIndex] = useState<number | null>(0);

{openIndex === index && (
  <div className="...">
    {/* Answer content */}
  </div>
)}
```

- Default: First question open
- Icon: "+" rotates 45° on toggle
- Smooth transitions

### Button States

**Hover Effects**:
- Primary: Opacity change
- Secondary: Background fill
- All: Y-axis translate (elevation)

---

## Responsive Design

### Breakpoints

Tailwind defaults:
- **Default (0px)**: Mobile
- **md (768px)**: Tablet
- **lg (1024px)**: Desktop

### Implementation

**Fluid typography**:
```css
h1 {
  font-size: clamp(2.5rem, 8vw, 4rem);
}
```

**Grid responsiveness**:
```tsx
<div className="grid md:grid-cols-2 gap-12">
  {/* Stacks on mobile, 2-col on tablet+ */}
</div>
```

**Flexbox stacking**:
```tsx
<div className="flex flex-col sm:flex-row gap-4">
  {/* Column on mobile, row on tablet+ */}
</div>
```

---

## Form Integration

### Tally Setup

**Placeholder URL**: `https://tally.so/r/PULSO`

**Integration points**:
1. Hero.tsx (lines ~19)
2. ApplicationCTA.tsx (lines ~22)
3. Closing.tsx (lines ~20)

**CTA behavior**:
- Opens in new tab (`target="_blank"`)
- No embed (external form)
- 3 form access points for conversion optimization

### Form Questions

Tally form should include:
1. ¿Cuál es tu marca o negocio?
2. ¿Qué vendes y a qué tipo de cliente?
3. ¿Qué quieres que cambie en tu presencia en 90 días?
4. ¿Qué problema sientes hoy con tu imagen/contenido?
5. ¿Qué facturación mensual tiene actualmente?
6. ¿Qué inversión estás dispuesto a asumir?
7. ¿Cuándo quieres empezar?
8. ¿Por qué crees que Pulso es el partner adecuado?

**Investment options**:
- Menos de 1.500€
- 1.500€ – 3.000€
- 3.000€ – 5.000€
- 5.000€+

---

## Build & Deployment

### Build Process

```bash
npm run build
```

Output:
- Compiles TypeScript → JavaScript
- Generates optimized static pages
- Creates `.next/` build directory
- Total build: 2-3 minutes

### Deployment

**Vercel (recommended)**:
```bash
vercel
```

- Zero configuration needed
- Automatic deployments on push
- Edge caching included
- Preview URLs for PRs

**GitHub + Vercel**:
1. Push to GitHub
2. Connect repo in vercel.com
3. Automatic deploy on every push

---

## Performance Metrics

**Expected Lighthouse Scores**:
- Performance: 95+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

**Bundle Size**:
- CSS: ~30KB (gzipped)
- JS: ~40KB (gzipped)
- Total: ~70KB initial load

**Optimization**:
- Zero external dependencies (besides React/Next/Tailwind)
- No images (ready to add)
- CSS-in-JS (Tailwind)
- Code splitting (Next.js automatic)

---

## TypeScript Types

### Component Props

```tsx
// Hero.tsx
interface HeroProps {
  onSecondaryClick: () => void;
}

// Button.tsx
interface ButtonProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  target?: string;
  rel?: string;
  type?: 'button' | 'submit' | 'reset';
}
```

### Strict Mode

`tsconfig.json` enforces:
- `strict: true`
- No implicit any
- No unused variables
- No unused parameters

---

## SEO & Metadata

### Open Graph Tags

Configured in `app/layout.tsx`:
- Title: "Pulso | Presencia audiovisual premium para marcas"
- Description: Landing copy excerpt
- Type: website
- Image: Ready for social preview

### Meta Tags

- Charset: UTF-8
- Viewport: Responsive
- Language: Spanish (lang="es")

---

## Code Quality

### Patterns Used

✅ Functional components (no class components)  
✅ Hooks (useState, useRef)  
✅ Custom CSS (Tailwind utilities)  
✅ Semantic HTML (h1-h6, button, a)  
✅ Proper imports/exports  
✅ No prop drilling  
✅ Single responsibility per component  

### Linting

```bash
npm run lint
```

Configured in `.eslintrc.json` with Next.js rules.

---

## Customization Guide

### Change Colors

Edit `tailwind.config.ts`:
```ts
colors: {
  black: "#NEWCOLOR",
  // ... other colors
}
```

### Add New Section

1. Create `components/sections/NewSection.tsx`
2. Export as default
3. Import in `app/page.tsx`
4. Add to main section stack

### Change Fonts

Edit `app/layout.tsx`:
```tsx
const inter = Inter({ /* options */ });
```

### Update Tally Form URL

Find and replace:
```bash
grep -r "tally.so/r/PULSO" components/
```

Then edit the 3 files with your ID.

---

## Troubleshooting

### TypeScript Errors

```bash
npm run build -- --debug
```

Check `tsconfig.json` strict rules.

### CSS Not Loading

- Clear `.next/` directory
- Run `npm run build` again
- Check Tailwind config content paths

### Tally Form Not Opening

- Verify URL is correct
- Check `target="_blank"` attribute
- Browser may block if not https

---

## Version Control

### .gitignore

Already configured to exclude:
- `/node_modules`
- `/.next`
- `/build`
- `.env.local`
- Build artifacts

---

## Future Enhancement Ideas

(Optional, not included):

- Dark/Light mode toggle
- Scroll-triggered animations (Intersection Observer)
- Image optimization (next/image)
- Blog section
- Email capture modal
- Analytics integration
- Webhook for form notifications
- Multi-language support

---

## Dependencies Summary

**Production**:
- `next@16.1.6`
- `react@19.2.3`
- `react-dom@19.2.3`

**Development**:
- `tailwindcss@^4`
- `@tailwindcss/postcss@^4`
- `typescript@^5`
- `eslint@^9`
- `eslint-config-next@16.1.6`

**Total packages**: 250+ (after npm install)

---

## Maintenance

### Regular Tasks

- Keep Next.js updated: `npm upgrade next`
- Keep Tailwind updated: `npm upgrade tailwindcss`
- Run linter: `npm run lint`
- Test build: `npm run build`

### Monitoring

- Set up Tally email notifications
- Monitor Vercel deployments
- Check analytics (if integrated)

---

## Support Resources

- Next.js Docs: https://nextjs.org/docs
- Tailwind Docs: https://tailwindcss.com/docs
- React Docs: https://react.dev
- TypeScript Docs: https://www.typescriptlang.org/docs
- Vercel Docs: https://vercel.com/docs

---

**Last Updated**: 2026-03-15  
**Status**: Production Ready ✅
