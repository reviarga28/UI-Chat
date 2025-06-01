import {
  CircleFadingPlusIcon,
  MessageCircleMoreIcon,
  MessageSquareTextIcon,
  UsersRoundIcon,
  SettingsIcon,
  UserIcon,
} from "lucide-react";
import React from "react";
import TooltipButton from "./Buttons/TooltipButton";
import { Badge } from "./Ui/Badge";

export const SideBar = ({ activeSection, setActiveSection }) => {
  return (
    <div className="flex flex-col items-center justify-between bg-gray-700 w-16 h-screen py-4 border-r border-gray-700">
      {/* Top Navigation Icons */}
      <div className="flex flex-col items-center gap-6">
        <TooltipButton
          onClick={() => setActiveSection("section1")}
          text="Chat"
          icon={
            <div className="relative">
              <MessageSquareTextIcon
                size={24}
                className="text-gray-300 hover:text-white"
              />
              <span>
                <Badge value={'91'}/>
              </span>
            </div>
          }
          active={activeSection === "section1"}
        />

        <TooltipButton
          onClick={() => setActiveSection("section2")}
          text="Status"
          icon={
            <div className="relative">
              <CircleFadingPlusIcon
                size={24}
                className="text-gray-300 hover:text-white"
              />
              <span className="absolute -top-0 -right-0 bg-[#128C7E] text-white text-xs rounded-full h-[8px] w-[8px] flex items-center justify-center">
              </span>
            </div>
          }
          active={activeSection === "section2"}
        />

        <TooltipButton
          onClick={() => setActiveSection("section3")}
          text="Saluran"
          icon={
            <div className="relative">
              <MessageCircleMoreIcon
                size={24}
                className="text-gray-300 hover:text-white"
              />
              <span>
                <Badge value={30}/>
              </span>
            </div>
          }
          active={activeSection === "section3"}
        />

        <TooltipButton
          onClick={() => setActiveSection("section4")}
          text="Grup"
          icon={
            <div className="relative">
              <UsersRoundIcon
                size={24}
                className="text-gray-300 hover:text-white"
              />
              <span>
                <Badge value={13} />
              </span>
            </div>
          }
          active={activeSection === "section4"}
        />
      </div>

      {/* Bottom User Profile & Settings */}
      <div className="flex flex-col items-center">
        <TooltipButton
          onClick={() => setActiveSection("section5")}
          text="Settings"
          icon={
            <SettingsIcon
              size={24}
              className="text-gray-300 hover:text-white"
            />
          }
          active={activeSection === "section5"}
        />

        <div className="relative group">
          <TooltipButton
            onClick={() => setActiveSection("section6")}
            text="Profile"
            icon={
              <div className="relative">
                <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white cursor-pointer overflow-hidden">
                  <UserIcon size={20} />
                </div>
                <div className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 rounded-full border-2 border-gray-800"></div>
              </div>
            }
            active={activeSection === "section6"}
          />
        </div>
      </div>
    </div>
  );
};
