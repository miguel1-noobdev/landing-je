# Jess Nails - Landing Page

## Descripción del Proyecto

Esta es una landing page moderna y atractiva para Jess Nails, un salón de uñas especializado en manicuras, pedicuras y tratamientos de belleza para uñas. El diseño se enfoca en una experiencia visual impactante con colores vibrantes y un layout responsivo que funciona perfectamente en dispositivos móviles, tablets y desktop.

## Tecnologías Utilizadas

- **HTML5**: Estructura semántica y accesible
- **CSS3 Nativo**: Sin frameworks externos, utilizando Grid y Flexbox para layouts responsivos
- **JavaScript Vanilla**: Interacciones básicas y funcionalidades dinámicas
- **Google Fonts**: Tipografías modernas para una apariencia profesional

## Paleta de Colores

La paleta de colores está inspirada en la pasión y elegancia del mundo de las uñas:

- **Rojo Fuego (#FF4500)**: Color principal para llamadas a la acción y elementos destacados
- **Violeta (#8A2BE2)**: Color secundario para acentos y elementos decorativos
- **Negro (#000000)**: Color de fondo y texto para contraste y elegancia
- **Blanco (#FFFFFF)**: Para fondos claros y texto sobre colores oscuros
- **Gris Claro (#F5F5F5)**: Para fondos secundarios y separación de secciones

## Estructura del Proyecto

```
jess_nails_repositorio/
├── web/
│   ├── index.html          # Página principal
│   ├── css/
│   │   ├── styles.css      # Estilos principales
│   │   ├── responsive.css  # Estilos responsivos
│   │   └── animations.css  # Animaciones CSS
│   ├── js/
│   │   ├── main.js         # JavaScript principal
│   │   └── components.js   # Componentes interactivos
│   ├── images/             # Imágenes y assets
│   │   ├── hero-image.jpg
│   │   ├── services/
│   │   └── gallery/
│   └── README.md           # Este archivo
```

## Diseño y Layout

### Layout Responsivo
- **Mobile First**: Diseño optimizado para móviles primero
- **Grid CSS**: Para layouts complejos de galería y servicios
- **Flexbox**: Para navegación, headers y componentes flexibles
- **Breakpoints**: 
  - Móvil: < 768px
  - Tablet: 768px - 1024px
  - Desktop: > 1024px

### Componentes Principales
1. **Header con Navegación**: Logo, menú hamburguesa para móvil
2. **Hero Section**: Imagen de fondo, título, CTA principal
3. **Servicios**: Grid de tarjetas con servicios ofrecidos
4. **Galería**: Masonry layout con imágenes de trabajos
5. **Testimonios**: Carrusel de reseñas de clientes
6. **Contacto**: Formulario y información de ubicación
7. **Footer**: Enlaces sociales, copyright

## Tareas Asignadas a Agentes

### 1. Arquitectura y Estructura HTML
**Agente Asignado**: frontend-developer  
**Descripción**: Crear la estructura HTML5 semántica completa  
**Archivos**: index.html  
**Requisitos**:
- HTML válido y accesible
- Schema.org markup para negocio local
- Meta tags optimizados para SEO
- Estructura semántica (header, main, footer, etc.)

### 2. Diseño de Estilos CSS Principales
**Agente Asignado**: ui-ux-designer  
**Descripción**: Implementar estilos base con paleta de colores rojo fuego, violeta y negro  
**Archivos**: css/styles.css  
**Requisitos**:
- Variables CSS para colores
- Tipografía consistente
- Estilos base para botones, tarjetas, formularios
- Animaciones sutiles con CSS

### 3. Layout Responsivo con Grid y Flexbox
**Agente Asignado**: frontend-developer  
**Descripción**: Crear layouts responsivos sin frameworks  
**Archivos**: css/responsive.css  
**Requisitos**:
- Grid para galería y servicios
- Flexbox para navegación y componentes
- Media queries para breakpoints
- Testing en múltiples dispositivos

### 4. Animaciones y Transiciones CSS
**Agente Asignado**: ui-ux-designer  
**Descripción**: Añadir animaciones modernas y transiciones suaves  
**Archivos**: css/animations.css  
**Requisitos**:
- Hover effects en botones
- Transiciones de entrada para secciones
- Animaciones de scroll
- Micro-interacciones

### 5. Funcionalidades JavaScript
**Agente Asignado**: frontend-developer  
**Descripción**: Implementar interacciones dinámicas  
**Archivos**: js/main.js, js/components.js  
**Requisitos**:
- Menú móvil toggle
- Carrusel de testimonios
- Validación de formulario
- Lazy loading de imágenes

### 6. Optimización de Imágenes y Assets
**Agente Asignado**: performance-optimizer  
**Descripción**: Optimizar imágenes para web  
**Archivos**: images/  
**Requisitos**:
- Compresión sin pérdida de calidad
- Formatos modernos (WebP, AVIF)
- Responsive images con srcset
- Lazy loading

### 7. Contenido y Copywriting
**Agente Asignado**: content-creator  
**Descripción**: Crear textos persuasivos y optimizados para conversión  
**Archivos**: index.html (contenido)  
**Requisitos**:
- Headlines atractivos
- Descripciones de servicios
- Call-to-actions efectivos
- SEO-friendly copy

### 8. Testing y QA
**Agente Asignado**: test-automator  
**Descripción**: Testing cross-browser y funcional  
**Archivos**: tests/  
**Requisitos**:
- Testing en Chrome, Firefox, Safari
- Validación de responsive design
- Testing de formularios
- Performance testing

### 9. SEO y Performance
**Agente Asignado**: seo-content-writer  
**Descripción**: Optimización para motores de búsqueda  
**Archivos**: index.html, meta tags  
**Requisitos**:
- Meta descriptions
- Alt texts en imágenes
- Schema markup
- Core Web Vitals optimization

### 10. Documentación Final
**Agente Asignado**: docs-architect  
**Descripción**: Documentación completa del proyecto  
**Archivos**: README.md, docs/  
**Requisitos**:
- Guía de instalación
- Documentación técnica
- Guía de mantenimiento
- Changelog

## Instalación y Desarrollo

### Prerrequisitos
- Navegador web moderno
- Editor de código (VS Code recomendado)
- Conexión a internet para Google Fonts

### Configuración Local
1. Clonar o descargar el proyecto
2. Abrir `index.html` en un navegador web
3. Para desarrollo, usar un servidor local (Live Server extension en VS Code)

### Despliegue
- Subir archivos a hosting web (Netlify, Vercel, etc.)
- Asegurar HTTPS para producción
- Configurar CDN para imágenes si es necesario

## Convenciones de Código

### CSS
- Usar variables CSS para colores y espaciado
- Nomenclatura BEM para clases
- Comentarios descriptivos para secciones
- Mobile-first approach

### JavaScript
- ES6+ features
- Funciones arrow cuando apropiado
- Comentarios JSDoc para funciones públicas
- Error handling con try/catch

### HTML
- Indentación consistente (2 espacios)
- Atributos en orden alfabético
- Uso de data attributes para JS hooks

## Metas y KPIs

- **Tiempo de carga**: < 3 segundos
- **Mobile score**: > 90 en Lighthouse
- **Conversión**: > 5% de visitantes a leads
- **SEO**: Posicionamiento en primeras posiciones para "salón de uñas [ciudad]"

## Próximos Pasos

1. Implementar tracking con Google Analytics
2. Añadir integración con sistema de reservas
3. Crear versión multilingüe
4. Implementar PWA features

## Contacto

Para preguntas sobre el desarrollo o colaboraciones:
- Email: desarrollo@jessnails.com
- GitHub: @jess-nails-dev

---

*Proyecto desarrollado con ❤️ para Jess Nails*