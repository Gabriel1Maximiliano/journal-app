
import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name:'auth',

    initialState:{
        status:'checking',//'not-authenticated','authentiated
        uid: null,
        email: null,
        displayName: null,
        photoURL: null,
        errorMessage:null
    },

    reducers:{
        login:( state, action ) =>{

        },
        logout: ( state, action )=>{

        },
        checkingCredentials:( state, action )=>{

        }
    }
});

// action creators are generated for each case reducers

export const { login, logout, checkingCredentials } = authSlice.actions;

