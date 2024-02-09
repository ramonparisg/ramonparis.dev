import ProfileImage from "@components/molecules/ProfileImage/ProfileImage";
import ProfileSummary from "@components/molecules/ProfileSummary/ProfileSummary";
import React from "react";

const CvSidebar: React.FC = () => {
  return (
    <div className={"h-100 container column-flex"}>
      <div className={"grow bg-dark-gray"}>
        <ProfileSummary />
      </div>
    </div>
  );
};

export default CvSidebar;
