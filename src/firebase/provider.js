import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
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
        console.log(error);
        return{
            ok:false,
            errorMessage
        }
    }
}