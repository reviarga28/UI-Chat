import React, { useState } from "react";

export const ChatsById = ({ user }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { fromMe: true, text: input }]);
    setInput("");
  };

  return (
    <div>
      <div className="h-[81vh] overflow-y-auto bg-gray-100 p-3 rounded mb-4">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`mb-2 p-2 rounded max-w-sm ${
              msg.fromMe ? "bg-blue-500 text-white ml-auto" : "bg-gray-300 text-black"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          className="flex-1 border px-3 py-2 rounded"
          placeholder={`Kirim pesan ke ${user.name}`}
        />
        <button onClick={handleSend} className="bg-blue-500 text-white px-4 py-2 rounded">
          Kirim
        </button>
      </div>
    </div>
  );
};
