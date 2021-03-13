import React from "react";
import MainPageCvTemplate from "../components/template/MainPageCvTemplate/MainPageCvTemplate";
import { GetServerSideProps, NextPage } from "next";
import { CurriculumVitaeDtoResponse } from "@payloads/response/CurriculumVitaeDtoResponse";
import adapter from "@infrastructure/httpClient/BaseApi/CurriculumVitaeHttpClient";

const Home: NextPage<CurriculumVitaeDtoResponse> = ({ data }) => {
  return <MainPageCvTemplate data={data} />;
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
