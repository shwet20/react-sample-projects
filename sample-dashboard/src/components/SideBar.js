import React from "react";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardArrowRight,
  MdOutlineSpaceDashboard,
} from "react-icons/md";
import { PiStackPlus, PiPlugCharging } from "react-icons/pi";
import { IoIosPeople } from "react-icons/io";
import { BiSolidColorFill } from "react-icons/bi";
import { VscGraph } from "react-icons/vsc";
import { IoMailOpenOutline, IoSettingsOutline } from "react-icons/io5";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { TbSwitchHorizontal } from "react-icons/tb";
import { FaRegEye } from "react-icons/fa";
import { RiProfileLine } from "react-icons/ri";

const SideBar = () => {
  return (
    <div className="sideBar">
      <div className="header">
        <div className="logoSection">
          <div className="logo">WD</div>
          <div>
            <p>ENTERPRISE PLAN</p>
            <span>Academy Hub</span>
          </div>
        </div>
        <div className="togglebtn">
          <MdKeyboardDoubleArrowLeft />
        </div>
      </div>
      <div className="menu-items">
        <div className="menu dashboard">
          <div className="iconText">
            <div className="menu-logo">
              <MdOutlineSpaceDashboard />
            </div>
            <p className="menu-name">Dashboard</p>
          </div>
        </div>
        <div className="menu">
          <div className="iconText">
            <div className="menu-logo">
              <PiStackPlus />
            </div>
            <p className="menu-name">Content</p>
          </div>
          <p className="menu-arrow">
            <MdKeyboardArrowRight />
          </p>
        </div>
        <div className="menu">
          <div className="iconText">
            <div className="menu-logo">
              <IoIosPeople />
            </div>
            <p className="menu-name">People</p>
          </div>
          <p className="menu-arrow">
            <MdKeyboardArrowRight />
          </p>
        </div>
        <div className="menu">
          <div className="iconText">
            <div className="menu-logo">
              <BiSolidColorFill />
            </div>
            <p className="menu-name">Design</p>
          </div>
          <p className="menu-arrow">
            <MdKeyboardArrowRight />
          </p>
        </div>
        <div className="menu">
          <div className="iconText">
            <div className="menu-logo">
              <VscGraph />
            </div>
            <p className="menu-name">Analytics</p>
          </div>
          <p className="menu-arrow">
            <MdKeyboardArrowRight />
          </p>
        </div>
        <div className="menu">
          <div className="iconText">
            <div className="menu-logo">
              <IoMailOpenOutline />
            </div>
            <p className="menu-name">Communications</p>
          </div>
          <p className="menu-arrow">
            <MdKeyboardArrowRight />
          </p>
        </div>
        <div className="menu">
          <div className="iconText">
            <div className="menu-logo">
              <PiPlugCharging />
            </div>
            <p className="menu-name">Apps</p>
          </div>
          <p className="menu-arrow">
            <MdKeyboardArrowRight />
          </p>
        </div>
        <div className="menu">
          <div className="iconText">
            <div className="menu-logo">
              <AiOutlineThunderbolt />
            </div>
            <p className="menu-name">Automation</p>
          </div>
          <p className="menu-arrow">
            <MdKeyboardArrowRight />
          </p>
        </div>
      </div>
      <div className="menu-items2">
        <p className="text">YOUR ACADEMY</p>
        <div className="">
          <div className="menu">
            <div className="menu-logo">
              <FaRegEye />
            </div>
            <p className="menu-name">Preview School</p>
          </div>
          <div className="menu">
            <div className="menu-logo">
              <TbSwitchHorizontal />
            </div>
            <p className="menu-name">Switch School</p>
          </div>
          <div className="menu">
            <div className="menu-logo">
              <IoSettingsOutline />
            </div>
            <p className="menu-name">School Setting</p>
          </div>
          <div className="menu">
            <div className="menu-logo">
              <RiProfileLine />
            </div>
            <p className="menu-name">Billing Portal</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
