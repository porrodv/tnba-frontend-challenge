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


## Versionamiento

Para mantener un flujo de versionamiento consistente en este proyecto, se siguen los principios de [versionado semántico][semver_link] de software para la numeración de versiones del aplicativo y principios de [commits convencionales][conv-commits_link] para la creación de mensajes uniformes de cambios en el repositorio.

### Ramificación

La creación y administración de ramas sigue una estrcutura fija y conjunto de buenas prácticas con el propósito de ordenar las versiones que son desplegadas como oficiales del sistema.

#### Ramas principales

**`main`** : Solo se realizan cambios mediante pull requests aprobados y previamente revisados desde la rama *`dev`*. Las versiones alojadas en esta rama deben ser estables, libre de errores y adecuadas para despliegues. Cada versión debe estar acompañada de un [tag en GitHub][github-tag_link].

**`dev`**: Aquí se integran cambios mediante merges o pull requests aprobados y previamente revisados. Las versiones alojadas en esta rama son colecciones de commits que agrupan funcionalidades completas implementadas en otras ramas. Cada actualización representa la culminación de una característica lista para ser fusionada con *`main`*.

#### Ramas temporales

La rama describe la acción trabajada y una breve desrcipción de la característica que se está desarrollando.

    ├── feat/user-service
    ├── fix/decimal-format-bug
    ...

<!-- Links -->
[tnba_link]: https://thenewbusinessagency.com/
[react_link]: https://es.react.dev/
[typescript_link]: https://www.typescriptlang.org/
[tailwind_link]: https://tailwindcss.com/
[remix_link]: https://remix.run/
[nodejs_link]: https://nodejs.org/en
[semver_link]: https://semver.org/lang/es/
[conv-commits_link]: https://gist.github.com/qoomon/5dfcdf8eec66a051ecd85625518cfd13
[github-tag_link]: https://git-scm.com/book/en/v2/Git-Basics-Tagging

<!-- Imágenes -->
[main_view]: ./public/images/app1.png
[blog_view]: ./public/images/app2.png
[delivery_view]: ./public/images/app3.png
[product_view]: ./public/images/app4.png
[comments_view]: ./public/images/app5.png
