# Pulso Landing — Decisiones de Diseño

## 1. Arquitectura

### Estructura de Componentes
- **Secciones modulares**: Cada sección del copy es un componente independiente (`Hero`, `ForWhom`, `Problem`, etc.)
- **Componentes reutilizables**: `Button` centraliza estilos y comportamiento de CTAs
- **Page.tsx**: Orquestador principal que coordina flujo y referencias (scroll a "Para quién es")

### Rutas y Navegación
- Landing de una sola página (`/`)
- El CTA secundario en Hero hace scroll suave a la sección "Para quién es"
- Sección de aplicación marcada con `id="application"` para enlaces internos
- Botones de aplicación apuntan a `https://tally.so/r/PULSO` (placeholder editable)

---

## 2. Identidad Visual

### Colores
- **Fondo**: `#000000` (negro puro) — toda la landing usa este color
- **Texto principal**: `#FFFFFF` (blanco)
- **Acentos**: `#D4AF37` (oro) — headlines, bordes destacados, números, CTAs
- **Grises contextuales**:
  - `#111111` (gray-900) — secciones alternadas
  - `#1a1a1a` (gray-800) — bordes sutiles
  - `#2d2d2d` (gray-700) — elementos secundarios
  - `#404040` (gray-600) — texto muy atenuado
  - `#a3a3a3` (gray-300) — cuerpo secundario

### Tipografía
- **Familia**: Inter (variable font desde Google Fonts)
- **Pesos usados**: 400 (regular), 600 (semibold)
- **Tamaños**: Responsivos con `clamp()` para escalado fluido
  - H1: 2.5rem → 4rem (hero)
  - H2: 1.8rem → 2.5rem (secciones)
  - H3: 1.3rem → 1.5rem (subsecciones)
  - Body: 1rem base
- **Letter-spacing**: -0.5px en headings para compacidad premium

---

## 3. Estilo y Composición

### Enfoque Visual
- **Premium, minimalista**: Sin gradientes, sin decoración innecesaria
- **Espaciado generoso**: Padding 4rem (mobile) → 6rem (desktop)
- **Separación visual**: Bordes sutiles (`border-gray-800`), bordes destacados (`border-gold`) en elementos clave
- **Contraste**: Texto blanco directo sobre negro para máxima legibilidad

### Componentes Clave

#### Hero
- Headline con acento dorado en palabra clave ("premium")
- Subheadline en gris (jerarquía clara)
- Microcopy en tipografía pequeña y uppercase
- 2 CTAs lado a lado (responsive a stack en móvil)

#### Secciones de Contenido
- Espaciado alterno: negro → gris-900 → negro
- Bordes sutiles entre secciones (`border-t border-gray-800`)
- Viñetas doradas (`→`) en listas clave
- Bloques de contenido con bordes y fondos semi-transparentes

#### CTA Buttons
- **Primary**: Fondo dorado (#D4AF37), texto negro, efecto hover (opacidad baja)
- **Secondary**: Borde dorado 2px, texto dorado, hover: fondo dorado con opacidad baja
- Transición suave con translate Y en hover (elevación visual)

#### FAQ
- Acordeón interactivo con signo "+" que rota 45° al abrir
- Bordes brillan en hover (`hover:border-gold`)
- Animaciones suaves para toggle

---

## 4. Responsive Design

### Breakpoints Tailwind (nativos)
- **Mobile**: Default (0px)
- **md**: 768px (tablets)
- **lg**: 1024px (desktop)

### Estrategia Responsive
- **Grid layouts**: 1 columna en mobile → 2 en desktop (`grid-cols-1 md:grid-cols-2`)
- **Flexbox stacking**: Buttons y contenido en column móvil → row desktop
- **Tipografía fluida**: `clamp()` para escalado automático sin media queries adicionales
- **Padding adaptativo**: Secciones responden a viewport width

---

## 5. Formulario y CTAs

### Integración Tally
- URL placeholder: `https://tally.so/r/PULSO`
- Se abre en nueva pestaña (`target="_blank"`)
- Botones apuntan a esta URL desde:
  - Hero (CTA principal)
  - Sección "Aplicación" (pre-CTA)
  - Cierre (CTA final)

### Formulario Esperado (8 preguntas)
1. ¿Cuál es tu marca o negocio?
2. ¿Qué vendes y a qué tipo de cliente?
3. ¿Qué quieres que cambie en tu presencia en 90 días?
4. ¿Qué problema sientes hoy con tu imagen/contenido?
5. ¿Qué facturación mensual tiene actualmente el negocio?
6. ¿Qué inversión estás dispuesto a asumir?
7. ¿Cuándo quieres empezar?
8. ¿Por qué crees que Pulso puede ser el partner adecuado?

**Opciones de inversión**:
- Menos de 1.500 €
- 1.500 € – 3.000 €
- 3.000 € – 5.000 €
- 5.000 €+

---

## 6. Accesibilidad y UX

### Buenas Prácticas Implementadas
- **Contraste**: Todo texto cumple WCAG AA (blanco sobre negro = 21:1)
- **Scroll smooth**: Transiciones suaves (`scroll-behavior: smooth`)
- **Navegación clara**: Botones con hover states obvios
- **Tamaños toque**: Buttons ≥ 44px en altura (mobile-friendly)
- **Semántica HTML**: Headers correctos, button/link semántica respetada

### Mejoras Futuras (opcionales)
- Dark mode nativo (ya es modo oscuro)
- Animaciones entrada (Intersection Observer)
- Medición eventos (Google Analytics, Tally events)

---

## 7. Performance

### Optimizaciones
- **Next.js Image**: Preparado para usar (no hay imágenes ahora)
- **CSS-in-JS**: Tailwind generado en build (~30KB gzipped típico)
- **Font loading**: Inter variable font optimizado por Next.js
- **No dependencias externas**: Solo React, Next.js, Tailwind
- **Minification automática**: Next.js production build

---

## 8. Decisiones Editoriales

### Por qué cada elección

| Elemento | Decisión | Razón |
|----------|----------|-------|
| **Una página** | Single-page app | Copy fluye naturalmente, no requiere navegación multisección |
| **Scroll a sección** | CTA "Ver si encajamos" → ForWhom | Mantiene momentum sin ir a otra página |
| **Color oro subtil** | Solo acentos, no saturado | Premium ≠ brillo ciego. Autoridad es sutileza |
| **Sin números en cierre** | FAQ tiene numeración pero no el resto | Evita monotonía visual |
| **Bordes, no fondos** | Secciones con border-top | Limpieza: separación clara sin bloques pesados |
| **Acordeón en FAQ** | Interactividad mínima | Encaja con "pocos clientes, alta implicación" |
| **Formulario externo** | Tally link (no embed) | Menor complejidad, mejor performance |

---

## 9. Próximos Pasos (Post-Deploy)

1. **Reemplazar URL Tally**: Cambia `https://tally.so/r/PULSO` por tu ID real
2. **Agregar analytics**: Implementa Tally events o GA4 para tracking de conversiones
3. **Email de notificación**: Configura Tally para enviar respuestas a inbox
4. **Imágenes/video**: Agrega hero image o video background si lo requiere
5. **Dominio personalizado**: Apunta DNS a Vercel deployment

---

## 10. Stack Técnico

- **Runtime**: Next.js 16.1.6 (React 19)
- **Styling**: Tailwind CSS 4
- **Fonts**: Next.js Font Optimization + Inter Variable
- **Build**: TypeScript, no bundled assets grandes
- **Deploy**: Ready for Vercel (zero-config)

---

**Status**: ✅ Completo y compilable. Listo para deploy.
