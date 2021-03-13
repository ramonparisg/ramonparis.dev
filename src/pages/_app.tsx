import React from "react";
import { AppProps } from "next/app";
import "../styles/globals.scss";
import Head from "next/head";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>ramonparis.dev</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name={"description"} content={"Ramón París portfolio page :)"} />
        <meta name="robots" content="index, follow" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
