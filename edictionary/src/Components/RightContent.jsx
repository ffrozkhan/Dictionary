import React from "react";
import { Card } from "react-bootstrap";
import "./Dictionary.css";
import MeaningList from "./MeaningList";

const RightContent = () => {
  return (
    <div>
      <Card className="rightcontent">
        <p>The right content is here</p>
        <MeaningList />
      </Card>
    </div>
  );
};

export default RightContent;
