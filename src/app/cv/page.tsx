import React from "react";
import CvTemplate from "@components/template/MainPageCvTemplate/CvTemplate";
import database from "../../service/infrastructure/config/StaticDbConfig";

const Resume = ({ searchParams }) => {
  const { lang } = await searchParams;
  console.log("param", lang);
  const { spanish } = database;
  return (
    <div className={"w-full md:w-[810px] mx-auto"}>
      <CvTemplate data={spanish} />
    </div>
  );
};

export default Resume;
