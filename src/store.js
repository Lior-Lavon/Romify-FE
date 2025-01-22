import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/user/userSlice";
// import dashboardSlice from "./features/dashboard/dashboardSlice";
// import advertSlice from "./features/advert/advertSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    // dashboard: dashboardSlice,
    // advert: advertSlice,
  },
});
