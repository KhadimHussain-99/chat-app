import { Icon } from "@iconify/react";
import profile from "../../assets/profile.jpg";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { appsBar, recent } from "../../store/toggleBarsSlice";
import useWidth from "../../hooks/useWidth";

const Chat = () => {
  const { width } = useWidth();
  const dispatch = useDispatch();
  const toggle = useSelector((state) => state.toggle);

  return (
    <section
      className={` ${!toggle.chat ? "hidden" : "md:inline-block"} relative ${
        width >= 900 ? "w-[60%]" : "w-[100%]"
      } h-[100%] font-montserrat`}
    >
      <div className="w-[100%] h-[15%] bg-blue-100 px-2">
        <div className="w-[100%] flex justify-between bg-white pl-5 mt-5 pr-2 py-5">
          <div className="flex items-center sm:flex-row-reverse">
            <Icon
              onClick={() => {
                dispatch(recent());
                console.log("arrow");
              }}
              className="md:hidden w-9 h-9 px-2 py-1 text-gray-700 bg-gray-100 hover:text-white hover:bg-blue-400 rounded-full transition-all duration-300 ease-in-out cursor-pointer mr-2"
              icon="fe:arrow-left"
            />
            <Icon
              className="hidden sm:inline-block w-9 h-9 px-2 py-1 text-gray-700 bg-gray-100 hover:text-white hover:bg-blue-400 rounded-full transition-all duration-300 ease-in-out cursor-pointer mr-2"
              icon="iconamoon:search-bold"
            />
            <Icon
              className="hidden sm:inline-block w-9 h-9 p-1 text-gray-700 bg-gray-100 hover:text-white hover:bg-blue-400 rounded-full transition-all duration-300 ease-in-out cursor-pointer mr-2"
              icon="game-icons:speaker"
            />
            <div className="relative w-11 h-11 sm:w-16 sm:h-16 mr-2">
              <div className="absolute top-0 right-0 w-3 h-3 rounded-full bg-green-600 border-[3px] border-white"></div>
              <img
                className="rounded-2xl  sm:rounded-[20px] w-full h-full bg-cover"
                src={profile}
                alt="avatar"
              />
            </div>
          </div>
          <div className="flex items-center">
            <Icon
              className="w-9 h-9 px-2 py-1 text-gray-700 bg-gray-100 hover:text-white hover:bg-blue-400 rounded-full transition-all duration-300 ease-in-out cursor-pointer mr-2"
              icon="mdi:call"
            />
            <Icon
              className="w-9 h-9 px-2 py-1 text-gray-700 bg-gray-100 hover:text-white hover:bg-blue-400 rounded-full transition-all duration-300 ease-in-out cursor-pointer mr-2"
              icon="mdi:video"
            />
            <Icon
              onClick={() => {
                dispatch(appsBar());
              }}
              className="w-9 h-9 px-2 py-1 text-gray-700 bg-gray-100 hover:text-white hover:bg-blue-400 rounded-full transition-all duration-300 ease-in-out cursor-pointer mr-2"
              icon="uil:apps"
            />
            <Icon
              className="w-9 h-9 px-2 py-1 text-gray-700 hover:text-white hover:bg-blue-400 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
              icon="pepicons-pop:dots-y"
            />
          </div>
        </div>
      </div>
      {/* chat start*/}
      <div className="w-[100%] h-[70%] flex flex-col gap-4 px-4 overflow-auto scrollbar">
        <div className="flex justify-start gap-4">
          <img className="rounded-2xl w-11 h-11" src={profile} alt="avatar" />
          <div className="flex flex-col gap-4">
            <h1 className="font-extrabold text-sm">
              Joseph Water{" "}
              <span className="font-normal text-xs text-gray-500">
                01:35 AM
              </span>
            </h1>
            <p className="p-4 bg-blue-500 text-white font-bold rounded-3xl rounded-bl-none">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea
              necessitatibus consequuntur,
            </p>
            <p className="p-4 bg-blue-500 text-white font-bold rounded-3xl rounded-bl-none">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea
              necessitatibus consequuntur,
            </p>
            <p className="p-4 bg-blue-500 text-white font-bold rounded-3xl rounded-bl-none">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea
              necessitatibus consequuntur,
            </p>
            <p className="p-4 bg-blue-500 text-white font-bold rounded-3xl rounded-bl-none">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea
              necessitatibus consequuntur,
            </p>
            <p className="p-4 bg-blue-500 text-white font-bold rounded-3xl rounded-bl-none">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea
              necessitatibus consequuntur,
            </p>
            <p className="p-4 bg-blue-500 text-white font-bold rounded-3xl rounded-bl-none">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea
              necessitatibus consequuntur,
            </p>
            <p className="p-4 bg-blue-500 text-white font-bold rounded-3xl rounded-bl-none">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea
              necessitatibus consequuntur,
            </p>
            <p className="p-4 bg-blue-500 text-white font-bold rounded-3xl rounded-bl-none">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea
              necessitatibus consequuntur,
            </p>
            <p className="p-4 bg-blue-500 text-white font-bold rounded-3xl rounded-bl-none">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea
              necessitatibus consequuntur,
            </p>
            <p className="p-4 bg-blue-500 text-white font-bold rounded-3xl rounded-bl-none">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea
              necessitatibus consequuntur,
            </p>
            <p className="p-4 bg-blue-500 text-white font-bold rounded-3xl rounded-bl-none">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea
              necessitatibus consequuntur,
            </p>
            <p className="p-4 bg-blue-500 text-white font-bold rounded-3xl rounded-bl-none">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea
              necessitatibus consequuntur,
            </p>
            <p className="p-4 bg-blue-500 text-white font-bold rounded-3xl rounded-bl-none">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea
              necessitatibus consequuntur,
            </p>
            <p className="p-4 bg-blue-500 text-white font-bold rounded-3xl rounded-bl-none">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea
              necessitatibus consequuntur,
            </p>
            <p className="p-4 bg-blue-500 text-white font-bold rounded-3xl rounded-bl-none">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea
              necessitatibus consequuntur,
            </p>
            <p className="p-4 bg-blue-500 text-white font-bold rounded-3xl rounded-bl-none">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea
              necessitatibus consequuntur,
            </p>
            <p className="p-4 bg-blue-500 text-white font-bold rounded-3xl rounded-bl-none">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea
              necessitatibus consequuntur,
            </p>
          </div>
        </div>
        <div className="flex justify-start gap-4">
          <img className="rounded-2xl w-11 h-11" src={profile} alt="avatar" />
          <div className="flex flex-col gap-4">
            <h1 className="font-extrabold text-sm">
              Joseph Water{" "}
              <span className="font-normal text-xs text-gray-500">
                01:35 AM
              </span>
            </h1>
            <p className="p-4 bg-blue-500 text-white font-bold rounded-3xl rounded-bl-none">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea
              necessitatibus consequuntur,
            </p>
            <p className="p-4 bg-blue-500 text-white font-bold rounded-3xl rounded-bl-none">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea
              necessitatibus consequuntur,
            </p>
            <p className="p-4 bg-blue-500 text-white font-bold rounded-3xl rounded-bl-none">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea
              necessitatibus consequuntur,
            </p>
            <p className="p-4 bg-blue-500 text-white font-bold rounded-3xl rounded-bl-none">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea
              necessitatibus consequuntur,
            </p>
            <p className="p-4 bg-blue-500 text-white font-bold rounded-3xl rounded-bl-none">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea
              necessitatibus consequuntur,
            </p>
            <p className="p-4 bg-blue-500 text-white font-bold rounded-3xl rounded-bl-none">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea
              necessitatibus consequuntur,
            </p>
            <p className="p-4 bg-blue-500 text-white font-bold rounded-3xl rounded-bl-none">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea
              necessitatibus consequuntur,
            </p>
            <p className="p-4 bg-blue-500 text-white font-bold rounded-3xl rounded-bl-none">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea
              necessitatibus consequuntur,
            </p>
            <p className="p-4 bg-blue-500 text-white font-bold rounded-3xl rounded-bl-none">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea
              necessitatibus consequuntur,
            </p>
            <p className="p-4 bg-blue-500 text-white font-bold rounded-3xl rounded-bl-none">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea
              necessitatibus consequuntur,
            </p>
            <p className="p-4 bg-blue-500 text-white font-bold rounded-3xl rounded-bl-none">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea
              necessitatibus consequuntur,
            </p>
            <p className="p-4 bg-blue-500 text-white font-bold rounded-3xl rounded-bl-none">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea
              necessitatibus consequuntur,
            </p>
            <p className="p-4 bg-blue-500 text-white font-bold rounded-3xl rounded-bl-none">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea
              necessitatibus consequuntur,
            </p>
            <p className="p-4 bg-blue-500 text-white font-bold rounded-3xl rounded-bl-none">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea
              necessitatibus consequuntur,
            </p>
            <p className="p-4 bg-blue-500 text-white font-bold rounded-3xl rounded-bl-none">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea
              necessitatibus consequuntur,
            </p>
            <p className="p-4 bg-blue-500 text-white font-bold rounded-3xl rounded-bl-none">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea
              necessitatibus consequuntur,
            </p>
            <p className="p-4 bg-blue-500 text-white font-bold rounded-3xl rounded-bl-none">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea
              necessitatibus consequuntur,
            </p>
          </div>
        </div>
      </div>
      {/* chat end */}
      <div className="w-[100%] h-[12%] flex justify-between items-center bg-white px-5 border">
        <div className="w-[90%] flex items-center">
          <div className="w-[90px] flex items-center gap-2">
            <Icon
              className="w-[50%] max-w-9 h-9 max-h-9 px-2 py-1 text-blue-500 bg-blue-100 hover:bg-blue-200 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
              icon="iconoir:emoji"
            />
            <Icon
              className="w-[50%] max-w-9 h-9 max-h-9 px-2 py-1 text-blue-500 bg-blue-100 hover:bg-blue-200 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
              icon="ic:baseline-plus"
            />
          </div>
          <input
            className="w-[90%] outline-none px-4"
            type="text"
            placeholder="Write your message here..."
          />
        </div>
        <div className="w[90px] flex items-center gap-2 justify-end">
          <Icon
            className="w-[50%] max-w-9 h-9 max-h-9 px-2 py-1 text-blue-500 bg-blue-100 hover:bg-blue-200 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
            icon="material-symbols:mic-outline"
          />
          <Icon
            className="w-[50%] max-w-9 h-9 max-h-9 px-2 py-1 text-blue-500 bg-blue-100 hover:bg-blue-200 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
            icon="bxs:navigation"
          />
        </div>
      </div>
    </section>
  );
};

export default Chat;
