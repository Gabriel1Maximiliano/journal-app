
import { createSlice } from '@reduxjs/toolkit'

export const journalSlice = createSlice({

  name: 'journal',
  initialState: {
    isSaving: false,
    messageSaved: '',
    notes: [],
    active:null
     
    //imageUrls:[]

  },

  reducers: {
    savingNewNote: ( state, action ) => {

      state.isSaving = true;
      
    },
    addNewEmptyNote: (state, action) => {

      state.notes.push(action.payload);
      state.isSaving = false
    },
    setActiveNote: (state, action) => {
      state.messageSaved='';
      state.active = action.payload;

    },
    setNotes: (state, action) => {
        state.notes = action.payload;
    },
    setSaving: (state, action) => {
      state.isSaving = true;
      state.messageSaved='';
      //to do
    },
    upDateNote: (state, action) => {
      state.isSaving = true;
      state.notes = state.notes.map(note =>{
        if( note.id === action.payload.id ){
          return action.payload;
        }
        return note;
      })

      //odo mostrar mensaje de acutulizacion
      state.messageSaved = `${action.payload.title }actualizada correctamente`;
    },
    deleteNoteById: (state, action) => {

      state.active = null;
      state.notes = state.notes.filter( note=> note.id !==action.payload )


    },
    setPhotosToActiveLoad : ( state, action ) => {
      
      state.active.imageURLs = [...state.active.imageURLs,...action.payload];
      state.isSaving = false
    },
    clearNotesLogout:( state, action )=>{
      state.isSaving=false;
      state.messageSaved='';
      state.notes=[];
      state.active=null;
    },
   

  }

});

export const { clearNotesLogout,setPhotosToActiveLoad, savingNewNote, addNewEmptyNote, setActiveNote, setNotes, setSaving, upDateNote, deleteNoteById } = journalSlice.actions;
