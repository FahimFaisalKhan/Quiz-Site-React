import React from "react";
import { Button, Card } from "react-daisyui";
import "./Topic.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Topic = ({ topic }) => {
  const { id, name, logo, total } = topic;
  return (
    <div>
      <Card
        side="lg"
        className="py-5 justify-between bg-gray-800 shadow-2xl shadow-gray-600 lg:card-compact xl:card-side"
      >
        <Card.Image className="w-6/12 " src={logo} alt="Shoes" />
        <Card.Body>
          <Card.Title tag="h2">{name}</Card.Title>
          <p className="text-xl">Total Questions: {total}</p>
          <Card.Actions className="justify-start">
            <Link to={`/${id}`}>
              <Button className="text-base-content capitalize text-base mt-4 py-4 h-auto bg-base-300 ">
                Start Practice
                <FontAwesomeIcon className="ml-2" icon={faArrowRight} />
              </Button>
            </Link>
          </Card.Actions>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Topic;
