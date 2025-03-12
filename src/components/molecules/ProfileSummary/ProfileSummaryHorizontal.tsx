import React from "react";
import Text from "@components/atoms/Text/Text";

const ProfileSummary: React.FC = () => {
  return (
    <div className={"p-4 white"}>
      <div className={"container"}>
        <div className={"mw-100"}>
          <div className={" lh-4 "}>
            <Text size={"small"} className={"justify-text pr-2"}>
              Ingeniero informático con más de 8 años de experiencia, enfocado
              en el desarrollo de software, comprometido a las mejores prácticas
              y en constante actualización de conocimientos en nuevas
              tecnologías. Con habilidades de liderazgo, orientado a metas y con
              sólidos conocimientos en backend, frontend, arquitectura de
              software, google cloud platform, devops y más.
            </Text>
            <Text size={"xs"} className={"mt-1"}>
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
