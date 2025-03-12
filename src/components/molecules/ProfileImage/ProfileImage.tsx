import React from "react";
import Image from "@components/atoms/Image/index";
import Text from "@components/atoms/Text/Text";

const ProfileImage: React.FC = () => {
  return (
    <div className={"p-4"}>
      <div className={"center-text mt-3 white"}>
        <div>
          <Text size={"big"} className={"medium-weight"}>
            Ramón París
          </Text>
        </div>
        <hr />
        <div className={"mt-2 mb-1"}>
          <Text size={"medium"} className={"light-weight"}>
            Software engineer
          </Text>
        </div>
      </div>
    </div>
  );
};

export default ProfileImage;
