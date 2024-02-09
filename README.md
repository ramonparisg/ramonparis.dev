# ramonparis.dev

Hey! Welcome to my portfolio repository. This is a portfolio made with React and NextJs. It's a work in progress, so feel free to contribute or give me some feedback.

## Tech stack

- NodeJS - v12
- Typescript - v4.2.2
- Jest - v26.6.3
- Next JS - v10.0.8
- Sass - v1.32.8

## Architecture design

### Backend

It has been designed inspired in Clean Architecture and Hexagonal Architecture, taking main concepts for decoupling code
and another good practices of these patterns.

### Frontend

It has been built using Atomic Design patterns to make sure that all the components are as much reusable as possible.
There are also another patterns and concepts applied like:
- High Order Components
- SubComponents / Dot componentes
- Components Composition
- Slot Components
- React Hooks.

Regarding styling of the page, I used Sass and css-modules feature to build all the styles thinking in reusable design


### Project structure

```
├── public
└── src
    ├── app
    │   ├── core
    │   │   ├── domain
    │   │   ├── ports
    │   │   └── useCases
    │   └── infrastructure
    │       ├── config
    │       ├── dto
    │       │   └── payloads
    │       │       └── response
    │       ├── httpClient
    │       │   └── BaseApi
    │       ├── pdfGenerator
    │       │   └── CurriculumVitaePdf
    │       └── persistence
    │           ├── __tests__
    │           ├── dao
    │           ├── dto
    │           └── mapper
    ├── assets
    ├── components
    │   ├── atoms
    │   │   ├── Badge
    │   │   ├── Image
    │   │   └── Text
    │   ├── molecules
    │   │   ├── ProfileImage
    │   │   ├── ProfileSummary
    │   │   ├── Separators
    │   │   └── Timeline
    │   ├── organisms
    │   │   └── Cv
    │   ├── template
    │   │   └── MainPageCvTemplate
    │   └── utils
    ├── pages
    │   └── api
    │       └── cv
    └── styles

```

## Features

### **CV PDF Generator**:
Imagine create highly customizable CVs with a simple JSON file. This feature is already implemented and you can see the result in running the project and going to `api/cv/download` endpoint.

It basically creates a React Page and then it's converted to PDF using Puppeteer. 

Is this really a needed feature? No, but it shows what can be done with creativity and a little bit of time 🚀. I'm actually using this only for updating my CV

### More features to come
Eventually 😅
