# SDI Ingenieros

Sitio informativo de SDI Ingenieros SA, reconstruido desde cero en Astro 7 y TypeScript. Diseño adaptable inspirado en la paleta azul marino, azul acero y blanco de las referencias. El logo vectorial es una propuesta editable.

## Desarrollo

Requiere Node.js 24 y npm.

```sh
npm ci
npm run dev
```

Abrir http://127.0.0.1:4321/sdi/.

```sh
npm run check
npm run format:check
npm run build
npm run preview
```

## Contenido y contacto

- `src/data/company.ts`: contacto, seis servicios, clientes y testimonios originales.
- `src/pages/index.astro`: contenido y estructura de la landing.
- `src/components/Brand.astro`: propuesta de logo vectorial.
- `src/styles/global.css`: paleta, tipografía y estilos para móvil y escritorio.
- `src/styles/enhancements.css`: fondos azules, animaciones, hover y campos del formulario.
- `src/components/Faq.astro`: preguntas con panel de altura estable y navegación por teclado.
- `public/images/`: fotografías originales y portada arquitectónica.

WhatsApp usa el número de la web anterior: **+51 997 084 825**. Los botones de servicios incluyen una consulta específica. El formulario valida nombre y servicio y abre WhatsApp con el mensaje preparado; no almacena ni envía información por un servidor. El usuario confirma el envío en WhatsApp. También se incluyen enlaces de correo, teléfono y ubicación.

Por indicación del propietario se muestra únicamente WhatsApp como red de contacto. La lista `socials` queda vacía y permite agregar perfiles confirmados más adelante.

Las animaciones respetan la preferencia de movimiento reducido del sistema. Las preguntas muestran una respuesta a la vez dentro del mismo espacio y admiten cierre con Escape; sin JavaScript se utiliza una lista desplegable nativa. La barra de herramientas de desarrollo de Astro está desactivada en la configuración.

El selector de servicios usa Choices.js con estilos de la paleta SDI, selección por teclado y validación integrada al formulario. Sin JavaScript se mantiene el selector nativo. Para formatear Astro, CSS, TypeScript, JSON y documentación, ejecutar `npm run format`; `npm run format:check` comprueba el formato sin modificar archivos. Prettier omite dependencias, compilados y referencias locales.

## Publicación en GitHub Pages

El repositorio incluye comprobaciones automáticas y un flujo de publicación **manual**, para poder revisar la propuesta antes de hacerla pública.

1. En GitHub → Settings → Pages, seleccionar **GitHub Actions** como fuente.
2. En Actions → **Publish GitHub Pages**, ejecutar **Run workflow** sobre `main`.
3. La URL prevista es https://chebass.github.io/sdi/; solo está disponible después de un despliegue exitoso.

`astro.config.mjs` configura `site` y `base` para este repositorio. Para un dominio propio, definir `SITE_URL=https://dominio.example` y `BASE_PATH=/` durante la compilación. Se puede desplegar el directorio `dist` en cualquier alojamiento estático.

Guía oficial: https://docs.astro.build/en/guides/deploy/github/.

## Migración

Ver [docs/migracion.md](docs/migracion.md) para las fuentes, contenido trasladado y diferencias respecto a la plantilla anterior.
