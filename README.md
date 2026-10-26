# Dante Rognoni · Portfolio

Portfolio personal desarrollado en Angular. Presenta ByCode, DoctorChart, Pointly,
una plataforma para portfolios fotográficos, experiencia y conocimientos técnicos.

## Desarrollo

```sh
npm ci
npm start
```

La aplicación se sirve en `http://localhost:4200/`.

```sh
npm run build
npm test -- --watch=false
```

El build de producción queda en `dist/Portfolio/browser`.
Si se publica en un subdirectorio, configurar `--base-href` con el destino real.

## Publicar en GitHub Pages

```sh
npx ng deploy --base-href=/Portfolio/
```

Este comando compila el sitio y publica el resultado en `gh-pages`. Subir cambios
a `main` por sí solo no actualiza la web pública.

## Contenido y diseño

- `src/app/portfolio.data.ts`: textos en español e inglés, enlaces, proyectos,
  tecnologías y galerías. Es el lugar para agregar nuevos trabajos o capturas.
- `src/app/app.html`: estructura, navegación, fichas de proyectos y formulario.
- `src/app/app.ts`: idioma persistente, filtros, navegación, diálogos y contacto.
- `src/styles.css`: sistema visual y ajustes responsive; respeta movimiento reducido.
- `src/assets/projects/`: capturas reales y logos; ver `SOURCES.md`.
- `src/assets/cv/`: los CV originales en español e inglés.

La versión en español se muestra por defecto. El idioma elegido se conserva
localmente cuando el navegador permite almacenamiento. El selector de tema recuerda
la elección de modo claro u oscuro y, sin una preferencia guardada, sigue el tema
del dispositivo. El tema se aplica antes de cargar Angular para evitar destellos.
Las galerías usan diálogos
nativos con soporte de teclado y cierre con Escape.

## Contacto

Se conserva el endpoint de Formspree que ya usaba el portfolio:
`https://formspree.io/f/mgonpqlg`. El formulario muestra progreso, confirmación y
error, conserva el mensaje si falla y ofrece el email directo. Las pruebas simulan
las respuestas; no envían mensajes reales ni verifican la cuenta de Formspree.

## Alcance de la renovación

Se conserva el proyecto Angular y los componentes anteriores en `src/app/components`
como referencia; la nueva página se monta desde `App`. La publicación se realiza
con el comando indicado arriba, sin cambiar la configuración de GitHub Pages.

Los proyectos anteriores se conservan en el archivo de trabajos. No se agregan
capturas ficticias para proyectos de los que todavía no se dispone de imágenes.
