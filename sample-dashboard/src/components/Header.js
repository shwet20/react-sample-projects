import React from "react";
import { LuMenuSquare } from "react-icons/lu";


const Header = () => {
  return (
    <header>
      <div className="appLogo">Dashboard</div>
      <div className="headerFilter">
        <select>
          <option>Last Month</option>
          <option>Last Week</option>
          <option>Last Day</option>
        </select>
        <div className="button">
          <span className="icon"><LuMenuSquare/></span>
          <label>Filters</label>
          <span className="batch">3</span>
        </div>
        <div className="button2">Edit Widgets</div>
      </div>
    </header>
  );
};

export default Header;
