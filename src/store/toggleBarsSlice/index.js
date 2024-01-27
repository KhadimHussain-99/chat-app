import { createSlice } from "@reduxjs/toolkit";

export const toggleBarsSlice = createSlice({
  name: "toggle",
  initialState: {
    nav: false,
    apps: true,
    menu: false,
    chat: true,
    recent: false,
    layout: false,
    application: "",
    centerTab: "chat",
  },
  reducers: {
    appsBar: (state, action) => {
      state.apps = !state.apps;
    },
    chat: (state, action) => {
      state.chat = !state.chat;
      state.apps = true;
      state.nav = false;
      state.recent = false;
    },
    recent: (state, action) => {
      state.recent = !state.recent;
      state.apps = false;
      state.nav = true;
      state.chat = false;
    },
    navBar: (state, action) => {
      state.nav = !state.nav;
    },
    layOutMd: (state, action) => {
      state.chat = true;
      state.recent = true;
      state.apps = true;
    },
    layOutSmall: (state, action) => {
      state.chat = true;
      state.apps = true;
      state.recent = false;
      state.nav = false;
    },
    setApplication: (state, action) => {
      state.application = action.payload;
    },
    layoutShift: (state, action) => {
      state.layout = !state.layout;
    },
    changeCenterTab: (state, action) => {
      state.centerTab = action.payload;
    },
  },
});

export const {
  appsBar,
  recent,
  chat,
  navBar,
  layOutSmall,
  layOutMd,
  setApplication,
  layoutShift,
  changeCenterTab,
} = toggleBarsSlice.actions;
export default toggleBarsSlice.reducer;
