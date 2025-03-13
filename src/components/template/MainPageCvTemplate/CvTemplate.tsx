import React from "react";
import CvAcademyStudies from "@components/organisms/Cv/CvAcademyStudies";
import CvJobs from "@components/organisms/Cv/CvJobs";
import CvSkills from "@components/organisms/Cv/CvSkills";
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
    expertiseTime: "8 años",
    description:
      "Spring boot, reactive, cloud, data, microservicios basados en eventos, pruebas unitarias y de aceptación",
    shortDescription: "(Spring Boot, Reactive, Cucumber, JUnit)",
    knowledgeExpertise: "EXPERT",
  },
  {
    id: "2",
    knowledgeCategoryId: { id: "1", name: "Backend" },
    name: "Golang",
    expertiseTime: "3 años",
    description:
      "Microservicios basados en eventos, concurrencia y paralelismo, servicios gRPC, GraphQL, Rest API",
    knowledgeExpertise: "EXPERT",
    shortDescription: "(Go routines, Gin, gRPC, GraphQL)",
  },
  {
    id: "3",
    knowledgeCategoryId: { id: "1", name: "Backend" },
    name: "JavaScript",
    expertiseTime: "8 años",
    description: "Nodejs, express, nestjs, pruebas unitarias y de integración",
    knowledgeExpertise: "MEDIUM_HIGH",
    shortDescription: "(Express, NestJS, Jest)",
  },
  {
    id: "4",
    knowledgeCategoryId: { id: "2", name: "Frontend" },
    name: "React Js",
    expertiseTime: "5 años",
    description: "React 18+, NextJs, Jest, patrones de diseño",
    knowledgeExpertise: "MEDIUM_HIGH",
  },
  {
    id: "45",
    knowledgeCategoryId: { id: "2", name: "Frontend" },
    name: "Vuejs",
    expertiseTime: "1 año",
    description: "Vue 3+, Pinia, Vite, Vitest",
    knowledgeExpertise: "MEDIUM_HIGH",
  },
  {
    id: "5",
    knowledgeCategoryId: { id: "2", name: "Frontend" },
    name: "CSS",
    expertiseTime: "5 años",
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
    expertiseTime: "5 años",
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
];

const CvTemplate: React.FC<Props> = () => {
  return (
    <>
      <div id={"page-1"} className={"all-screen"}>
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
                  <Text size={"small"}>📍 Chile</Text>
                  <Text size={"small"}>📧 pariis78@gmail.com</Text>
                  <Text size={"small"} className={""}>
                    ☎️ +56 9 9294 9532
                  </Text>
                  <a
                    href="https://github.com/ramonparisg"
                    className={"underline"}
                  >
                    <Text size={"small"} className={""}>
                      🔗 Github: ramonparisg
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
