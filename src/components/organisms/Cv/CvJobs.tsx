import React from "react";
import TitleSeparator from "@components/molecules/Separators/TitleSeparator";
import Timeline from "@components/molecules/Timeline/Timeline";
import styles from "@components/organisms/Cv/Styles.module.scss";
import Text from "@components/atoms/Text/Text";

const CvJobs: React.FC = () => {
  const data = [
    {
      id: "4",
      company: "Falabella Tecnología Corporativa",
      titles: [
        {
          id: "21",
          title: "Senior Technical Lead",
          startDate: "Oct 2023",
          description: `TL de un equipo con 20 desarrolladores ubicados en Suramérica e India, encargado de la gestión de órdenes de compra dentro de la unidades de negocio del grupo Falabella. Participo en el diseño arquitecturas y creación estándares. Tecnologías: Golang, Java, Spring Boot, GCP, Kubernetes, Terraform, Arquitectura Hexagonal, DDD, CQRS, entre otras.`,
          endDate: "Present",
          status: "ON_GOING",
          // achievements: [
          //   "Migración de sistemas legados y estandarización de procesos, permitiendo reducir los tiempos de desarrollo y despliegue de nuevos servicios y así entregar más valor en menor tiempo",
          //   "Capacidad de manejar +100.000 transacciones por minuto, permitiendo al negocio escalar durante eventos de alta demanda como black friday o similares",
          //   "Reducción de un 40% en el tiempo de respuesta de los servicios",
          //   "Reducción en un 60% costos de infraestructura",
          // ],
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
          description: `Encargado de coordinar y liderar a líderes técnicos y desarrolladores en la creación de microservicios para la orquestación de eventos logísticos y de pago en el sistema back-office de una empresa de retail. Tecnologías utilizadas: Java, Spring Boot, Spring Reactive, Nodejs, ReactJS, GCP.`,
          startDate: "Nov 2022",
          endDate: "Oct 2023",
          status: "FINISHED",
          // achievements: [
          //   "Cumplimiento de entrega de proyectos en tiempo y forma",
          // ],
        },
        {
          id: "21",
          title: "Technical Lead",
          description:
            "Líder técnico de un proyecto de orquestación de eventos de logística y pagos, donde diseño microservicios escalables y lidero un equipo de 8 personas en India y Chile.",
          startDate: "May 2021",
          endDate: "Nov 2022",
          status: "FINISHED",
        },
        {
          id: "21",
          title: "Senior Fullstack developer",
          description:
            "Desarrollador en un equipo Scrum, encargado de diseñar soluciones, resolver consultas técnicas y coordinar integraciones con equipos en India.",
          // "",
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
      <TitleSeparator color={"blue"}>💻 Experiencia</TitleSeparator>
      <div style={{ marginLeft: "2%" }} className={"mt-3"}>
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
                    {titles.achievements && (
                      <>
                        <Text size={"small"} className={"mt-1 medium-weight"}>
                          🏆 Logros
                        </Text>
                        <ul>
                          {titles.achievements.map((achievement, i) => (
                            <li key={i}>
                              <Text size={"small"} className={""}>
                                {achievement}
                              </Text>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
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
