import React, { useEffect, useRef, useState } from "react";
import {
  MessageSquareDiffIcon,
  MoreVertical,
  Star,
  UserPlus,
} from "lucide-react";

export const UserList = ({ onUserSelect }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef(null);

  const users = [
    { id: 1, name: "Andi", pesan: "lorem", unreadCount: 2 },
    {
      id: 2,
      name: "Budi",
      pesan:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium iusto beatae aut non reiciendis facilis corrupti voluptas dolorum amet, cumque blanditiis in quam ex earum inventore sit! Eum, similique quas.",
      unreadCount: 4,
    },
    { id: 3, name: "Cici", pesan: "halo", unreadCount: 64 },
    {
      id: 4,
      name: "Dedi",
      pesan:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium iusto beatae aut non reiciendis facilis corrupti voluptas dolorum amet, cumque blanditiis in quam ex earum inventore sit! Eum, similique quas.",
      unreadCount: 4,
    },
    {
      id: 5,
      name: "Euis",
      pesan:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium iusto beatae aut non reiciendis facilis corrupti voluptas dolorum amet, cumque blanditiis in quam ex earum inventore sit! Eum, similique quas.",
      unreadCount: 1,
    },
    { id: 7, name: "Fani", pesan: "Lorem ipsum dolor ", unreadCount: 8 },
    { id: 8, name: "Fani", pesan: "halo", unreadCount: 6 },
    { id: 9, name: "Fani", pesan: "halo", unreadCount: 10 },
    { id: 10, name: "Fani", pesan: "halo", unreadCount: 9 },
  ];

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        const dropdown = document.getElementById("dropdownInformation");
        if (!dropdown.classList.contains("hidden")) {
          dropdown.classList.add("hidden");
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    const dropdown = document.getElementById("dropdownInformation");
    dropdown.classList.toggle("hidden");
  };

  return (
    <div className="w-full bg-gray-800">
      {/* Header Fixed */}
      <div className="sticky top-0 z-1 bg-gray-800 shadow">
        <div className="relative flex items-center justify-between p-4 bg-gray-800 text-white">
          <h1 className="text-2xl font-bold">Chat</h1>

          <div className="flex justify-center items-center gap-3 text-gray-400">
            <div className="cursor-pointer hover:text-white transition-colors">
              <MessageSquareDiffIcon className="h-5 w-5" />
            </div>

            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                className="flex items-center justify-center p-1 rounded-full hover:bg-gray-700 hover:text-white transition-colors cursor-pointer"
                id="dropdownInformationButton"
                aria-expanded="false"
                aria-haspopup="true"
                onClick={toggleDropdown}
              >
                <MoreVertical className="h-5 w-5" />
              </button>

              <div
                className="hidden bg-gray-600 rounded-md shadow-lg z-10 absolute right-0 mt-2 w-48 divide-y divide-gray-500"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="dropdownInformationButton"
                id="dropdownInformation"
              >
                <div className="py-1">
                  <a
                    href="#"
                    className="flex items-center px-4 py-2 text-sm text-gray-200 hover:bg-gray-500 transition-colors duration-150"
                    role="menuitem"
                  >
                    <Star className="h-4 w-4 mr-2" />
                    Pesan Berbintang
                  </a>
                </div>
                <div className="py-1">
                  <a
                    href="#"
                    className="flex items-center px-4 py-2 text-sm text-gray-200 hover:bg-gray-500 transition-colors duration-150"
                    role="menuitem"
                  >
                    <UserPlus className="h-4 w-4 mr-2" />
                    Tambah Kontak
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 py-2 shadow">
          <div className="relative">
            <input
              type="text"
              placeholder="Cari "
              className="w-full p-1 pl-10 rounded-lg bg-gray-700 text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <svg
              className="absolute left-3 top-2 h-4 w-4 text-gray-400"
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
          <div>
            <div className="flex flex-row gap-2 my-2">
              <p className="px-2 py-1 rounded-2xl text-sm text-emerald-400 bg-emerald-800">
                Semua
              </p>
              <p className="px-2 py-1 rounded-2xl text-sm text-gray-200 bg-gray-600 opacity-50">
                Belum Dibaca
              </p>
              <p className="px-2 py-1 rounded-2xl text-sm text-gray-200 bg-gray-600 opacity-50">
                Favorit
              </p>
              <p className="px-2 py-1 rounded-2xl text-sm text-gray-200 bg-gray-600 opacity-50">
                Grup
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scrollable list with short height */}
      <ul className="divide-y divide-gray-600 overflow-y-auto max-h-[522px] scroll-custom">
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
