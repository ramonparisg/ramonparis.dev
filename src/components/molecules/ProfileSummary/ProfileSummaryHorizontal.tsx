import React from "react";
import Text from "@components/atoms/Text/Text";

const ProfileSummary: React.FC = () => {
  return (
    <div className={"p-4 white"}>
      <div className={"container"}>
        <div className={"mw-100"}>
          <div className={" lh-4 "}>
            <Text size={"small"} className={"justify-text pr-2"}>
              Hello world! Soy un ingeniero de software con más de 8 años de
              experiencia desarrollando, diseñando soluciones y liderando
              equipos. Me apasiona involucrarme en los procesos de negocio y
              desde ahí poder aportar en soluciones técnicas. Motivado por el
              aprendizaje constante y los desafíos tecnológicos
            </Text>
            <Text size={"small"} className={"mt-3"}>
              <b>🤓 Fun fact:</b> Este CV son en realidad componentes de React
              que generan dinámicamente un PDF utilizando NextJs + Puppeteer.{" "}
              <a
                href="https://github.com/ramonparisg/ramonparis.dev"
                className={"underline"}
              >
                Ver más
              </a>
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSummary;
