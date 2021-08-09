import React, { useState } from "react";
import { Col, Card, Row } from "react-bootstrap";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";
import MeaningList from "./MeaningList";
import "./Dictionary.css";
import axios from "axios";

const Dictionary = () => {
  const [resData, setResData] = useState([]);
  console.log("resdata", resData);
  const handleSearch = () => {
    axios
      .get("https://api.dictionaryapi.dev/api/v2/entries/en_US/rate")
      .then((res) => {
        console.log(res.data);
        setResData([...res.data]);
      });
  };
  return (
    <div>
      <Card className="dictionary">
        <Row>
          <Col md={8}>
            <LeftContent searchHandle={handleSearch} resData={resData} />
          </Col>
          <Col md={4}>
            <RightContent />
          </Col>
          <Col>
            <MeaningList />
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default Dictionary;
