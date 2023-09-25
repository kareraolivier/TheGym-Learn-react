import React from "react";
import { Images } from "../../assets";
import "./navbar.scss";
const NavBar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={Images.Logo} alt="logo" width={30} height={30} />
        <p>airbnb</p>
      </div>
      {/* <h2 className="text-2xl text-green-600">noella</h2> */}
    </div>
  );
};

export default NavBar;
