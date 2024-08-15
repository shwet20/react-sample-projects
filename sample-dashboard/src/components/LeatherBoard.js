import React from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const LeatherBoard = () => {
  return (
    <div className="leaderBoard">
      <div className="title">
        <div className="heading">PEOPLE LEADERBOARD</div>
        <span>All People</span>
      </div>
      <div>
        <table>
          <thead>
            <th>NAME</th>
            <th>IN PROGRESS</th>
            <th>COMPLETE</th>
          </thead>
          <tbody>
            <tr>
              <td>Lizzie Rose</td>
              <td>5</td>
              <td>36</td>
            </tr>
            <tr>
              <td>David Butler</td>
              <td>5</td>
              <td>34</td>
            </tr>
            <tr>
              <td>Nick Evans</td>
              <td>6</td>
              <td>33</td>
            </tr>
            <tr>
              <td>Marilyn Lubin</td>
              <td>4</td>
              <td>30</td>
            </tr>
            <tr>
              <td>Ervin Sharvill</td>
              <td>4</td>
              <td>29</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="tablePagination">
        <div className="currentPage">1-5 of 1237 items</div>
        <div className="currentNumber">
          <MdKeyboardArrowLeft />
          <MdKeyboardArrowRight />
        </div>
      </div>
    </div>
  );
};

export default LeatherBoard;
