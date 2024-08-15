import React from "react";
import { FaCircleInfo } from "react-icons/fa6";
import { IoIosArrowRoundUp, IoIosArrowRoundDown } from "react-icons/io";


const ScoreCard = ({ title, percent, arrow, arrowPercent, subinfo1, num1, subinfo2, num2 }) => {
  return (
    <div className="scorecard">
      <div className="row1">
        <div className="title-wrapper">
          <div className="title">{title}</div>
          <div className="info-logo"><FaCircleInfo/></div>
        </div>
        <div className="text">All Reports</div>
      </div>
      <div className="row2">
        <div className="percentage">{percent}</div>
        <div className={arrow === "up" ? "increment" : "decrement"}>
          <div>{arrow === "up" ? <IoIosArrowRoundUp /> : <IoIosArrowRoundDown/>}</div> 
          <p>{arrowPercent}</p>
        </div>
      </div>
      <div className="row3">
        <div className="section">
         <div>
            <span>{subinfo1}</span>
            <div className="digit">{num1}</div>
          </div>
          <div>
            <span>{subinfo2}</span>
            <div className="digit">{num2}</div>
          </div>
        </div>
        <div>||!|!|||!!||||!!||!||!!||!!|</div>
      </div>
    </div>
  )
}

export default ScoreCard;