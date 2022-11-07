
import { collection, doc, setDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firebase/config';

export const startNewNote = () => {
    return async( dispatch, getState ) =>{

        // uui

const { uid } = getState().auth;

        const newNote = {
            title:'',
            body:'',
            date: new Date().getTime(),
        }
        const newDoc = doc( collection( FirebaseDB,`${ uid }/journal/notes` ) );
       const setDocREsp =  await setDoc( newDoc, newNote );
       console.log({ newDoc, setDocREsp });
    }
 }