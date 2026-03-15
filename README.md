# Pulso Landing

Landing page premium para Pulso — sistema de contenido audiovisual para marcas.

## Inicio Rápido

### Instalación

```bash
cd pulso-landing
npm install
```

### Desarrollo Local

```bash
npm run dev
```

Luego abre [http://localhost:3000](http://localhost:3000)

### Build para Producción

```bash
npm run build
npm start
```

## Estructura del Proyecto

```
pulso-landing/
├── app/
│   ├── layout.tsx          # Layout global + metadatos
│   ├── page.tsx            # Página principal (orquestador de secciones)
│   └── globals.css         # Estilos globales
├── components/
│   ├── sections/           # Componentes de cada sección
│   │   ├── Hero.tsx
│   │   ├── ForWhom.tsx
│   │   ├── Problem.tsx
│   │   ├── Solution.tsx
│   │   ├── HowWorks.tsx
│   │   ├── WhatIncludes.tsx
│   │   ├── Investment.tsx
│   │   ├── ApplicationCTA.tsx
│   │   ├── FAQ.tsx
│   │   └── Closing.tsx
│   └── ui/
│       └── Button.tsx       # Componente reutilizable de botones
├── tailwind.config.ts      # Configuración Tailwind + colores
├── tsconfig.json           # Configuración TypeScript
├── next.config.ts          # Configuración Next.js
└── DESIGN_DECISIONS.md     # Documentación de decisiones visuales
```

## Configuración Importante

### Formulario Tally

Todos los botones "Aplicar" apuntan a:
```
https://tally.so/r/PULSO
```

**Para usar tu formulario real:**

1. Crea el formulario en [Tally](https://tally.so/)
2. Obtén tu ID de formulario
3. Reemplaza `PULSO` por tu ID en todos los archivos:
   - `app/page.tsx` (Hero buttons)
   - `components/sections/ApplicationCTA.tsx`
   - `components/sections/Closing.tsx`

### Personalización de Colores

Editables en `tailwind.config.ts`:
- `black: "#000000"`
- `white: "#FFFFFF"`
- `gold: "#D4AF37"`

### Tipografía

La landing usa **Inter** de Google Fonts (variable weight). Configurado automáticamente en `app/layout.tsx`.

## Secciones de la Landing

1. **Hero** — Titular principal + 2 CTAs (Aplicar / Ver si encajamos)
2. **Para quién es** — Encaja / No encaja
3. **El problema** — Impacto de mala percepción
4. **La solución** — Qué hace Pulso (3 objetivos)
5. **Cómo funciona** — 5 pasos (Diagnóstico → Optimización)
6. **Qué incluye** — 4 bloques (Estrategia, Dirección, Producción, Sistema)
7. **Inversión** — Desde 3.000€/mes
8. **Aplicación** — Pre-CTA con contexto
9. **FAQ** — 4 preguntas con acordeón
10. **Cierre** — Último CTA

## Scripts Disponibles

```bash
npm run dev      # Desarrollo local (hot reload)
npm run build    # Build optimizado para producción
npm start        # Inicia servidor production
npm run lint     # Corre eslint
```

## Deploy en Vercel

Zero-config deploy (Next.js nativo):

```bash
vercel
```

O conecta tu repo de GitHub en [vercel.com](https://vercel.com/).

## Accesibilidad

- ✅ Contraste WCAG AA (blanco sobre negro = 21:1)
- ✅ Scroll smooth con navegación semántica
- ✅ Botones con tamaño mínimo 44px (mobile)
- ✅ HTML semántico (h1, h2, buttons vs links)

## Performance

- Lighthouse score: 95+ (sin imágenes)
- CSS generado dinámicamente con Tailwind (~30KB gzipped)
- Zero external dependencies (solo React, Next, Tailwind)
- Optimizado para Core Web Vitals

## Próximos Pasos

1. Configura tu formulario Tally
2. Personaliza el dominio
3. Agrega analytics si es necesario
4. Deploy en Vercel

## Contacto / Dudas

Ver DESIGN_DECISIONS.md para arquitectura completa.
