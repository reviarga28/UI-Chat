import {
  CircleFadingPlusIcon,
  MessageCircleMoreIcon,
  MessageSquareTextIcon,
  UsersRoundIcon,
} from "lucide-react";
import React from "react";
import TooltipButton from "./Buttons/TooltipButton";

export const SideBar = ({ setActiveSection }) => {
  return (
    <div className="pt-4 flex flex-col gap-8 items-center bg-blue-400 w-[10vh] h-screen">
      <TooltipButton
        onClick={() => setActiveSection("section1")}
        text="Chat"
        icon={<MessageSquareTextIcon size={25} className="text-gray-300" />}
      />
      <TooltipButton
        onClick={() => setActiveSection("section2")}
        text="Status"
        icon={<CircleFadingPlusIcon size={25} className="text-gray-300" />}
      />
      <TooltipButton
        onClick={() => setActiveSection("section3")}
        text="Saluran"
        icon={<MessageCircleMoreIcon size={25} className="text-gray-300" />}
      />
      <TooltipButton
        onClick={() => setActiveSection("section4")}
        text="Grup"
        icon={<UsersRoundIcon size={25} className="text-gray-300" />}
      />
    </div>
  );
};
