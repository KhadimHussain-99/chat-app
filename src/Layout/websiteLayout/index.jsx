import React, { useEffect } from "react";
import Navbar from "../../components/asideLeftNavbar";
import AppBar from "../../components/asideRightAppbar";
import Chat from "../../components/chat";
import Recent from "../../components/recent";
import { useDispatch, useSelector } from "react-redux";
import useWidth from "../../hooks/useWidth";
import { layOutMd, layOutSmall } from "../../store/toggleBarsSlice";

const WebsiteLayout = () => {
  const {
    width,
    breakpoints: {},
  } = useWidth();
  const dispatch = useDispatch();

  useEffect(() => {
    if (width >= 900) {
      dispatch(layOutMd());
      console.log(width);
    } else {
      dispatch(layOutSmall());
    }
  }, [width]);

  return (
    <div className="h-screen w-full bg-blue-100 flex justify-between font-montserrat transition-all duration-300 ease-in-out">
      <Navbar />
      <Recent />
      <Chat />
      <AppBar />
    </div>
  );
};

export default WebsiteLayout;
