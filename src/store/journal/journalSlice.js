import { SettingsEthernet } from '@mui/icons-material';
import { createSlice } from '@reduxjs/toolkit'

export const journalSlice = createSlice({

  name: 'journal',
  initialState: {
    isSaving: false,
    messageSaved: '',
    notes: [],
    active: null,
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

      state.active = action.payload;

    },
    setNotes: (state, action) => {
        state.notes = action.payload;
    },
    setSaving: (state, action) => {
      state.isSaving = true;
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
    },
    deleteNoteById: (state, action) => {

    }

  }

});

export const {  savingNewNote, addNewEmptyNote, setActiveNote, setNotes, setSaving, upDateNote, deleteNoteById } = journalSlice.actions;
