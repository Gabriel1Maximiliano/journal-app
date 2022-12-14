import { loginWithEmailPassword, logoutWithFirebase, registerUserWithEmailPassword, singInWithGoolgle } from "../../firebase/provider";
import { clearNotesLogout } from "../journal/journalSlice";
import { checkingCredentials, login, logout } from "./authSlice"



export const checkingAthentication = ( email, password ) => {

 return async ( dispatch ) =>{

    dispatch( checkingCredentials() );
 }
}

export const startGoogleSignIn = () => {

    return async ( dispatch ) =>{

        dispatch( checkingCredentials() );

         const result = await singInWithGoolgle();

         if( !result.ok ){

           return dispatch( logout( result.errorMessage ) )
         };

         dispatch( login( result ) );

    }
};

export const startCreatingWithEmailpassword = ({ email, password, displayName})=>{

  return async ( dispatch )=>{

    dispatch( checkingCredentials() );

    const { ok,photoURL,uid,errorMessage} = await registerUserWithEmailPassword( { email, password, displayName} );
    console.log(ok)
     if( !ok ){
      
       return dispatch( logout( errorMessage ) )
     };

    dispatch( login({ uid,displayName, email, photoURL }) );
   
  }  
};

export const startLoginWithEmailPassword = ({ email, password }) => {
  console.log('entre a startLoginWithEmailPassword')
  return async( dispatch ) => {

      dispatch( checkingCredentials() );

      const result = await loginWithEmailPassword({ email, password });
      console.log(result);

      if ( !result.ok ) return dispatch( logout( result ) );
      dispatch( login( result ));

 }
};

export const startLogout = () => {

  return async ( dispatch ) =>{
    try {
      
      await  logoutWithFirebase();
      dispatch( clearNotesLogout() );
      dispatch( logout( { errorMessage:null } ) );

    } catch (error) {
      console.log(error);
    }

  }
  
};

