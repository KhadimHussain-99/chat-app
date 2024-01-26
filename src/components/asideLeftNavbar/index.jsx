import React from "react";
import logo from "../../assets/logo.png";
import profile from "../../assets/profile.jpg";
import { Icon } from "@iconify/react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const toggle = useSelector((state) => state.toggle);

  return (
    <nav
      className={`${
        !toggle.nav ? "hidden" : "sm:flex"
      } w-[25%] max-w-[110px] h-[100%] pt-12 pb-8 bg-white flex-col items-center gap-[1px] overflow-auto scrollbar`}
    >
      <div className="w-[100%] pb-9 flex justify-center items-center border-b border-gray-200">
        <img className="w-10 h-10 bg-cover cursor-pointer" src={logo} alt="" />
      </div>
      <div className="flex flex-col items-center">
        <div className="w-[100%] h-20 pt-8 flex flex-col items-center">
          <img
            className="w-12 rounded-full border-4 border-blue-500 bg-cover cursor-pointer"
            src={profile}
            alt=""
          />
        </div>
        <div className="w-[100%] h-22 pt-9 flex flex-col items-center">
          <Icon
            className="w-12 h-12 p-3 pt-2 text-gray-700 bg-gray-100 hover:text-white hover:bg-blue-400 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
            icon="material-symbols:star"
          />
        </div>
        <div className="w-[100%] h-22 pt-9 flex flex-col items-center">
          <Icon
            className="w-12 h-12 p-3 text-gray-700 bg-gray-100 hover:text-white hover:bg-blue-400 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
            icon="basil:document-solid"
          />
        </div>
        <div className="w-[100%] h-22 pt-9 flex flex-col items-center">
          <Icon
            className="w-12 h-12 p-3 text-gray-700 bg-gray-100 hover:text-white hover:bg-blue-400 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
            icon="fa:group"
          />
        </div>
        <div className=" w-[100%] h-22 pt-9 flex flex-col items-center">
          <div className="relative">
            <Icon
              className="w-12 h-12 p-3 text-gray-700 bg-gray-100 hover:text-white hover:bg-blue-400 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
              icon="clarity:bell-solid"
            />
            <span className="absolute top-0 -right-[1px] w-[10px] h-[10px] rounded-full bg-red-600 animate-ping"></span>
            <span className="absolute top-[1px] right-0 w-2 h-2 rounded-full bg-red-500"></span>
          </div>
        </div>
        <div className="w-[100%] h-22 pt-9 flex flex-col items-center">
          <Icon
            className="w-12 h-12 p-3 text-gray-700 bg-gray-100 hover:text-white hover:bg-blue-400 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
            icon="fa:gear"
          />
        </div>
        <div className="w-[100%] h-22 pt-9 flex flex-col items-center">
          <Icon
            className="w-12 h-12 p-3 text-gray-700 bg-gray-100 hover:text-white hover:bg-blue-400 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
            icon="solar:moon-outline"
          />
        </div>
        <div className="w-[100%] h-22 pt-9 flex flex-col items-center">
          <Icon
            className="w-12 h-12 p-3 text-gray-700 bg-gray-100 hover:text-white hover:bg-blue-400 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
            icon="raphael:power"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
