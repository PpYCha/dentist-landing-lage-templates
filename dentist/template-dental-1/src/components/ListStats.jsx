import React from "react";

const ListStats = ({ svg, text }) => {
  return (
    <>
      <li className="flex gap-3 justify-start items-center py-2  ">
        {svg}
        <p className="font-barlow text-base  ">{text}</p>
      </li>
    </>
  );
};

export default ListStats;
