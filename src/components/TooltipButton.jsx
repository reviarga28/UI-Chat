import React from "react";

const TooltipButton = () => {
  return (
    <div className="relative group inline-block">
      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        Hover saya
      </button>
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-700 text-white text-sm px-2 py-1 rounded z-10 whitespace-nowrap">
        Ini Tooltip-nya!
      </div>
    </div>
  );
};

export default TooltipButton;
