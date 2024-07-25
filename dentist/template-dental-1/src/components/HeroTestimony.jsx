import React from "react";
import HeroTesti from "../assets/images/Hero TestiEllipse 3.png";

const HeroTestimony = () => {
  return (
    <div className="bg-white absolute bottom-3 left-5 md:bottom-40  mdleft-16 bg-opacity-20 md:w-[500px] m-3 rounded-md">
      <h4 className="text-[#0485ab] font-barlow font-bold mb-2">
        "Best purchase ever!"
      </h4>
      <div className="flex justify-start items-center gap-5">
        <p>
          "Testimonial lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Autem dolore, alias."
        </p>
        <img src={HeroTesti} alt="" className="" />
      </div>
    </div>
  );
};

export default HeroTestimony;
