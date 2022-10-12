import React from "react";
import Topic from "../Topic/Topic";

const TopicsComp = ({ topics }) => {
  console.log(topics);
  return (
    <div className="grid  gap-16 grid-cols-1 sm:grid-cols-2 px-2">
      {topics.map((topic) => (
        <Topic key={topic.id} topic={topic}></Topic>
      ))}
    </div>
  );
};

export default TopicsComp;
