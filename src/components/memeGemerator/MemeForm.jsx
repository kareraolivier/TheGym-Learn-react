import React from "react";
import "./meme.scss";
const MemeForm = ({ changeImage, HundleChange }) => {
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="firstMeme"
          name="firstMeme"
          onChange={HundleChange}
        />
        <input
          type="text"
          placeholder="lastMeme"
          name="lastMeme"
          onChange={HundleChange}
        />
      </form>
      <button
        type="button"
        onClick={changeImage}
        className="bg-purple-500 font-bold text-2xl text-white py-2 px-8 rounded-4 flex m-auto mb-4"
      >
        Change the image
      </button>
    </div>
  );
};

export default MemeForm;
