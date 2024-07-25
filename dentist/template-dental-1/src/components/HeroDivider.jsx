import React from "react";

const HeroDivider = () => {
  return (
    <div className=" py-2  bg-[#cce4eb]">
      <div className="overflow-hidden flex ">
        <div className="flex gap-5 px-5 py-2 animate-loop-scroll  items-center   ">
          <LogoHere />
          <LogoHere />
          <LogoHere />
          <LogoHere />
          <LogoHere />
          <LogoHere />
          <LogoHere />
          <LogoHere />
          <LogoHere />
          <LogoHere />
          <LogoHere />
        </div>
        <div className="flex gap-5 px-5 py-2 animate-loop-scroll  items-center  aria-hidden:true  ">
          <LogoHere />
          <LogoHere />
          <LogoHere />
          <LogoHere />
          <LogoHere />
          <LogoHere />
          <LogoHere />
          <LogoHere />
          <LogoHere />
          <LogoHere />
          <LogoHere />
        </div>
      </div>
    </div>
  );
};

const LogoHere = () => {
  return (
    <div className=" flex justify-center items-center gap-5">
      <div className="border border-[#047fa3] rounded-md px-5 py-2 text-[#0485AB] font-barlow font-bold text-xl md:text-2xl">
        Logo
      </div>
      <h4 className="text-[#0485ab] font-bold text-xl md:text-2xl text-nowrap">
        Logo Here
      </h4>
    </div>
  );
};

export default HeroDivider;
