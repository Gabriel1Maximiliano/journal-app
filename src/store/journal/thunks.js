
import { collection, doc, setDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firebase/config';
import { loaadNotes } from '../../helpers';
import { fileUpload } from '../../helpers/fileUpload';
import { addNewEmptyNote, setActiveNote, savingNewNote, setNotes, setSaving, upDateNote, setPhotosToActiveLoad } from './journalSlice';

export const startNewNote = () => {
    
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
 };

 export const startSavingNotes = () => {
    return async( dispatch, getState ) =>{
         dispatch( setSaving() )
        const { uid } = getState().auth;
        const { active:note } = getState().journal;

        const noteToFireStore = { ...note };
        delete noteToFireStore.id;

        const docRef = doc( FirebaseDB, `${ uid }/journal/notes/${ note.id }` );
     
        await setDoc( docRef, noteToFireStore, { merge:true } );

        dispatch( upDateNote( note ) );
    }
 };

 export const startUploadingFiles = ( files=[] )=>{
    

    return async ( dispatch ) =>{

        dispatch( setSaving() );

        //await fileUpload( files[0] );

        const fileUploadPromises = [];
        

        for ( const file of files ) {

            fileUploadPromises.push( fileUpload( file ) );
        };
      const photosUrl = await Promise.all( fileUploadPromises );
     
      
      dispatch( setPhotosToActiveLoad( photosUrl ) );
 }
}