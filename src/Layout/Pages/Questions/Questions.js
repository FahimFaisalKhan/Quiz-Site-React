import React from "react";
import { useLoaderData } from "react-router-dom";
import Question from "../../../Components/Question/Question";

const Questions = () => {
  const data = useLoaderData();
  console.log(data);
  const questions = data.data.questions;
  console.log(questions);
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl text-center mb-10">
        Answer the following Questions by filling in the circles:
      </h1>
      {questions.map((q, index) => (
        <Question questionData={q} serial={index + 1}></Question>
      ))}
    </div>
  );
};

export default Questions;
