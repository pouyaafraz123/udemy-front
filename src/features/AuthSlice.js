import {createSlice} from "@reduxjs/toolkit";

const AuthSlice = createSlice({
    name: "auth",
    initialState: {
        isSignedIn: JSON.parse(localStorage.getItem("isSignedIn")) || false,
        user: JSON.parse(localStorage.getItem("user")) || null
    },
    reducers: {
        signIn: (state, action) => {
            state.isSignedIn = true;
            state.user = action.payload;
            localStorage.setItem("isSignedIn", JSON.stringify(true));
            localStorage.setItem("user", JSON.stringify(action.payload));
        },
        signOut: (state) => {
            state.isSignedIn = false;
            state.user = null;
            localStorage.setItem("isSignedIn", JSON.stringify(false));
            localStorage.setItem("user", JSON.stringify(null));
        }
    }
});

export const {signIn, signOut} = AuthSlice.actions;

export const authState = (state) => state.auth;

export default AuthSlice.reducer;