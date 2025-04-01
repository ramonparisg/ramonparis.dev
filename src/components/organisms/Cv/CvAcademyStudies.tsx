import React from "react";
import TitleSeparator from "@components/molecules/Separators/TitleSeparator";
import Timeline from "@components/molecules/Timeline/Timeline";
import Text from "@components/atoms/Text/Text";
import styles from "./Styles.module.scss";
import type { Education } from "@domain/cv";

interface Props {
  education: Education[];
  educationTag: string;
  certificateTag: string;
}

const CvAcademyStudies: React.FC<Props> = ({
  education,
  educationTag,
  certificateTag,
}) => {
  return (
    <div className={"w-100 mb-5"}>
      <TitleSeparator color={"green"}>🎓 {educationTag}</TitleSeparator>
      <div style={{ marginLeft: "2%" }} className={"mt-1"}>
        {education.map((d, i) => (
          <div key={i} className={`${styles.information}`}>
            <Text size={"big"} className={"medium-weight mt-3 mb-1"}>
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
                      {`${studies.startDate} ${
                        studies.endDate ? `- ${studies.endDate}` : ""
                      }`}
                    </Text>

                    {studies.description && (
                      <Text
                        size={"small"}
                        className={"mt-1"}
                      >{`${studies.description}`}</Text>
                    )}
                    {studies.achievement && (
                      <Text
                        size={"small"}
                        className={"mt-1"}
                      >{`🏆 ${studies.achievement}`}</Text>
                    )}
                    {studies.certificate && (
                      <div className={"mt-2"}>
                        <a
                          href={studies.certificate}
                          target={"_blank"}
                          rel={"noreferrer"}
                          className={"underline"}
                        >
                          <Text size={"small"}>📜 {certificateTag}</Text>
                        </a>
                      </div>
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
