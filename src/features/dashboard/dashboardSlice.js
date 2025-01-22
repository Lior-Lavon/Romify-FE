import { createSlice } from "@reduxjs/toolkit";
import { Breadcrumbs } from "../../components";

const initialState = {
  isLoading: false,
  isSidebarOpen: false,
  isModalOpen: false,
  breadcrumbs: [],
  pageTitle: "",
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      return {
        ...state,
        isSidebarOpen: !state.isSidebarOpen,
        isModalOpen: false,
      };
    },
    toggleTopBar: (state) => {
      return {
        ...state,
        isModalOpen: !state.isModalOpen,
        isSidebarOpen: false,
      };
    },
    pushBreadCrumbs: (state, obj) => {
      return {
        ...state,
        breadcrumbs: [...state.breadcrumbs, obj.payload],
      };
    },
    setPageTitle: (state, obj) => {
      return {
        ...state,
        pageTitle: obj.payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder;
  },
});

export const {
  toggleSidebar,
  toggleTopBar,
  toggleImageCrop,
  pushBreadCrumbs,
  setPageTitle,
} = dashboardSlice.actions;
export default dashboardSlice.reducer;
