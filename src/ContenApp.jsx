import React, { useState } from "react";
import { SideBar } from "./components/SideBar.jsx";
import { UserList } from "./pages/Chats.jsx";
import { Status } from "./pages/Status.jsx";
import { Saluran } from "./pages/Saluran.jsx";
import { Grup } from "./pages/Grup.jsx";
import { ChatLayout } from "./components/Layouts/ChatLayout.jsx";
import RightLayout from "./components/Layouts/RightLayout.jsx";
import { Setting } from "./pages/Setting.jsx";
import { Profile } from "./pages/Profile.jsx";

export const ContenApp = () => {
  const [activeSection, setActiveSection] = useState("section1");
  const [selectedUser, setSelectedUser] = useState(null);

  const renderContent = () => {
    switch (activeSection) {
      case "section1":
        return <UserList onUserSelect={setSelectedUser} />;
      case "section2":
        return <Status />;
      case "section3":
        return <Saluran />;
      case "section4":
        return <Grup />;
      case "section5":
        return <Setting />;
      case "section6":
        return <Profile />;
      default:
        return <h1>Unknown Section</h1>;
    }
  };

  return (
    <div className="flex">
      <SideBar
        setActiveSection={setActiveSection}
        activeSection={activeSection}
      />
      <div className="ml-[] w-2/7 h-screen overflow-y-auto bg-white shadow">
        <ChatLayout>{renderContent()}</ChatLayout>
      </div>
      <div className="flex-1 h-screen bg-gray-50">
        <RightLayout section={activeSection} selectedUser={selectedUser} />
      </div>
    </div>
  );
};
