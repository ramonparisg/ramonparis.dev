import type { Cv } from "@domain/cv";

interface Tags {
  experienceTag: string;
  achievementTag: string;
  projectTag: string;
  educationTag: string;
  skillTag: string;
  certificateTag: string;
}

export type CvDb = Cv & Tags;

interface Database {
  es: CvDb;
  en: CvDb;
}

const es: CvDb = {
  experienceTag: "Experiencia",
  achievementTag: "Logros",
  certificateTag: "Ver certificado",
  projectTag: "Proyectos",
  educationTag: "Educación",
  skillTag: "Habilidades técnicas",
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

const en: CvDb = {
  experienceTag: "Experience",
  achievementTag: "Achievements",
  certificateTag: "See more",
  projectTag: "Projects",
  educationTag: "Education",
  skillTag: "Technical skills",
  presentation: {
    description: `Hello world! I’m a software engineer with 8+ years of experience building, designing solutions, and leading teams. I’m passionate about diving into business processes to engineer impactful technical solutions. Always curious, continuously learning, and motivated by innovation and tech challenges.`,
    funFact:
      "This resume is actually built using React components that dynamically generate a PDF thanks to NextJs + Puppeteer.",
    seeMore: "Learn more",
  },
  experiences: [
    {
      id: "4",
      company: "Falabella Corporate Technology",
      titles: [
        {
          id: "21",
          title: "Technical Lead",
          startDate: "May 2021",
          description: `Leading a team of 20 developers across South America and India, responsible for managing the corporate purchase order system for the Falabella group.`,
          endDate: "Present",
          status: "ON_GOING",
          achievements: [
            "Designed and implemented a highly scalable and performance-focused multi-tenant system.",
            "Migrated legacy systems, standardized processes, and streamlined development and deployment for new initiatives.",
            "Achieved a 40% improvement in service response times.",
            "Reduced infrastructure costs by 60%.",
          ],
        },
        {
          id: "21",
          title: "Senior Fullstack Developer",
          description:
            "Developer in a Scrum team using technologies like Java, Spring Boot, React, GCP, and Kubernetes.",
          startDate: "Feb 2020",
          endDate: "May 2021",
          status: "FINISHED",
          projects: [
            "Transitioned legacy systems to a modern cloud ecosystem.",
            "Designed and built corporate libraries to accelerate application development.",
            "Created automated testing frameworks with Cucumber.",
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
          title: "Consultant and Fullstack Developer",
          description:
            "Developed top-notch solutions for retail companies with tools like ReactJS, Java, and AWS.",
          startDate: "Dec 2018",
          endDate: "Feb 2020",
          status: "FINISHED",
          projects: [
            "Migrated and implemented Virtual POS for Easy - Cencosud.",
            "Developed an application for in-store product picking at Easy - Cencosud.",
            "Built a benefits delivery platform for Caja los Andes employees.",
            "Developed an order management platform for Salcobrand.",
          ],
        },
      ],
    },
  ],
  education: [
    {
      university: "INACAP University",
      studies: [
        {
          career: "Computer Engineering",
          startDate: "2016",
          endDate: "2020",
          achievement: "Graduated top of the class with the highest grades.",
        },
      ],
    },
    {
      university: "Massachusetts Institute of Technology (MIT)",
      studies: [
        {
          career: "Design and Development of AI Products and Services",
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
        "Expertise in Spring Boot (reactive, cloud, data), event-driven microservices, and advanced testing techniques (unit and acceptance).",
      shortDescription: "(Spring Boot, Reactive, Cucumber, JUnit)",
      knowledgeExpertise: "EXPERT",
    },
    {
      id: "2",
      knowledgeCategoryId: { id: "1", name: "Backend" },
      name: "Golang",
      description:
        "Proficient in building event-driven microservices, handling concurrency, and creating gRPC, GraphQL, and Rest APIs.",
      knowledgeExpertise: "EXPERT",
      shortDescription: "(Go routines, Gin, gRPC, GraphQL)",
    },
    {
      id: "3",
      knowledgeCategoryId: { id: "1", name: "Backend" },
      name: "JavaScript",
      description:
        "Advanced skills in Node.js, Express, NestJS, and TypeScript, including unit and integration testing.",
      knowledgeExpertise: "MEDIUM_HIGH",
      shortDescription: "(Express, NestJS, Jest)",
    },
    {
      id: "4",
      knowledgeCategoryId: { id: "2", name: "Frontend" },
      name: "React Js",
      description:
        "In-depth knowledge of React 18+, NextJs, Jest, and advanced design patterns.",
      knowledgeExpertise: "MEDIUM_HIGH",
    },
    {
      id: "45",
      knowledgeCategoryId: { id: "2", name: "Frontend" },
      name: "Vue.js",
      description: "Experienced with Vue 3+, Pinia, Vite, and Vitest.",
      knowledgeExpertise: "MEDIUM_HIGH",
    },
    {
      id: "5",
      knowledgeCategoryId: { id: "2", name: "Frontend" },
      name: "CSS",
      description: "Proficient in Vanilla CSS, Tailwind, SASS, and more.",
      knowledgeExpertise: "MEDIUM",
    },
    {
      id: "15",
      knowledgeCategoryId: { id: "6", name: "Architecture" },
      name: "Design Patterns",
      description:
        "Specialized in design, architecture, and resilience patterns, with expertise in Microservices, DDD, CQRS, and Clean Architecture.",
      knowledgeExpertise: "EXPERT",
    },
    {
      id: "16",
      knowledgeCategoryId: { id: "6", name: "Architecture" },
      name: "Event-Driven Design",
      description:
        "Deep experience in defining and implementing events using GCP Pub/Sub, RabbitMQ, or Kafka.",
      knowledgeExpertise: "EXPERT",
    },
    {
      id: "9",
      knowledgeCategoryId: { id: "3", name: "DevOps and Cloud Providers" },
      name: "Google Cloud Platform",
      description:
        "Comprehensive knowledge of GCP for architectural and design solutions.",
      knowledgeExpertise: "EXPERT",
    },
    {
      id: "8",
      knowledgeCategoryId: { id: "3", name: "DevOps and Cloud Providers" },
      name: "Kubernetes",
      description:
        "Skilled in creating, maintaining, and managing containers through Dockerization.",
      knowledgeExpertise: "MEDIUM_HIGH",
    },
    {
      id: "6",
      knowledgeCategoryId: { id: "3", name: "DevOps and Cloud Providers" },
      name: "Terraform",
      description:
        "Capable of designing modular infrastructure with Terraform.",
      knowledgeExpertise: "MEDIUM_LOW",
    },

    {
      id: "12",
      knowledgeCategoryId: { id: "4", name: "Languages" },
      name: "Spanish",
      description: "Native speaker.",
      knowledgeExpertise: "EXPERT",
    },
    {
      id: "13",
      knowledgeCategoryId: { id: "4", name: "Languages" },
      name: "English",
      description: "B2 proficiency.",
      knowledgeExpertise: "MEDIUM_HIGH",
    },
    {
      id: "13",
      knowledgeCategoryId: { id: "4", name: "Languages" },
      name: "French",
      description: "A2 proficiency.",
      knowledgeExpertise: "BEGINNER",
    },
  ],
};

const database: Database = {
  es,
  en,
};
export default database;
