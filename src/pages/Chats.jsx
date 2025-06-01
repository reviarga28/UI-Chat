import React, { useState } from "react";

export const UserList = ({ onUserSelect }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const users = [
    { id: 1, name: "Andi", pesan: "lorem" ,unreadCount: 2},
    { id: 2, name: "Budi", pesan: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium iusto beatae aut non reiciendis facilis corrupti voluptas dolorum amet, cumque blanditiis in quam ex earum inventore sit! Eum, similique quas." ,unreadCount: 4},
    { id: 3, name: "Cici", pesan: "halo" ,unreadCount: 64},
    { id: 4, name: "Dedi", pesan: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium iusto beatae aut non reiciendis facilis corrupti voluptas dolorum amet, cumque blanditiis in quam ex earum inventore sit! Eum, similique quas." ,unreadCount: 4},
    { id: 5, name: "Euis", pesan: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium iusto beatae aut non reiciendis facilis corrupti voluptas dolorum amet, cumque blanditiis in quam ex earum inventore sit! Eum, similique quas." ,unreadCount: 1},
    { id: 7, name: "Fani", pesan: "Lorem ipsum dolor " ,unreadCount: 8},
    { id: 8, name: "Fani", pesan: "halo" ,unreadCount: 6},
    { id: 9, name: "Fani", pesan: "halo" ,unreadCount: 10},
    { id: 10, name: "Fani", pesan: "halo" ,unreadCount: 9},
  ];

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full bg-gray-800">
      {/* Header Fixed */}
      <div className="sticky top-0 z-1 bg-gray-800 shadow">
        <div className="p-4 bg-gray-800 text-white">
          <h1 className="text-2xl font-bold">Chat</h1>
        </div>
        <div className="px-4 py-2 shadow">
          <div className="relative">
            <input
              type="text"
              placeholder="Cari pengguna..."
              className="w-full p-2 pl-10 rounded-lg bg-gray-700 text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <svg
              className="absolute left-3 top-3 h-5 w-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Scrollable list with short height */}
      <ul className="divide-y divide-gray-200 overflow-y-auto max-h-[559.4px] scroll-custom">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <li
              key={user.id}
              onClick={() => onUserSelect(user)}
              className="p-4 hover:bg-gray-700 cursor-pointer transition-colors duration-200 flex items-center justify-between"
            >
              {/* Kiri: Avatar dan Info User */}
              <div className="flex items-center">
                <div className="bg-blue-500 text-white rounded-full h-10 w-10 flex items-center justify-center mr-3">
                  {user.name.charAt(0)}
                </div>
                <div className="flex flex-col">
                  <span className="font-medium text-md text-white">
                    {user.name}
                  </span>
                  <span className="text-[12px] text-white max-w-[160px] truncate">
                    {user.pesan}
                  </span>
                </div>
              </div>

              {/* Kanan: Waktu dan Badge */}
              <div className="flex flex-col items-end space-y-1">
                <span className="text-[10px] text-gray-300">
                  {user.jam || "12:00"} {/* Misalnya: '13:45' */}
                </span>
                {user.unreadCount > 0 && (
                  <span className="bg-[#128C7E] text-white text-[10px] px-2 py-[2px] rounded-full">
                    {user.unreadCount}
                  </span>
                )}
              </div>
            </li>
          ))
        ) : (
          <li className="p-4 text-center text-gray-300">
            Tidak ada pengguna ditemukan
          </li>
        )}
      </ul>
    </div>
  );
};
