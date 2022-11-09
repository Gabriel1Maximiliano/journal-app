
import { collection, doc, setDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firebase/config';
import { loaadNotes } from '../../helpers';
import { addNewEmptyNote, setActiveNote, savingNewNote, setNotes } from './journalSlice';

export const startNewNote = () => {
    console.log('me dipare')
    return async( dispatch, getState ) =>{
        
        dispatch(  savingNewNote() );
        // uui

const { uid } = getState().auth;

        const newNote = {
            title:'',
            body:'',
            date: new Date().getTime(),
        }
        const newDoc = doc( collection( FirebaseDB,`${ uid }/journal/notes` ) );
       const setDocREsp =  await setDoc( newDoc, newNote );
       
       newNote.id = newDoc.id;

       // dispatch
       dispatch( addNewEmptyNote( newNote ) );
       dispatch( setActiveNote( newNote ) );
    }
 };

 export const startLoadingNotes = (  ) => {
    return async ( dispatch, getState ) => {
        const { uid } = getState().auth;

        if( !uid ){
            throw new Error('El uid no esta establecido');
        };
        
       const notes =  await loaadNotes( uid );

       dispatch( setNotes( notes ) );
    }
 }