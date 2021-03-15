import CvSidebar from "@components/organisms/Cv/CvSidebar";
import React from "react";
import CvAcademyStudies from "@components/organisms/Cv/CvAcademyStudies";
import CvJobs from "@components/organisms/Cv/CvJobs";

interface Props {
  data: string;
}

const CvTemplate: React.FC<Props> = () => {
  return (
    <>
      <div id={"page-1"} className={"container all-screen"}>
        <div style={{ maxWidth: "230px" }}>
          <CvSidebar />
        </div>
        <div className={"grow p-5"}>
          <CvAcademyStudies />
          <CvJobs />
        </div>
      </div>
      <div id={"page-2"}>
        {/*<div className={"w-100 test-border"}>Backend</div>*/}
      </div>
    </>
  );
};

export default CvTemplate;
