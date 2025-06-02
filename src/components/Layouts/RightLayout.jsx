import React from "react";
import { ChatsById } from "../../pages/ChatsById";

function RightLayout({ section, selectedUser }) {
  return (
    <div className="">
      {section === "section1" && selectedUser ? (
        <>
          <ChatsById user={selectedUser} />
        </>
      ) : (
        <p className="text-gray-500">Pilih pengguna untuk mulai chat</p>
      )}
    </div>
  );
}

export default RightLayout;
