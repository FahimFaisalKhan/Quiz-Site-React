import React from "react";
import Topic from "../Topic/Topic";

const TopicsComp = ({ topics }) => {
  return (
    <div className="grid  gap-16 grid-cols-1 sm:grid-cols-2 ">
      {topics.map((topic) => (
        <Topic topic={topic}></Topic>
      ))}
    </div>
  );
};

export default TopicsComp;
