import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartBar } from "@fortawesome/free-solid-svg-icons";
const Heading = () => {
  return (
    <section className="mx-auto container text-accent-content flex flex-col">
      <div className="grid grid-cols-4 gap-2 mb-8 auto-rows-max sm:hidden">
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
      <h1 className="text-center font-serif text-4xl px-5 sm:text-7xl">
        Welcome To Quick-Quiz!
      </h1>
      <p className="text-justify  mt-7 sm:mb-10 text-base text-base-content px-6 sm:px-36 sm:text-lg">
        Hey There! If you are an intermidiate web-developer and you are not sure
        that you are on the right track or not , If wanna check how much you can
        memorize of what you have learned and or find out what is yet to learn
        or even preparing for job, This is the right place for you. Participate
        in our quizes and sharpen your skill.
      </p>
      <div className="flex justify-between items-center flex-col-reverse md:flex-row sm:mt-16 ">
        <div className="w-full p-12 flex flex-col gap-5 justify-center ">
          <div className="bg-base-content p-6 rounded-lg text-base-100">
            <h1 className="text-2xl">
              <span className="text-5xl">36</span> Questions
            </h1>
          </div>
          <div className="bg-base-content p-6 rounded-lg text-base-100">
            <h1 className="text-2xl">
              <span className="text-5xl">4</span> Topics
            </h1>
          </div>
          <div className="bg-base-content p-6 rounded-lg text-base-100">
            <h2 className="text-2xl mb-2">See stats</h2>
            <FontAwesomeIcon className="text-5xl" icon={faChartBar} />
          </div>
          <p className="bg-base-content p-6 rounded-lg text-base-100 text-xl">
            Measure how far you are along the way of Web Development!
          </p>
        </div>
        <div className="hidden sm:grid grid-cols-4 gap-2 auto-rows-max">
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
