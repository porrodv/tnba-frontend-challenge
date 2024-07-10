<h1 align="center">Prueba técnica | Desarrollador <strong style="color: blue">Front-end</strong></h1>

## Tabla de contenido

- [Descripción](#descripción)
  - [Vista previa](#vista-previa)
  - [Tecnologías](#tecnologías)
  - [Estilo de còdigo](#estilo-de-código)
- [Instalación](#instalación)


## Descripción

Prueba ténica para el puesto de desarrollador front-end en [The New Business Agency][tnba_link].

El objetivo es migrar un fragmento de web e-commerce maquetado de forma nativa hacia una tecnología front-end más escalable y reusable. Con ello, se buscó rediseñar, reestructurar y agregar secciones en la web con el propósito de mejorar la experiencia de usuario.

Se trabajó en base a 4 rutas principales dentro de la plataforma:

`/` : Landing principal
`/free-delivery-and-welding-helmet-support` : Vista con detalles del delivery gratuito
`/products/` : Lista completa de productos disponibles
`/products/$productId` : Detalles de un producto seleccionado

### Vista previa

![Index page][main_view]
![Blog section][blog_view]
![Delivery page][delivery_view]
![Product details page][product_view]
![Product comments section][comments_view]

### Tecnologías

El proyecto se encuentra desarrollado con [React][react_link] + [Remix](remix_link) , [TypeScript][typescript_link] y usa [Tailwind CSS][tailwind_link] para estilos personalizados. La arquitectura basa su estructura en los principios de ...

<div style="display: inline_block, margin: 0px 1px">
  <img align="center" alt="react-icon" height="40" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg">
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <img align="center" alt="remix-icon" height="40" width="40" src="https://avatars.githubusercontent.com/u/72662859?v=4" style="border-radius: 5px;">
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <img align="center" alt="typescript-icon" height="40" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg">
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <img align="center" alt="tailwind-icon" height="40" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg">
</div>

### Estilo de código

Para el estilo y formateo de código se usa [ESLint](https://eslint.org/) y [Prettier](https://prettier.io/), con estos logramos estandarizar el código fuente, haciendo más fácil su lectura y seguimiento.


## Instalación

Antes de iniciar :checkered_flag:, es necesario contar con [Node.js][nodejs_link] instalado localmente para ejecutar los comandos por consola.

```bash
# Clonar el repositorio
$ git clone https://github.com/porrodv/tnba-frontend-challenge

# Acceder al proyecto
$ cd tnba-frontend-challenge

# Instalar dependencias
$ npm install

# Desplegar el proyecto
$ npm run build
```

<!-- Links -->
[tnba_link]: https://thenewbusinessagency.com/
[react_link]: https://es.react.dev/
[typescript_link]: https://www.typescriptlang.org/
[tailwind_link]: https://tailwindcss.com/
[remix_link]: https://remix.run/
[nodejs_link]: https://nodejs.org/en

<!-- Imágenes -->
[main_view]: ./public/images/app1.png
[blog_view]: ./public/images/app2.png
[delivery_view]: ./public/images/app3.png
[product_view]: ./public/images/app4.png
[comments_view]: ./public/images/app5.png
