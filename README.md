# Prueba Técnica - Security and System

Este es un proyecto de prueba técnica de "Security and System". Se trata de una página web de perfil de usuario creada con Next.js 14, React, TypeScript y CSS Modules siguiendo la metodología BEM. El proyecto incluye una cabecera, una sección "Sobre mí", una lista de intereses y un formulario de contacto.

## Índice de contenidos

- [Instalación](#Instalación)
- [Uso](#Uso)
- [Scripts](#Scripts)
- [Pruebas](#Pruebas)
- [Estructura del proyecto](#Estructura-del-proyecto)
- [Tecnologías utilizadas](#Tecnologías-utilizadas)
- [Características](#Características)

## Instalación

1. Clonar el repositorio: git clone https://github.com/yourusername/user-profile-web-page.git

2. Instalar las dependencias: npm install

## Uso

Para iniciar el servidor de desarrollo, ejecuta: npm run dev

Esto iniciará la aplicación en http://localhost:3000.

Scripts
npm run dev: Inicia el servidor de desarrollo.
npm run build: Construye la aplicación para producción.
npm start: Inicia el servidor de producción.
npm run lint: Ejecuta el linter para verificar problemas de código.
npm test: Ejecuta la suite de pruebas.

## Pruebas

Este proyecto utiliza Jest y Testing Library para las pruebas. Para ejecutar las pruebas, usa: npm test

## Estructura del proyecto

La estructura del proyecto sigue una configuración típica de Next.js con algunos directorios personalizados:

├── src
│ ├── **tests**
│ │ ├── About.test.tsx
│ │ ├── ContactForm.test.tsx
│ │ ├── Header.test.tsx
│ │ └── Interests.test.tsx
│ ├── app
│ │ ├── globals.css
│ │ ├── layout.tsx
│ │ ├── page.module.css
│ │ └── page.tsx
│ ├── components
│ │ ├── About.tsx
│ │ ├── ContactForm.tsx
│ │ ├── Header.tsx
│ │ └── Interests.tsx
│ └── styles
│ ├── about.module.css
│ ├── contactForm.module.css
│ ├── header.module.css
│ └── interests.module.css
├── .eslintrc.json
├── jest.config.js
├── next.config.js
├── package.json
├── README.md
├── tsconfig.json
└── tsconfig.node.json

## Tecnologías utilizadas

- Next.js 14: Un framework de React para aplicaciones renderizadas en el servidor.
- React: Una biblioteca de JavaScript para construir interfaces de usuario.
- TypeScript: Un superconjunto tipado de JavaScript.
- CSS Modules: Un archivo CSS en el que todos los nombres de clase y animación están delimitados localmente por defecto.
- Metodología BEM: Una convención de nomenclatura para clases CSS.
- Jest: Un framework de pruebas para JavaScript.
- Testing Library: Un conjunto de utilidades para probar componentes React.

## Características

- Diseño responsivo: La página es responsiva y se ve bien en dispositivos de escritorio, tabletas y móviles.
- Animaciones CSS: Animaciones suaves para mejorar la experiencia del usuario.
- Validación de formularios: Validación básica para el formulario de contacto.
- Pruebas unitarias: Pruebas básicas para componentes utilizando Jest y Testing Library.

## Autor ✒️

- **Lucas Quiroga** - [Lucas Quiroga](https://github.com/Lucas-Quiroga)
