import React from "react";

const TextLabelHeader = ({ text }) => {
  return (
    <h2 className="font-serif font-normal text-2xl md:text-5xl text-[#0485AB]">
      {text}
    </h2>
  );
};

export default TextLabelHeader;
