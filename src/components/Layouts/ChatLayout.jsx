import React from "react";

export const ChatLayout = ({ children }) => {
  return (
    <div className="w-2/6 h-full p-4 bg-white shadow overflow-y-auto">
      {children}
    </div>
  );
};
