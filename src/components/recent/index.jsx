import { Icon } from "@iconify/react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import avatar from "../../assets/avatar1.jpg";
import useWidth from "../../hooks/useWidth";
import profile1 from "../../assets/profile.jpg";
import profile2 from "../../assets/profile-2.jpg";
import profile3 from "../../assets/profile-3.jpg";
import profile4 from "../../assets/profile-4.jpg";
import { useDispatch, useSelector } from "react-redux";
import { chat, navBar } from "../../store/toggleBarsSlice";

const Recent = () => {
  const width = useWidth();
  const dispatch = useDispatch();
  const toggle = useSelector((state) => state.toggle);

  return (
    <section
      className={` ${
        !toggle.recent ? "hidden" : ""
      } relative w-[100%] md:w-[40%] h-[100%] font-montserrat bg-white`}
    >
      <Icon
        className="absolute bottom-5 right-5 w-12 h-12 p-3  text-white bg-blue-500 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
        icon="charm:plus"
      />
      <div className="w-[100%] h-[270px] absolute top-0 flex flex-col justify-between pt-5 gap-4 px-6">
        <div className="w-[100%] h-[120px] flex justify-between items-center">
          <div className="flex flex-col gap-1">
            <h1 className="text-[22px] text-gray-700 font-extrabold">Recent</h1>
            <p className="text-base text-gray-500">Chat from your friends 😘</p>
          </div>
          <div className="flex items-center">
            <Icon
              onClick={() => {
                dispatch(navBar());
                console.log("navbar");
              }}
              className="w-9 h-9 px-2 py-1 text-blue-500 bg-blue-100 hover:bg-blue-200 rounded-full transition-all duration-300 ease-in-out cursor-pointer mr-2"
              icon="uil:apps"
            />
            <Icon
              onClick={() => dispatch(chat())}
              className="md:hidden w-9 h-9 px-2 py-1 text-blue-500 bg-blue-100 hover:bg-blue-200 rounded-full transition-all duration-300 ease-in-out cursor-pointer mr-2"
              icon="fe:arrow-right"
            />
          </div>
        </div>
        <div className="w-[100%] h-[140px]">
          <Swiper
            className="w-[100%] h-[100%]"
            slidesPerView={width < 768 ? 3 : width < 900 ? 2 : 3}
            spaceBetween={6}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            loop={true}
          >
            {Array.from({ length: 15 }).map((_, index) => (
              <SwiperSlide>
                <img
                  className="w-40 h-32 md:h-28 rounded-2xl"
                  src={avatar}
                  alt=""
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="w-[100%] h-[61%] mt-[270px] pt-12 flex flex-col gap-4 overflow-auto scrollbar">
        <div className="w-[100%] flex justify-between items-center px-6">
          <div className="flex flex-col gap-1">
            <h1 className="text-[22px] text-gray-700 font-extrabold">Chat</h1>
            <p className="text-base text-gray-500">Start New Conversation</p>
          </div>

          <Icon
            className="w-9 h-9 px-2 py-1 text-blue-500 bg-blue-100 hover:bg-blue-200 rounded-full transition-all duration-300 ease-in-out cursor-pointer mr-2"
            icon="iconamoon:search-bold"
          />
        </div>
        <div className="w-[100%] grid grid-cols-3 gap-4 md:gap-1 lg:gap-4 mt-4 px-10 md:px-6 xl:px-10">
          <div className="grid-cols-1 bg-cyan-600 shadow-lg shadow-cyan-500/50 flex justify-center items-center gap-1 py-3 rounded-full text-base font-bold text-white cursor-pointer">
            <Icon className="w-4 h-4" icon="ri:chat-4-fill" /> Chat
          </div>
          <div className="grid-cols-1 bg-gray-200 flex justify-center items-center gap-1 py-3 rounded-full text-base font-bold text-gray-700 cursor-pointer">
            <Icon className="w-[18px] h-[18px]" icon="ic:round-call" /> Call
          </div>
          <div className="grid-cols-1 bg-gray-200 flex justify-center items-center gap-1 py-3 rounded-full text-base font-bold text-gray-700 cursor-pointer">
            <Icon className="w-4 h-4" icon="fluent-mdl2:contact-list" /> Contact
          </div>
        </div>
        <div className="w-[100%] grid grid-cols-2 gap-4 px-10 md:px-6 xl:px-10">
          <div className="grid-cols-1 bg-blue-100 flex justify-center items-center gap-1 py-3 rounded-xl text-base font-bold text-blue-500 cursor-pointer">
            Direct
          </div>
          <div className="grid-cols-1 bg-gray-200 flex justify-center items-center gap-1 py-3 rounded-xl text-base font-bold text-gray-700 cursor-pointer">
            Group
          </div>
        </div>
        <div className="flex flex-col mt-8 gap-2">
          {Array.from({ length: 2 }).map((_, index) => (
            <div key={index} className="flex flex-col">
              <div className="flex justify-between items-center px-6 py-4">
                <div className="flex justify-start gap-4">
                  <div className="relative w-14 h-14">
                    <div className="absolute top-0 right-0 w-3 h-3 rounded-full bg-gray-600 border-[3px] border-white"></div>
                    <img
                      className="rounded-[20px] w-full h-full"
                      src={profile2}
                      alt="avatar"
                    />
                  </div>
                  <div className="flex flex-col justify-center gap-2">
                    <h1 className="font-extrabold text-sm">Joseph Water </h1>
                    <p className="text-gray-500 text-sm">
                      Hi, i am Josephin. How ar...
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-end text-[13px] text-gray-500">
                  <span>24/01/2024</span>
                  <span className="text-green-500 font-extrabold">Seen</span>
                </div>
              </div>

              <div className="flex justify-between items-center bg-blue-100 border-l-4 border-blue-500 px-6 py-4">
                <div className="flex justify-start gap-4">
                  <div className="relative w-14 h-14">
                    <div className="absolute top-0 right-0 w-3 h-3 rounded-full bg-green-600 border-[3px] border-white"></div>
                    <img
                      className="rounded-[20px] w-full h-full bg-cover"
                      src={profile1}
                      alt="avatar"
                    />
                  </div>
                  <div className="flex flex-col ">
                    <h1 className="font-extrabold text-sm">Jony Lynetin</h1>
                    <p className="text-blue-500 font-bold">Typing........</p>
                  </div>
                </div>
                <div className="flex flex-col items-end text-[13px] text-gray-500">
                  <span>24/01/2024</span>
                  <span className="bg-blue-500 text-white px-2 py-[2px] font-bold rounded-full">
                    8
                  </span>
                </div>
              </div>

              <div className="flex justify-between items-center px-6 py-4">
                <div className="flex justify-start gap-4">
                  <div className="relative w-14 h-14">
                    <div className="absolute top-0 right-0 w-3 h-3 rounded-full bg-orange-600 border-[3px] border-white"></div>
                    <img
                      className="rounded-[20px] w-full h-full bg-contain"
                      src={profile3}
                      alt="avatar"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h1 className="font-extrabold text-sm">Mukrani Pabelo</h1>
                    <p className="text-gray-500 text-sm">
                      Hi, i am Josephin. How ar...
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-end text-[13px] text-gray-500">
                  <span>24/01/2024</span>
                  <span className="text-red-500 font-extrabold">Failed</span>
                </div>
              </div>

              <div className="flex justify-between items-center px-6 py-4">
                <div className="flex justify-start gap-4">
                  <div className="relative w-14 h-14">
                    <div className="absolute top-0 right-0 w-3 h-3 rounded-full bg-yellow-600 border-[3px] border-white"></div>
                    <img
                      className="rounded-[20px] w-full h-full"
                      src={profile4}
                      alt="avatar"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h1 className="font-extrabold text-sm">Sufiya Elija</h1>
                    <p className="text-gray-500 text-sm">
                      Hi, i am Josephin. How ar...
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-end text-[13px] text-gray-500">
                  <span>24/01/2024</span>
                  <span className="text-gray-500 font-extrabold">Sending</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recent;
