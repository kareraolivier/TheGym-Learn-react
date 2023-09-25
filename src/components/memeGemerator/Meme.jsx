import React, { useState } from "react";
import MemeForm from "./MemeForm";
import MemeImageCard from "./MemeImageCard";
import "./meme.scss";
import Photo from "../../Data/Image.json";
const Meme = () => {
  const [image, setImage] = useState(0);
  const [formData, setFormData] = useState({});
  const changeImage = () => {
    const MemeImage = Math.floor(Math.random() * Photo.length);
    console.log(MemeImage);
    setImage(MemeImage);
  };
  const HundleChange = (event) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  };
  return (
    <div className="meme">
      <h1>Meme Generator</h1>

      <MemeForm changeImage={changeImage} HundleChange={HundleChange} />
      <MemeImageCard
        image={Photo[image]}
        firstMeme={formData.firstMeme ? formData.firstMeme : "Shut up"}
        lastMeme={formData.lastMeme ? formData.lastMeme : "And take my money"}
      />
    </div>
  );
};

export default Meme;
