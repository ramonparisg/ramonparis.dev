const database = {
  knowledgeCategory: [
    { id: "1", name: "Backend" },
    { id: "2", name: "Frontend" },
    { id: "3", name: "DevOps and Cloud" },
    { id: "4", name: "Languages" },
    { id: "5", name: "Database" },
  ],
  person: {
    id: "1",
    firstName: "Ramón José",
    lastName: "París González",
    title: "Senior fullstack developer",
    description:
      "I am a software engineer with a passion for software development, good practices, operation of the business and constantly learning new technologies and patterns.",
    profilePicUrl:
      "https://media-exp1.licdn.com/dms/image/C4E03AQFuEB4TZfmJwQ/profile-displayphoto-shrink_400_400/0/1615647888321?e=1621468800&v=beta&t=ct2jtRK6exQwpqFWqtlWPw2y2SSiyc97soi7UFOFo6g",
    birthdate: "1995-12-18",
    currentLocation: "Santiago, Chile",
    socialMedias: [
      {
        id: "1",
        name: "Github",
        url: "https://github.com/ramonparisg",
        imgUrl: "fake_data",
      },
      {
        id: "2",
        name: "Stackoverflow",
        url: "https://stackoverflow.com/users/7800021/ramon-paris",
        imgUrl: "fake_data",
      },
    ],
    knowledgeList: [
      {
        id: "1",
        knowledgeCategoryId: { id: "1", name: "Backend" },
        name: "Java",
        description:
          "Knowledge in Rest API, event-driven microservices, SQL and non-SQL database connections, integration with cloud, secured http communication with OAuth2, JWT, Basic Auth",
        technologies:
          "Java 8+ (Functional programming, dates, lambdas), Spring (core, boot, MVC, security, integration, cloud, reactive), unit testing (junit5, mockito)",
        knowledgeExpertise: "EXPERT",
      },
      {
        id: "2",
        knowledgeCategoryId: { id: "1", name: "Backend" },
        name: "JavaScript",
        description:
          "Knowledge in async communications, deep understanding of Javascript, Rest API, SQL and non-SQL database connections, secured http communication with JWT and Basic Auth",
        technologies: "Node Js, Express Js and Jest for unit testing",
        knowledgeExpertise: "MEDIUM_HIGH",
      },
      {
        id: "3",
        knowledgeCategoryId: { id: "1", name: "Backend" },
        name: "Golang",
        description:
          "Knowledge building Rest API, Connecting to SQL Database and communication with queues",
        technologies: "Vanilla Golang",
        knowledgeExpertise: "MEDIUM_LOW",
      },
      {
        id: "4",
        knowledgeCategoryId: { id: "2", name: "Frontend" },
        name: "React Js",
        description:
          "Understanding of React Js, React Context, Hooks, Pattern designs (HOC, Slot components, dot components, atomic design)",
        technologies: "ReactJS, NextJS and Jest for unit testing",
        knowledgeExpertise: "MEDIUM_HIGH",
      },
      {
        id: "5",
        knowledgeCategoryId: { id: "2", name: "Frontend" },
        name: "CSS",
        description:
          "Knowledge of flexbox, basic transitions and animations, modifiers and selectors",
        technologies: "SASS, CSS-in-JS, Vanilla CSS",
        knowledgeExpertise: "MEDIUM",
      },
      {
        id: "6",
        knowledgeCategoryId: { id: "3", name: "DevOps and Cloud" },
        name: "Terraform",
        description:
          "Understanding of terraform and terraform state, creation and use of modules. Experience with AWS and Azure Provider",
        technologies: "AWS Provider, Azure Provider, Packer",
        knowledgeExpertise: "MEDIUM_LOW",
      },
      {
        id: "7",
        knowledgeCategoryId: { id: "3", name: "DevOps and Cloud" },
        name: "Docker",
        description:
          "Deep understanding of container technology, creation of dockerfiles, docker compose yml, docker in docker",
        technologies: "Docker, Docker compose",
        knowledgeExpertise: "MEDIUM_HIGH",
      },
      {
        id: "8",
        knowledgeCategoryId: { id: "3", name: "DevOps and Cloud" },
        name: "Kubernetes",
        description:
          "Basic usage of kubectl: log information, scale pods, apply deploys",
        technologies: "Kubernetes",
        knowledgeExpertise: "BEGINNER",
      },
      {
        id: "9",
        knowledgeCategoryId: { id: "3", name: "DevOps and Cloud" },
        name: "Google Cloud Platform",
        description: "Usage of GCP Console and basic usage of gcloud cli sdk",
        technologies:
          "Pubsub, firestore, datastore, kubernetes engine, stackdriver / monitoring, cloud sql, IAM, Cloud Functions, Cloud Storage",
        knowledgeExpertise: "MEDIUM_LOW",
      },
      {
        id: "10",
        knowledgeCategoryId: { id: "3", name: "DevOps and Cloud" },
        name: "Amazon Web Services",
        description: "Usage of AWS Console and basic usage of aws cli sdk",
        technologies:
          "EC2, ECS, ECR, Fargate, Route 53, VPC, Security groups, Code Pipeline, Code Commit, Code Build, Code Deploy, Elastic Beanstalk, ALB, ELB, S3",
        knowledgeExpertise: "MEDIUM_LOW",
      },
      {
        id: "11",
        knowledgeCategoryId: { id: "3", name: "DevOps and Cloud" },
        name: "Azure",
        description:
          "Configuration and usage of Azure Active directory, usage of AZ Console",
        technologies: "Azure Active Directory and IaaS products",
        knowledgeExpertise: "BEGINNER",
      },
      {
        id: "12",
        knowledgeCategoryId: { id: "4", name: "Languages" },
        name: "Spanish",
        description: "Native",
        knowledgeExpertise: "EXPERT",
      },
      {
        id: "13",
        knowledgeCategoryId: { id: "4", name: "Languages" },
        name: "English",
        description:
          "Technical vocabulary, comfortable talking, writing and listening",
        knowledgeExpertise: "MEDIUM_HIGH",
      },
      {
        id: "14",
        knowledgeCategoryId: { id: "5", name: "Database" },
        name: "SQL",
        description:
          "Queries, database modeling, database optimizations, PL/SQL, Triggers, Store procedures",
        technologies: "Postgresql, MySQL and Oracle",
        knowledgeExpertise: "MEDIUM_HIGH",
      },
      {
        id: "15",
        knowledgeCategoryId: { id: "5", name: "Database" },
        name: "non-SQL",
        description: "Queries and basic aggregations",
        technologies: "MongoDB, Firestore",
        knowledgeExpertise: "MEDIUM_LOW",
      },
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
              name: "fake_data",
            },
            name: "fake_data",
            imgUrl: "fake_data",
            description: "fake_data",
            knowledgeExpertise: "EXPERT",
          },
        ],
        type: "PUBLIC",
        url: "fake_data",
        imagesUrl: ["fake_data"],
        status: "IN_PROGRESS",
      },
    ],
    jobs: [
      {
        id: "1",
        company: "Ipsos Interactive Service",
        titles: [
          {
            id: "1",
            title: "Scriptwriter",
            description:
              "Developer and QA of projects focused in Marketing Research: my main responsibilities were develop and automate testing of surveys for clients in all the world Latin America",
            startDate: "2017-05-01",
            endDate: "2018-12-01",
            knowledgeList: [
              {
                id: "fake_data",
                knowledgeCategory: {
                  id: "fake_data",
                  name: "fake_data",
                },
                name: "fake_data",
                imgUrl: "fake_data",
                description: "fake_data",
                knowledgeExpertise: "EXPERT",
              },
            ],
            status: "FINISHED",
          },
        ],
      },
      {
        id: "2",
        company: "RetailSBS",
        titles: [
          {
            id: "2",
            title: "Consultant and fullstack developer",
            description: "",
            startDate: "2017-05-01",
            endDate: "2018-12-01",
            knowledgeList: [
              {
                id: "fake_data",
                knowledgeCategory: {
                  id: "fake_data",
                  name: "fake_data",
                },
                name: "fake_data",
                imgUrl: "fake_data",
                description: "fake_data",
                knowledgeExpertise: "EXPERT",
              },
            ],
            status: "FINISHED",
          },
        ],
      },
    ],
    study: {
      universityStudies: [
        {
          university: "fake_data",
          startDate: "2019-03-30",
          endDate: "2020-06-05",
          achievement: "fake_data",
        },
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
                name: "fake_data",
              },
              name: "fake_data",
              imgUrl: "fake_data",
              description: "fake_data",
              knowledgeExpertise: "EXPERT",
            },
          ],
          description: "fake_data",
        },
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
                name: "fake_data",
              },
              name: "fake_data",
              imgUrl: "fake_data",
              description: "fake_data",
              knowledgeExpertise: "EXPERT",
            },
          ],
          description: "fake_data",
          authors: ["fake_data"],
        },
      ],
    },
  },
};

export default database;
