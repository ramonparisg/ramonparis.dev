import React from "react";
import TitleSeparator from "@components/molecules/Separators/TitleSeparator";
import Timeline from "@components/molecules/Timeline/Timeline";
import styles from "@components/organisms/Cv/Styles.module.scss";
import Text from "@components/atoms/Text/Text";

const CvJobs: React.FC = () => {
  const data = [
    {
      id: "2",
      company: "RetailSBS",
      titles: [
        {
          id: "21",
          title: "Senior Fullstack developer at Falabella Retail",
          description:
            "Developer of scrum team in charge of develop event driven microservices, refine requirements, help with doubts of the teams members and coordinate integrations with external teams located in India. Tools: Spring boot, ReactJS, Google Cloud Platform, Golang",
          startDate: "Feb 2020",
          endDate: "Present",
          status: "FINISHED",
        },
        {
          id: "20",
          title: "Fullstack developer at Easy - Cencosud",
          description:
            "Developer of scrum team in charge of develop and maintain ecommerce system: IBM Commerce. Main technologies used: Spring boot, ReactJS, Amazon Web Services, IBM Commerce V7 y Struts2",
          startDate: "Oct 2019",
          endDate: "Feb 2020",
          status: "FINISHED",
        },
        {
          id: "2",
          title: "Consultant and fullstack developer",
          description:
            "Consultant and developer of web applications focused on integrations inside retail's business. For example, payment domains, logistics systems, order management systems, ecommerce systems. Tools: ReactJs, jQuery, JSP, Spring boot, AWS, Terraform, Gitlab configurations ",
          startDate: "Dec 2018",
          endDate: "Oct 2019",
        },
      ],
    },
    {
      id: "1",
      company: "Ipsos Interactive Service",
      titles: [
        {
          id: "1",
          title: "Scriptwriter",
          description:
            "Developer and QA of projects focused in Marketing Research: my main responsibilities were develop and do unit testing of surveys for clients in Latin America and Europe",
          startDate: "May 2017",
          endDate: "Dec 2018",
          knowledgeList: [
            {
              id: "fake_data",
              knowledgeCategory: {
                id: "fake_data",
                name: "fake_data",
              },
              name: "fake_data",
              imgUrl: "fake_data",
              description: "fake_data",
              knowledgeExpertise: "EXPERT",
            },
          ],
          status: "FINISHED",
        },
      ],
    },
  ];

  return (
    <div className={"lh-4"}>
      <TitleSeparator color={"blue"}>💻 Experience</TitleSeparator>
      <div style={{ marginLeft: "5%" }} className={"mt-3"}>
        {data.map((d, i) => (
          <div key={i} className={`${styles.information}`}>
            <Text size={"big"} className={"medium-weight"}>
              {d.company}
            </Text>
            <Timeline>
              {d.titles.map((titles) => (
                <Timeline.Item key={titles.id}>
                  <div className={"lh-4 justify-text"}>
                    <Text size={"medium"} className={"big-weight"}>
                      {titles.title}
                    </Text>
                    <Text size={"medium"} className={"dark-gray"}>
                      {`${titles.startDate} - ${titles.endDate}`}
                    </Text>
                    <Text size={"small"} className={"mt-2"}>
                      {titles.description}
                    </Text>
                  </div>
                </Timeline.Item>
              ))}
            </Timeline>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CvJobs;
