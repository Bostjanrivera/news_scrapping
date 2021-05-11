# SC News a Web Scrappping WebPage
El usuario puede seleccionar por categorías en específicas o por todas las categorías, además cuenta con un buscador de noticias el cual es filtrado por categorías, titulares o descripción de la noticia.

# How to use this repository

#### Instalar todas las dependencias
	npm install

#### Correr localhost

	npm run start

#### Correr cypress

	npm run cypress:open

#### Crear archivos de produccion

	npm run build



# Consumo de la API

El proyecto esta diseñado de la forma más simple posible, se utilizò CSS puro sin preprocesadores y se aplicò una metodología de componentes para reutilizar la mayor cantidad de código posible.

metodologia: Single Page Application (SPA)

#### Ubicación dentro del proyecto

El html es una estructura bàsica de template que serà tomado por el archivo principal de JavaScript  para hacer render de la pagina indicada.

#### ubicaciòn archivos de producciòn:

HTML: `index.html`

JS: `dist/main.js`

CSS: 

- Resets: `css/resets.css`

- estilos base`css/main.css`

- estilos de desktop: `css/desktop.css`

## Funcionamiento del Frontend



### **Testing**
El proyecto tiene un end to end testing usado con cypress.

#### Comandos
los comandos se encuentran en la carpeta `cypress/suppport/commands.js`

#### comandos usados:
`seeCategory`: Revisa si existe la categorà indicada.
`seeIndividualNews`: Revisa si puede ver la primera noticia de la pagina dond està.

#### Modo de uso:
los comandos y las instrucciones se encuentran en `cypress/integration/news_app.spec.js`

para probarlo en en localhost (se debe cambiar con el beforeeach que se encuentra en el archivo de instrucciones):

	beforeEach(() => {
		cy.visit('http://localhost:8080/')
	})

Para probarlo en github pages (se debe cambiar con el beforeeach que se encuentra en el archivo de instrucciones):

	beforeEach(() => {
		cy.visit('https://bostjanrivera.github.io/news_scrapping/')
	})


#### Lenguajes

- HTML 5
- CSS 3
- JS Vanilla

## Acerca de

#### Proyecto front-end desarrollado con:
- CSS
- HTML
- JAVASCRIPT

#### Proyecto back-end desarrollado con:
- Python
- [Scrappy](https://docs.scrapy.org/en/latest/index.html# "Scrappy")
- [Zyte](https://www.zyte.com/ "Zyte")

####  API Consumida
- documentacion: https://github.com/Santiagonk/API_News_Flask

# CONSIDERACIONES
Esta API pertenece al primer proyecto de PLATZI MASTER Cohort 7. Para su realización se tomaron los siguientes cursos de la plataforma Platzi:
- [Curso de Single Page Application con Vanilla JavaScript](https://platzi.com/clases/spa-javascript/ "Curso de Single Page Application con Vanilla JavaScript")
- [Curso definitivo de HTML y CSS](https://platzi.com/clases/html-css/ "Curso definitivo de HTML y CSS")
