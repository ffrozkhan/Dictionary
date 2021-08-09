import React from "react";
import { Form, Card, Row, Col, Button } from "react-bootstrap";

const Pronounciation = () => {
  return (
    <div>
      <Card className="leftcontent">
        <Form.Control
          type="search"
          placeholder="Search for word"
        ></Form.Control>
        <Button>Listen</Button>
      </Card>
    </div>
  );
};

export default Pronounciation;
