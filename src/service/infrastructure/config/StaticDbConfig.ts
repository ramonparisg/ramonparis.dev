import type { Cv } from "../../core/domain/cv";

interface Database {
  spanish: Cv;
  english: Cv;
}

const spanish: Cv = {
  presentation: {
    description: `Hello world! Soy un ingeniero de software con más de 8 años de experiencia desarrollando, diseñando soluciones y liderando equipos. Me apasiona involucrarme en los procesos de negocio y desde ahí poder aportar en soluciones técnicas. Motivado por el aprendizaje constante y los desafíos tecnológicos`,
    funFact:
      "Este CV son en realidad componentes de React que generan dinámicamente un PDF utilizando NextJs + Puppeteer.",
    seeMore: "Ver más",
  },
  experiences: [
    {
      id: "4",
      company: "Falabella Tecnología Corporativa",
      titles: [
        {
          id: "21",
          title: "Technical Lead",
          startDate: "May 2021",
          description: `Lidero un equipo de 20 desarrolladores en Sudamérica e India encargado del sistema de órdenes de compra corporativo del grupo Falabella.`,
          endDate: "Presente",
          status: "ON_GOING",
          achievements: [
            "Diseño y construcción de un sistema multitenant escalable y de alto rendimiento",
            "Migración de sistemas legados y estandarización de procesos, permitiendo reducir los tiempos de desarrollo y despliegue de nuevas iniciativas y evolutivos.",
            "Reducción de un 40% en el tiempo de respuesta de los servicios",
            "Reducción en un 60% costos de infraestructura",
          ],
        },
        {
          id: "21",
          title: "Senior Fullstack developer",
          description:
            "Desarrollador en una célula Scrum. Tecnologías utilizadas: Java, Spring Boot, React, GCP y Kubernetes",
          startDate: "Feb 2020",
          endDate: "May 2021",
          status: "FINISHED",
          projects: [
            "Migración de sistemas legados a ecosistema cloud",
            "Diseño y desarrollo de librerías corporativas para el desarrollo de aplicaciones",
            "Diseño y desarrollo de frameworks de automatización de pruebas con Cucumber",
          ],
        },
      ],
    },
    {
      id: "2",
      company: "RetailSBS",
      titles: [
        {
          id: "2",
          title: "Consultor y desarrollador fullstack",
          description:
            "Trabajé desarrollando soluciones para empresas dentro del Retail utilizando herramientas como ReactJS, Java y AWS.",
          startDate: "Dic 2018",
          endDate: "Feb 2020",
          status: "FINISHED",
          projects: [
            "Migración a nuevo POS Virtual para Easy - Cencosud",
            "Desarrollo de aplicación para picking de productos en tiendas de Easy - Cencosud",
            "Plataforma de entrega de beneficios a colaboradores de Caja los Andes",
            "Plataforma de gestión de órdenes para Salcobrand",
          ],
        },
      ],
    },
  ],
  education: [
    {
      university: "Universidad INACAP",
      studies: [
        {
          career: "Ingeniería en Informática",
          startDate: "2016",
          endDate: "2020",
          achievement: "Primero en notas de la promoción de graduados",
        },
      ],
    },
    {
      university: "Massachusetts Institute of Technology (MIT)",
      studies: [
        {
          career:
            "Diseño y Desarrollo de Productos y Servicios de Inteligencia Artificial",
          description: "",
          startDate: "2024",
          achievement: "",
          certificate:
            "https://certificates.emeritus.org/f1bf08fb-4adc-4a78-9eb1-72e9e98a920e#acc.oQkU9qdX",
        },
      ],
    },
  ],
  skills: [
    {
      id: "1",
      knowledgeCategoryId: { id: "1", name: "Backend" },
      name: "Java",
      description:
        "Spring boot, reactive, cloud, data, microservicios basados en eventos, pruebas unitarias y de aceptación",
      shortDescription: "(Spring Boot, Reactive, Cucumber, JUnit)",
      knowledgeExpertise: "EXPERT",
    },
    {
      id: "2",
      knowledgeCategoryId: { id: "1", name: "Backend" },
      name: "Golang",
      description:
        "Microservicios basados en eventos, concurrencia y paralelismo, servicios gRPC, GraphQL, Rest API",
      knowledgeExpertise: "EXPERT",
      shortDescription: "(Go routines, Gin, gRPC, GraphQL)",
    },
    {
      id: "3",
      knowledgeCategoryId: { id: "1", name: "Backend" },
      name: "JavaScript",
      description:
        "Nodejs, express, nestjs, typescript, pruebas unitarias y de integración",
      knowledgeExpertise: "MEDIUM_HIGH",
      shortDescription: "(Express, NestJS, Jest)",
    },
    {
      id: "4",
      knowledgeCategoryId: { id: "2", name: "Frontend" },
      name: "React Js",
      description: "React 18+, NextJs, Jest, patrones de diseño",
      knowledgeExpertise: "MEDIUM_HIGH",
    },
    {
      id: "45",
      knowledgeCategoryId: { id: "2", name: "Frontend" },
      name: "Vuejs",
      description: "Vue 3+, Pinia, Vite, Vitest",
      knowledgeExpertise: "MEDIUM_HIGH",
    },
    {
      id: "5",
      knowledgeCategoryId: { id: "2", name: "Frontend" },
      name: "CSS",
      description: "Vanilla CSS, Tailwind, SASS, ...",
      knowledgeExpertise: "MEDIUM",
    },
    {
      id: "15",
      knowledgeCategoryId: { id: "6", name: "Arquitectura" },
      name: "Design patterns",
      description:
        "Patrones de diseño de desarrollo, arquitectura y resilencia. Microservicios, DDD, CQRS, Clean architecture",
      knowledgeExpertise: "EXPERT",
    },
    {
      id: "16",
      knowledgeCategoryId: { id: "6", name: "Arquitectura" },
      name: "Event-driven design",
      description:
        "Definición de eventos e implementación utilizando GCP Pub/Sub, RabbitMQ o Kafka",
      knowledgeExpertise: "EXPERT",
    },
    {
      id: "9",
      knowledgeCategoryId: { id: "3", name: "DevOps y Cloud providers" },
      name: "Google Cloud Platform",
      description:
        "Profundo entendimiento de productos GCP para arquitectura y diseños",
      knowledgeExpertise: "EXPERT",
    },
    {
      id: "8",
      knowledgeCategoryId: { id: "3", name: "DevOps y Cloud providers" },
      name: "Kubernetes",
      description:
        "Creación, mantenimiento, dockerización y manejo de contenedores ",
      knowledgeExpertise: "MEDIUM_HIGH",
    },
    {
      id: "6",
      knowledgeCategoryId: { id: "3", name: "DevOps y Cloud providers" },
      name: "Terraform",
      description: "Creación y uso de módulos",
      knowledgeExpertise: "MEDIUM_LOW",
    },

    {
      id: "12",
      knowledgeCategoryId: { id: "4", name: "Idiomas" },
      name: "Español",
      description: "Nativo",
      knowledgeExpertise: "EXPERT",
    },
    {
      id: "13",
      knowledgeCategoryId: { id: "4", name: "Idiomas" },
      name: "Inglés",
      description: "B2. ",
      knowledgeExpertise: "MEDIUM_HIGH",
    },
    {
      id: "13",
      knowledgeCategoryId: { id: "4", name: "Idiomas" },
      name: "Francés",
      description: "A2. ",
      knowledgeExpertise: "BEGINNER",
    },
  ],
};

const english: Cv = {};

const database: Database = {
  spanish,
  english,
};
export default database;
