import { Icon } from "@iconify/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  appsBar,
  layoutShift,
  setApplication,
} from "../../store/toggleBarsSlice";

const AppBar = () => {
  const dispatch = useDispatch();
  const toggle = useSelector((state) => state.toggle);

  return (
    <aside
      className={`relative w-[25%] max-w-[120px] h-[100%] py-8 bg-white ${
        toggle.apps ? "flex" : "hidden"
      } flex-col items-center gap-[1px] overflow-auto border border-gray-200 transition-all duration-700 ease-in-out`}
    >
      <Icon
        className={`absolute bottom-14 right-8 w-12 h-12 p-3 text-white bg-green-500 hover:bg-blue-500 animate-spin rounded-full transition-all duration-1000 ease-in-out cursor-pointer`}
        icon="fa:gear"
      />
      <div
        onClick={() => dispatch(layoutShift())}
        className={`absolute bottom-28 right-8  px-[10px] py-[14px] text-sm font-extrabold text-white bg-blue-500 rounded-full transition-all duration-1000 ease-in-out cursor-pointer`}
      >
        {toggle.layout ? "LTR" : "RTL"}
      </div>
      <div
        onClick={() => {
          console.log("clicked");
          dispatch(appsBar());
        }}
        className="w-[100%] pb-4 mb-4 flex flex-col justify-center items-center gap-1 cursor-pointer text-sm font-bold text-gray-500 border-b border-gray-200"
      >
        <Icon
          className="w-7 h-7 text-blue-400 transition-all duration-300 ease-in-out "
          icon="uil:apps"
        />
        Apps
      </div>
      <div className="flex flex-col items-center">
        <div
          onClick={() => dispatch(setApplication("files"))}
          className="w-[100%] mb-6 flex flex-col justify-center items-center gap-6 text-sm font-bold text-gray-500"
        >
          <Icon
            className={`w-10 h-10 p-2 ${
              toggle.application === "files"
                ? "text-white bg-green-500"
                : "text-green-500 bg-green-100 "
            } rounded-full transition-all duration-300 ease-in-out cursor-pointer`}
            icon="iconamoon:file-light"
          />
          Files
        </div>
        <div
          onClick={() => dispatch(setApplication("notes"))}
          className="w-[100%] mb-6 flex flex-col justify-center items-center gap-6 text-sm font-bold text-gray-500"
        >
          <Icon
            className={`w-9 h-9 py-1 px-2 ${
              toggle.application === "notes"
                ? "text-white bg-blue-500"
                : "text-blue-500 bg-blue-100 "
            } hover:bg-blue-200 rounded-full transition-all duration-300 ease-in-out cursor-pointer`}
            icon="lucide:book"
          />
          Notes
        </div>
        <div
          onClick={() => dispatch(setApplication("todo"))}
          className="w-[100%] mb-6 flex flex-col justify-center items-center gap-6 text-sm font-bold text-gray-500"
        >
          <Icon
            className={`w-9 h-9 py-1 px-2 ${
              toggle.application === "todo"
                ? "text-white bg-red-500"
                : "text-red-500 bg-red-100 "
            } hover:bg-red-200 rounded-full transition-all duration-300 ease-in-out cursor-pointer`}
            icon="ion:list-sharp"
          />
          Todo
        </div>
        <div
          onClick={() => dispatch(setApplication("remind"))}
          className="w-[100%] mb-6 flex flex-col justify-center items-center gap-6 text-sm font-bold text-gray-500"
        >
          <Icon
            className={`w-9 h-9 py-1 px-2 ${
              toggle.application === "remind"
                ? "text-white bg-yellow-500"
                : "text-yellow-500 bg-yellow-100 "
            } hover:bg-yellow-200 rounded-full transition-all duration-300 ease-in-out cursor-pointer`}
            icon="tabler:clock"
          />
          Reminder
        </div>
      </div>
    </aside>
  );
};

export default AppBar;
