import { configureStore } from "@reduxjs/toolkit";
// imports
import formSlice from "@/slices/formSlice";

const store = configureStore({
    reducer: {
        form: formSlice,
    },
});

export default store;