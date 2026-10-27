# SDI Ingenieros

Sitio informativo de SDI Ingenieros SA, reconstruido desde cero en Astro 7 y TypeScript. Diseño adaptable inspirado en la paleta azul marino, azul acero y blanco de las referencias. El logo vectorial es una propuesta editable.

## Desarrollo

Requiere Node.js 24 y npm.

```sh
npm ci
npm run dev
```

Abrir http://127.0.0.1:4321/.

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
- `src/components/ExperienceCarousel.astro`: carrusel de experiencia, fotografías, miniaturas y controles.
- `public/images/`: fotografías originales y portada arquitectónica.

WhatsApp usa el número de la web anterior: **+51 997 084 825**. Los botones de servicios incluyen una consulta específica. El formulario valida nombre y servicio y abre WhatsApp con el mensaje preparado; no almacena ni envía información por un servidor. El usuario confirma el envío en WhatsApp. También se incluyen enlaces de correo, teléfono y ubicación.

Por indicación del propietario se muestra únicamente WhatsApp como red de contacto. La lista `socials` queda vacía y permite agregar perfiles confirmados más adelante.

Las animaciones respetan la preferencia de movimiento reducido del sistema. Las preguntas muestran una respuesta a la vez dentro del mismo espacio y admiten cierre con Escape; sin JavaScript se utiliza una lista desplegable nativa. La barra de herramientas de desarrollo de Astro está desactivada en la configuración.

El carrusel de experiencia utiliza fotografías existentes y encuadres individuales del archivo original, sin modificar el archivo de imagen. Permite miniaturas, flechas, teclas de dirección y gestos táctiles. Su reproducción automática se pausa al pasar el cursor, enfocar un control, salir de la sección o cambiar de pestaña, y se desactiva con movimiento reducido. El botón de pausa permite detenerla manualmente.

El selector de servicios usa Choices.js con estilos de la paleta SDI, selección por teclado y validación integrada al formulario. Sin JavaScript se mantiene el selector nativo. Para formatear Astro, CSS, TypeScript, JSON y documentación, ejecutar `npm run format`; `npm run format:check` comprueba el formato sin modificar archivos. Prettier omite dependencias, compilados y referencias locales.

## Publicación en Vercel

El proyecto se sirve desde `/`, sin el prefijo `/sdi`. `vercel.json` configura Astro, el comando `npm run build` y la carpeta de salida `dist`. No necesita un adaptador de servidor porque el sitio es estático.

- Framework Preset: **Astro**.
- Root Directory: raíz del repositorio.
- Build Command: **npm run build**.
- Output Directory: **dist**.
- Node.js: **24.x**.
- Si existe una variable `BASE_PATH`, eliminarla o establecerla en `/`.
- Si existe `SITE_URL`, usar el dominio de Vercel o el dominio propio, sin `/sdi`.

La configuración obtiene el dominio de las variables de Vercel y permite sobrescribirlo con `SITE_URL`. El dominio de respaldo es https://sdi-sable.vercel.app. Los enlaces antiguos `/sdi/...` se redirigen a la raíz en Vercel.

Tras actualizar la configuración, desplegar el último commit de `main`. No añadir una reescritura global a `index.html`: los archivos CSS, JavaScript e imágenes deben servirse directamente desde `dist`.

Guía oficial: https://docs.astro.build/en/guides/deploy/vercel/.

## Publicación en GitHub Pages

El repositorio incluye comprobaciones automáticas y un flujo de publicación **manual**, para poder revisar la propuesta antes de hacerla pública.

1. En GitHub → Settings → Pages, seleccionar **GitHub Actions** como fuente.
2. En Actions → **Publish GitHub Pages**, ejecutar **Run workflow** sobre `main`.
3. La URL prevista es https://chebass.github.io/sdi/; solo está disponible después de un despliegue exitoso.

El flujo de GitHub Pages define expresamente `SITE_URL=https://chebass.github.io` y `BASE_PATH=/sdi` durante la compilación. Vercel y el desarrollo local utilizan `/` por defecto. Para un dominio propio, definir `SITE_URL=https://dominio.example`. Se puede desplegar el directorio `dist` en cualquier alojamiento estático.

Guía oficial: https://docs.astro.build/en/guides/deploy/github/.

## Migración

Ver [docs/migracion.md](docs/migracion.md) para las fuentes, contenido trasladado y diferencias respecto a la plantilla anterior.
