import CvSidebar from "@components/organisms/Cv/CvSidebar";
import React from "react";
import CvAcademyStudies from "@components/organisms/Cv/CvAcademyStudies";
import CvJobs from "@components/organisms/Cv/CvJobs";
import CvSkills from "@components/organisms/Cv/CvSkills";

interface Props {
  data: string;
}

const skills1 = [
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
];
const skills2 = [
  ,
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

const CvTemplate: React.FC<Props> = () => {
  return (
    <>
      <div id={"page-1"} className={"container all-screen"}>
        <div style={{ maxWidth: "180px" }}>
          <CvSidebar />
        </div>
        <div className={"grow p-5"}>
          <CvAcademyStudies />
          <CvJobs />
        </div>
      </div>
      <div
        id={"page-2"}
        className={
          "container all-screen column-flex justify-content-space-between"
        }
      >
        <div className={"w-100 p-5 grow"}>
          <CvSkills data={skills1} />
        </div>
        <div className={"w-100 bg-orange "} style={{ height: 40 }} />
      </div>
      <div
        id={"page-3"}
        className={
          "container all-screen column-flex justify-content-space-between"
        }
      >
        <div className={"w-100 p-5 grow"}>
          <CvSkills data={skills2} />
        </div>
        <div className={"w-100 bg-orange "} style={{ height: 40 }} />
      </div>
    </>
  );
};

export default CvTemplate;
