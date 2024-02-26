import { configureStore } from "@reduxjs/toolkit";
import { CalendarSlice, uiSlice } from "./";

export const store = configureStore({
    reducer:{
        calendar:CalendarSlice.reducer,
        ui:uiSlice.reducer,
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware({
        serializableCheck:false
    })

})