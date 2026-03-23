# Guia de Estilo & Padrões de Design 🎨

## Paleta de Cores - Uso Correto

### Cores Primárias
- **Gold (#d4af37)**: Botões CTA, destaques, borders premium
- **Cream (#f6e9d7)**: Backgrounds principais, overlays

### Cores Secundárias
- **Beige (#efe7dd)**: Backgrounds de seção, variações
- **Brown (#5c3a2e)**: Texto principal, headings
- **White (#ffffff)**: Cards, backgrounds claros

### Exemplos de Combinações Aprovadas
✅ Corretos:
- Gold em fundo Cream ou White
- Brown em fundo Beige ou White
- Cream com borders Gold
- White com text Brown

❌ Evitar:
- Cream em fundo Beige (muito similar)
- Brown em fundo Brown (sem contraste)
- Múltiplas cores primárias no mesmo elemento

## Tipografia

### Playfair Display (Serif)
**Uso**: Títulos, headings principais
```css
class="font-serif text-4xl font-bold"
class="font-serif text-5xl lg:text-7xl"
```

**Tamanhos Recomendados**:
- H1: text-6xl (hero)
- H2: text-4xl (seções)
- H3: text-2xl (subsections)

### Inter/Montserrat (Sans-serif)
**Uso**: Corpo, parágrafos, labels
```css
class="font-sans text-base font-normal"
class="font-sans text-lg font-medium"
```

**Tamanhos Recomendados**:
- Corpo: text-base (16px)
- Pequeno: text-sm (14px)
- Grande: text-lg (18px)
- Destaque: text-xl (20px)

## Espaçamento & Layout

### Padding/Margin Padrão
```
py-24   → Seções (96px vertical)
px-4    → Mobile (16px com)
sm:px-6 → Tablet
lg:px-8 → Desktop
gap-8   → Entre elementos
gap-12  → Espaço maior
```

### Cards & Elementos
```css
rounded-lg      → Botões, inputs (8px)
rounded-2xl     → Cards grandes (16px)
rounded-full    → Badges (9999px)
```

## Animações - Quando & Como

### Usar Framer Motion Para:
- ✅ Hover states (translateY, scale)
- ✅ Page load animations (fadeIn, slideUp)
- ✅ Staggered children
- ✅ Scroll triggers com Intersection Observer

### Usar CSS Para:
- ✅ Transitions simples (color, opacity)
- ✅ Hover de links (underline)
- ✅ Animations infinitas (pulse, spin)

### Timing & Easing
```javascript
// Micro-interações (300ms)
transition={{ duration: 0.3 }}

// Animações de entrada (600-800ms)
transition={{ duration: 0.6 }}

// Animações de scroll (800-1000ms)
transition={{ duration: 0.8 }}

// Easing padrão
ease: 'easeOut'
```

## Componentes - Padrões de Código

### Estrutura Base de Componente
```jsx
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function ComponentName() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = { /* ... */ };
  const itemVariants = { /* ... */ };

  return (
    <section ref={ref} className="py-24 px-4">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* Conteúdo */}
      </motion.div>
    </section>
  );
}
```

### Card Pattern
```jsx
<motion.div
  whileHover={{ y: -8 }}
  className="bg-white border border-gold/20 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
>
  {/* Conteúdo */}
</motion.div>
```

### Button Pattern
```jsx
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="px-8 py-4 bg-gold text-white font-semibold rounded-lg hover:bg-amber-600 transition-all shadow-lg"
>
  Ação
</motion.button>
```

## Responsividade - Mobile-First

### Breakpoints
```
- Padrão: 15px/20px padding mobile
- sm (640px): Tablets pequenas
- md (768px): Tablets grandes / Desktop pequeno
- lg (1024px): Desktop
- xl (1280px): Desktop grande
```

### Padrões Comuns
```jsx
// Grid responsivo
grid-cols-1 md:grid-cols-2 lg:grid-cols-3

// Texto responsivo
text-3xl md:text-4xl lg:text-5xl

// Flex responsivo
flex-col md:flex-row

// Ocultação
hidden md:block  // Oculto em mobile
block md:hidden  // Visível apenas em mobile
```

## Acessibilidade

### Sempre Incluir
- ✅ `alt` em imagens
- ✅ Labels em forms
- ✅ `aria-label` em ícones
- ✅ Focus states visíveis
- ✅ Contraste mínimo WCAG AA (4.5:1)

### Exemplo
```jsx
<button
  aria-label="Fechar menu"
  className="focus:outline-none focus:ring-2 focus:ring-gold"
>
  ×
</button>
```

## Performance

### Checklist
- ✅ Lazy load com Intersection Observer
- ✅ CSS purging ativo (Tailwind)
- ✅ Imagens otimizadas (use emojis, SVG)
- ✅ Sem componentes pesados desnecessários
- ✅ Usar `whileInView` em Framer Motion

### Otimização de Imagens
```jsx
// Ruim
<img src="large-image.jpg" />

// Bom
<img 
  src="optimized-image.webp" 
  alt="Descrição"
  loading="lazy"
/>

// Melhor (emojis)
<span className="text-6xl">🎂</span>
```

## Consistência de Design

### Cores em Diferentes Contextos
- **Background**: Cream, Beige, White
- **Text**: Brown (primário), Brown/70 (secundário)
- **Highlights**: Gold, Amber-600
- **Borders**: Gold/20, Gold/30
- **Overlays**: Gold/5, Gold/10

### Usar CSS Variables para Facilitar
```css
:root {
  --gold: #d4af37;
  --cream: #f6e9d7;
  --beige: #efe7dd;
  --brown: #5c3a2e;
  --white: #ffffff;
}
```

## Exemplos de Boas Práticas

### ❌ Ruim
```jsx
<div style={{
  padding: '20px',
  backgroundColor: '#f6e9d7',
  borderRadius: '8px'
}}>
  Conteúdo
</div>
```

### ✅ Bom
```jsx
<div className="p-5 bg-cream rounded-lg">
  Conteúdo
</div>
```

### ❌ Ruim (Animações)
```jsx
<div style={{ animation: 'bounce 0.5s infinite' }}>
  Elemento
</div>
```

### ✅ Bom
```jsx
<motion.div
  animate={{ y: [0, -10, 0] }}
  transition={{ duration: 2, repeat: Infinity }}
>
  Elemento
</motion.div>
```

## Checklist para Novas Seções

- ✅ Usar `font-serif` para títulos
- ✅ Usar `font-sans` para corpo
- ✅ Background com gradiente `from-X to-Y`
- ✅ Seções com `py-24 px-4` mínimo
- ✅ Incluir animações `useInView`
- ✅ Cards com `shadow-lg hover:shadow-xl`
- ✅ Botões com `whileHover` e `whileTap`
- ✅ Responsive com `grid-cols-1 md:grid-cols-2`
- ✅ Todos os textos têm contraste adequado
- ✅ Sem cores fora da paleta definida

## Variáveis Tailwind Personalizadas

Já configuradas em `tailwind.config.js`:

```javascript
colors: {
  gold: '#d4af37',
  cream: '#f6e9d7',
  beige: '#efe7dd',
  brown: '#5c3a2e',
},
fontFamily: {
  serif: ['Playfair Display', 'serif'],
  sans: ['Inter', 'Montserrat', 'sans-serif'],
}
```

**Use assim:**
```jsx
className="text-gold bg-cream font-serif"
```

---

Este guia garante consistência visual e técnica em toda a aplicação. Segui-lo mantém a qualidade do design mesmo com contribuições múltiplas.
