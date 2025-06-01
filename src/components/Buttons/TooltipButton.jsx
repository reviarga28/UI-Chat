const TooltipButton = ({ icon, text, onClick, active }) => {
  return (
    <div className="relative group inline-block">
      <button
        onClick={onClick}
        className={`p-2 rounded-full transition-colors duration-200 cursor-pointer
          ${active ? "bg-gray-600 text-white" : "hover:bg-gray-700"}
        `}
      >
        {icon}
      </button>
      <div
        className="absolute top-0 left-8 mb-2 opacity-0 group-hover:opacity-100 
        bg-gray-100 text-gray-800 text-sm px-2 py-1 rounded-2xl z-10 whitespace-nowrap 
        transition-all duration-200 delay-200 transform group-hover:translate-y-0 translate-y-1"
      >
        {text}
      </div>
    </div>
  );
};

export default TooltipButton;