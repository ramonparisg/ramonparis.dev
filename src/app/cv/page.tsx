import React from "react";
import CvTemplate from "@components/template/MainPageCvTemplate/CvTemplate";
import database from "../../service/infrastructure/config/StaticDbConfig";

const Resume = async ({ searchParams }) => {
  const { lang = "es" } = await searchParams;
  if (lang !== "es" && lang !== "en") {
    return <div>Not found</div>;
  }

  const data = database[lang];

  return (
    <div className={"w-full md:w-[810px] mx-auto"}>
      <CvTemplate data={data} />
    </div>
  );
};

export default Resume;
