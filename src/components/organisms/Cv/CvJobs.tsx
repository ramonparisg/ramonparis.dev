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
          title: "Technical Lead",
          startDate: "May 2021",
          description: `Lidero un equipo de 20 desarrolladores en Sudamérica e India, encargado del sistema de órdenes de compra corporativo del grupo Falabella.`,
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
          projects: [
            "Migración a nuevo POS Virtual para Easy - Cencosud",
            "Desarrollo de aplicación para picking de productos en tiendas de Easy - Cencosud",
            "Plataforma de entrega de beneficio a colaboradores para Caja los Andes",
            "Plataforma de gestión de órdenes para Salcobrand",
          ],
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
            <Text size={"big"} className={"medium-weight mt-4 mb-1"}>
              {d.company}
            </Text>
            <Timeline>
              {d.titles.map((titles) => (
                <Timeline.Item key={titles.id}>
                  <div className={"justify-text"}>
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
                        <Text size={"small"} className={"my-2 medium-weight"}>
                          🏆 Logros
                        </Text>
                        <ul className={"list-disc ml-6"}>
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
                    {titles.projects && (
                      <>
                        <Text size={"small"} className={"my-2 medium-weight"}>
                          🔬 Proyectos
                        </Text>
                        <ul className={"list-disc ml-6"}>
                          {titles.projects.map((achievement, i) => (
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
