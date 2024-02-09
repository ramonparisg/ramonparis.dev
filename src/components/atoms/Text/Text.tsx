import React from "react";
import style from "./Text.module.css";

type Sizes = "xs" | "small" | "medium" | "big" | "xl";

export interface TextProps {
  children: string | number | React.ReactNode;
  size?: Sizes;
  className?: string;
}

const Text: React.FC<TextProps> = ({
  children,
  size = "small",
  className,
}: TextProps) => {
  return <div className={`${style[size]} ${className}`}>{children}</div>;
};

export default Text;
