import React from "react";

const TooltipButton = ({icon, text, onClick}) => {
  return (
    <div className="relative group inline-block">
      <button onClick={onClick} className="cursor-pointer">
        {icon}
      </button>
      <div className="absolute bottom-0 left-8 mb-2 hidden group-hover:block bg-gray-700 text-white text-sm px-2 py-1 rounded z-10 whitespace-nowrap">
        {text}
      </div>
    </div>
  );
};

export default TooltipButton;
