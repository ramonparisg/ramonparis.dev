import React from "react";
import Text from "@components/atoms/Text/Text";

const ProfileSummary: React.FC = () => {
  return (
    <div className={"p-4 white"}>
      <div className={"mt-3"}>
        <div>
          <Text size={"big"} className={"medium-weight"}>
            👨🏽‍💻 About me
          </Text>
        </div>

        <div className={"mt-2 lh-3"}>
          <Text size={"small"} className={"mt-3"}>
            I am a software engineer with a passion for software development,
            good practices, operation of the business and constantly learning
            new technologies and patterns.
          </Text>
        </div>

        <div className={"mt-4"}>
          <Text size={"small"}>🇻🇪 Venezuelan</Text>
          <Text size={"small"} className={"mt-2"}>
            📍 Currently in Chile
          </Text>
        </div>

        <hr className={"mt-5 "} />
        <Text size={"big"} className={"medium-weight mt-5 mb-4"}>
          📨 Contact me
        </Text>
        <div className={"mt-2"}>
          <Text size={"small"}>📧 pariis78@gmail.com</Text>
          <Text size={"small"} className={"mt-2"}>
            ☎️ +56 9 9294 9532
          </Text>
          <a href="https://github.com/ramonparisg">
            <Text size={"small"} className={"mt-2"}>
              🐱 ramonparisg
            </Text>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileSummary;
