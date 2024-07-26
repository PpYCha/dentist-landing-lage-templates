import React from "react";
import Image from "../assets/images/SeeResult_pexels-andrea-piacquadio-3952376 1.png";
import TextLabelSubHeader from "./TextLabelSubHeader";
import TextLabelHeader from "./TextLabelHeader";
import ListCheck from "./ListCheck";

const SeeResult = () => {
  return (
    <div className="w-[90%] mx-auto py-10 grid gap-5 md:grid-cols-2">
      <img src={Image} alt="Image result" />
      <div className="flex flex-col gap-5 ">
        <TextLabelSubHeader text="SEE RESULTS IN JUST MINUTES" />
        <TextLabelHeader text="Whiter teeth, but faster, healthier and on a budget." />
        <p className="font-barlow font-normal text-xl text-[#1E2627]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
        <ul>
          <ListCheck
            svg={
              <svg
                width="36"
                height="27"
                viewBox="0 0 36 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M31.2311 0L12.8886 17.0666L5.13144 8.76402L0 13.5866L12.5321 27L36 5.18458L31.2311 0Z"
                  fill="#024F6C"
                />
              </svg>
            }
            text="Benefits, not features ipsum dolor ahem flora."
          />
          <ListCheck
            svg={
              <svg
                width="36"
                height="27"
                viewBox="0 0 36 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M31.2311 0L12.8886 17.0666L5.13144 8.76402L0 13.5866L12.5321 27L36 5.18458L31.2311 0Z"
                  fill="#024F6C"
                />
              </svg>
            }
            text="Benefits, not features ipsum dolor ahem flora."
          />
          <ListCheck
            svg={
              <svg
                width="36"
                height="27"
                viewBox="0 0 36 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M31.2311 0L12.8886 17.0666L5.13144 8.76402L0 13.5866L12.5321 27L36 5.18458L31.2311 0Z"
                  fill="#024F6C"
                />
              </svg>
            }
            text="Benefits, not features ipsum dolor ahem flora."
          />
        </ul>
      </div>
    </div>
  );
};

export default SeeResult;
