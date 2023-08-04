import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState:{
        userData:null,
        loading:false,
         error:null,
    },
    reducer: {}, 
});

export const userReducer = userSlice.reducer;
