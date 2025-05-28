import React from "react";

function RightLayout({ section }) {
  return (
    <div className="flex-1 h-full p-4 bg-gray-50 overflow-y-auto">
      {section === "section1" && <div>Window Chat aktif</div>}
      {section === "section2" && <div>Status detail aktif</div>}
      {section === "section3" && <div>Saluran aktif</div>}
      {section === "section4" && <div>Grup aktif</div>}
    </div>
  );
}

export default RightLayout;
