import { registerUserWithEmailPassword, singInWithGoolgle } from "../../firebase/provider";
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

    const resp = await registerUserWithEmailPassword( { email, password, displayName} );

    console.log(resp);
  }  
}
