import {createSlice} from "@reduxjs/toolkit";

const AuthSlice = createSlice({
    name: "auth",
    initialState: {
        isSignedIn: false,
        user: null
    },
    reducers: {
        signIn: (state, action) => {
            state.isSignedIn = true;
            state.user = action.payload;
        },
        signOut: (state) => {
            state.isSignedIn = false;
            state.user = null;
        }
    }
});

export const {signIn, signOut} = AuthSlice.actions;

export const authState = (state) => state.auth;

export default AuthSlice.reducer;