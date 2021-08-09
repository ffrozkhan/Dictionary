import React from "react";
import { Card } from "react-bootstrap";
import Meaning from "./Meaning";

const MeaningList = ({ itemdata }) => {
  console.log("itemdata", itemdata);
  return (
    <div>
      <Card className="meaningss">
        <span>Meaning List</span>
        {itemdata.meanings.map((m) => (
          <Meaning />
        ))}
      </Card>
    </div>
  );
};

export default MeaningList;
