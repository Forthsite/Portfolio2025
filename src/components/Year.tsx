import { FaCaretDown } from "react-icons/fa";
const Year = () => {
  return (
    <div className="flex items-center gap-2 hover:cursor-pointer">
      <h2 className="text-2xl font-extrabold">2025</h2>
      <span className="flex w-full bg-black h-2 rounded-2xl"></span>
      <FaCaretDown className="w-8 h-8" />
    </div>
  );
};

export default Year;
