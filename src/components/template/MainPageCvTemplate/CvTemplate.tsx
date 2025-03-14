import React from "react";
import CvAcademyStudies from "@components/organisms/Cv/CvAcademyStudies";
import CvJobs from "@components/organisms/Cv/CvJobs";
import CvSkills from "@components/organisms/Cv/CvSkills";
import ProfileSummaryHorizontal from "@components/molecules/ProfileSummary/ProfileSummaryHorizontal";
import Text from "@components/atoms/Text/Text";
import githubIcon from "@assets/icons-github.svg";
import linkedinIcon from "@assets/icons-linkedin.svg";
import Image from "next/image";
import type { Cv } from "../../../service/core/domain/cv";

interface Props {
  data: Cv;
}

const CvTemplate: React.FC<Props> = ({ data }: Props) => {
  const { presentation } = data;
  return (
    <>
      <div id={"page-1"} className={"all-screen"}>
        <div className={"flex flex-wrap"}>
          <div className={"bg-black white"}>
            <div className={"p-4"}>
              <div className={"center-text"}>
                <div>
                  <Text size={"big"} className={"medium-weight"}>
                    Ramón París
                  </Text>
                </div>
                <hr />
              </div>
              <div>
                <div className={"mt-2"}>
                  <Text size={"small"}>📍 Santiago, Chile</Text>
                  <Text size={"small"}>📧 pariis78@gmail.com</Text>
                  <Text size={"small"} className={""}>
                    ☎️ +56 9 9294 9532
                  </Text>
                  <a href="https://github.com/ramonparisg">
                    <Text size={"small"} className={""}>
                      <Image
                        alt={"Github icon"}
                        src={githubIcon}
                        className={"inline"}
                      />{" "}
                      <span className={"underline"}>ramonparisg</span>
                    </Text>
                  </a>
                  <a href="https://www.linkedin.com/in/ramon-paris/">
                    <Text size={"small"} className={""}>
                      <Image
                        alt={"Github icon"}
                        src={linkedinIcon}
                        className={"inline"}
                      />{" "}
                      <span className={"underline"}>/in/ramon-paris</span>
                    </Text>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className={"bg-dark-gray grow"}>
            <ProfileSummaryHorizontal presentation={presentation} />
          </div>
        </div>
        <div className={"flex flex-wrap grow p-5"}>
          <CvJobs experiences={data.experiences} />
        </div>
      </div>
      <div
        id={"page-2"}
        className={
          "flex flex-wrap all-screen column-flex justify-content-space-between"
        }
      >
        <div className={"w-100 p-5 grow"}>
          <CvAcademyStudies />
          <CvSkills data={data.skills} />
        </div>
        <div className={"w-100 bg-orange "} style={{ height: 40 }} />
      </div>
    </>
  );
};

export default CvTemplate;
