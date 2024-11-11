import CvSidebar from "@components/organisms/Cv/CvSidebar";
import React from "react";
import CvAcademyStudies from "@components/organisms/Cv/CvAcademyStudies";
import CvJobs from "@components/organisms/Cv/CvJobs";
import CvSkills from "@components/organisms/Cv/CvSkills";
import ProfileImage from "@components/molecules/ProfileImage/ProfileImage";
import ProfileSummary from "@components/molecules/ProfileSummary/ProfileSummary";
import ProfileSummaryHorizontal from "@components/molecules/ProfileSummary/ProfileSummaryHorizontal";
import Text from "@components/atoms/Text/Text";

interface Props {
  data: string;
}

const skills1 = [
  {
    id: "1",
    knowledgeCategoryId: { id: "1", name: "Backend" },
    name: "Java",
    description:
      "Suite de Spring (boot, reactive, cloud, ...), microservicios basados en eventos, conexiones a bases de datos SQL y no-SQL, pruebas unitarias",
    knowledgeExpertise: "EXPERT",
  },
  {
    id: "2",
    knowledgeCategoryId: { id: "1", name: "Backend" },
    name: "Golang",
    description:
      "Microservicios basados en eventos, concurrencia y paralelismo, servicios gRPC, GraphQL, Rest API",
    knowledgeExpertise: "EXPERT",
  },
  {
    id: "3",
    knowledgeCategoryId: { id: "1", name: "Backend" },
    name: "JavaScript",
    description: "Nodejs, express, nestjs, pruebas unitarias y de integración",
    knowledgeExpertise: "MEDIUM_HIGH",
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
    description: "Vue 3+, Nuxt, Pinia, Vite, Vitest",
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
      "Patrones de diseño creacionales, estructurales, de comportamiento. Microservicios, DDD, CQRS, Clean architecture, migración de monolitos a microservicios. ",
    knowledgeExpertise: "EXPERT",
  },
  {
    id: "16",
    knowledgeCategoryId: { id: "6", name: "Arquitectura" },
    name: "Event-driven design",
    description:
      "Experiencia definiendo eventos, consumiéndolos, aplicando patrones de resiliencia (retry, circuit breaker, dead letter queue), y patrones de arquitectura Event-driven utilizando GCP Pub/sub, Kafka, RabbitMQ, ...",
    knowledgeExpertise: "EXPERT",
  },
  {
    id: "9",
    knowledgeCategoryId: { id: "3", name: "DevOps y Cloud providers" },
    name: "Google Cloud Platform",
    description:
      "Profundo entendimiento de productos de GCP: Pubsub, firestore, datastore, kubernetes engine, stackdriver / monitoring, cloud sql, IAM, Cloud Functions, Cloud Storage, Big query",
    knowledgeExpertise: "EXPERT",
  },
  {
    id: "6",
    knowledgeCategoryId: { id: "3", name: "DevOps y Cloud providers" },
    name: "Terraform",
    description:
      "Creación y uso de módulos. Experiencia con AWS y GCP provider",
    knowledgeExpertise: "MEDIUM_LOW",
  },
  {
    id: "8",
    knowledgeCategoryId: { id: "3", name: "DevOps y Cloud providers" },
    name: "Kubernetes",
    description:
      "Creación, mantenimiento y configuración de un clúster K8S, dockerización y manejo de contenedores ",
    knowledgeExpertise: "MEDIUM_HIGH",
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
    description:
      "B2. Vocabulario técnico, cómodo hablando, escribiendo y escuchando",
    knowledgeExpertise: "MEDIUM_HIGH",
  },
  {
    id: "13",
    knowledgeCategoryId: { id: "4", name: "Idiomas" },
    name: "Francés",
    description: "A2. Vocabulario básico, hablando, escribiendo y escuchando.",
    knowledgeExpertise: "BEGINNER",
  },
];

const CvTemplate: React.FC<Props> = () => {
  return (
    <>
      <div id={"page-1"} className={"all-screen"}>
        {/*<div style={{maxWidth: "180px"}}>*/}
        {/*    <CvSidebar/>*/}
        {/*</div>*/}
        <div className={"container"}>
          <div className={"bg-black white"}>
            <div className={"p-4"}>
              <div className={"center-text"}>
                <div>
                  <Text size={"big"} className={"medium-weight"}>
                    Ramón París
                  </Text>
                </div>
                <hr />
              </div>
              <div>
                <div className={"mt-2"}>
                  <Text size={"small"}>🇻🇪 Venezolano viviendo en Chile</Text>
                  <Text size={"small"}>📧 pariis78@gmail.com</Text>
                  <Text size={"small"} className={""}>
                    ☎️ +56 9 9294 9532
                  </Text>
                  <a
                    href="https://github.com/ramonparisg"
                    className={"underline"}
                  >
                    <Text size={"small"} className={""}>
                      Github: ramonparisg
                    </Text>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className={"bg-dark-gray grow"}>
            <ProfileSummaryHorizontal />
          </div>
        </div>
        <div className={"container grow p-5"}>
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
          <CvAcademyStudies />
          <CvSkills data={skills1} />
        </div>
        <div className={"w-100 bg-orange "} style={{ height: 40 }} />
      </div>
    </>
  );
};

export default CvTemplate;
