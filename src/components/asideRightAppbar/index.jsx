import { Icon } from "@iconify/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { appsBar } from "../../store/toggleBarsSlice";

const AppBar = () => {
  const dispatch = useDispatch();
  const toggle = useSelector((state) => state.toggle);

  return (
    <aside
      className={`w-[25%] max-w-[120px] h-[100%] py-8 bg-white ${
        toggle.apps ? "flex" : "hidden"
      } flex-col items-center gap-[1px] overflow-auto border border-gray-200 transition-all duration-700 ease-in-out`}
    >
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
        <div className="w-[100%] mb-6 flex flex-col justify-center items-center gap-6 text-sm font-bold text-gray-500">
          <Icon
            className="w-10 h-10 p-2 text-green-500 bg-green-100 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
            icon="iconamoon:file-light"
          />
          Files
        </div>
        <div className="w-[100%] mb-6 flex flex-col justify-center items-center gap-6 text-sm font-bold text-gray-500">
          <Icon
            className="w-9 h-9 py-1 px-2 text-blue-500 bg-blue-100 hover:bg-blue-200 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
            icon="lucide:book"
          />
          Notes
        </div>
        <div className="w-[100%] mb-6 flex flex-col justify-center items-center gap-6 text-sm font-bold text-gray-500">
          <Icon
            className="w-9 h-9 py-1 px-2 text-red-500 bg-red-100 hover:bg-red-200 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
            icon="ion:list-sharp"
          />
          Todo
        </div>
        <div className="w-[100%] mb-6 flex flex-col justify-center items-center gap-6 text-sm font-bold text-gray-500">
          <Icon
            className="w-9 h-9 py-1 px-2 text-yellow-400 bg-orange-50 hover:bg-yellow-100 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
            icon="tabler:clock"
          />
          Reminder
        </div>
      </div>
    </aside>
  );
};

export default AppBar;
