import React from "react";
import "./index.scss";
import { Images } from "../../assets";
import { motion } from "framer-motion";
const HousePage = ({ items }) => {
  return (
    <div className="card">
      {items.map((item) => (
        <motion.div
          className="imageCard"
          key={item.id}
          animate={{ y: 100 }}
          transition={{ delay: 1 }}
        >
          <div className="image">
            {item.openSpots != 0 ? <p>Online</p> : <p>Sold out</p>}
            <img src={item.coverImg} alt="house" />
          </div>

          <div className="content">
            <div className="star">
              <img src={Images.Star} alt="star" />
              <p>
                <span>{item.stats.rating}</span>
                {item.stats.reviewCount}
                {item.location}
              </p>
            </div>
            <p>{item.title}</p>
            <p>
              <span>From ${item.price}</span> / person
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default HousePage;
