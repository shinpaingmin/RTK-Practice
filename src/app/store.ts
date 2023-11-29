import { configureStore } from "@reduxjs/toolkit/react";
import counterReducer from "../features/counter/counterSlice";

export const store = configureStore({
    reducer: {
        // this will automatically call combined reducer
        counter: counterReducer,
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;