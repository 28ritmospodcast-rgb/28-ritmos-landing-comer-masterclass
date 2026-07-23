# Web Y Deploy

## Repo actual

Repositorio GitHub:

`git@github.com:28ritmospodcast-rgb/28-ritmos-landing-comer-masterclass.git`

Deploy:

Vercel despliega automaticamente cuando se hace push a `main`.

## URLs públicas

Masterclass Come con tu Ciclo:

`https://28-ritmos-landing-comer-masterclass.vercel.app/`

Curso Lee tu Ciclo:

`https://28-ritmos-landing-comer-masterclass.vercel.app/lee-tu-ciclo`

La ruta limpia `/lee-tu-ciclo` está configurada en `vercel.json` y reescribe a `lee-tu-ciclo.html`.

## Archivos principales

- `index.html`: landing de Come con tu Ciclo.
- `lee-tu-ciclo.html`: landing de Lee tu Ciclo.
- `styles.css`: estilos compartidos.
- `vercel.json`: rutas limpias.
- `imágenes/`: imágenes usadas en las páginas.
- `marketing/`: emails, narrativa y materiales de venta.

## Tracking instalado

### Meta Pixel

Instalado en `index.html` para Come con tu Ciclo.

Pixel ID:

`357881474631992`

Eventos:

- `PageView` al cargar.
- `InitiateCheckout` al hacer click en checkout de Come con tu Ciclo.

### Hotjar / Contentsquare

Script instalado en:

- `index.html`
- `lee-tu-ciclo.html`

Script:

`https://t.contentsquare.net/uxa/dbc3b6485db38.js`

## Reglas al editar

- Mantener voseo y acentos.
- No tocar archivos no relaciónados.
- No publicar imágenes grandes si se pueden optimizar.
- Si se agregan fotos propias a web, preferir versiones JPG optimizadas.
- Revisar mobile cuando haya cambios visuales.
- Hacer commit con cambios especificos y push a `main` para publicar.

## CTAs actuales Come con tu Ciclo

- Header: `Quiero comer con mi ciclo`
- Hero: `Quiero entender mi hambre`
- Link video: `Una probadita de la clase`
- Checkout: `Sí, quiero empezar hoy`

Nota: en la página publicada debe usarse acento si corresponde: `Sí`.

