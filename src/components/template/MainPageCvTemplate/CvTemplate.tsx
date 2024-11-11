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
        "id": "1",
        "knowledgeCategoryId": { "id": "1", "name": "Backend" },
        "name": "Java",
        "description": "Conocimientos en Rest API, microservicios basados en eventos, conexiones a bases de datos SQL y no-SQL, suite de Spring (boot, reactive, cloud, ...), pruebas unitarias",
        "knowledgeExpertise": "EXPERT"
    },
    {
        "id": "2",
        "knowledgeCategoryId": { "id": "1", "name": "Backend" },
        "name": "Golang",
        "description": "Rest API, servicios gRPC, servicios GraphQL, conexiones a bases de datos SQL y no-SQL, microservicios basados en eventos, concurrencia y paralelismo",
        "knowledgeExpertise": "EXPERT"
    },
    {
        "id": "3",
        "knowledgeCategoryId": { "id": "1", "name": "Backend" },
        "name": "JavaScript",
        "description": "Conocimientos en comunicaciones asincrónicas, profundo entendimiento de Javascript, Rest API, conexiones a bases de datos SQL y no-SQL, comunicación HTTP segura con JWT y Basic Auth",
        "knowledgeExpertise": "MEDIUM_HIGH"
    },
    {
        "id": "4",
        "knowledgeCategoryId": { "id": "2", "name": "Frontend" },
        "name": "React Js",
        "description": "React 18+, NextJs, Jest, patrones de diseño",
        "knowledgeExpertise": "MEDIUM_HIGH"
    },
    {
        "id": "45",
        "knowledgeCategoryId": { "id": "2", "name": "Frontend" },
        "name": "Vuejs",
        "description": "Vue 3+, Nuxt, Pinia, Vite, Vitest",
        "knowledgeExpertise": "MEDIUM_HIGH"
    },
    {
        "id": "5",
        "knowledgeCategoryId": { "id": "2", "name": "Frontend" },
        "name": "CSS",
        "description": "Vanilla CSS, Tailwind, SASS, ...",
        "knowledgeExpertise": "MEDIUM"
    },
    {
        "id": "15",
        "knowledgeCategoryId": { "id": "6", "name": "Architecture" },
        "name": "Design patterns",
        "description": "Patrones de arquitectura: microservicios, DDD, CQRS, Clean architecture, migración de monolitos a microservicios. Patrones de diseño: creacionales, estructurales, de comportamiento",
        "knowledgeExpertise": "EXPERT"
    },
    {
        "id": "16",
        "knowledgeCategoryId": { "id": "6", "name": "Architecture" },
        "name": "Event-driven design",
        "description": "Experiencia definiendo eventos, consumiéndolos, aplicando patrones de resiliencia (retry, circuit breaker, dead letter queue), y patrones de arquitectura Event-driven utilizando GCP Pub/sub, Kafka, RabbitMQ, ...",
        "knowledgeExpertise": "EXPERT"
    },
    {
        "id": "9",
        "knowledgeCategoryId": { "id": "3", "name": "DevOps and Cloud" },
        "name": "Google Cloud Platform",
        "description": "Profundo entendimiento de productos de GCP: Pubsub, firestore, datastore, kubernetes engine, stackdriver / monitoring, cloud sql, IAM, Cloud Functions, Cloud Storage, Big query",
        "knowledgeExpertise": "EXPERT"
    },
    {
        "id": "6",
        "knowledgeCategoryId": { "id": "3", "name": "DevOps and Cloud" },
        "name": "Terraform",
        "description": "Creación y uso de módulos. Experiencia con AWS y GCP provider",
        "knowledgeExpertise": "MEDIUM_LOW"
    },
    {
        "id": "8",
        "knowledgeCategoryId": { "id": "3", "name": "DevOps and Cloud" },
        "name": "Kubernetes",
        "description": "Creación, mantenimiento y configuración de un clúster K8S. Entendimiento de la arquitectura y los conceptos de K8S.",
        "knowledgeExpertise": "MEDIUM_HIGH"
    },
    {
        "id": "12",
        "knowledgeCategoryId": { "id": "4", "name": "Languages" },
        "name": "Spanish",
        "description": "Nativo",
        "knowledgeExpertise": "EXPERT"
    },
    {
        "id": "13",
        "knowledgeCategoryId": { "id": "4", "name": "Languages" },
        "name": "English",
        "description": "B2. Vocabulario técnico, cómodo hablando, escribiendo y escuchando",
        "knowledgeExpertise": "MEDIUM_HIGH"
    },
    {
        "id": "13",
        "knowledgeCategoryId": { "id": "4", "name": "Languages" },
        "name": "French",
        "description": "A2. Vocabulario básico, hablando, escribiendo y escuchando.",
        "knowledgeExpertise": "BEGINNER"
    }
]


const CvTemplate: React.FC<Props> = () => {
    return (
        <>
            <div id={"page-1"} className={"container all-screen"}>
                <div style={{maxWidth: "180px"}}>
                    <CvSidebar/>
                </div>
                <div className={"grow p-5"}>
                    <CvAcademyStudies/>
                    <CvJobs/>
                </div>
            </div>
            <div
                id={"page-2"}
                className={
                    "container all-screen column-flex justify-content-space-between"
                }
            >
                <div className={"w-100 p-5 grow"}>
                    <CvSkills data={skills1}/>
                </div>
                <div className={"w-100 bg-orange "} style={{height: 40}}/>
            </div>
        </>
    );
};

export default CvTemplate;
