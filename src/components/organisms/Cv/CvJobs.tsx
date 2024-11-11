import React from "react";
import TitleSeparator from "@components/molecules/Separators/TitleSeparator";
import Timeline from "@components/molecules/Timeline/Timeline";
import styles from "@components/organisms/Cv/Styles.module.scss";
import Text from "@components/atoms/Text/Text";

const CvJobs: React.FC = () => {
    const data = [
        {
            id: "4",
            company: "Falabella Corp",
            titles: [
                {
                    id: "21",
                    title: "Senior Technical Lead",
                    startDate: "Oct 2023",
                    description:
                        `Como líder técnico de un equipo de 20 desarrolladores ubicados en Suramérica e India, diseño arquitecturas de microservicios y creo estándares para un sistema de orquestación escalable que soporta eventos masivos en Falabella Holding. 

Tecnologías: Golang, Java, Spring Boot, GCP, Kubernetes, Terraform, Arquitectura Hexagonal, DDD, CQRS, entre otras.`,
                    endDate: "Present",
                    status: "ON_GOING",
                },
            ],
        },
        {
            id: "3",
            company: "Falabella Retail",
            titles: [
                {
                    id: "21",
                    title: "Technical Manager",
                    description:
                        `Encargado de coordinar y liderar a líderes técnicos y desarrolladores en la creación de microservicios para la orquestación de eventos logísticos y de pago en el sistema back-office de una empresa de retail.
                        
Tecnologías utilizadas: Java, Spring Boot, Spring Reactive, Nodejs, ReactJS, GCP.`,
                    startDate: "Nov 2022",
                    endDate: "Oct 2023",
                    status: "FINISHED",
                },
                {
                    id: "21",
                    title: "Technical Lead",
                    description:
                        // "Líder técnico de un proyecto de orquestación de eventos de logística y pagos, donde diseño microservicios escalables y lidero un equipo de 8 personas en India y Chile.",
                        "",
                    startDate: "May 2021",
                    endDate: "Nov 2022",
                    status: "FINISHED",
                },
                {
                    id: "21",
                    title: "Senior Fullstack developer",
                    description:
                        // "Desarrollador en un equipo Scrum, encargado de diseñar soluciones, resolver consultas técnicas y coordinar integraciones con equipos en India.",
                        "",
                    startDate: "Feb 2020",
                    endDate: "May 2021",
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
                    title: "Consultor y desarrollador fullstack",
                    description:
                        "Consultor y desarrollador en integraciones retail, con experiencia en soluciones de pagos, logística y ecommerce, utilizando herramientas como ReactJS, Java y AWS.",
                    startDate: "Dec 2018",
                    endDate: "Feb 2020",
                },
            ],
        },
    ];

    return (
        <div className={""}>
            <TitleSeparator color={"blue"}>💻 Experience</TitleSeparator>
            <div style={{marginLeft: "5%"}} className={"mt-3"}>
                {data.map((d, i) => (
                    <div key={i} className={`${styles.information}`}>
                        <Text size={"big"} className={"medium-weight"}>
                            {d.company}
                        </Text>
                        <Timeline>
                            {d.titles.map((titles) => (
                                <Timeline.Item key={titles.id}>
                                    <div className={"lh-4 justify-text"}>
                                        <Text size={"medium"} className={"big-weight"}>
                                            {titles.title}
                                        </Text>
                                        <Text size={"medium"} className={"dark-gray"}>
                                            {`${titles.startDate} - ${titles.endDate}`}
                                        </Text>
                                        <Text size={"small"} className={"mt-2"}>
                                            {titles.description}
                                        </Text>
                                    </div>
                                </Timeline.Item>
                            ))}
                        </Timeline>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CvJobs;
