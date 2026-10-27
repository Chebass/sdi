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
