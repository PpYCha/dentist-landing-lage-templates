import React from "react";
import Image from "../assets/images/NoMOreSmile_pexels-anna-shvets-3845843 1.png";
import TextLabelSubHeader from "./TextLabelSubHeader";
import TextLabelHeader from "./TextLabelHeader";
import ListCheck from "./ListCheck";
import AddToCartButton from "./AddToCartButton";

const NoMoreSile = () => {
  return (
    <div className="w-[90%] mx-auto py-10 grid gap-5 md:grid-cols-2">
      <div className="flex flex-col gap-5 ">
        <TextLabelSubHeader text="NO MORE SMILE-SHAME" />
        <TextLabelHeader text="Imagine how you'll feel with your new smile." />
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

        <AddToCartButton />
      </div>

      <img src={Image} alt="Image result" />
    </div>
  );
};

export default NoMoreSile;
