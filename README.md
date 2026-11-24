# Parque Natural Ecoturístico El Oasis

Primera entrega del sitio en español. Construido con React, TanStack Start y Tailwind CSS v4, la plataforma soportada por Lovable; no es un proyecto Astro.

## Desarrollo

```sh
bun install
bun run dev
bun run test
```

## Estructura

```text
src/
  assets/             Logo y PDF como punteros CDN; paisajes ilustrativos y nutria PNG
  components/         Navegación, pie, guía y vistas reutilizables
  lib/park-content.ts Datos institucionales y contenido informativo
  routes/             Inicio y páginas españolas con metadatos propios
  test/               Rutas y hechos institucionales
  styles.css          Paleta, tipografías locales y estilos
public/               Favicon, iconos y manifest
roadmap.md            Entregas y dependencias pendientes
```

## Contenido y fuentes

El contenido se basa en el Plan de Manejo 2026 proporcionado. La ADVC es un objetivo futuro, no una certificación vigente. Las fotos de naturaleza son generadas e ilustrativas, no fotografías del predio. La nutria se adaptó del logo aportado como PNG; no se presenta como una vectorización exacta ni como una familia completa de poses.

La primera entrega incluye navegación, inicio, sobre nosotros, parque, conservación, convocatorias, eventos, repositorio con búsqueda y PDF real, novedades, participación, contacto y textos legales pendientes de aprobación. No se inventan artículos científicos, DOI, integrantes del equipo, aliados, fechas, cupos ni resultados de impacto.

Para modificar contenido institucional se utiliza `src/lib/park-content.ts`. No hay todavía un panel CMS conectado. Se requiere autorización de un repositorio para configurar un proveedor de edición Git y comprobar la publicación de contenido.

## Datos pendientes del parque

- Fotos reales del predio y autorización para publicarlas.
- Horarios, tarifas, fecha de apertura, actividades actualmente operativas y accesibilidad real.
- Teléfono, WhatsApp, correo, redes y coordenadas del acceso.
- Confirmación técnica de la superficie del futuro polígono ADVC (el documento contiene cifras distintas).
- Eventos y convocatorias aprobados; autores, DOI y publicaciones reales; equipo y aliados autorizados.
- Destino y credenciales del servicio de formularios elegido; no hay recepción simulada.
- Datos de donativos y proveedor de pago; no se reciben pagos todavía.
- Aviso de privacidad, términos y reglamento aprobados.
- Original vectorial de la mascota para una adaptación SVG fiel y familia completa de poses.

## Despliegue y SEO posterior al lanzamiento

Publicar desde Lovable. No se promete compatibilidad estática Astro/Netlify porque el proyecto usa TanStack Start. Para otro alojamiento se necesita un adaptador compatible con el entorno de ejecución.

- Confirmar el dominio público y después crear sitemap con URLs reales; no se publica un dominio de ejemplo.
- Verificar títulos, descripciones y URLs canónicas por página.
- Las imágenes importadas son relativas: no se inventan URLs absolutas para Open Graph. El alojamiento puede aportar la captura social.
- Registrar Search Console, verificar dominio y enviar sitemap una vez publicado.
- Configurar Google Business Profile con dirección, teléfono y horarios confirmados.
- Conectar analítica respetuosa de la privacidad solo con una cuenta y consentimiento definidos.
- Medir Lighthouse y Core Web Vitals en el sitio publicado: no se afirma una puntuación 95+ sin una medición.
- Preparar traducción validada antes de habilitar páginas `/en` y hreflang; no hay traducciones ficticias.
- RSS y metadatos de Event/ScholarlyArticle se añadirán cuando existan publicaciones verificadas.

No se ha realizado investigación de palabras clave con datos de búsqueda. Los temas del encargo son candidatos, no evidencia de volumen o posicionamiento.
