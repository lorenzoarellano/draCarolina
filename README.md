# Dra. Andrea Carolina Harsanyi — Plataforma Médica de Alto Impacto

Sitio web profesional y optimizado para la **Dra. Andrea Carolina Harsanyi**, especialista en Geriatría egresada de la UNAM y CMN La Raza, con consultorio en Delicias, Chihuahua. Diseñado para ofrecer una experiencia estética premium y con ingeniería de datos orientada al posicionamiento orgánico inteligente.

---

## ⚡ Enfoque 100% Optimizado: SEO, AEO, LLMO y GEO

Este desarrollo va más allá del SEO tradicional. Está estructurado a nivel de datos para ser procesado eficientemente por buscadores algorítmicos y motores de respuestas de inteligencia artificial.

| Enfoque | Estrategia Técnica | Objetivo de Impacto |
| :--- | :--- | :--- |
| **SEO** *(Search Engine)* | Semántica HTML5 estricta (`<section>`, `<h1>`), optimización de imágenes nativa (`NuxtImg` con pre-carga LCP) y CSS con aceleración por GPU. | Posicionar en los primeros resultados de Google tradicional con tiempos de carga ultrarrápidos. |
| **AEO** *(Answer Engine)* | Formato de preguntas frecuentes estructurado y respuestas con marcado de énfasis directo (`<strong>`) y listas limpias. | Convertir el contenido en la fuente principal para fragmentos destacados (*Featured Snippets*) y respuestas de voz. |
| **LLMO** *(Language Model)* | Inyección automática de esquemas estructurados de Schema.org en formato JSON-LD (`schemaWebPage`, `schemaPhysician`, `schemaFAQPage`, `schemaMedicalConditions`, `schemaHowTo`, `schemaReviews`). | Facilitar que rastreadores de LLMs (como Claude, ChatGPT y Gemini) comprendan las credenciales y servicios del consultorio. |
| **GEO** *(Generative Engine)* | Enlazado geográfico local explícito, coordenadas exactas de Delicias Chihuahua, mapa interactivo integrado y menciones repetidas de áreas de influencia. | Aparecer en respuestas conversacionales basadas en ubicación y recomendadores locales de IA. |

---

## 🚀 Inicio Rápido

1. **Instalar dependencias:**
   ```bash
   npm install
   ```
2. **Ejecutar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```
3. **Verificar el proyecto:**
   Abre [http://localhost:3000](http://localhost:3000) en tu navegador. Los cambios que realices se aplicarán en tiempo real con recarga caliente.

---

## 💎 Características Premium del Sitio

* **Carrusel de Testimonios Avanzado:** Selector horizontal en la sección de "Historia Familiar" con soporte de arrastre con mouse (drag-to-scroll) para desktop, deslizamiento (swipe) táctil nativo en móviles, navegación con flechas circulares (infinito) y auto-centrado dinámico mediante un watcher de Vue.
* **FAQ de Dos Columnas Sticky:** Distribución asimétrica de 12 columnas en desktop. El lado izquierdo (títulos y tarjeta CTA de WhatsApp) permanece fijo (`sticky`) al hacer scroll mientras el listado de preguntas de la derecha se desplaza cómodamente.
* **Consistencia de Marca:** Integración del logotipo oficial de WhatsApp provisto por el usuario en CTAs de Navbar y banners de conversión, y paleta de colores HSL personalizada.

---

## 📋 Checklist de Mantenimiento de Optimización

Para garantizar que el sitio conserve su autoridad en buscadores e inteligencias artificiales:

- [ ] **Esquemas Sincronizados:** Cualquier cambio en la lista de servicios o FAQs debe hacerse en los arrays correspondientes en [index.vue](file:///c:/projects/draCarolina2/app/pages/index.vue). Los metatags JSON-LD del header se generan dinámicamente desde ahí.
- [ ] **Marcado Directo:** Mantener el uso de negritas (`<strong>`) en respuestas clave. Los LLMs utilizan estos pesos visuales para extraer resúmenes ejecutivos.
- [ ] **Ubicación Local:** Asegurar que las referencias a *Delicias, Chihuahua* y las coordenadas del consultorio se mantengan consistentes en los pies de página y esquemas.
- [ ] **Rendimiento LCP:** No reemplazar imágenes del hero sin declarar la propiedad `preload` en `NuxtImg` para evitar penalizaciones de Core Web Vitals.
