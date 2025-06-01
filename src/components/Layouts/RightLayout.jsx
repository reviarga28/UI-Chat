import React from "react";
import { ChatsById } from "../../pages/ChatsById";

function RightLayout({ section, selectedUser }) {
  return (
    <div className="p-4 h-full bg-gray-700 text-white overflow-y-auto">
      {section === "section1" && selectedUser ? (
        <>
          <h2 className="text-xl font-semibold mb-2">Chat dengan {selectedUser.name}</h2>
          <ChatsById user={selectedUser} />
        </>
      ) : (
        <p className="text-gray-500">Pilih pengguna untuk mulai chat</p>
      )}
    </div>
  );
}

export default RightLayout;
