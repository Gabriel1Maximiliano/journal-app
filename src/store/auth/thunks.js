import { singInWithGoolgle } from "../../firebase/provider";
import { checkingCredentials } from "./authSlice"



export const checkingAthentication = ( email, password ) => {
 return async ( dispatch ) =>{
    dispatch( checkingCredentials() );
 }
}

export const startGoogleSignIn = () => {
    return async ( dispatch ) =>{
        dispatch( checkingCredentials() );
         const result = await singInWithGoolgle();
         
    }
}
