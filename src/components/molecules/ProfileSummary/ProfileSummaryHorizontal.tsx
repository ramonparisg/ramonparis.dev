import React from "react";
import Text from "@components/atoms/Text/Text";

interface Props {
  presentation: {
    description: string;
    funFact: string;
    seeMore: string;
  };
}

const ProfileSummary: React.FC<Props> = ({ presentation = {} }) => {
  const { description, funFact, seeMore } = presentation;
  return (
    <div className={"p-4 white"}>
      <div className={"container"}>
        <div className={"mw-100"}>
          <div className={" lh-4 "}>
            <Text size={"small"} className={"justify-text pr-2"}>
              {description}
            </Text>
            <Text size={"small"} className={"mt-3"}>
              <b>🤓 Fun fact:</b>
              {funFact}{" "}
              <a
                href="https://github.com/ramonparisg/ramonparis.dev"
                className={"underline"}
              >
                {seeMore}
              </a>
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSummary;
