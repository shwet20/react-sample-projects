import React from "react";
import { FaCircleInfo } from "react-icons/fa6";
import Graph from "./Graph";

const GraphCard = () => {
  return (
    <div className="graphCard">
      <div className="cardHeader">
        <div className="title">
          <div>Monthly Active Learners</div>
          <div>
            <FaCircleInfo />
          </div>
        </div>
        <span>All Reports</span>
      </div>
      <div className="graph">
        <Graph/>
      </div>
    </div>
  );
};

export default GraphCard;
