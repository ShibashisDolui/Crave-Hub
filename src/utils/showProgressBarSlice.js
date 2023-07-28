import { createSlice } from "@reduxjs/toolkit";

const showProgressBarSlice = createSlice({
  name: "progress-bar",
  initialState: {
    showProgressBar: true,
  },
  reducers: {
    setShowProgressBar: (state, action) => {
      state.showProgressBar = action.payload;
    },
  },
});

export const { setShowProgressBar } = showProgressBarSlice.actions;
export default showProgressBarSlice.reducer;
