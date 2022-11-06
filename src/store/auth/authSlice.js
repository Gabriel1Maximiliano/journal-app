
import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name:'auth',

    initialState:{
        status:'not-authenticated',//'checking' 'not-authenticated','authentiated
        uid: null,
        email: null,
        displayName: null,
        photoURL: null,
        errorMessage:null,
       
    },

    reducers:{
        login:( state, { payload } ) =>{
            state.status='authenticated';//'checking' 'not-authenticated','authentiated
            state.uid=payload.uid ;
            state.email=payload.email ;
            state.displayName=payload.displayName ;
            state.photoURL=payload.photoURL ;
            state.errorMessage=null;

        },
        logout: ( state, { payload } )=>{
            console.log({payload})
            state.status='not-authenticated';//'checking' 'not-authenticated','authentiated
            state.uid= null;
            state.email= null;
            state.displayName= null;
            state.photoURL= null;
            state.errorMessage=payload;
        },
        checkingCredentials:( state, action )=>{
            state.status = 'checking';
        }
    }
});

// action creators are generated for each case reducers

export const { login, logout, checkingCredentials } = authSlice.actions;

