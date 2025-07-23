import React, { useState } from "react";
import { assets } from "../assets/assets";
// Assuming the provided CSS is in a global file like index.css or App.css
// If not, and you placed the .slider styles in a separate file (e.g., SliderStyles.css),
// you would need to import it here: import './SliderStyles.css';

const Bgslider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderChange = (e) => {
    setSliderPosition(e.target.value);
  };

  return (
    <div className="pb-10 md:py-20 mx-2">
      <h1 className="mb-12 sm:mb-20 text-center text-2xl lg:text-3xl xl:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent">
        Remove Background With High <br /> Quality and Accuracy
      </h1>

      <div className="relative w-full max-w-3xl overflow-hidden m-auto rounded-xl">
        <img
          src={assets.image_w_bg}
          alt=""
          style={{ clipPath: `inset(0 ${100.2 - sliderPosition}% 0 0)` }}
          className="w-full h-auto"
        />

        <img
          src={assets.image_wo_bg}
          alt=""
          style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
          className="absolute top-0 left-0 w-full h-full"
        />

        <div
          className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-600 z-5"
          style={{ transform: `translateY(-50%)` }}
        ></div>

        <input
          type="range"
          min={0}
          max={100}
          value={sliderPosition}
          onChange={handleSliderChange}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-2 z-10 appearance-none cursor-pointer slider"
        />
      </div>
    </div>
  );
};

export default Bgslider;