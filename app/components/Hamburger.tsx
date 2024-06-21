import React from "react";

export default function Hamburger() {
  return (
    <div className="">
      <div className="p-5 bg-nf_blue  flex flex-col gap-1 justify-around">
        <div className="transition-all origin-center w-6 h-1 bg-black rounded-sm"></div>
        <div className="transition-all origin-center w-6 h-1 bg-black rounded-sm"></div>
        <div className="transition-all origin-center w-6 h-1 bg-black rounded-sm"></div>
      </div>
    </div>
  );
}
