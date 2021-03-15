import React from "react";
import TitleSeparator from "@components/molecules/Separators/TitleSeparator";
import Timeline from "@components/molecules/Timeline/Timeline";

const CvAcademyStudies: React.FC = () => {
  return (
    <div className={"lh-4"}>
      <TitleSeparator color={"green"}>🎓 Education</TitleSeparator>
      <div style={{ marginLeft: "12%" }} className={"mt-3 mb-3"}>
        <Timeline>
          <Timeline.Item>Children</Timeline.Item>
          <Timeline.Item>Children</Timeline.Item>
          <Timeline.Item>Children</Timeline.Item>
        </Timeline>
      </div>
    </div>
  );
};

export default CvAcademyStudies;
