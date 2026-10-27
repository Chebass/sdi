# Verificación de la primera versión

Fecha: 26 de octubre de 2026.

- `npm run check`: 0 errores, 0 advertencias.
- `npm run build`: salida estática generada correctamente.
- Navegador Chromium mediante Playwright contra `astro preview` (versión compilada).
- Anchos probados: 1440, 768, 390 y 320 píxeles.
- Sin desbordamiento horizontal, recursos de imagen rotos ni errores de JavaScript.
- Comprobados los destinos internos de navegación, apertura y cierre del menú móvil, detalles de servicios y desplazamiento de testimonios.
- Formulario comprobado interceptando la salida a WhatsApp sin enviar mensajes reales. Número de destino y contenido correctos, incluyendo caracteres especiales y tildes.
- Revisadas capturas de página completa de escritorio y móvil.

La publicación en GitHub Pages es un paso separado y manual. Estas verificaciones locales no confirman un despliegue público ni la recepción de mensajes por el negocio.

## Actualización visual e interacciones

- Repetidos `npm run check` y `npm run build` correctamente.
- Revisión en Chromium a 1440, 768, 390 y 320 píxeles, sin desbordamiento horizontal.
- Apertura y cierre de las tres preguntas en cada ancho: altura de la sección y posición de la sección siguiente constantes; respuestas sin recortes en los tamaños probados.
- Comprobados el cierre con Escape, devolución del foco al botón original y exclusión de las preguntas ocultas de la navegación por teclado.
- Verificadas las preguntas con JavaScript desactivado y la interfaz con movimiento reducido.
- Repetidas las pruebas de menú móvil, detalles de servicios, navegación de testimonios y contenido del formulario enviado a la URL de WhatsApp mediante interceptación local, sin enviar mensajes reales.
- Revisadas capturas de las reseñas, las preguntas y el formulario modernizado.
- Verificada la ausencia de `astro-dev-toolbar` en el servidor de desarrollo.

## Selector de servicios y formato

- Choices.js probado a 1440, 768, 390 y 320 píxeles: apertura, selección, teclado, Escape y cierre al pulsar fuera del menú.
- Verificado el campo obligatorio: muestra un error y enfoca el selector visible sin intentar enfocar el `select` oculto.
- Comprobados el valor de servicio en FormData y el mensaje de WhatsApp mediante interceptación, sin enviar mensajes reales.
- Verificado el selector nativo cuando JavaScript está desactivado.
- Formateados los archivos fuente con Prettier y su plugin oficial de Astro; añadido `format:check` a las comprobaciones automáticas.

## Carrusel de experiencia

- Sustituido el mosaico por cuatro vistas individuales de fotografías reales existentes; los encuadres del archivo original se muestran mediante CSS.
- Verificados a 1440, 768, 390 y 320 píxeles: miniaturas, anterior y siguiente con retorno al inicio, teclado, gestos y altura estable al cambiar de fotografía.
- Comprobados reproducción automática, pausa y reanudación manual, pausa al pasar el cursor y desactivación con movimiento reducido.
- Revisados encuadres y controles en capturas de escritorio y móvil. Sin JavaScript se conserva visible la primera fotografía y se ocultan los controles inactivos.
- Compilación, revisión de Astro y formato comprobados correctamente.

## Rutas de publicación en Vercel

- Reproducido en el despliegue original: la portada respondía 200 pero el CSS bajo `/sdi/_astro/` respondía 404.
- Configurado `/` como ruta predeterminada y añadido `vercel.json` con Astro, compilación, carpeta `dist` y redirección del prefijo anterior.
- Probada la salida compilada en un servidor estático sin reescrituras: HTML, CSS, JavaScript e imágenes correctos; sin errores de recursos locales en escritorio y móvil.
- Comprobada la URL canónica para Vercel y el selector de servicios.
- Compilación adicional con `BASE_PATH=/sdi` y `SITE_URL=https://chebass.github.io`: prefijos de recursos de GitHub Pages conservados. Estas variables se establecen solo en su flujo de publicación.
