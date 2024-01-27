import { Icon } from "@iconify/react";
import { Disclosure } from "@headlessui/react";
import img1 from "../../assets/1.jpg";
import img2 from "../../assets/2.jpg";
import img3 from "../../assets/3.jpg";
import img4 from "../../assets/4.jpg";
import img5 from "../../assets/5.jpg";
import { useDispatch, useSelector } from "react-redux";
import { setApplication } from "../../store/toggleBarsSlice";

const Right = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.toggle);

  return (
    <>
      {state.application === "files" && (
        <section
          className={`absolute ${
            state.layout ? "left-[120px]" : "right-[120px]"
          } w-[330px] h-[100%] font-montserrat bg-white`}
        >
          <div className="w-[100%] h-[180px] pt-10 bg-white px-6">
            <div className="w-[100%] flex justify-between rtl:flex-row-reverse items-center">
              <div className="flex flex-col">
                <h1 className="text-[22px] text-gray-700 font-extrabold">
                  Files
                </h1>
                <p className="text-base text-gray-500">Shared Media</p>
              </div>
              <div className="flex items-center">
                <Icon
                  onClick={() => dispatch(setApplication(""))}
                  className="w-9 h-9 p-[10px] text-blue-500 bg-blue-100 hover:bg-blue-200 rounded-full transition-all duration-300 ease-in-out cursor-pointer mr-2"
                  icon="maki:cross"
                />
              </div>
            </div>
            <div className="w-[100%] mt-6 grid grid-cols-3 gap-4 ">
              <div className="grid-cols-1 bg-blue-100 flex justify-center items-center gap-1 py-2 rounded-xl text-base font-bold text-blue-500 cursor-pointer">
                Media
              </div>
              <div className="grid-cols-1 bg-gray-200 flex justify-center items-center gap-1 py-2 rounded-xl text-base font-bold text-gray-700 cursor-pointer">
                Links
              </div>
              <div className="grid-cols-1 bg-gray-200 flex justify-center items-center gap-1 py-2 rounded-xl text-base font-bold text-gray-700 cursor-pointer">
                Docs
              </div>
            </div>
          </div>
          <div className="w-[100%] h-[70%] px-6 flex flex-col overflow-auto scrollbar">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between py-2 text-left text-sm font-medium ">
                    <span className="font-bold text-base text-gray-800 flex gap-2">
                      12/12/2023
                      <span className="bg-blue-500 text-white text-xs flex justify-center items-center px-2 font-bold rounded">
                        0
                      </span>
                    </span>
                    <Icon
                      icon="oui:arrow-down"
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="grid grid-cols-3 grid-rows-2 gap-4 py-2">
                    <div className="relative flex justify-center items-center w-[100%] h-[180px] col-span-1 row-span-2 rounded-xl group cursor-pointer transition-all duration-300 ease-in-out">
                      <div className="hidden group-hover:block absolute w-full h-full rounded-xl bg-black opacity-10 transition-all duration-300 ease-in-out"></div>
                      <Icon
                        className="absolute hidden group-hover:block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9 h-9 p-2  text-white opacity-100 bg-blue-500 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
                        icon="charm:plus"
                      />
                      <img
                        className="w-[100%] h-[100%] rounded-xl bg-cover"
                        src={img1}
                        alt="logo"
                      />
                    </div>
                    <div className="relative flex justify-center items-center w-[100%] h-[80px] col-span-1 row-span-1 rounded-xl group cursor-pointer transition-all duration-300 ease-in-out">
                      <div className="hidden group-hover:block absolute w-full h-full rounded-xl bg-black opacity-10 transition-all duration-300 ease-in-out"></div>
                      <Icon
                        className="absolute hidden group-hover:block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9 h-9 p-2  text-white opacity-100 bg-blue-500 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
                        icon="charm:plus"
                      />
                      <img
                        className="w-[100%] h-[100%] rounded-xl bg-cover"
                        src={img2}
                        alt="logo"
                      />
                    </div>
                    <div className="relative flex justify-center items-center w-[100%] h-[80px] col-span-1 row-span-1 rounded-xl group cursor-pointer transition-all duration-300 ease-in-out">
                      <div className="hidden group-hover:block absolute w-full h-full rounded-xl bg-black opacity-10 transition-all duration-300 ease-in-out"></div>
                      <Icon
                        className="absolute hidden group-hover:block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9 h-9 p-2  text-white opacity-100 bg-blue-500 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
                        icon="charm:plus"
                      />
                      <img
                        className="w-[100%] h-[100%] rounded-xl bg-cover"
                        src={img3}
                        alt="logo"
                      />
                    </div>
                    <div className="relative flex justify-center items-center w-[100%] h-[80px] col-span-1 row-span-1 rounded-xl group cursor-pointer transition-all duration-300 ease-in-out">
                      <div className="hidden group-hover:block absolute w-full h-full rounded-xl bg-black opacity-10 transition-all duration-300 ease-in-out"></div>
                      <Icon
                        className="absolute hidden group-hover:block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9 h-9 p-2  text-white opacity-100 bg-blue-500 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
                        icon="charm:plus"
                      />
                      <img
                        className="w-[100%] h-[100%] rounded-xl bg-cover"
                        src={img4}
                        alt="logo"
                      />
                    </div>
                    <div className="relative flex justify-center items-center w-[100%] h-[80px] col-span-1 row-span-1 rounded-xl group cursor-pointer transition-all duration-300 ease-in-out">
                      <div className="hidden group-hover:block absolute w-full h-full rounded-xl bg-black opacity-10 transition-all duration-300 ease-in-out"></div>
                      <Icon
                        className="absolute hidden group-hover:block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9 h-9 p-2  text-white opacity-100 bg-blue-500 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
                        icon="charm:plus"
                      />
                      <img
                        className="w-[100%] h-[100%] rounded-xl bg-cover"
                        src={img5}
                        alt="logo"
                      />
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure as="div" className="mt-2">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between py-2 text-left text-sm font-medium ">
                    <span className="font-bold text-base text-gray-800 flex gap-2">
                      10/01/2024{" "}
                      <span className="bg-blue-500 text-white text-xs flex justify-center items-center px-2 font-bold rounded">
                        0
                      </span>
                    </span>
                    <Icon
                      icon="oui:arrow-down"
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="grid grid-cols-3 grid-rows-2 gap-4 py-2">
                    <div className="relative flex justify-center items-center w-[100%] h-[180px] col-span-1 row-span-2 rounded-xl group cursor-pointer transition-all duration-300 ease-in-out">
                      <div className="hidden group-hover:block absolute w-full h-full rounded-xl bg-black opacity-10 transition-all duration-300 ease-in-out"></div>
                      <Icon
                        className="absolute hidden group-hover:block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9 h-9 p-2  text-white opacity-100 bg-blue-500 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
                        icon="charm:plus"
                      />
                      <img
                        className="w-[100%] h-[100%] rounded-xl bg-cover"
                        src={img1}
                        alt="logo"
                      />
                    </div>
                    <div className="relative flex justify-center items-center w-[100%] h-[80px] col-span-1 row-span-1 rounded-xl group cursor-pointer transition-all duration-300 ease-in-out">
                      <div className="hidden group-hover:block absolute w-full h-full rounded-xl bg-black opacity-10 transition-all duration-300 ease-in-out"></div>
                      <Icon
                        className="absolute hidden group-hover:block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9 h-9 p-2  text-white opacity-100 bg-blue-500 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
                        icon="charm:plus"
                      />
                      <img
                        className="w-[100%] h-[100%] rounded-xl bg-cover"
                        src={img2}
                        alt="logo"
                      />
                    </div>
                    <div className="relative flex justify-center items-center w-[100%] h-[80px] col-span-1 row-span-1 rounded-xl group cursor-pointer transition-all duration-300 ease-in-out">
                      <div className="hidden group-hover:block absolute w-full h-full rounded-xl bg-black opacity-10 transition-all duration-300 ease-in-out"></div>
                      <Icon
                        className="absolute hidden group-hover:block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9 h-9 p-2  text-white opacity-100 bg-blue-500 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
                        icon="charm:plus"
                      />
                      <img
                        className="w-[100%] h-[100%] rounded-xl bg-cover"
                        src={img3}
                        alt="logo"
                      />
                    </div>
                    <div className="relative flex justify-center items-center w-[100%] h-[80px] col-span-1 row-span-1 rounded-xl group cursor-pointer transition-all duration-300 ease-in-out">
                      <div className="hidden group-hover:block absolute w-full h-full rounded-xl bg-black opacity-10 transition-all duration-300 ease-in-out"></div>
                      <Icon
                        className="absolute hidden group-hover:block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9 h-9 p-2  text-white opacity-100 bg-blue-500 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
                        icon="charm:plus"
                      />
                      <img
                        className="w-[100%] h-[100%] rounded-xl bg-cover"
                        src={img4}
                        alt="logo"
                      />
                    </div>
                    <div className="relative flex justify-center items-center w-[100%] h-[80px] col-span-1 row-span-1 rounded-xl group cursor-pointer transition-all duration-300 ease-in-out">
                      <div className="hidden group-hover:block absolute w-full h-full rounded-xl bg-black opacity-10 transition-all duration-300 ease-in-out"></div>
                      <Icon
                        className="absolute hidden group-hover:block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9 h-9 p-2  text-white opacity-100 bg-blue-500 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
                        icon="charm:plus"
                      />
                      <img
                        className="w-[100%] h-[100%] rounded-xl bg-cover"
                        src={img5}
                        alt="logo"
                      />
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure as="div" className="mt-2">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between py-2 text-left text-sm font-medium ">
                    <span className="font-bold text-base text-gray-800 flex gap-2">
                      12/03/2024{" "}
                      <span className="bg-blue-500 text-white text-xs flex justify-center items-center px-2 font-bold rounded">
                        0
                      </span>
                    </span>
                    <Icon
                      icon="oui:arrow-down"
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="grid grid-cols-3 grid-rows-2 gap-4 py-2">
                    <div className="relative flex justify-center items-center w-[100%] h-[80px] col-span-1 row-span-1 rounded-xl group cursor-pointer transition-all duration-300 ease-in-out">
                      <div className="hidden group-hover:block absolute w-full h-full rounded-xl bg-black opacity-10 transition-all duration-300 ease-in-out"></div>
                      <Icon
                        className="absolute hidden group-hover:block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9 h-9 p-2  text-white opacity-100 bg-blue-500 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
                        icon="charm:plus"
                      />
                      <img
                        className="w-[100%] h-[100%] rounded-xl bg-cover"
                        src={img3}
                        alt="logo"
                      />
                    </div>
                    <div className="relative flex justify-center items-center w-[100%] h-[80px] col-span-1 row-span-1 rounded-xl group cursor-pointer transition-all duration-300 ease-in-out">
                      <div className="hidden group-hover:block absolute w-full h-full rounded-xl bg-black opacity-10 transition-all duration-300 ease-in-out"></div>
                      <Icon
                        className="absolute hidden group-hover:block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9 h-9 p-2  text-white opacity-100 bg-blue-500 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
                        icon="charm:plus"
                      />
                      <img
                        className="w-[100%] h-[100%] rounded-xl bg-cover"
                        src={img4}
                        alt="logo"
                      />
                    </div>
                    <div className="relative flex justify-center items-center w-[100%] h-[80px] col-span-1 row-span-1 rounded-xl group cursor-pointer transition-all duration-300 ease-in-out">
                      <div className="hidden group-hover:block absolute w-full h-full rounded-xl bg-black opacity-10 transition-all duration-300 ease-in-out"></div>
                      <Icon
                        className="absolute hidden group-hover:block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9 h-9 p-2  text-white opacity-100 bg-blue-500 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
                        icon="charm:plus"
                      />
                      <img
                        className="w-[100%] h-[100%] rounded-xl bg-cover"
                        src={img5}
                        alt="logo"
                      />
                    </div>
                    <div className="relative flex justify-center items-center w-[100%] h-[180px] col-span-1 row-span-2 rounded-xl group cursor-pointer transition-all duration-300 ease-in-out">
                      <div className="hidden group-hover:block absolute w-full h-full rounded-xl bg-black opacity-10 transition-all duration-300 ease-in-out"></div>
                      <Icon
                        className="absolute hidden group-hover:block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9 h-9 p-2  text-white opacity-100 bg-blue-500 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
                        icon="charm:plus"
                      />
                      <img
                        className="w-[100%] h-[100%] rounded-xl bg-cover"
                        src={img1}
                        alt="logo"
                      />
                    </div>
                    <div className="relative flex justify-center items-center w-[100%] h-[80px] col-span-1 row-span-1 rounded-xl group cursor-pointer transition-all duration-300 ease-in-out">
                      <div className="hidden group-hover:block absolute w-full h-full rounded-xl bg-black opacity-10 transition-all duration-300 ease-in-out"></div>
                      <Icon
                        className="absolute hidden group-hover:block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9 h-9 p-2  text-white opacity-100 bg-blue-500 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
                        icon="charm:plus"
                      />
                      <img
                        className="w-[100%] h-[100%] rounded-xl bg-cover"
                        src={img2}
                        alt="logo"
                      />
                    </div>
                    <div className="relative flex justify-center items-center w-[100%] h-[80px] col-span-1 row-span-1 rounded-xl group cursor-pointer transition-all duration-300 ease-in-out">
                      <div className="hidden group-hover:block absolute w-full h-full rounded-xl bg-black opacity-10 transition-all duration-300 ease-in-out"></div>
                      <Icon
                        className="absolute hidden group-hover:block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9 h-9 p-2  text-white opacity-100 bg-blue-500 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
                        icon="charm:plus"
                      />
                      <img
                        className="w-[100%] h-[100%] rounded-xl bg-cover"
                        src={img3}
                        alt="logo"
                      />
                    </div>
                    <div className="relative flex justify-center items-center w-[100%] h-[80px] col-span-1 row-span-1 rounded-xl group cursor-pointer transition-all duration-300 ease-in-out">
                      <div className="hidden group-hover:block absolute w-full h-full rounded-xl bg-black opacity-10 transition-all duration-300 ease-in-out"></div>
                      <Icon
                        className="absolute hidden group-hover:block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9 h-9 p-2  text-white opacity-100 bg-blue-500 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
                        icon="charm:plus"
                      />
                      <img
                        className="w-[100%] h-[100%] rounded-xl bg-cover"
                        src={img4}
                        alt="logo"
                      />
                    </div>
                    <div className="relative flex justify-center items-center w-[100%] h-[80px] col-span-1 row-span-1 rounded-xl group cursor-pointer transition-all duration-300 ease-in-out">
                      <div className="hidden group-hover:block absolute w-full h-full rounded-xl bg-black opacity-10 transition-all duration-300 ease-in-out"></div>
                      <Icon
                        className="absolute hidden group-hover:block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9 h-9 p-2  text-white opacity-100 bg-blue-500 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
                        icon="charm:plus"
                      />
                      <img
                        className="w-[100%] h-[100%] rounded-xl bg-cover"
                        src={img5}
                        alt="logo"
                      />
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure as="div" className="mt-2">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between py-2 text-left text-sm font-medium ">
                    <span className="font-bold text-base text-gray-800 flex gap-2">
                      16/03/2024{" "}
                      <span className="bg-blue-500 text-white text-xs flex justify-center items-center px-2 font-bold rounded">
                        0
                      </span>
                    </span>
                    <Icon
                      icon="oui:arrow-down"
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="grid grid-cols-3 grid-rows-2 gap-4 py-2">
                    <div className="relative flex justify-center items-center w-[100%] h-[80px] col-span-1 row-span-1 rounded-xl group cursor-pointer transition-all duration-300 ease-in-out">
                      <div className="hidden group-hover:block absolute w-full h-full rounded-xl bg-black opacity-10 transition-all duration-300 ease-in-out"></div>
                      <Icon
                        className="absolute hidden group-hover:block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9 h-9 p-2  text-white opacity-100 bg-blue-500 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
                        icon="charm:plus"
                      />
                      <img
                        className="w-[100%] h-[100%] rounded-xl bg-cover"
                        src={img3}
                        alt="logo"
                      />
                    </div>
                    <div className="relative flex justify-center items-center w-[100%] h-[80px] col-span-1 row-span-1 rounded-xl group cursor-pointer transition-all duration-300 ease-in-out">
                      <div className="hidden group-hover:block absolute w-full h-full rounded-xl bg-black opacity-10 transition-all duration-300 ease-in-out"></div>
                      <Icon
                        className="absolute hidden group-hover:block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9 h-9 p-2  text-white opacity-100 bg-blue-500 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
                        icon="charm:plus"
                      />
                      <img
                        className="w-[100%] h-[100%] rounded-xl bg-cover"
                        src={img4}
                        alt="logo"
                      />
                    </div>
                    <div className="relative flex justify-center items-center w-[100%] h-[80px] col-span-1 row-span-1 rounded-xl group cursor-pointer transition-all duration-300 ease-in-out">
                      <div className="hidden group-hover:block absolute w-full h-full rounded-xl bg-black opacity-10 transition-all duration-300 ease-in-out"></div>
                      <Icon
                        className="absolute hidden group-hover:block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9 h-9 p-2  text-white opacity-100 bg-blue-500 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
                        icon="charm:plus"
                      />
                      <img
                        className="w-[100%] h-[100%] rounded-xl bg-cover"
                        src={img5}
                        alt="logo"
                      />
                    </div>
                    <div className="relative flex justify-center items-center w-[100%] h-[180px] col-span-1 row-span-2 rounded-xl group cursor-pointer transition-all duration-300 ease-in-out">
                      <div className="hidden group-hover:block absolute w-full h-full rounded-xl bg-black opacity-10 transition-all duration-300 ease-in-out"></div>
                      <Icon
                        className="absolute hidden group-hover:block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9 h-9 p-2  text-white opacity-100 bg-blue-500 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
                        icon="charm:plus"
                      />
                      <img
                        className="w-[100%] h-[100%] rounded-xl bg-cover"
                        src={img1}
                        alt="logo"
                      />
                    </div>
                    <div className="relative flex justify-center items-center w-[100%] h-[80px] col-span-1 row-span-1 rounded-xl group cursor-pointer transition-all duration-300 ease-in-out">
                      <div className="hidden group-hover:block absolute w-full h-full rounded-xl bg-black opacity-10 transition-all duration-300 ease-in-out"></div>
                      <Icon
                        className="absolute hidden group-hover:block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9 h-9 p-2  text-white opacity-100 bg-blue-500 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
                        icon="charm:plus"
                      />
                      <img
                        className="w-[100%] h-[100%] rounded-xl bg-cover"
                        src={img2}
                        alt="logo"
                      />
                    </div>
                    <div className="relative flex justify-center items-center w-[100%] h-[80px] col-span-1 row-span-1 rounded-xl group cursor-pointer transition-all duration-300 ease-in-out">
                      <div className="hidden group-hover:block absolute w-full h-full rounded-xl bg-black opacity-10 transition-all duration-300 ease-in-out"></div>
                      <Icon
                        className="absolute hidden group-hover:block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9 h-9 p-2  text-white opacity-100 bg-blue-500 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
                        icon="charm:plus"
                      />
                      <img
                        className="w-[100%] h-[100%] rounded-xl bg-cover"
                        src={img3}
                        alt="logo"
                      />
                    </div>
                    <div className="relative flex justify-center items-center w-[100%] h-[80px] col-span-1 row-span-1 rounded-xl group cursor-pointer transition-all duration-300 ease-in-out">
                      <div className="hidden group-hover:block absolute w-full h-full rounded-xl bg-black opacity-10 transition-all duration-300 ease-in-out"></div>
                      <Icon
                        className="absolute hidden group-hover:block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9 h-9 p-2  text-white opacity-100 bg-blue-500 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
                        icon="charm:plus"
                      />
                      <img
                        className="w-[100%] h-[100%] rounded-xl bg-cover"
                        src={img4}
                        alt="logo"
                      />
                    </div>
                    <div className="relative flex justify-center items-center w-[100%] h-[80px] col-span-1 row-span-1 rounded-xl group cursor-pointer transition-all duration-300 ease-in-out">
                      <div className="hidden group-hover:block absolute w-full h-full rounded-xl bg-black opacity-10 transition-all duration-300 ease-in-out"></div>
                      <Icon
                        className="absolute hidden group-hover:block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9 h-9 p-2  text-white opacity-100 bg-blue-500 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
                        icon="charm:plus"
                      />
                      <img
                        className="w-[100%] h-[100%] rounded-xl bg-cover"
                        src={img5}
                        alt="logo"
                      />
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </section>
      )}
      {state.application === "notes" && (
        <section
          className={`absolute ${
            state.layout ? "left-[120px]" : "right-[120px]"
          } w-[330px] h-[100%] font-montserrat bg-white`}
        >
          <div className="w-[100%] h-[180px] pt-10 bg-white px-6">
            <div className="w-[100%] flex justify-between rtlems-center">
              <div className="flex flex-col">
                <h1 className="text-[22px] text-gray-700 font-extrabold">
                  Notes
                </h1>
                <p className="text-base text-gray-500">Notes List</p>
              </div>
              <div className="flex items-center">
                <Icon
                  onClick={() => dispatch(setApplication(""))}
                  className="w-9 h-9 p-[10px] text-blue-500 bg-blue-100 hover:bg-blue-200 rounded-full transition-all duration-300 ease-in-out cursor-pointer mr-2"
                  icon="maki:cross"
                />
              </div>
            </div>
            <div className="w-[100%] mt-6 grid grid-cols-3 gap-4 ">
              <div className="grid-cols-1 bg-blue-100 flex justify-center items-center gap-1 py-2 rounded-xl text-base font-bold text-blue-500 cursor-pointer">
                Media
              </div>
              <div className="grid-cols-1 bg-gray-200 flex justify-center items-center gap-1 py-2 rounded-xl text-base font-bold text-gray-700 cursor-pointer">
                Links
              </div>
              <div className="grid-cols-1 bg-gray-200 flex justify-center items-center gap-1 py-2 rounded-xl text-base font-bold text-gray-700 cursor-pointer">
                Docs
              </div>
            </div>
          </div>
          <div className="w-[100%] h-[70%] px-6 flex flex-col overflow-auto scrollbar">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between py-2 text-left text-sm font-medium ">
                    <span className="font-bold text-base text-gray-800 flex gap-2">
                      12/12/2023
                      <span className="bg-blue-500 text-white text-xs flex justify-center items-center px-2 font-bold rounded">
                        0
                      </span>
                    </span>
                    <Icon
                      icon="oui:arrow-down"
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="grid grid-cols-3 grid-rows-2 gap-4 py-2">
                    <div className="relative flex justify-center items-center w-[100%] h-[180px] col-span-1 row-span-2 rounded-xl group cursor-pointer transition-all duration-300 ease-in-out">
                      <div className="hidden group-hover:block absolute w-full h-full rounded-xl bg-black opacity-10 transition-all duration-300 ease-in-out"></div>
                      <Icon
                        className="absolute hidden group-hover:block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9 h-9 p-2  text-white opacity-100 bg-blue-500 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
                        icon="charm:plus"
                      />
                      <img
                        className="w-[100%] h-[100%] rounded-xl bg-cover"
                        src={img1}
                        alt="logo"
                      />
                    </div>
                    <div className="relative flex justify-center items-center w-[100%] h-[80px] col-span-1 row-span-1 rounded-xl group cursor-pointer transition-all duration-300 ease-in-out">
                      <div className="hidden group-hover:block absolute w-full h-full rounded-xl bg-black opacity-10 transition-all duration-300 ease-in-out"></div>
                      <Icon
                        className="absolute hidden group-hover:block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9 h-9 p-2  text-white opacity-100 bg-blue-500 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
                        icon="charm:plus"
                      />
                      <img
                        className="w-[100%] h-[100%] rounded-xl bg-cover"
                        src={img2}
                        alt="logo"
                      />
                    </div>
                    <div className="relative flex justify-center items-center w-[100%] h-[80px] col-span-1 row-span-1 rounded-xl group cursor-pointer transition-all duration-300 ease-in-out">
                      <div className="hidden group-hover:block absolute w-full h-full rounded-xl bg-black opacity-10 transition-all duration-300 ease-in-out"></div>
                      <Icon
                        className="absolute hidden group-hover:block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9 h-9 p-2  text-white opacity-100 bg-blue-500 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
                        icon="charm:plus"
                      />
                      <img
                        className="w-[100%] h-[100%] rounded-xl bg-cover"
                        src={img3}
                        alt="logo"
                      />
                    </div>
                    <div className="relative flex justify-center items-center w-[100%] h-[80px] col-span-1 row-span-1 rounded-xl group cursor-pointer transition-all duration-300 ease-in-out">
                      <div className="hidden group-hover:block absolute w-full h-full rounded-xl bg-black opacity-10 transition-all duration-300 ease-in-out"></div>
                      <Icon
                        className="absolute hidden group-hover:block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9 h-9 p-2  text-white opacity-100 bg-blue-500 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
                        icon="charm:plus"
                      />
                      <img
                        className="w-[100%] h-[100%] rounded-xl bg-cover"
                        src={img4}
                        alt="logo"
                      />
                    </div>
                    <div className="relative flex justify-center items-center w-[100%] h-[80px] col-span-1 row-span-1 rounded-xl group cursor-pointer transition-all duration-300 ease-in-out">
                      <div className="hidden group-hover:block absolute w-full h-full rounded-xl bg-black opacity-10 transition-all duration-300 ease-in-out"></div>
                      <Icon
                        className="absolute hidden group-hover:block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9 h-9 p-2  text-white opacity-100 bg-blue-500 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
                        icon="charm:plus"
                      />
                      <img
                        className="w-[100%] h-[100%] rounded-xl bg-cover"
                        src={img5}
                        alt="logo"
                      />
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure as="div" className="mt-2">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between py-2 text-left text-sm font-medium ">
                    <span className="font-bold text-base text-gray-800 flex gap-2">
                      10/01/2024{" "}
                      <span className="bg-blue-500 text-white text-xs flex justify-center items-center px-2 font-bold rounded">
                        0
                      </span>
                    </span>
                    <Icon
                      icon="oui:arrow-down"
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="grid grid-cols-3 grid-rows-2 gap-4 py-2">
                    <div className="relative flex justify-center items-center w-[100%] h-[180px] col-span-1 row-span-2 rounded-xl group cursor-pointer transition-all duration-300 ease-in-out">
                      <div className="hidden group-hover:block absolute w-full h-full rounded-xl bg-black opacity-10 transition-all duration-300 ease-in-out"></div>
                      <Icon
                        className="absolute hidden group-hover:block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9 h-9 p-2  text-white opacity-100 bg-blue-500 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
                        icon="charm:plus"
                      />
                      <img
                        className="w-[100%] h-[100%] rounded-xl bg-cover"
                        src={img1}
                        alt="logo"
                      />
                    </div>
                    <div className="relative flex justify-center items-center w-[100%] h-[80px] col-span-1 row-span-1 rounded-xl group cursor-pointer transition-all duration-300 ease-in-out">
                      <div className="hidden group-hover:block absolute w-full h-full rounded-xl bg-black opacity-10 transition-all duration-300 ease-in-out"></div>
                      <Icon
                        className="absolute hidden group-hover:block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9 h-9 p-2  text-white opacity-100 bg-blue-500 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
                        icon="charm:plus"
                      />
                      <img
                        className="w-[100%] h-[100%] rounded-xl bg-cover"
                        src={img2}
                        alt="logo"
                      />
                    </div>
                    <div className="relative flex justify-center items-center w-[100%] h-[80px] col-span-1 row-span-1 rounded-xl group cursor-pointer transition-all duration-300 ease-in-out">
                      <div className="hidden group-hover:block absolute w-full h-full rounded-xl bg-black opacity-10 transition-all duration-300 ease-in-out"></div>
                      <Icon
                        className="absolute hidden group-hover:block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9 h-9 p-2  text-white opacity-100 bg-blue-500 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
                        icon="charm:plus"
                      />
                      <img
                        className="w-[100%] h-[100%] rounded-xl bg-cover"
                        src={img3}
                        alt="logo"
                      />
                    </div>
                    <div className="relative flex justify-center items-center w-[100%] h-[80px] col-span-1 row-span-1 rounded-xl group cursor-pointer transition-all duration-300 ease-in-out">
                      <div className="hidden group-hover:block absolute w-full h-full rounded-xl bg-black opacity-10 transition-all duration-300 ease-in-out"></div>
                      <Icon
                        className="absolute hidden group-hover:block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9 h-9 p-2  text-white opacity-100 bg-blue-500 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
                        icon="charm:plus"
                      />
                      <img
                        className="w-[100%] h-[100%] rounded-xl bg-cover"
                        src={img4}
                        alt="logo"
                      />
                    </div>
                    <div className="relative flex justify-center items-center w-[100%] h-[80px] col-span-1 row-span-1 rounded-xl group cursor-pointer transition-all duration-300 ease-in-out">
                      <div className="hidden group-hover:block absolute w-full h-full rounded-xl bg-black opacity-10 transition-all duration-300 ease-in-out"></div>
                      <Icon
                        className="absolute hidden group-hover:block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9 h-9 p-2  text-white opacity-100 bg-blue-500 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
                        icon="charm:plus"
                      />
                      <img
                        className="w-[100%] h-[100%] rounded-xl bg-cover"
                        src={img5}
                        alt="logo"
                      />
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure as="div" className="mt-2">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between py-2 text-left text-sm font-medium ">
                    <span className="font-bold text-base text-gray-800 flex gap-2">
                      12/03/2024{" "}
                      <span className="bg-blue-500 text-white text-xs flex justify-center items-center px-2 font-bold rounded">
                        0
                      </span>
                    </span>
                    <Icon
                      icon="oui:arrow-down"
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="grid grid-cols-3 grid-rows-2 gap-4 py-2">
                    <div className="relative flex justify-center items-center w-[100%] h-[80px] col-span-1 row-span-1 rounded-xl group cursor-pointer transition-all duration-300 ease-in-out">
                      <div className="hidden group-hover:block absolute w-full h-full rounded-xl bg-black opacity-10 transition-all duration-300 ease-in-out"></div>
                      <Icon
                        className="absolute hidden group-hover:block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9 h-9 p-2  text-white opacity-100 bg-blue-500 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
                        icon="charm:plus"
                      />
                      <img
                        className="w-[100%] h-[100%] rounded-xl bg-cover"
                        src={img3}
                        alt="logo"
                      />
                    </div>
                    <div className="relative flex justify-center items-center w-[100%] h-[80px] col-span-1 row-span-1 rounded-xl group cursor-pointer transition-all duration-300 ease-in-out">
                      <div className="hidden group-hover:block absolute w-full h-full rounded-xl bg-black opacity-10 transition-all duration-300 ease-in-out"></div>
                      <Icon
                        className="absolute hidden group-hover:block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9 h-9 p-2  text-white opacity-100 bg-blue-500 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
                        icon="charm:plus"
                      />
                      <img
                        className="w-[100%] h-[100%] rounded-xl bg-cover"
                        src={img4}
                        alt="logo"
                      />
                    </div>
                    <div className="relative flex justify-center items-center w-[100%] h-[80px] col-span-1 row-span-1 rounded-xl group cursor-pointer transition-all duration-300 ease-in-out">
                      <div className="hidden group-hover:block absolute w-full h-full rounded-xl bg-black opacity-10 transition-all duration-300 ease-in-out"></div>
                      <Icon
                        className="absolute hidden group-hover:block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9 h-9 p-2  text-white opacity-100 bg-blue-500 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
                        icon="charm:plus"
                      />
                      <img
                        className="w-[100%] h-[100%] rounded-xl bg-cover"
                        src={img5}
                        alt="logo"
                      />
                    </div>
                    <div className="relative flex justify-center items-center w-[100%] h-[180px] col-span-1 row-span-2 rounded-xl group cursor-pointer transition-all duration-300 ease-in-out">
                      <div className="hidden group-hover:block absolute w-full h-full rounded-xl bg-black opacity-10 transition-all duration-300 ease-in-out"></div>
                      <Icon
                        className="absolute hidden group-hover:block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9 h-9 p-2  text-white opacity-100 bg-blue-500 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
                        icon="charm:plus"
                      />
                      <img
                        className="w-[100%] h-[100%] rounded-xl bg-cover"
                        src={img1}
                        alt="logo"
                      />
                    </div>
                    <div className="relative flex justify-center items-center w-[100%] h-[80px] col-span-1 row-span-1 rounded-xl group cursor-pointer transition-all duration-300 ease-in-out">
                      <div className="hidden group-hover:block absolute w-full h-full rounded-xl bg-black opacity-10 transition-all duration-300 ease-in-out"></div>
                      <Icon
                        className="absolute hidden group-hover:block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9 h-9 p-2  text-white opacity-100 bg-blue-500 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
                        icon="charm:plus"
                      />
                      <img
                        className="w-[100%] h-[100%] rounded-xl bg-cover"
                        src={img2}
                        alt="logo"
                      />
                    </div>
                    <div className="relative flex justify-center items-center w-[100%] h-[80px] col-span-1 row-span-1 rounded-xl group cursor-pointer transition-all duration-300 ease-in-out">
                      <div className="hidden group-hover:block absolute w-full h-full rounded-xl bg-black opacity-10 transition-all duration-300 ease-in-out"></div>
                      <Icon
                        className="absolute hidden group-hover:block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9 h-9 p-2  text-white opacity-100 bg-blue-500 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
                        icon="charm:plus"
                      />
                      <img
                        className="w-[100%] h-[100%] rounded-xl bg-cover"
                        src={img3}
                        alt="logo"
                      />
                    </div>
                    <div className="relative flex justify-center items-center w-[100%] h-[80px] col-span-1 row-span-1 rounded-xl group cursor-pointer transition-all duration-300 ease-in-out">
                      <div className="hidden group-hover:block absolute w-full h-full rounded-xl bg-black opacity-10 transition-all duration-300 ease-in-out"></div>
                      <Icon
                        className="absolute hidden group-hover:block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9 h-9 p-2  text-white opacity-100 bg-blue-500 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
                        icon="charm:plus"
                      />
                      <img
                        className="w-[100%] h-[100%] rounded-xl bg-cover"
                        src={img4}
                        alt="logo"
                      />
                    </div>
                    <div className="relative flex justify-center items-center w-[100%] h-[80px] col-span-1 row-span-1 rounded-xl group cursor-pointer transition-all duration-300 ease-in-out">
                      <div className="hidden group-hover:block absolute w-full h-full rounded-xl bg-black opacity-10 transition-all duration-300 ease-in-out"></div>
                      <Icon
                        className="absolute hidden group-hover:block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9 h-9 p-2  text-white opacity-100 bg-blue-500 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
                        icon="charm:plus"
                      />
                      <img
                        className="w-[100%] h-[100%] rounded-xl bg-cover"
                        src={img5}
                        alt="logo"
                      />
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure as="div" className="mt-2">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between py-2 text-left text-sm font-medium ">
                    <span className="font-bold text-base text-gray-800 flex gap-2">
                      16/03/2024{" "}
                      <span className="bg-blue-500 text-white text-xs flex justify-center items-center px-2 font-bold rounded">
                        0
                      </span>
                    </span>
                    <Icon
                      icon="oui:arrow-down"
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="grid grid-cols-3 grid-rows-2 gap-4 py-2">
                    <div className="relative flex justify-center items-center w-[100%] h-[80px] col-span-1 row-span-1 rounded-xl group cursor-pointer transition-all duration-300 ease-in-out">
                      <div className="hidden group-hover:block absolute w-full h-full rounded-xl bg-black opacity-10 transition-all duration-300 ease-in-out"></div>
                      <Icon
                        className="absolute hidden group-hover:block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9 h-9 p-2  text-white opacity-100 bg-blue-500 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
                        icon="charm:plus"
                      />
                      <img
                        className="w-[100%] h-[100%] rounded-xl bg-cover"
                        src={img3}
                        alt="logo"
                      />
                    </div>
                    <div className="relative flex justify-center items-center w-[100%] h-[80px] col-span-1 row-span-1 rounded-xl group cursor-pointer transition-all duration-300 ease-in-out">
                      <div className="hidden group-hover:block absolute w-full h-full rounded-xl bg-black opacity-10 transition-all duration-300 ease-in-out"></div>
                      <Icon
                        className="absolute hidden group-hover:block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9 h-9 p-2  text-white opacity-100 bg-blue-500 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
                        icon="charm:plus"
                      />
                      <img
                        className="w-[100%] h-[100%] rounded-xl bg-cover"
                        src={img4}
                        alt="logo"
                      />
                    </div>
                    <div className="relative flex justify-center items-center w-[100%] h-[80px] col-span-1 row-span-1 rounded-xl group cursor-pointer transition-all duration-300 ease-in-out">
                      <div className="hidden group-hover:block absolute w-full h-full rounded-xl bg-black opacity-10 transition-all duration-300 ease-in-out"></div>
                      <Icon
                        className="absolute hidden group-hover:block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9 h-9 p-2  text-white opacity-100 bg-blue-500 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
                        icon="charm:plus"
                      />
                      <img
                        className="w-[100%] h-[100%] rounded-xl bg-cover"
                        src={img5}
                        alt="logo"
                      />
                    </div>
                    <div className="relative flex justify-center items-center w-[100%] h-[180px] col-span-1 row-span-2 rounded-xl group cursor-pointer transition-all duration-300 ease-in-out">
                      <div className="hidden group-hover:block absolute w-full h-full rounded-xl bg-black opacity-10 transition-all duration-300 ease-in-out"></div>
                      <Icon
                        className="absolute hidden group-hover:block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9 h-9 p-2  text-white opacity-100 bg-blue-500 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
                        icon="charm:plus"
                      />
                      <img
                        className="w-[100%] h-[100%] rounded-xl bg-cover"
                        src={img1}
                        alt="logo"
                      />
                    </div>
                    <div className="relative flex justify-center items-center w-[100%] h-[80px] col-span-1 row-span-1 rounded-xl group cursor-pointer transition-all duration-300 ease-in-out">
                      <div className="hidden group-hover:block absolute w-full h-full rounded-xl bg-black opacity-10 transition-all duration-300 ease-in-out"></div>
                      <Icon
                        className="absolute hidden group-hover:block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9 h-9 p-2  text-white opacity-100 bg-blue-500 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
                        icon="charm:plus"
                      />
                      <img
                        className="w-[100%] h-[100%] rounded-xl bg-cover"
                        src={img2}
                        alt="logo"
                      />
                    </div>
                    <div className="relative flex justify-center items-center w-[100%] h-[80px] col-span-1 row-span-1 rounded-xl group cursor-pointer transition-all duration-300 ease-in-out">
                      <div className="hidden group-hover:block absolute w-full h-full rounded-xl bg-black opacity-10 transition-all duration-300 ease-in-out"></div>
                      <Icon
                        className="absolute hidden group-hover:block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9 h-9 p-2  text-white opacity-100 bg-blue-500 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
                        icon="charm:plus"
                      />
                      <img
                        className="w-[100%] h-[100%] rounded-xl bg-cover"
                        src={img3}
                        alt="logo"
                      />
                    </div>
                    <div className="relative flex justify-center items-center w-[100%] h-[80px] col-span-1 row-span-1 rounded-xl group cursor-pointer transition-all duration-300 ease-in-out">
                      <div className="hidden group-hover:block absolute w-full h-full rounded-xl bg-black opacity-10 transition-all duration-300 ease-in-out"></div>
                      <Icon
                        className="absolute hidden group-hover:block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9 h-9 p-2  text-white opacity-100 bg-blue-500 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
                        icon="charm:plus"
                      />
                      <img
                        className="w-[100%] h-[100%] rounded-xl bg-cover"
                        src={img4}
                        alt="logo"
                      />
                    </div>
                    <div className="relative flex justify-center items-center w-[100%] h-[80px] col-span-1 row-span-1 rounded-xl group cursor-pointer transition-all duration-300 ease-in-out">
                      <div className="hidden group-hover:block absolute w-full h-full rounded-xl bg-black opacity-10 transition-all duration-300 ease-in-out"></div>
                      <Icon
                        className="absolute hidden group-hover:block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9 h-9 p-2  text-white opacity-100 bg-blue-500 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
                        icon="charm:plus"
                      />
                      <img
                        className="w-[100%] h-[100%] rounded-xl bg-cover"
                        src={img5}
                        alt="logo"
                      />
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </section>
      )}
      {state.application === "todo" && (
        <section
          className={`absolute ${
            state.layout ? "left-[120px]" : "right-[120px]"
          } w-[330px] h-[100%] font-montserrat bg-white`}
        >
          <div className="w-[100%] h-[180px] pt-10 bg-white px-6">
            <div className="w-[100%] flex justify-between rtlems-center">
              <div className="flex flex-col">
                <h1 className="text-[22px] text-gray-700 font-extrabold">
                  Todo
                </h1>
                <p className="text-base text-gray-500">to create your task</p>
              </div>
              <div className="flex items-center">
                <Icon
                  onClick={() => dispatch(setApplication(""))}
                  className="w-9 h-9 p-[10px] text-blue-500 bg-blue-100 hover:bg-blue-200 rounded-full transition-all duration-300 ease-in-out cursor-pointer mr-2"
                  icon="maki:cross"
                />
              </div>
            </div>
            <div className="w-[100%] mt-6 grid grid-cols-3 gap-4 ">
              <div className="grid-cols-1 bg-blue-100 flex justify-center items-center gap-1 py-2 rounded-xl text-base font-bold text-blue-500 cursor-pointer">
                Media
              </div>
              <div className="grid-cols-1 bg-gray-200 flex justify-center items-center gap-1 py-2 rounded-xl text-base font-bold text-gray-700 cursor-pointer">
                Links
              </div>
              <div className="grid-cols-1 bg-gray-200 flex justify-center items-center gap-1 py-2 rounded-xl text-base font-bold text-gray-700 cursor-pointer">
                Docs
              </div>
            </div>
          </div>
          <div className="w-[100%] h-[70%] px-6 flex flex-col overflow-auto scrollbar">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between py-2 text-left text-sm font-medium ">
                    <span className="font-bold text-base text-gray-800 flex gap-2">
                      12/12/2023
                      <span className="bg-blue-500 text-white text-xs flex justify-center items-center px-2 font-bold rounded">
                        0
                      </span>
                    </span>
                    <Icon
                      icon="oui:arrow-down"
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="grid grid-cols-3 grid-rows-2 gap-4 py-2">
                    <div className="relative flex justify-center items-center w-[100%] h-[180px] col-span-1 row-span-2 rounded-xl group cursor-pointer transition-all duration-300 ease-in-out">
                      <div className="hidden group-hover:block absolute w-full h-full rounded-xl bg-black opacity-10 transition-all duration-300 ease-in-out"></div>
                      <Icon
                        className="absolute hidden group-hover:block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9 h-9 p-2  text-white opacity-100 bg-blue-500 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
                        icon="charm:plus"
                      />
                      <img
                        className="w-[100%] h-[100%] rounded-xl bg-cover"
                        src={img1}
                        alt="logo"
                      />
                    </div>
                    <div className="relative flex justify-center items-center w-[100%] h-[80px] col-span-1 row-span-1 rounded-xl group cursor-pointer transition-all duration-300 ease-in-out">
                      <div className="hidden group-hover:block absolute w-full h-full rounded-xl bg-black opacity-10 transition-all duration-300 ease-in-out"></div>
                      <Icon
                        className="absolute hidden group-hover:block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9 h-9 p-2  text-white opacity-100 bg-blue-500 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
                        icon="charm:plus"
                      />
                      <img
                        className="w-[100%] h-[100%] rounded-xl bg-cover"
                        src={img2}
                        alt="logo"
                      />
                    </div>
                    <div className="relative flex justify-center items-center w-[100%] h-[80px] col-span-1 row-span-1 rounded-xl group cursor-pointer transition-all duration-300 ease-in-out">
                      <div className="hidden group-hover:block absolute w-full h-full rounded-xl bg-black opacity-10 transition-all duration-300 ease-in-out"></div>
                      <Icon
                        className="absolute hidden group-hover:block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9 h-9 p-2  text-white opacity-100 bg-blue-500 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
                        icon="charm:plus"
                      />
                      <img
                        className="w-[100%] h-[100%] rounded-xl bg-cover"
                        src={img3}
                        alt="logo"
                      />
                    </div>
                    <div className="relative flex justify-center items-center w-[100%] h-[80px] col-span-1 row-span-1 rounded-xl group cursor-pointer transition-all duration-300 ease-in-out">
                      <div className="hidden group-hover:block absolute w-full h-full rounded-xl bg-black opacity-10 transition-all duration-300 ease-in-out"></div>
                      <Icon
                        className="absolute hidden group-hover:block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9 h-9 p-2  text-white opacity-100 bg-blue-500 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
                        icon="charm:plus"
                      />
                      <img
                        className="w-[100%] h-[100%] rounded-xl bg-cover"
                        src={img4}
                        alt="logo"
                      />
                    </div>
                    <div className="relative flex justify-center items-center w-[100%] h-[80px] col-span-1 row-span-1 rounded-xl group cursor-pointer transition-all duration-300 ease-in-out">
                      <div className="hidden group-hover:block absolute w-full h-full rounded-xl bg-black opacity-10 transition-all duration-300 ease-in-out"></div>
                      <Icon
                        className="absolute hidden group-hover:block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9 h-9 p-2  text-white opacity-100 bg-blue-500 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
                        icon="charm:plus"
                      />
                      <img
                        className="w-[100%] h-[100%] rounded-xl bg-cover"
                        src={img5}
                        alt="logo"
                      />
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure as="div" className="mt-2">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between py-2 text-left text-sm font-medium ">
                    <span className="font-bold text-base text-gray-800 flex gap-2">
                      10/01/2024{" "}
                      <span className="bg-blue-500 text-white text-xs flex justify-center items-center px-2 font-bold rounded">
                        0
                      </span>
                    </span>
                    <Icon
                      icon="oui:arrow-down"
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="grid grid-cols-3 grid-rows-2 gap-4 py-2">
                    <div className="relative flex justify-center items-center w-[100%] h-[180px] col-span-1 row-span-2 rounded-xl group cursor-pointer transition-all duration-300 ease-in-out">
                      <div className="hidden group-hover:block absolute w-full h-full rounded-xl bg-black opacity-10 transition-all duration-300 ease-in-out"></div>
                      <Icon
                        className="absolute hidden group-hover:block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9 h-9 p-2  text-white opacity-100 bg-blue-500 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
                        icon="charm:plus"
                      />
                      <img
                        className="w-[100%] h-[100%] rounded-xl bg-cover"
                        src={img1}
                        alt="logo"
                      />
                    </div>
                    <div className="relative flex justify-center items-center w-[100%] h-[80px] col-span-1 row-span-1 rounded-xl group cursor-pointer transition-all duration-300 ease-in-out">
                      <div className="hidden group-hover:block absolute w-full h-full rounded-xl bg-black opacity-10 transition-all duration-300 ease-in-out"></div>
                      <Icon
                        className="absolute hidden group-hover:block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9 h-9 p-2  text-white opacity-100 bg-blue-500 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
                        icon="charm:plus"
                      />
                      <img
                        className="w-[100%] h-[100%] rounded-xl bg-cover"
                        src={img2}
                        alt="logo"
                      />
                    </div>
                    <div className="relative flex justify-center items-center w-[100%] h-[80px] col-span-1 row-span-1 rounded-xl group cursor-pointer transition-all duration-300 ease-in-out">
                      <div className="hidden group-hover:block absolute w-full h-full rounded-xl bg-black opacity-10 transition-all duration-300 ease-in-out"></div>
                      <Icon
                        className="absolute hidden group-hover:block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9 h-9 p-2  text-white opacity-100 bg-blue-500 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
                        icon="charm:plus"
                      />
                      <img
                        className="w-[100%] h-[100%] rounded-xl bg-cover"
                        src={img3}
                        alt="logo"
                      />
                    </div>
                    <div className="relative flex justify-center items-center w-[100%] h-[80px] col-span-1 row-span-1 rounded-xl group cursor-pointer transition-all duration-300 ease-in-out">
                      <div className="hidden group-hover:block absolute w-full h-full rounded-xl bg-black opacity-10 transition-all duration-300 ease-in-out"></div>
                      <Icon
                        className="absolute hidden group-hover:block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9 h-9 p-2  text-white opacity-100 bg-blue-500 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
                        icon="charm:plus"
                      />
                      <img
                        className="w-[100%] h-[100%] rounded-xl bg-cover"
                        src={img4}
                        alt="logo"
                      />
                    </div>
                    <div className="relative flex justify-center items-center w-[100%] h-[80px] col-span-1 row-span-1 rounded-xl group cursor-pointer transition-all duration-300 ease-in-out">
                      <div className="hidden group-hover:block absolute w-full h-full rounded-xl bg-black opacity-10 transition-all duration-300 ease-in-out"></div>
                      <Icon
                        className="absolute hidden group-hover:block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9 h-9 p-2  text-white opacity-100 bg-blue-500 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
                        icon="charm:plus"
                      />
                      <img
                        className="w-[100%] h-[100%] rounded-xl bg-cover"
                        src={img5}
                        alt="logo"
                      />
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure as="div" className="mt-2">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between py-2 text-left text-sm font-medium ">
                    <span className="font-bold text-base text-gray-800 flex gap-2">
                      12/03/2024{" "}
                      <span className="bg-blue-500 text-white text-xs flex justify-center items-center px-2 font-bold rounded">
                        0
                      </span>
                    </span>
                    <Icon
                      icon="oui:arrow-down"
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="grid grid-cols-3 grid-rows-2 gap-4 py-2">
                    <div className="relative flex justify-center items-center w-[100%] h-[80px] col-span-1 row-span-1 rounded-xl group cursor-pointer transition-all duration-300 ease-in-out">
                      <div className="hidden group-hover:block absolute w-full h-full rounded-xl bg-black opacity-10 transition-all duration-300 ease-in-out"></div>
                      <Icon
                        className="absolute hidden group-hover:block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9 h-9 p-2  text-white opacity-100 bg-blue-500 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
                        icon="charm:plus"
                      />
                      <img
                        className="w-[100%] h-[100%] rounded-xl bg-cover"
                        src={img3}
                        alt="logo"
                      />
                    </div>
                    <div className="relative flex justify-center items-center w-[100%] h-[80px] col-span-1 row-span-1 rounded-xl group cursor-pointer transition-all duration-300 ease-in-out">
                      <div className="hidden group-hover:block absolute w-full h-full rounded-xl bg-black opacity-10 transition-all duration-300 ease-in-out"></div>
                      <Icon
                        className="absolute hidden group-hover:block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9 h-9 p-2  text-white opacity-100 bg-blue-500 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
                        icon="charm:plus"
                      />
                      <img
                        className="w-[100%] h-[100%] rounded-xl bg-cover"
                        src={img4}
                        alt="logo"
                      />
                    </div>
                    <div className="relative flex justify-center items-center w-[100%] h-[80px] col-span-1 row-span-1 rounded-xl group cursor-pointer transition-all duration-300 ease-in-out">
                      <div className="hidden group-hover:block absolute w-full h-full rounded-xl bg-black opacity-10 transition-all duration-300 ease-in-out"></div>
                      <Icon
                        className="absolute hidden group-hover:block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9 h-9 p-2  text-white opacity-100 bg-blue-500 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
                        icon="charm:plus"
                      />
                      <img
                        className="w-[100%] h-[100%] rounded-xl bg-cover"
                        src={img5}
                        alt="logo"
                      />
                    </div>
                    <div className="relative flex justify-center items-center w-[100%] h-[180px] col-span-1 row-span-2 rounded-xl group cursor-pointer transition-all duration-300 ease-in-out">
                      <div className="hidden group-hover:block absolute w-full h-full rounded-xl bg-black opacity-10 transition-all duration-300 ease-in-out"></div>
                      <Icon
                        className="absolute hidden group-hover:block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9 h-9 p-2  text-white opacity-100 bg-blue-500 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
                        icon="charm:plus"
                      />
                      <img
                        className="w-[100%] h-[100%] rounded-xl bg-cover"
                        src={img1}
                        alt="logo"
                      />
                    </div>
                    <div className="relative flex justify-center items-center w-[100%] h-[80px] col-span-1 row-span-1 rounded-xl group cursor-pointer transition-all duration-300 ease-in-out">
                      <div className="hidden group-hover:block absolute w-full h-full rounded-xl bg-black opacity-10 transition-all duration-300 ease-in-out"></div>
                      <Icon
                        className="absolute hidden group-hover:block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9 h-9 p-2  text-white opacity-100 bg-blue-500 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
                        icon="charm:plus"
                      />
                      <img
                        className="w-[100%] h-[100%] rounded-xl bg-cover"
                        src={img2}
                        alt="logo"
                      />
                    </div>
                    <div className="relative flex justify-center items-center w-[100%] h-[80px] col-span-1 row-span-1 rounded-xl group cursor-pointer transition-all duration-300 ease-in-out">
                      <div className="hidden group-hover:block absolute w-full h-full rounded-xl bg-black opacity-10 transition-all duration-300 ease-in-out"></div>
                      <Icon
                        className="absolute hidden group-hover:block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9 h-9 p-2  text-white opacity-100 bg-blue-500 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
                        icon="charm:plus"
                      />
                      <img
                        className="w-[100%] h-[100%] rounded-xl bg-cover"
                        src={img3}
                        alt="logo"
                      />
                    </div>
                    <div className="relative flex justify-center items-center w-[100%] h-[80px] col-span-1 row-span-1 rounded-xl group cursor-pointer transition-all duration-300 ease-in-out">
                      <div className="hidden group-hover:block absolute w-full h-full rounded-xl bg-black opacity-10 transition-all duration-300 ease-in-out"></div>
                      <Icon
                        className="absolute hidden group-hover:block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9 h-9 p-2  text-white opacity-100 bg-blue-500 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
                        icon="charm:plus"
                      />
                      <img
                        className="w-[100%] h-[100%] rounded-xl bg-cover"
                        src={img4}
                        alt="logo"
                      />
                    </div>
                    <div className="relative flex justify-center items-center w-[100%] h-[80px] col-span-1 row-span-1 rounded-xl group cursor-pointer transition-all duration-300 ease-in-out">
                      <div className="hidden group-hover:block absolute w-full h-full rounded-xl bg-black opacity-10 transition-all duration-300 ease-in-out"></div>
                      <Icon
                        className="absolute hidden group-hover:block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9 h-9 p-2  text-white opacity-100 bg-blue-500 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
                        icon="charm:plus"
                      />
                      <img
                        className="w-[100%] h-[100%] rounded-xl bg-cover"
                        src={img5}
                        alt="logo"
                      />
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure as="div" className="mt-2">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between py-2 text-left text-sm font-medium ">
                    <span className="font-bold text-base text-gray-800 flex gap-2">
                      16/03/2024{" "}
                      <span className="bg-blue-500 text-white text-xs flex justify-center items-center px-2 font-bold rounded">
                        0
                      </span>
                    </span>
                    <Icon
                      icon="oui:arrow-down"
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="grid grid-cols-3 grid-rows-2 gap-4 py-2">
                    <div className="relative flex justify-center items-center w-[100%] h-[80px] col-span-1 row-span-1 rounded-xl group cursor-pointer transition-all duration-300 ease-in-out">
                      <div className="hidden group-hover:block absolute w-full h-full rounded-xl bg-black opacity-10 transition-all duration-300 ease-in-out"></div>
                      <Icon
                        className="absolute hidden group-hover:block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9 h-9 p-2  text-white opacity-100 bg-blue-500 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
                        icon="charm:plus"
                      />
                      <img
                        className="w-[100%] h-[100%] rounded-xl bg-cover"
                        src={img3}
                        alt="logo"
                      />
                    </div>
                    <div className="relative flex justify-center items-center w-[100%] h-[80px] col-span-1 row-span-1 rounded-xl group cursor-pointer transition-all duration-300 ease-in-out">
                      <div className="hidden group-hover:block absolute w-full h-full rounded-xl bg-black opacity-10 transition-all duration-300 ease-in-out"></div>
                      <Icon
                        className="absolute hidden group-hover:block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9 h-9 p-2  text-white opacity-100 bg-blue-500 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
                        icon="charm:plus"
                      />
                      <img
                        className="w-[100%] h-[100%] rounded-xl bg-cover"
                        src={img4}
                        alt="logo"
                      />
                    </div>
                    <div className="relative flex justify-center items-center w-[100%] h-[80px] col-span-1 row-span-1 rounded-xl group cursor-pointer transition-all duration-300 ease-in-out">
                      <div className="hidden group-hover:block absolute w-full h-full rounded-xl bg-black opacity-10 transition-all duration-300 ease-in-out"></div>
                      <Icon
                        className="absolute hidden group-hover:block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9 h-9 p-2  text-white opacity-100 bg-blue-500 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
                        icon="charm:plus"
                      />
                      <img
                        className="w-[100%] h-[100%] rounded-xl bg-cover"
                        src={img5}
                        alt="logo"
                      />
                    </div>
                    <div className="relative flex justify-center items-center w-[100%] h-[180px] col-span-1 row-span-2 rounded-xl group cursor-pointer transition-all duration-300 ease-in-out">
                      <div className="hidden group-hover:block absolute w-full h-full rounded-xl bg-black opacity-10 transition-all duration-300 ease-in-out"></div>
                      <Icon
                        className="absolute hidden group-hover:block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9 h-9 p-2  text-white opacity-100 bg-blue-500 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
                        icon="charm:plus"
                      />
                      <img
                        className="w-[100%] h-[100%] rounded-xl bg-cover"
                        src={img1}
                        alt="logo"
                      />
                    </div>
                    <div className="relative flex justify-center items-center w-[100%] h-[80px] col-span-1 row-span-1 rounded-xl group cursor-pointer transition-all duration-300 ease-in-out">
                      <div className="hidden group-hover:block absolute w-full h-full rounded-xl bg-black opacity-10 transition-all duration-300 ease-in-out"></div>
                      <Icon
                        className="absolute hidden group-hover:block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9 h-9 p-2  text-white opacity-100 bg-blue-500 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
                        icon="charm:plus"
                      />
                      <img
                        className="w-[100%] h-[100%] rounded-xl bg-cover"
                        src={img2}
                        alt="logo"
                      />
                    </div>
                    <div className="relative flex justify-center items-center w-[100%] h-[80px] col-span-1 row-span-1 rounded-xl group cursor-pointer transition-all duration-300 ease-in-out">
                      <div className="hidden group-hover:block absolute w-full h-full rounded-xl bg-black opacity-10 transition-all duration-300 ease-in-out"></div>
                      <Icon
                        className="absolute hidden group-hover:block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9 h-9 p-2  text-white opacity-100 bg-blue-500 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
                        icon="charm:plus"
                      />
                      <img
                        className="w-[100%] h-[100%] rounded-xl bg-cover"
                        src={img3}
                        alt="logo"
                      />
                    </div>
                    <div className="relative flex justify-center items-center w-[100%] h-[80px] col-span-1 row-span-1 rounded-xl group cursor-pointer transition-all duration-300 ease-in-out">
                      <div className="hidden group-hover:block absolute w-full h-full rounded-xl bg-black opacity-10 transition-all duration-300 ease-in-out"></div>
                      <Icon
                        className="absolute hidden group-hover:block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9 h-9 p-2  text-white opacity-100 bg-blue-500 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
                        icon="charm:plus"
                      />
                      <img
                        className="w-[100%] h-[100%] rounded-xl bg-cover"
                        src={img4}
                        alt="logo"
                      />
                    </div>
                    <div className="relative flex justify-center items-center w-[100%] h-[80px] col-span-1 row-span-1 rounded-xl group cursor-pointer transition-all duration-300 ease-in-out">
                      <div className="hidden group-hover:block absolute w-full h-full rounded-xl bg-black opacity-10 transition-all duration-300 ease-in-out"></div>
                      <Icon
                        className="absolute hidden group-hover:block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9 h-9 p-2  text-white opacity-100 bg-blue-500 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
                        icon="charm:plus"
                      />
                      <img
                        className="w-[100%] h-[100%] rounded-xl bg-cover"
                        src={img5}
                        alt="logo"
                      />
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </section>
      )}
      {state.application === "remind" && (
        <section
          className={`absolute ${
            state.layout ? "left-[120px]" : "right-[120px]"
          } w-[330px] h-[100%] font-montserrat bg-white`}
        >
          <div className="w-[100%] h-[180px] pt-10 bg-white px-6">
            <div className="w-[100%] flex justify-between rtlems-center">
              <div className="flex flex-col">
                <h1 className="text-[22px] text-gray-700 font-extrabold">
                  Reminders
                </h1>
                <p className="text-base text-gray-500">set reminders</p>
              </div>
              <div className="flex items-center">
                <Icon
                  onClick={() => dispatch(setApplication(""))}
                  className="w-9 h-9 p-[10px] text-blue-500 bg-blue-100 hover:bg-blue-200 rounded-full transition-all duration-300 ease-in-out cursor-pointer mr-2"
                  icon="maki:cross"
                />
              </div>
            </div>
            <div className="w-[100%] mt-6 grid grid-cols-3 gap-4 ">
              <div className="grid-cols-1 bg-blue-100 flex justify-center items-center gap-1 py-2 rounded-xl text-base font-bold text-blue-500 cursor-pointer">
                Media
              </div>
              <div className="grid-cols-1 bg-gray-200 flex justify-center items-center gap-1 py-2 rounded-xl text-base font-bold text-gray-700 cursor-pointer">
                Links
              </div>
              <div className="grid-cols-1 bg-gray-200 flex justify-center items-center gap-1 py-2 rounded-xl text-base font-bold text-gray-700 cursor-pointer">
                Docs
              </div>
            </div>
          </div>
          <div className="w-[100%] h-[70%] px-6 flex flex-col overflow-auto scrollbar">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between py-2 text-left text-sm font-medium ">
                    <span className="font-bold text-base text-gray-800 flex gap-2">
                      12/12/2023
                      <span className="bg-blue-500 text-white text-xs flex justify-center items-center px-2 font-bold rounded">
                        0
                      </span>
                    </span>
                    <Icon
                      icon="oui:arrow-down"
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="grid grid-cols-3 grid-rows-2 gap-4 py-2">
                    <div className="relative flex justify-center items-center w-[100%] h-[180px] col-span-1 row-span-2 rounded-xl group cursor-pointer transition-all duration-300 ease-in-out">
                      <div className="hidden group-hover:block absolute w-full h-full rounded-xl bg-black opacity-10 transition-all duration-300 ease-in-out"></div>
                      <Icon
                        className="absolute hidden group-hover:block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9 h-9 p-2  text-white opacity-100 bg-blue-500 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
                        icon="charm:plus"
                      />
                      <img
                        className="w-[100%] h-[100%] rounded-xl bg-cover"
                        src={img1}
                        alt="logo"
                      />
                    </div>
                    <div className="relative flex justify-center items-center w-[100%] h-[80px] col-span-1 row-span-1 rounded-xl group cursor-pointer transition-all duration-300 ease-in-out">
                      <div className="hidden group-hover:block absolute w-full h-full rounded-xl bg-black opacity-10 transition-all duration-300 ease-in-out"></div>
                      <Icon
                        className="absolute hidden group-hover:block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9 h-9 p-2  text-white opacity-100 bg-blue-500 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
                        icon="charm:plus"
                      />
                      <img
                        className="w-[100%] h-[100%] rounded-xl bg-cover"
                        src={img2}
                        alt="logo"
                      />
                    </div>
                    <div className="relative flex justify-center items-center w-[100%] h-[80px] col-span-1 row-span-1 rounded-xl group cursor-pointer transition-all duration-300 ease-in-out">
                      <div className="hidden group-hover:block absolute w-full h-full rounded-xl bg-black opacity-10 transition-all duration-300 ease-in-out"></div>
                      <Icon
                        className="absolute hidden group-hover:block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9 h-9 p-2  text-white opacity-100 bg-blue-500 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
                        icon="charm:plus"
                      />
                      <img
                        className="w-[100%] h-[100%] rounded-xl bg-cover"
                        src={img3}
                        alt="logo"
                      />
                    </div>
                    <div className="relative flex justify-center items-center w-[100%] h-[80px] col-span-1 row-span-1 rounded-xl group cursor-pointer transition-all duration-300 ease-in-out">
                      <div className="hidden group-hover:block absolute w-full h-full rounded-xl bg-black opacity-10 transition-all duration-300 ease-in-out"></div>
                      <Icon
                        className="absolute hidden group-hover:block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9 h-9 p-2  text-white opacity-100 bg-blue-500 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
                        icon="charm:plus"
                      />
                      <img
                        className="w-[100%] h-[100%] rounded-xl bg-cover"
                        src={img4}
                        alt="logo"
                      />
                    </div>
                    <div className="relative flex justify-center items-center w-[100%] h-[80px] col-span-1 row-span-1 rounded-xl group cursor-pointer transition-all duration-300 ease-in-out">
                      <div className="hidden group-hover:block absolute w-full h-full rounded-xl bg-black opacity-10 transition-all duration-300 ease-in-out"></div>
                      <Icon
                        className="absolute hidden group-hover:block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9 h-9 p-2  text-white opacity-100 bg-blue-500 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
                        icon="charm:plus"
                      />
                      <img
                        className="w-[100%] h-[100%] rounded-xl bg-cover"
                        src={img5}
                        alt="logo"
                      />
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure as="div" className="mt-2">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between py-2 text-left text-sm font-medium ">
                    <span className="font-bold text-base text-gray-800 flex gap-2">
                      10/01/2024{" "}
                      <span className="bg-blue-500 text-white text-xs flex justify-center items-center px-2 font-bold rounded">
                        0
                      </span>
                    </span>
                    <Icon
                      icon="oui:arrow-down"
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="grid grid-cols-3 grid-rows-2 gap-4 py-2">
                    <div className="relative flex justify-center items-center w-[100%] h-[180px] col-span-1 row-span-2 rounded-xl group cursor-pointer transition-all duration-300 ease-in-out">
                      <div className="hidden group-hover:block absolute w-full h-full rounded-xl bg-black opacity-10 transition-all duration-300 ease-in-out"></div>
                      <Icon
                        className="absolute hidden group-hover:block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9 h-9 p-2  text-white opacity-100 bg-blue-500 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
                        icon="charm:plus"
                      />
                      <img
                        className="w-[100%] h-[100%] rounded-xl bg-cover"
                        src={img1}
                        alt="logo"
                      />
                    </div>
                    <div className="relative flex justify-center items-center w-[100%] h-[80px] col-span-1 row-span-1 rounded-xl group cursor-pointer transition-all duration-300 ease-in-out">
                      <div className="hidden group-hover:block absolute w-full h-full rounded-xl bg-black opacity-10 transition-all duration-300 ease-in-out"></div>
                      <Icon
                        className="absolute hidden group-hover:block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9 h-9 p-2  text-white opacity-100 bg-blue-500 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
                        icon="charm:plus"
                      />
                      <img
                        className="w-[100%] h-[100%] rounded-xl bg-cover"
                        src={img2}
                        alt="logo"
                      />
                    </div>
                    <div className="relative flex justify-center items-center w-[100%] h-[80px] col-span-1 row-span-1 rounded-xl group cursor-pointer transition-all duration-300 ease-in-out">
                      <div className="hidden group-hover:block absolute w-full h-full rounded-xl bg-black opacity-10 transition-all duration-300 ease-in-out"></div>
                      <Icon
                        className="absolute hidden group-hover:block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9 h-9 p-2  text-white opacity-100 bg-blue-500 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
                        icon="charm:plus"
                      />
                      <img
                        className="w-[100%] h-[100%] rounded-xl bg-cover"
                        src={img3}
                        alt="logo"
                      />
                    </div>
                    <div className="relative flex justify-center items-center w-[100%] h-[80px] col-span-1 row-span-1 rounded-xl group cursor-pointer transition-all duration-300 ease-in-out">
                      <div className="hidden group-hover:block absolute w-full h-full rounded-xl bg-black opacity-10 transition-all duration-300 ease-in-out"></div>
                      <Icon
                        className="absolute hidden group-hover:block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9 h-9 p-2  text-white opacity-100 bg-blue-500 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
                        icon="charm:plus"
                      />
                      <img
                        className="w-[100%] h-[100%] rounded-xl bg-cover"
                        src={img4}
                        alt="logo"
                      />
                    </div>
                    <div className="relative flex justify-center items-center w-[100%] h-[80px] col-span-1 row-span-1 rounded-xl group cursor-pointer transition-all duration-300 ease-in-out">
                      <div className="hidden group-hover:block absolute w-full h-full rounded-xl bg-black opacity-10 transition-all duration-300 ease-in-out"></div>
                      <Icon
                        className="absolute hidden group-hover:block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9 h-9 p-2  text-white opacity-100 bg-blue-500 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
                        icon="charm:plus"
                      />
                      <img
                        className="w-[100%] h-[100%] rounded-xl bg-cover"
                        src={img5}
                        alt="logo"
                      />
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure as="div" className="mt-2">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between py-2 text-left text-sm font-medium ">
                    <span className="font-bold text-base text-gray-800 flex gap-2">
                      12/03/2024{" "}
                      <span className="bg-blue-500 text-white text-xs flex justify-center items-center px-2 font-bold rounded">
                        0
                      </span>
                    </span>
                    <Icon
                      icon="oui:arrow-down"
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="grid grid-cols-3 grid-rows-2 gap-4 py-2">
                    <div className="relative flex justify-center items-center w-[100%] h-[80px] col-span-1 row-span-1 rounded-xl group cursor-pointer transition-all duration-300 ease-in-out">
                      <div className="hidden group-hover:block absolute w-full h-full rounded-xl bg-black opacity-10 transition-all duration-300 ease-in-out"></div>
                      <Icon
                        className="absolute hidden group-hover:block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9 h-9 p-2  text-white opacity-100 bg-blue-500 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
                        icon="charm:plus"
                      />
                      <img
                        className="w-[100%] h-[100%] rounded-xl bg-cover"
                        src={img3}
                        alt="logo"
                      />
                    </div>
                    <div className="relative flex justify-center items-center w-[100%] h-[80px] col-span-1 row-span-1 rounded-xl group cursor-pointer transition-all duration-300 ease-in-out">
                      <div className="hidden group-hover:block absolute w-full h-full rounded-xl bg-black opacity-10 transition-all duration-300 ease-in-out"></div>
                      <Icon
                        className="absolute hidden group-hover:block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9 h-9 p-2  text-white opacity-100 bg-blue-500 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
                        icon="charm:plus"
                      />
                      <img
                        className="w-[100%] h-[100%] rounded-xl bg-cover"
                        src={img4}
                        alt="logo"
                      />
                    </div>
                    <div className="relative flex justify-center items-center w-[100%] h-[80px] col-span-1 row-span-1 rounded-xl group cursor-pointer transition-all duration-300 ease-in-out">
                      <div className="hidden group-hover:block absolute w-full h-full rounded-xl bg-black opacity-10 transition-all duration-300 ease-in-out"></div>
                      <Icon
                        className="absolute hidden group-hover:block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9 h-9 p-2  text-white opacity-100 bg-blue-500 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
                        icon="charm:plus"
                      />
                      <img
                        className="w-[100%] h-[100%] rounded-xl bg-cover"
                        src={img5}
                        alt="logo"
                      />
                    </div>
                    <div className="relative flex justify-center items-center w-[100%] h-[180px] col-span-1 row-span-2 rounded-xl group cursor-pointer transition-all duration-300 ease-in-out">
                      <div className="hidden group-hover:block absolute w-full h-full rounded-xl bg-black opacity-10 transition-all duration-300 ease-in-out"></div>
                      <Icon
                        className="absolute hidden group-hover:block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9 h-9 p-2  text-white opacity-100 bg-blue-500 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
                        icon="charm:plus"
                      />
                      <img
                        className="w-[100%] h-[100%] rounded-xl bg-cover"
                        src={img1}
                        alt="logo"
                      />
                    </div>
                    <div className="relative flex justify-center items-center w-[100%] h-[80px] col-span-1 row-span-1 rounded-xl group cursor-pointer transition-all duration-300 ease-in-out">
                      <div className="hidden group-hover:block absolute w-full h-full rounded-xl bg-black opacity-10 transition-all duration-300 ease-in-out"></div>
                      <Icon
                        className="absolute hidden group-hover:block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9 h-9 p-2  text-white opacity-100 bg-blue-500 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
                        icon="charm:plus"
                      />
                      <img
                        className="w-[100%] h-[100%] rounded-xl bg-cover"
                        src={img2}
                        alt="logo"
                      />
                    </div>
                    <div className="relative flex justify-center items-center w-[100%] h-[80px] col-span-1 row-span-1 rounded-xl group cursor-pointer transition-all duration-300 ease-in-out">
                      <div className="hidden group-hover:block absolute w-full h-full rounded-xl bg-black opacity-10 transition-all duration-300 ease-in-out"></div>
                      <Icon
                        className="absolute hidden group-hover:block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9 h-9 p-2  text-white opacity-100 bg-blue-500 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
                        icon="charm:plus"
                      />
                      <img
                        className="w-[100%] h-[100%] rounded-xl bg-cover"
                        src={img3}
                        alt="logo"
                      />
                    </div>
                    <div className="relative flex justify-center items-center w-[100%] h-[80px] col-span-1 row-span-1 rounded-xl group cursor-pointer transition-all duration-300 ease-in-out">
                      <div className="hidden group-hover:block absolute w-full h-full rounded-xl bg-black opacity-10 transition-all duration-300 ease-in-out"></div>
                      <Icon
                        className="absolute hidden group-hover:block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9 h-9 p-2  text-white opacity-100 bg-blue-500 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
                        icon="charm:plus"
                      />
                      <img
                        className="w-[100%] h-[100%] rounded-xl bg-cover"
                        src={img4}
                        alt="logo"
                      />
                    </div>
                    <div className="relative flex justify-center items-center w-[100%] h-[80px] col-span-1 row-span-1 rounded-xl group cursor-pointer transition-all duration-300 ease-in-out">
                      <div className="hidden group-hover:block absolute w-full h-full rounded-xl bg-black opacity-10 transition-all duration-300 ease-in-out"></div>
                      <Icon
                        className="absolute hidden group-hover:block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9 h-9 p-2  text-white opacity-100 bg-blue-500 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
                        icon="charm:plus"
                      />
                      <img
                        className="w-[100%] h-[100%] rounded-xl bg-cover"
                        src={img5}
                        alt="logo"
                      />
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure as="div" className="mt-2">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between py-2 text-left text-sm font-medium ">
                    <span className="font-bold text-base text-gray-800 flex gap-2">
                      16/03/2024{" "}
                      <span className="bg-blue-500 text-white text-xs flex justify-center items-center px-2 font-bold rounded">
                        0
                      </span>
                    </span>
                    <Icon
                      icon="oui:arrow-down"
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="grid grid-cols-3 grid-rows-2 gap-4 py-2">
                    <div className="relative flex justify-center items-center w-[100%] h-[80px] col-span-1 row-span-1 rounded-xl group cursor-pointer transition-all duration-300 ease-in-out">
                      <div className="hidden group-hover:block absolute w-full h-full rounded-xl bg-black opacity-10 transition-all duration-300 ease-in-out"></div>
                      <Icon
                        className="absolute hidden group-hover:block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9 h-9 p-2  text-white opacity-100 bg-blue-500 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
                        icon="charm:plus"
                      />
                      <img
                        className="w-[100%] h-[100%] rounded-xl bg-cover"
                        src={img3}
                        alt="logo"
                      />
                    </div>
                    <div className="relative flex justify-center items-center w-[100%] h-[80px] col-span-1 row-span-1 rounded-xl group cursor-pointer transition-all duration-300 ease-in-out">
                      <div className="hidden group-hover:block absolute w-full h-full rounded-xl bg-black opacity-10 transition-all duration-300 ease-in-out"></div>
                      <Icon
                        className="absolute hidden group-hover:block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9 h-9 p-2  text-white opacity-100 bg-blue-500 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
                        icon="charm:plus"
                      />
                      <img
                        className="w-[100%] h-[100%] rounded-xl bg-cover"
                        src={img4}
                        alt="logo"
                      />
                    </div>
                    <div className="relative flex justify-center items-center w-[100%] h-[80px] col-span-1 row-span-1 rounded-xl group cursor-pointer transition-all duration-300 ease-in-out">
                      <div className="hidden group-hover:block absolute w-full h-full rounded-xl bg-black opacity-10 transition-all duration-300 ease-in-out"></div>
                      <Icon
                        className="absolute hidden group-hover:block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9 h-9 p-2  text-white opacity-100 bg-blue-500 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
                        icon="charm:plus"
                      />
                      <img
                        className="w-[100%] h-[100%] rounded-xl bg-cover"
                        src={img5}
                        alt="logo"
                      />
                    </div>
                    <div className="relative flex justify-center items-center w-[100%] h-[180px] col-span-1 row-span-2 rounded-xl group cursor-pointer transition-all duration-300 ease-in-out">
                      <div className="hidden group-hover:block absolute w-full h-full rounded-xl bg-black opacity-10 transition-all duration-300 ease-in-out"></div>
                      <Icon
                        className="absolute hidden group-hover:block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9 h-9 p-2  text-white opacity-100 bg-blue-500 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
                        icon="charm:plus"
                      />
                      <img
                        className="w-[100%] h-[100%] rounded-xl bg-cover"
                        src={img1}
                        alt="logo"
                      />
                    </div>
                    <div className="relative flex justify-center items-center w-[100%] h-[80px] col-span-1 row-span-1 rounded-xl group cursor-pointer transition-all duration-300 ease-in-out">
                      <div className="hidden group-hover:block absolute w-full h-full rounded-xl bg-black opacity-10 transition-all duration-300 ease-in-out"></div>
                      <Icon
                        className="absolute hidden group-hover:block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9 h-9 p-2  text-white opacity-100 bg-blue-500 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
                        icon="charm:plus"
                      />
                      <img
                        className="w-[100%] h-[100%] rounded-xl bg-cover"
                        src={img2}
                        alt="logo"
                      />
                    </div>
                    <div className="relative flex justify-center items-center w-[100%] h-[80px] col-span-1 row-span-1 rounded-xl group cursor-pointer transition-all duration-300 ease-in-out">
                      <div className="hidden group-hover:block absolute w-full h-full rounded-xl bg-black opacity-10 transition-all duration-300 ease-in-out"></div>
                      <Icon
                        className="absolute hidden group-hover:block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9 h-9 p-2  text-white opacity-100 bg-blue-500 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
                        icon="charm:plus"
                      />
                      <img
                        className="w-[100%] h-[100%] rounded-xl bg-cover"
                        src={img3}
                        alt="logo"
                      />
                    </div>
                    <div className="relative flex justify-center items-center w-[100%] h-[80px] col-span-1 row-span-1 rounded-xl group cursor-pointer transition-all duration-300 ease-in-out">
                      <div className="hidden group-hover:block absolute w-full h-full rounded-xl bg-black opacity-10 transition-all duration-300 ease-in-out"></div>
                      <Icon
                        className="absolute hidden group-hover:block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9 h-9 p-2  text-white opacity-100 bg-blue-500 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
                        icon="charm:plus"
                      />
                      <img
                        className="w-[100%] h-[100%] rounded-xl bg-cover"
                        src={img4}
                        alt="logo"
                      />
                    </div>
                    <div className="relative flex justify-center items-center w-[100%] h-[80px] col-span-1 row-span-1 rounded-xl group cursor-pointer transition-all duration-300 ease-in-out">
                      <div className="hidden group-hover:block absolute w-full h-full rounded-xl bg-black opacity-10 transition-all duration-300 ease-in-out"></div>
                      <Icon
                        className="absolute hidden group-hover:block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9 h-9 p-2  text-white opacity-100 bg-blue-500 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
                        icon="charm:plus"
                      />
                      <img
                        className="w-[100%] h-[100%] rounded-xl bg-cover"
                        src={img5}
                        alt="logo"
                      />
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </section>
      )}
    </>
  );
};

export default Right;
