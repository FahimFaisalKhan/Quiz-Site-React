import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartBar } from "@fortawesome/free-solid-svg-icons";
const Heading = () => {
  return (
    <section className="mx-auto container text-accent-content">
      <h1 className="text-center font-serif text-5xl px-5 sm:text-7xl">
        Welcome To Quick-Quiz!
      </h1>
      <p className="text-justify  mt-7 mb-10 text-lg text-slate-300 px-6 sm:px-36">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum delectus
        quidem, alias recusandae dolorum rerum provident error unde
        reprehenderit? Incidunt! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Soluta, consequatur?
      </p>
      <div className="flex justify-between items-center flex-col-reverse md:flex-row mt-16">
        <div className="w-full p-12 flex flex-col gap-5 justify-center ">
          <div className="bg-slate-400 p-6 rounded-lg text-base-100">
            <h1 className="text-2xl">
              <span className="text-5xl">36</span> Questions
            </h1>
          </div>
          <div className="bg-slate-400 p-6 rounded-lg text-base-100">
            <h1 className="text-2xl">
              <span className="text-5xl">4</span> Topics
            </h1>
          </div>
          <div className="bg-slate-400 p-6 rounded-lg text-base-100">
            <h2 className="text-2xl mb-2">See stats</h2>
            <FontAwesomeIcon className="text-5xl" icon={faChartBar} />
          </div>
          <p className="bg-slate-400 p-6 rounded-lg text-base-100 text-xl">
            Measure how far you are along the way of Web Development!
          </p>
        </div>
        <div className="grid grid-cols-4 gap-2 auto-rows-max">
          <img
            className="inline-block w-full rounded-lg  "
            src={require("../../Static/Images/12.jpg")}
            alt=""
          />
          <img
            className="inline-block w-full rounded-lg "
            src={require("../../Static/Images/11.jpg")}
            alt=""
          />
          <img
            className="inline-block w-full rounded-lg "
            src={require("../../Static/Images/10.jpg")}
            alt=""
          />
          <img
            className="inline-block w-full rounded-lg "
            src={require("../../Static/Images/9.jpg")}
            alt=""
          />
          <img
            className="inline-block w-full rounded-lg "
            src={require("../../Static/Images/8.jpg")}
            alt=""
          />
          <img
            className="inline-block w-full rounded-lg "
            src={require("../../Static/Images/7.jpg")}
            alt=""
          />
          <img
            className="inline-block w-full rounded-lg "
            src={require("../../Static/Images/6.jpg")}
            alt=""
          />
          <img
            className="inline-block w-full rounded-lg "
            src={require("../../Static/Images/5.jpg")}
            alt=""
          />
          <img
            className="inline-block w-full rounded-lg "
            src={require("../../Static/Images/4.jpg")}
            alt=""
          />
          <img
            className="inline-block w-full rounded-lg "
            src={require("../../Static/Images/3.jpg")}
            alt=""
          />
          <img
            className="inline-block w-full rounded-lg "
            src={require("../../Static/Images/2.jpg")}
            alt=""
          />
          <img
            className="inline-block w-full rounded-lg "
            src={require("../../Static/Images/1.jpg")}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Heading;
