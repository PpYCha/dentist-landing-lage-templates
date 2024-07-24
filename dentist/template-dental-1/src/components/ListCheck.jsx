import React from "react";

const ListCheck = ({ svg, text }) => {
  return (
    <>
      <li className="flex gap-3 justify-start items-start py-2 ">
        {svg}
        <p className="font-barlow text-base  md:text-2xl">{text}</p>
      </li>
    </>
  );
};

export default ListCheck;
