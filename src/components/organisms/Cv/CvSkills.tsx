import React from "react";
import TitleSeparator from "@components/molecules/Separators/TitleSeparator";
import Text from "@components/atoms/Text/Text";

const data = [
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
];

function groupBy(list, keyGetter) {
  const map = new Map();
  list.forEach((item) => {
    const key = keyGetter(item);
    const collection = map.get(key);
    if (!collection) {
      map.set(key, [item]);
    } else {
      collection.push(item);
    }
  });
  return Object.fromEntries(map);
}

const CvSkills: React.FC = () => {
  const groupedData = groupBy(data, (data) => data.knowledgeCategoryId.name);
  return (
    <>
      <TitleSeparator color={"orange"}>🤓 Skills</TitleSeparator>
      <div className={"container pl-5 pr-5"}>
        {Object.keys(groupedData).map((key, i) => (
          <div key={i} className={"w-100"}>
            <Text size={"big"}>{key}</Text>
            {groupedData[key].map((values, i) => (
              <div key={i}>{values.name}</div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default CvSkills;
