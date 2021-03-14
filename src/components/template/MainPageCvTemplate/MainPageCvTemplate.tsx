import React from "react";

interface Props {
  data: string;
}

const MainPageCvTemplate: React.FC<Props> = ({ data }) => {
  return (
    <div className={"container all-screen"}>
      <div className={"w-25 test-border"}>
        <div className={"test-border bg-yellow h-25"}>Image</div>
        <div className={"test-border bg-blue h-75"}>Description</div>
      </div>
      <div className={"w-75 test-border bg-light-green"}>{data}</div>
    </div>
  );
};

export default MainPageCvTemplate;
