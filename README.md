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
npm run build
npm run preview
```

## Contenido y contacto

- `src/data/company.ts`: contacto, seis servicios, clientes y testimonios originales.
- `src/pages/index.astro`: contenido y estructura de la landing.
- `src/components/Brand.astro`: propuesta de logo vectorial.
- `src/styles/global.css`: paleta, tipografía y estilos para móvil y escritorio.
- `public/images/`: fotografías originales y portada arquitectónica.

WhatsApp usa el número de la web anterior: **+51 997 084 825**. Los botones de servicios incluyen una consulta específica. El formulario valida nombre y servicio y abre WhatsApp con el mensaje preparado; no almacena ni envía información por un servidor. El usuario confirma el envío en WhatsApp. También se incluyen enlaces de correo, teléfono y ubicación.

Por indicación del propietario se muestra únicamente WhatsApp como red de contacto. La lista `socials` queda vacía y permite agregar perfiles confirmados más adelante.

## Publicación en GitHub Pages

El repositorio incluye comprobaciones automáticas y un flujo de publicación **manual**, para poder revisar la propuesta antes de hacerla pública.

1. En GitHub → Settings → Pages, seleccionar **GitHub Actions** como fuente.
2. En Actions → **Publish GitHub Pages**, ejecutar **Run workflow** sobre `main`.
3. La URL prevista es https://chebass.github.io/sdi/; solo está disponible después de un despliegue exitoso.

`astro.config.mjs` configura `site` y `base` para este repositorio. Para un dominio propio, definir `SITE_URL=https://dominio.example` y `BASE_PATH=/` durante la compilación. Se puede desplegar el directorio `dist` en cualquier alojamiento estático.

Guía oficial: https://docs.astro.build/en/guides/deploy/github/.

## Migración

Ver [docs/migracion.md](docs/migracion.md) para las fuentes, contenido trasladado y diferencias respecto a la plantilla anterior.
