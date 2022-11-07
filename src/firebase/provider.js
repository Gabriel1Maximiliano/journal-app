import { FlashOnRounded } from '@mui/icons-material';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile, signInWithEmailAndPassword } from 'firebase/auth'
import { FireBaseAuth } from './config';


const googleProvider = new GoogleAuthProvider();

export const singInWithGoolgle = async()=>{
    
    try {
      const result = await signInWithPopup(FireBaseAuth, googleProvider);
      //const credentials = GoogleAuthProvider.credentialFromResult( result );
      const { displayName, email, photoURL, uid } = result.user;
      
      return{
        ok:true,
        displayName,
        photoURL,
        email,
        uid
      }
    
    } catch (error) {
         // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);

        return{
            ok:false,
            errorMessage
        }
    }
}

export const registerUserWithEmailPassword = async({email,password,displayName})=>{

  try {
   const resp = await createUserWithEmailAndPassword( FireBaseAuth, email, password )

   const { photoURL, uid, errorMessage } = resp.user;

    // TO-DO actualizar el displayName de firebase

    await updateProfile( FireBaseAuth.currentUser,{
      displayName
    } );

      
    return{
      ok:true,
      displayName,
      photoURL,
      email,
      uid,
      errorMessage
    }
  } catch (error) {
    console.log(error);
    return {
      ok:false,
      errorMessage:error.message,
    }
  }
};

export const loginWithEmailPassword = async({ email, password }) => {
  

  try {
      const resp = await signInWithEmailAndPassword( FireBaseAuth, email, password );
      console.log(resp)
      const { uid, photoURL, displayName } = resp.user;

      return {
          ok: true,
          uid, photoURL, displayName
      }

  } catch (error) {
      return { ok: false, errorMessage: error.message }
  }
};

export const logoutWithFirebase = async () => {

  return await FireBaseAuth.signOut()
  
}