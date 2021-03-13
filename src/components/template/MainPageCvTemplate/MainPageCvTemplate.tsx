import React from "react";

interface Props {
  data: string;
}

const MainPageCvTemplate: React.FC<Props> = ({ data }) => {
  return (
    <div className={"container all-screen"}>
      <div className={"w-25 test-border"}>
        <div className={"test-border"}>Image</div>
        <div className={"test-border"}>Description</div>
      </div>
      <div className={"w-75 test-border"}>{data}</div>
    </div>
  );
};

export default MainPageCvTemplate;
