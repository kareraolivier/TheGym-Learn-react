import React from "react";
import { Images } from "../../assets";
import "./navbar.scss";
const NavBar = () => {
  console.log(Images.Logo);
  return (
    <div className="navbar">
      <div className="logo">
        <img src={Images.Logo} alt="logo" width={30} height={30} />
        <p>airbnb</p>
      </div>
    </div>
  );
};

export default NavBar;
