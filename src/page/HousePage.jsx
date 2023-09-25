import React from "react";
import "../scss/housePage.scss";
import HouseCard from "../components/housePage/HousePage";
import data from "../Data/HouseData.json";
const HousePage = () => {
  return (
    <div className="house">
      <HouseCard items={data} />
    </div>
  );
};

export default HousePage;
