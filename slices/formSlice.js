import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const formSlice = createSlice({
  name: "form",
  initialState: {
    dailySpendingSum: 0,
    discordId: "",
    formQuestions: {},
  },
  reducers: {
    setDailySpendingSum: (state, action) => {
      state.dailySpendingSum = action.payload;
    },
    setDiscordId: (state, action) => {
      state.discordId = action.payload;
    },
    setFormQuestions: (state, action) => {
      state.formQuestions = action.payload;
    },
    setKVPairInFormQuestions: (state, action) => {
      state.formQuestions[action.payload.key] = action.payload.value;
    },
    removeKVPairInFormQuestions: (state, action) => {
      delete state.formQuestions[action.payload.key];
    },
  },
});

// selectors
export const selectDailySpendingSum = (state) => state.form.dailySpendingSum;
export const selectDiscordId = (state) => state.form.discordId;
export const selectFormQuestions = (state) => state.form.formQuestions;

// actions
export const {
  setDailySpendingSum,
  setDiscordId,
  setFormQuestions,
  setKVPairInFormQuestions,
  removeKVPairInFormQuestions,
} = formSlice.actions;

// reducer
export default formSlice.reducer;
