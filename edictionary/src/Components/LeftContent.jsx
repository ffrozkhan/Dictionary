import React from "react";
import { Form, Card, Col, Row, Button } from "react-bootstrap";
import Pronounciation from "./Pronounciation";
import "./Dictionary.css";
import MeaningList from "./MeaningList";

const LeftContent = ({ searchHandle, resData }) => {
  console.log("resdata", resData);
  return (
    <div>
      <Card className="leftcontent">
        <Form.Control
          type="search"
          placeholder="Search for Word"
        ></Form.Control>
        <Button onClick={searchHandle}>Search</Button>
        <Pronounciation />
        {resData.map(
          (item) => item.meanings.length > 0 && <MeaningList itemdata={item} />
        )}
      </Card>
    </div>
  );
};

export default LeftContent;
