import {configureStore} from '@reduxjs/toolkit'
import AuthReducer from "../features/AuthSlice";

export const store = configureStore({
    reducer: {
        auth: AuthReducer
    },
});