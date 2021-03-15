import React from "react";
import TitleSeparator from "@components/molecules/Separators/TitleSeparator";
import Timeline from "@components/molecules/Timeline/Timeline";

const CvJobs: React.FC = () => {
  return (
    <div className={"lh-4"}>
      <TitleSeparator color={"blue"}>💻 Experience</TitleSeparator>
      <Timeline>
        <Timeline.Item>children</Timeline.Item>
      </Timeline>
    </div>
  );
};

export default CvJobs;
