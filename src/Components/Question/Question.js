import React, { useState } from "react";
import { Radio, Form, Toast, Alert, Button } from "react-daisyui";
import { parse } from "../Utilities/parser";
import "./Question.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
const Question = ({ questionData, serial, verifyAnswer }) => {
  const [toast, setToast] = useState();
  const [showAnswer, setShowAnswer] = useState(false);
  const { options, question, id, correctAnswer } = questionData;

  const parsedQuestion = parse(question).innerText;
  console.log(parsedQuestion);
  return (
    <div className=" bg-slate-400 mb-32 text-base-100 py-8 px-2 sm:p-12 rounded-lg ">
      <div className="flex flex-col-reverse  sm:flex-row mb-8 justify-between">
        <h1 className="text-xl font-medium ">
          Quiz : {serial} {parsedQuestion}
        </h1>
        <div
          className="cursor-pointer self-end sm:self-auto"
          onClick={() => setShowAnswer(!showAnswer)}
        >
          {showAnswer ? (
            <FontAwesomeIcon
              className="text-2xl mb-2 sm:mb-auto"
              icon={faEyeSlash}
            ></FontAwesomeIcon>
          ) : (
            <FontAwesomeIcon
              className="text-2xl mb-2 sm:mb-auto"
              icon={faEye}
            ></FontAwesomeIcon>
          )}
        </div>
      </div>

      <div className="mt-4">
        <Form className=" grid grid-cols-1 sm:grid-cols-2 gap-4 ">
          {options.map((option) => {
            return (
              <div>
                <Form.Label
                  className="p-8 bg-base-100 rounded-lg"
                  title={option}
                  onClick={() =>
                    verifyAnswer(option, correctAnswer, setToast, id)
                  }
                >
                  <Radio
                    name="radio1"
                    className="bg-base-100 checked:bg-blue-500"
                  />
                </Form.Label>
              </div>
            );
          })}
        </Form>
        <div
          className={`text-center mt-5 text-xl font-medium ${
            showAnswer ? "block" : "hidden"
          }`}
        >
          <span className="text-warning mr-3"> Correct Answer: </span>{" "}
          <br className="sm:hidden" />
          {correctAnswer}
        </div>
      </div>
      {toast && (
        <Toast vertical="top" horizontal="center" className="w-96">
          <Alert status={toast.status}>
            <div className="w-full flex-row justify-between gap-2">
              <h3>{toast.text}</h3>
            </div>
            <Button color="ghost" onClick={() => setToast("")}>
              X
            </Button>
          </Alert>
        </Toast>
      )}
    </div>
  );
};

export default Question;
