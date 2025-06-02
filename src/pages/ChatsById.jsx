import React, { useEffect, useRef, useState } from "react";
import { Smile, Paperclip, SendHorizontal, Search, Video, Phone, MoreVerticalIcon, InfoIcon, FlagIcon, Trash2Icon } from "lucide-react";
import EmojiPicker from "emoji-picker-react";

export const ChatsById = ({ user }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [showVideoDropdown, setShowVideoDropdown] = useState(false);
  const [showMenuDropdown, setShowMenuDropdown] = useState(false);
  const videoDropdownRef = useRef(null);
  const menuDropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (videoDropdownRef.current && !videoDropdownRef.current.contains(event.target)) {
        setShowVideoDropdown(false);
      }
      if (menuDropdownRef.current && !menuDropdownRef.current.contains(event.target)) {
        setShowMenuDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { fromMe: true, text: input }]);
    setInput("");
    setShowEmojiPicker(false);
  };

  const handleEmojiClick = (emojiData) => {
    setInput(prev => prev + emojiData.emoji);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    // Here you would typically upload the file and get a URL
    // For demo, we'll just add a message with the file name
    setMessages([...messages, { 
      fromMe: true, 
      text: `File: ${file.name}`,
      isFile: true
    }]);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100 relative">
      {/* Header */}
<div className="bg-gray-700 text-white p-3 flex items-center justify-between">
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-full bg-gray-300 mr-3"></div>
        <div>
          <h2 className="font-semibold">{user.name}</h2>
          <p className="text-xs text-gray-300">Online</p>
        </div>
      </div>

      <div className="flex items-center gap-5 text-gray-300">
        {/* Video Dropdown */}
        <div className="relative top-1" ref={videoDropdownRef}>
          <button 
            className="hover:text-white transition-colors"
            onClick={() => setShowVideoDropdown(!showVideoDropdown)}
          >
            <Video className="h-5 w-5" />
          </button>
          
          {showVideoDropdown && (
            <div className="absolute right-0 mt-2 bg-white rounded-md shadow-lg z-10 w-40 py-1">
              <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                <Video className="h-4 w-4 mr-2" />
                Video Call
              </button>
              <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                <Phone className="h-4 w-4 mr-2" />
                Voice Call
              </button>
            </div>
          )}
        </div>
        {/* Search Icon */}
        <button className="hover:text-white transition-colors">
          <Search className="h-5 w-5" />
        </button>


        {/* Menu Dropdown */}
        <div className="relative top-1" ref={menuDropdownRef}>
          <button 
            className="hover:text-white transition-colors"
            onClick={() => setShowMenuDropdown(!showMenuDropdown)}
          >
            <MoreVerticalIcon className="h-5 w-5" />
          </button>
          
          {showMenuDropdown && (
            <div className="absolute right-0 mt-2 bg-white rounded-md shadow-lg z-10 w-48 py-1">
              <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                <InfoIcon className="h-4 w-4 mr-2" />
                Info Kontak
              </button>
              <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                <FlagIcon className="h-4 w-4 mr-2" />
                Laporkan
              </button>
              <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                <Trash2Icon className="h-4 w-4 mr-2" />
                Bersihkan Chat
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
      
      {/* Chat messages area */}
      <div className="flex-1 overflow-y-auto p-4 opacity-95 bg-gray-800">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`mb-3 flex ${msg.fromMe ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                msg.fromMe 
                  ? "bg-emerald-100 rounded-tr-none" 
                  : "bg-white rounded-tl-none"
              }`}
            >
              <p className="text-gray-800">
                {msg.isFile ? (
                  <span className="font-medium text-blue-600">{msg.text}</span>
                ) : (
                  msg.text
                )}
              </p>
              <p className="text-right text-xs text-gray-500 mt-1">
                {new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                {msg.fromMe && <span className="ml-1 text-blue-500">✓✓</span>}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Emoji Picker */}
      {showEmojiPicker && (
        <div className="absolute bottom-16 left-4">
          <EmojiPicker onEmojiClick={handleEmojiClick} width={300} height={350} />
        </div>
      )}
      
      {/* Input area */}
      <div className="bg-gray-700 p-3 flex items-center">
        <button 
          onClick={() => setShowEmojiPicker(!showEmojiPicker)}
          className="mx-2 text-gray-500 hover:text-emerald-600 transition-colors"
        >
          <Smile className="h-6 w-6" />
        </button>
        
        <label className="mx-2 text-gray-500 hover:text-emerald-600 transition-colors cursor-pointer">
          <Paperclip className="h-6 w-6" />
          <input 
            type="file" 
            onChange={handleFileUpload}
            className="hidden" 
          />
        </label>
        
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          className="flex-1 rounded-xl px-4 py-2 bg-gray-600 mx-2 text-gray-300 focus:outline-none focus:ring-none "
          placeholder="Ketik Pesan"
        />
        
        <button 
          onClick={handleSend}
          className="bg-emerald-600 text-white rounded-full p-2 mx-1 hover:bg-emerald-700 transition-colors"
          disabled={!input.trim()}
        >
          <SendHorizontal className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};