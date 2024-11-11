const database = {
      knowledgeCategory: [
        { id: "1", name: "Backend" },
        { id: "2", name: "Frontend" },
        { id: "3", name: "DevOps y Nube" },
        { id: "4", name: "Idiomas" },
        { id: "5", name: "Base de Datos" }
      ],
      person: {
        id: "1",
        firstName: "Ramón José",
        lastName: "París González",
        title: "Desarrollador fullstack senior",
        description:
            "Soy un ingeniero de software con pasión por el desarrollo de software, las buenas prácticas, el funcionamiento del negocio y el aprendizaje constante de nuevas tecnologías y patrones.",
        profilePicUrl:
            "https://media-exp1.licdn.com/dms/image/C4E03AQFuEB4TZfmJwQ/profile-displayphoto-shrink_400_400/0/1615647888321?e=1621468800&v=beta&t=ct2jtRK6exQwpqFWqtlWPw2y2SSiyc97soi7UFOFo6g",
        birthdate: "1995-12-18",
        currentLocation: "Santiago, Chile",
        socialMedias: [
          {
            id: "1",
            name: "Github",
            url: "https://github.com/ramonparisg",
            imgUrl: "fake_data"
          },
          {
            id: "2",
            name: "Stackoverflow",
            url: "https://stackoverflow.com/users/7800021/ramon-paris",
            imgUrl: "fake_data"
          }
        ],
        knowledgeList: [
          {
            id: "1",
            knowledgeCategoryId: { id: "1", name: "Backend" },
            name: "Java",
            description:
                "Conocimiento en API Rest, microservicios orientados a eventos, conexiones con bases de datos SQL y no SQL, integración con la nube, comunicación HTTP segura con OAuth2, JWT, Basic Auth",
            technologies:
                "Java 8+ (Programación funcional, fechas, lambdas), Spring (core, boot, MVC, seguridad, integración, nube, reactivo), pruebas unitarias (junit5, mockito)",
            knowledgeExpertise: "EXPERT"
          },
          {
            id: "2",
            knowledgeCategoryId: { id: "1", name: "Backend" },
            name: "JavaScript",
            description:
                "Conocimiento en comunicaciones asincrónicas, comprensión profunda de JavaScript, API Rest, conexiones con bases de datos SQL y no SQL, comunicación HTTP segura con JWT y Basic Auth",
            technologies: "Node Js, Express Js y Jest para pruebas unitarias",
            knowledgeExpertise: "MEDIUM_HIGH"
          },
          {
            id: "3",
            knowledgeCategoryId: { id: "1", name: "Backend" },
            name: "Golang",
            description:
                "Conocimiento en construcción de API Rest, conexión a bases de datos SQL y comunicación con colas",
            technologies: "Golang Puro",
            knowledgeExpertise: "MEDIUM_LOW"
          },
          {
            id: "4",
            knowledgeCategoryId: { id: "2", name: "Frontend" },
            name: "React Js",
            description:
                "Comprensión de React Js, React Context, Hooks, patrones de diseño (HOC, componentes de ranura, componentes punto, diseño atómico)",
            technologies: "ReactJS, NextJS y Jest para pruebas unitarias",
            knowledgeExpertise: "MEDIUM_HIGH"
          },
          {
            id: "5",
            knowledgeCategoryId: { id: "2", name: "Frontend" },
            name: "CSS",
            description:
                "Conocimiento de flexbox, transiciones y animaciones básicas, modificadores y selectores",
            technologies: "SASS, CSS-en-JS, CSS Puro",
            knowledgeExpertise: "MEDIUM"
          },
          {
            id: "6",
            knowledgeCategoryId: { id: "3", name: "DevOps y Nube" },
            name: "Terraform",
            description:
                "Comprensión de Terraform y su estado, creación y uso de módulos. Experiencia con los proveedores de AWS y Azure",
            technologies: "Proveedor AWS, Proveedor Azure, Packer",
            knowledgeExpertise: "MEDIUM_LOW"
          },
          {
            id: "7",
            knowledgeCategoryId: { id: "3", name: "DevOps y Nube" },
            name: "Docker",
            description:
                "Comprensión profunda de la tecnología de contenedores, creación de Dockerfiles, archivos YAML para docker compose, docker dentro de docker",
            technologies: "Docker, Docker compose",
            knowledgeExpertise: "MEDIUM_HIGH"
          },
          {
            id: "8",
            knowledgeCategoryId: { id: "3", name: "DevOps y Nube" },
            name: "Kubernetes",
            description:
                "Uso básico de kubectl: obtener información de logs, escalar pods, aplicar despliegues",
            technologies: "Kubernetes",
            knowledgeExpertise: "BEGINNER"
          },
          {
            id: "9",
            knowledgeCategoryId: { id: "3", name: "DevOps y Nube" },
            name: "Google Cloud Platform",
            description: "Uso de la consola de GCP y uso básico de gcloud cli sdk",
            technologies:
                "Pubsub, Firestore, Datastore, Kubernetes Engine, Stackdriver / Monitoring, Cloud SQL, IAM, Cloud Functions, Cloud Storage",
            knowledgeExpertise: "MEDIUM_LOW"
          },
          {
            id: "10",
            knowledgeCategoryId: { id: "3", name: "DevOps y Nube" },
            name: "Amazon Web Services",
            description: "Uso de la consola de AWS y uso básico de aws cli sdk",
            technologies:
                "EC2, ECS, ECR, Fargate, Route 53, VPC, Grupos de seguridad, Code Pipeline, Code Commit, Code Build, Code Deploy, Elastic Beanstalk, ALB, ELB, S3",
            knowledgeExpertise: "MEDIUM_LOW"
          },
          {
            id: "11",
            knowledgeCategoryId: { id: "3", name: "DevOps y Nube" },
            name: "Azure",
            description:
                "Configuración y uso de Active Directory de Azure, uso de la consola de AZ",
            technologies: "Azure Active Directory y productos IaaS",
            knowledgeExpertise: "BEGINNER"
          },
          {
            id: "12",
            knowledgeCategoryId: { id: "4", name: "Idiomas" },
            name: "Español",
            description: "Nativo",
            knowledgeExpertise: "EXPERT"
          },
          {
            id: "13",
            knowledgeCategoryId: { id: "4", name: "Idiomas" },
            name: "Inglés",
            description:
                "Vocabulario técnico, cómodo al hablar, escribir y escuchar",
            knowledgeExpertise: "MEDIUM_HIGH"
          },
          {
            id: "14",
            knowledgeCategoryId: { id: "5", name: "Base de Datos" },
            name: "SQL",
            description:
                "Consultas, modelado de bases de datos, optimización de bases de datos, PL/SQL, Triggers, Procedimientos almacenados",
            technologies: "Postgresql, MySQL y Oracle",
            knowledgeExpertise: "MEDIUM_HIGH"
          },
          {
            id: "15",
            knowledgeCategoryId: { id: "5", name: "Base de Datos" },
            name: "no-SQL",
            description: "Consultas y agregaciones básicas",
            technologies: "MongoDB, Firestore",
            knowledgeExpertise: "MEDIUM_LOW"
          }
        ],
        projects: [
          {
            id: "fake_data",
            name: "fake_data",
            description: "fake_data",
            tools: [
              {
                id: "fake_data",
                knowledgeCategory: {
                  id: "fake_data",
                  name: "fake_data"
                },
                name: "fake_data",
                imgUrl: "fake_data",
                description: "fake_data",
                knowledgeExpertise: "EXPERT"
              }
            ],
            type: "PUBLIC",
            url: "fake_data",
            imagesUrl: ["fake_data"],
            status: "IN_PROGRESS"
          }
        ],
        jobs: [
          {
            id: "1",
            company: "Ipsos Interactive Service",
            titles: [
              {
                id: "1",
                title: "Guionista",
                description:
                    "Desarrollador y QA de proyectos enfocados en investigación de marketing: mis principales responsabilidades fueron desarrollar y automatizar pruebas de encuestas para clientes de América Latina y de todo el mundo",
                startDate: "2017-05-01",
                endDate: "2018-12-01",
                knowledgeList: [
                  {
                    id: "fake_data",
                    knowledgeCategory: {
                      id: "fake_data",
                      name: "fake_data"
                    },
                    name: "fake_data",
                    imgUrl: "fake_data",
                    description: "fake_data",
                    knowledgeExpertise: "EXPERT"
                  }
                ],
                status: "FINISHED"
              }
            ]
          },
          {
            id: "2",
            company: "RetailSBS",
            titles: [
              {
                id: "2",
                title: "Consultor y desarrollador fullstack",
                description: "",
                startDate: "2017-05-01",
                endDate: "2018-12-01",
                knowledgeList: [
                  {
                    id: "fake_data",
                    knowledgeCategory: {
                      id: "fake_data",
                      name: "fake_data"
                    },
                    name: "fake_data",
                    imgUrl: "fake_data",
                    description: "fake_data",
                    knowledgeExpertise: "EXPERT"
                  }
                ],
                status: "FINISHED"
              }
            ]
          }
        ],
        study: {
          universityStudies: [
            {
              university: "fake_data",
              startDate: "2019-03-30",
              endDate: "2020-06-05",
              achievement: "fake_data"
            }
          ],
          courseStudies: [
            {
              id: "fake_data",
              platform: "fake_data",
              certificateUrl: "fake_data",
              knowledgeList: [
                {
                  id: "fake_data",
                  knowledgeCategory: {
                    id: "fake_data",
                    name: "fake_data"
                  },
                  name: "fake_data",
                  imgUrl: "fake_data",
                  description: "fake_data",
                  knowledgeExpertise: "EXPERT"
                }
              ],
              description: "fake_data"
            }
          ],
          books: [
            {
              id: "fake_data",
              name: "fake_data",
              releaseDate: "2030-07-21",
              knowledgeList: [
                {
                  id: "fake_data",
                  knowledgeCategory: {
                    id: "fake_data",
                    name: "fake_data"
                  },
                  name: "fake_data",
                  imgUrl: "fake_data",
                  description: "fake_data",
                  knowledgeExpertise: "EXPERT"
                }
              ],
              description: "fake_data",
              authors: ["fake_data"]
            }
          ]
        }
      }
    }
;

export default database;
