import React, { useEffect } from "react";
import Navbar from "../../components/asideLeftNavbar";
import AppBar from "../../components/asideRightAppbar";
import Chat from "../../components/chat";
import Recent from "../../components/recent";
import { useDispatch, useSelector } from "react-redux";
import useWidth from "../../hooks/useWidth";
import { layOutMd, layOutSmall } from "../../store/toggleBarsSlice";
import Right from "../../components/asideRight";

const WebsiteLayout = () => {
  const {
    width,
    breakpoints: {},
  } = useWidth();
  const dispatch = useDispatch();
  const toggle = useSelector((state) => state.toggle);

  useEffect(() => {
    if (width >= 1024) {
      dispatch(layOutMd());
      console.log(width);
    } else {
      dispatch(layOutSmall());
    }
  }, [width]);

  return (
    <div
      className={`relative h-screen w-full bg-blue-100 flex ${
        toggle.layout ? "flex-row-reverse" : ""
      } justify-between font-montserrat transition-all duration-300 ease-in-out`}
    >
      <Navbar />
      <Recent />
      <Chat />
      <Right />
      <AppBar />
    </div>
  );
};

export default WebsiteLayout;
