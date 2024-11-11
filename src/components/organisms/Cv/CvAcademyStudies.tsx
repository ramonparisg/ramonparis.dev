import React from "react";
import TitleSeparator from "@components/molecules/Separators/TitleSeparator";
import Timeline from "@components/molecules/Timeline/Timeline";
import Text from "@components/atoms/Text/Text";
import styles from "./Styles.module.scss";

const CvAcademyStudies: React.FC = () => {
  const data = [
    {
      university: "Universidad INACAP",
      studies: [
        {
          career: "Ingeniería en Informática",
          startDate: "2016",
          endDate: "2020",
          achievement: "Primero en notas de la promoción de graduados",
        },
      ],
    },
    {
      university: "Massachusetts Institute of Technology (MIT)",
      studies: [
        {
          career: "Diseño y Desarrollo de Productos y Servicios de Inteligencia Artificial",
          startDate: "2024",
          achievement: "",
        },
      ],
    },
  ];

  return (
    <div className={""}>
      <TitleSeparator color={"green"}>🎓 Educación</TitleSeparator>
      <div style={{ marginLeft: "5%" }} className={"mt-3"}>
        {data.map((d, i) => (
          <div key={i} className={`${styles.information}`}>
            <Text size={"big"} className={"medium-weight"}>
              {d.university}
            </Text>
            <Timeline>
              {d.studies.map((studies, i) => (
                <Timeline.Item key={i}>
                  <div className={"lh-4"}>
                    <Text size={"medium"} className={"big-weight"}>
                      {studies.career}
                    </Text>
                    <Text size={"small"} className={"dark-gray"}>
                      {`${studies.startDate} ${studies.endDate ? `- ${studies.endDate}` : ""}`}
                    </Text>
                    {studies.achievement && (
                      <Text
                        size={"small"}
                        className={"mt-1"}
                      >{`🏆 ${studies.achievement}`}</Text>
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

export default CvAcademyStudies;
