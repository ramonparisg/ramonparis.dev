import React from "react";
import TimelineItem from "@components/molecules/Timeline/TimelineItem";
import findByType from "@components/utils/ChildrenComponentFinder";
import style from "./Timeline.module.css";

export interface TimelineComponent extends React.FC {
  Item: typeof TimelineItem;
}

const Timeline: TimelineComponent = (props) => {
  const { children } = props;

  const items = findByType(children, TimelineItem);

  return (
    <div className={`${style.timeline}`}>
      <ul>
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

Timeline.Item = TimelineItem;

export default Timeline;
