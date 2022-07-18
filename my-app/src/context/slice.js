/*  This file holds the initial state and reducers (functions) of the app.
    In React, a slice is a collection of reducer logic and actions for a signle feature of the app. */

import { createSlice } from '@reduxjs/toolkit'

/*  TODOs: 
    ===========================
    1. set up the initial state
        a. user sign-in status
        b. user data (what the fake API will return)
            --> don't worry about saving a username or password for now
    2. set up the reducers
    3. set up the actions 
        a. on a sign-in attempt, switch the toggle from currntly trying to sign-in to actively signed-in
        b. on successful sign-in, update user data
*/

// what Redux will initialize itself with every time the app window is loaded and/or refreshed    
const initialState = {
    userData : null,    // will be used to know if user is logged in
    userSignInStatus : {
        currentlySigningIn : false, // request state
        successfulSignIn : false,   // response state
        failedSignIn : false        // response (if failed) state
    },
    userSignOutStatus : {
        currentlySigningOut : false,
        successfulSignOut : false,
        failedSignOut : false
    }
};

// methods used for updating the state
export const userSlice = createSlice({
    name : "currentUser",   // the name is used for Redux to find the state
    initialState,
    // reducers (which act as functions) are used to do all updating to the state
    reducers : {
        GOT_USER_DATA_SUCCESSFULLY : (state, action) => {
            state.userData = action.payload;
        },
        CURRENTLY_LOGGING_IN : (state) => {
            state.userSignInStatus.currentlySigningIn = true;
        },
        SUCCESSFUL_SIGN_IN : (state, action) => {
            state.userSignInStatus.currentlySigningIn = false;
            state.userSignInStatus.successfulSignIn = true;
            state.userData = action.payload;
        },
        FAILED_SIGN_IN : (state) => {
            state.userSignInStatus.currentlySigningIn = false;
            state.userSignInStatus.failedSignIn = true;
        },
        RESET_SIGN_IN_STATUS : (state) => {
            state.userSignInStatus = initialState.userSignInStatus;
        },
        CURRENTLY_LOGGING_OUT : (state) => {
            state.userSignOutStatus.currentlySigningOut = true;
        },
        SUCCESSFUL_SIGN_OUT : (state, action) => {
            state.userSignOutStatus.currentlySigningOut = false;
            state.userSignOutStatus.successfulSignOut = true;
            state.userData = action.payload;
        },
        FAILED_SIGN_OUT : (state) => {
            state.userSignOutStatus.currentlySigningOut = false;
            state.userSignOutStatus.failedSignOut = true;
        },
        RESET_SIGN_OUT_STATUS : (state) => {
            state.userSignOutStatus = initialState.userSignOutStatus;
        }
    }
}); 

// actions (functions that return a function) for the app
// (the use of async indicates that an await will need to be used later of for an API call)
export const doSignInUser = (payload) => async (dispatch) => {
    dispatch(CURRENTLY_LOGGING_IN());
    try {
        dispatch(SUCCESSFUL_SIGN_IN(payload));
        dispatch(GOT_USER_DATA_SUCCESSFULLY(payload));
        dispatch(RESET_SIGN_IN_STATUS());
    } catch(error) {
        dispatch(FAILED_SIGN_IN());
        console.log("An error while signing in has occured: " + error);
    }
};

export const doSignOutUser = () => async (dispatch) => {
    dispatch(CURRENTLY_LOGGING_OUT());
    try { 
        dispatch(SUCCESSFUL_SIGN_OUT());
        dispatch(RESET_SIGN_OUT_STATUS());
    } catch(error) {
        dispatch(FAILED_SIGN_OUT());
        console.log("An error while signing out has occured: " + error);
    }
}

export default userSlice.reducer;

export const {
    GOT_USER_DATA_SUCCESSFULLY,
    CURRENTLY_LOGGING_IN,
    SUCCESSFUL_SIGN_IN,
    FAILED_SIGN_IN,
    RESET_SIGN_IN_STATUS,
    CURRENTLY_LOGGING_OUT,
    SUCCESSFUL_SIGN_OUT,
    RESET_SIGN_OUT_STATUS,
    FAILED_SIGN_OUT
} = userSlice.actions;

