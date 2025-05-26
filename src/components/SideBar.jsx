import { CircleFadingPlusIcon, MessageCircleMoreIcon, MessageSquareTextIcon, UsersRoundIcon } from "lucide-react";
import React from "react";

export const SideBar = () => {
  return (
    <div>
      <div className="pt-4 flex flex-col gap-8 items-center bg-blue-400 w-[5%] h-screen">
        <div>
          <MessageSquareTextIcon size={25} className="text-gray-300" />
        </div>
        <div>
          <CircleFadingPlusIcon size={25} />
        </div>
        <div>
          <MessageCircleMoreIcon size={25} />
        </div>
        <div>
          <UsersRoundIcon size={25} />
        </div>
      </div>
    </div>
  );
};
