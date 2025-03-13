import React from "react";
import TimelineItem from "@components/molecules/Timeline/TimelineItem";
import findByType from "@components/utils/ChildrenComponentFinder";
import style from "./Timeline.module.scss";

export interface TimelineComponent extends React.FC {
  Item: typeof TimelineItem;
}

const Timeline: TimelineComponent = (props) => {
  const { children } = props;

  const items = findByType(children, TimelineItem);

  return (
    <ul className={`${style.timeline}`}>
      {items.map((item, i) => (
        <li key={i} className={"timeline-item"}>
          {item}
        </li>
      ))}
    </ul>
  );
};

Timeline.Item = TimelineItem;

export default Timeline;
