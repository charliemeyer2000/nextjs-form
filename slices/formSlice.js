import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const formSlice = createSlice({
  name: "form",
  initialState: {
    name: "",
    phone: "",
    email: "",
    question1: "",
    question2: "",
    question3: "",
    question4: "",
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setPhone: (state, action) => {
      state.phone = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setQuestion1: (state, action) => {
      state.question1 = action.payload;
    },
    setQuestion2: (state, action) => {
      state.question2 = action.payload;
    },
    setQuestion3: (state, action) => {
      state.question3 = action.payload;
    },
    setQuestion4: (state, action) => {
      state.question4 = action.payload;
    },
  },
});

// selectors
export const selectName = (state) => state.form.name;
export const selectPhone = (state) => state.form.phone;
export const selectEmail = (state) => state.form.email;
export const selectQuestion1 = (state) => state.form.question1;
export const selectQuestion2 = (state) => state.form.question2;
export const selectQuestion3 = (state) => state.form.question3;
export const selectQuestion4 = (state) => state.form.question4;

// actions
export const {
  setName,
  setPhone,
  setEmail,
  setQuestion1,
  setQuestion2,
  setQuestion3,
  setQuestion4,
} = formSlice.actions;

// reducer

export default formSlice.reducer;
