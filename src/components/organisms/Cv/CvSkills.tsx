import React from "react";
import TitleSeparator from "@components/molecules/Separators/TitleSeparator";
import Text from "@components/atoms/Text/Text";
import styles from "@components/organisms/Cv/Styles.module.scss";

function groupBy(list, keyGetter) {
  const map = new Map();
  list.forEach((item) => {
    const key = keyGetter(item);
    const collection = map.get(key);
    if (!collection) {
      map.set(key, [item]);
    } else {
      collection.push(item);
    }
  });
  return Object.fromEntries(map);
}

const CvSkills: React.FC<any> = ({ data }) => {
  const groupedData = groupBy(data, (data) => data.knowledgeCategoryId.name);
  return (
    <>
      <TitleSeparator color={"orange"}>🤓 Technical Skills</TitleSeparator>
      <div className={"container pl-5 pr-5"}>
        {Object.keys(groupedData).map((key, i) => (
          <div key={i} className={`${styles.information} w-100`}>
            <Text size={"big"} className={"medium-weight mb-1 dark-orange"}>
              {key}
            </Text>
            <div
              className={
                "container justify-content-space-between w-100 center-div"
              }
            >
              {groupedData[key].map((values, i) => (
                <div key={i} className={"item w-50"}>
                  <Text size={"medium"} className={"big-weight center-text"}>
                    {values.name}
                  </Text>
                  <Text size={"xs"} className={"dark-gray big-weight"}>
                    Description
                  </Text>
                  <Text size={"small"} className={"black lh-5 item"}>
                    {values.description}
                  </Text>
                  {values.technologies && (
                    <>
                      <Text size={"xs"} className={"dark-gray big-weight"}>
                        Tools
                      </Text>
                      <Text size={"small"} className={"black lh-5 item"}>
                        {values.technologies}
                      </Text>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CvSkills;
