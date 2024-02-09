import React from "react";
import TitleSeparator from "@components/molecules/Separators/TitleSeparator";
import Timeline from "@components/molecules/Timeline/Timeline";
import styles from "@components/organisms/Cv/Styles.module.scss";
import Text from "@components/atoms/Text/Text";

const CvJobs: React.FC = () => {
  const data = [
    {
      id: "4",
      company: "Falabella Corp",
      titles: [
        {
          id: "21",
          title: "Technical Manager",
          description:
              `As the leader of the technical leads team, I spearhead the technical design of projects, architect microservices, define development standards, and provide technical support to development teams. My current focus lies in designing and implementing a highly scalable and configurable orchestration system for the three major companies within Falabella Holding (Sodimac, Tottus, and Falabella Retail), spanning across 7 countries. This system is pivotal in handling over 100,000 requests per minute, making it instrumental in managing large-scale events such as Black Friday or cyber sales, thereby adding  significant value to the company.

Key tools and methodologies employed include Hexagonal architecture, DDD, Event-driven design, CQRS, and technologies such as Golang, Java, Spring Boot, ReactJS, Google Cloud Platform (GCP), Kubernetes, Terraform, gRPC, GraphQL, among others.`,
          startDate: "Nov 2022",
          endDate: "Present",
          status: "ON_GOING",
        },
      ],
    },
    {
      id: "3",
      company: "Falabella Retail",
      titles: [
        {
          id: "21",
          title: "Technical Lead",
          description:
            "As the technical lead of a project centered on orchestrating logistics and payment events within the back-office system of a retail company, my responsibilities include designing and developing highly scalable microservices. Additionally, I lead a team of 8 individuals based in both India and Chile.",
          startDate: "May 2021",
          endDate: "Nov 2022",
          status: "FINISHED",
        },
        {
          id: "21",
          title: "Senior Fullstack developer",
          description:
              "Developer of event-driven microservices within a Scrum team, responsible for designing solutions, addressing technical queries, and coordinating integrations with external teams in India. Tools used include Java, Spring Boot, ReactJS, and GCP.",
          startDate: "Feb 2020",
          endDate: "May 2021",
          status: "FINISHED",
        },
      ],
    },
    {
      id: "2",
      company: "RetailSBS",
      titles: [
        {
          id: "2",
          title: "Consultant and fullstack developer",
          description:
            "Consultant and web application developer specializing in retail business integrations. I have collaborated with clients such as Salcobrand, Cencosud, and Caja Los Andes, creating solutions for payment domains, logistics systems, order management, and ecommerce platforms. My toolkit includes ReactJS, Java, Spring Boot, Struts2, AWS, IBM Commerce V7, and Terraform.",
          startDate: "Dec 2018",
          endDate: "Feb 2020",
        },
      ],
    },
  ];

  return (
    <div className={"lh-3"}>
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
