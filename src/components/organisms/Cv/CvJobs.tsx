import React from "react";
import TitleSeparator from "@components/molecules/Separators/TitleSeparator";
import Timeline from "@components/molecules/Timeline/Timeline";
import styles from "@components/organisms/Cv/Styles.module.scss";
import Text from "@components/atoms/Text/Text";
import { Experience } from "../../../service/core/domain/cv";

interface Props {
  experiences: Experience[];
  experienceTag: string;
  achievementTag: string;
  projectTag: string;
}

const CvJobs: React.FC<Props> = ({
  experiences = [],
  experienceTag = "",
  projectTag,
  achievementTag,
}) => {
  return (
    <div className={""}>
      <TitleSeparator color={"blue"}>💻 {experienceTag}</TitleSeparator>
      <div style={{ marginLeft: "2%" }} className={"mt-3"}>
        {experiences.map((d, i) => (
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
                          🏆 {achievementTag}
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
                          🔬 {projectTag}
                        </Text>
                        <ul className={"list-disc ml-6"}>
                          {titles.projects.map((p, i) => (
                            <li key={i}>
                              <Text size={"small"} className={""}>
                                {p}
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
