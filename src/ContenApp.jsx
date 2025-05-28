import React, { useState } from "react";
import { SideBar } from "./components/SideBar.jsx";
import { Chats } from "./pages/Chats.jsx";
import { ChatLayout } from "./components/Layouts/ChatLayout.jsx";
import { Status } from "./pages/Status.jsx";
import { Saluran } from "./pages/Saluran.jsx";
import { Grup } from "./pages/Grup.jsx";
import RightLayout from "./components/Layouts/RightLayout.jsx";

export const ContenApp = () => {
  const [activeSection, setActiveSection] = useState("section1");

  const renderContent = () => {
    switch (activeSection) {
      case "section1":
        return <Chats />;
      case "section2":
        return <Status />;
      case "section3":
        return <Saluran />;
      case "section4":
        return <Grup />;
      default:
        return <h1>Unknown Section</h1>;
    }
  };

  return (
    <div className="flex w-screen h-screen overflow-hidden">
      {/* Sidebar kiri */}
      <SideBar setActiveSection={setActiveSection} />

      {/* Tengah (ChatLayout) */}
      <ChatLayout>
        {renderContent()}
      </ChatLayout>

      {/* Kanan (RightLayout) */}
      <RightLayout section={activeSection} />
    </div>
  );
};
