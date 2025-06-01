import React from "react";

export const Badge = ({value}) => {
  return (
    <div>
      <span className="absolute -top-2 -right-3 bg-[#128C7E] text-white text-xs rounded-full h-[20px] w-[20px] flex items-center justify-center">
        {value}
      </span>
    </div>
  );
};
