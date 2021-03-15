import React from "react";
import Text from "@components/atoms/Text/Text";
import styles from "./Separator.module.css";

interface Props {
  color?: "black" | "green" | "blue" | "orange";
  children: string;
}

const TitleSeparator: React.FC<Props> = ({ children, color = "black" }) => {
  return (
    <div>
      <Text
        size={"big"}
        className={`${color} medium-weight big-letter-spacing ${styles.leftSpace} ${styles.separator}`}
      >
        {children as string}
      </Text>
    </div>
  );
};

export default TitleSeparator;
