import React from "react";
import CvTemplate from "@components/template/MainPageCvTemplate/CvTemplate";
import { GetServerSideProps, NextPage } from "next";
import { CurriculumVitaeDtoResponse } from "@payloads/response/CurriculumVitaeDtoResponse";
import adapter from "@infrastructure/httpClient/BaseApi/CurriculumVitaeHttpClient";

const Home: NextPage<CurriculumVitaeDtoResponse> = ({ data }) => {
  return (
    <>
      <CvTemplate data={data} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps<CurriculumVitaeDtoResponse> = async () => {
  const cvData = await adapter.fetchData();

  return {
    props: {
      ...cvData,
    },
  };
};

export default Home;
