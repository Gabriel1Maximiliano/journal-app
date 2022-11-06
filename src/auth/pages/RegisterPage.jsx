
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Button,Grid, Typography,TextField,Link } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks/useForm';

const formData = {
  email:'gabriel@mail.com',
  password:'123456',
  displayName:'Gabriel Loza'
};

const formValidatins = {
email:[ ( value ) => value.includes( '@' ) ,'el correo debe contener un @'],
password:[ ( value ) => value.length >= 6, 'El password debe tener más de 6 letras' ],
displayName:[ ( value ) =>value.length >= 1, 'El nombre es obligatorio' ]
}

export const RegisterPage = () => {
    
  const  { isFormValid, emailValid,passwordValid,displayNameValid, displayName, email, password, onInputChange, formState } = useForm( formData, formValidatins );

  const onSubmit = ( event ) =>{
    event.preventDefault();
   console.log(formState)
    
   };

    return (
     
    <AuthLayout title='login' >
  <form onSubmit={ onSubmit } >
        <Grid container>
          <Grid >
            <TextField 
            label='Nombre completo' 
            type='text'
            placeholder='pepito perez'
            fullWidth
            name='displayName'
            value={ displayName }
            onChange={ onInputChange }
            error={ !displayNameValid }
            helperText={ displayNameValid }
            />
           
            </Grid>
            <Grid >
            <TextField 
            label='email' 
            type='text'
            placeholder='test@mail.com'
            fullWidth
            name='email'
            value={ email }
            onChange={ onInputChange }
            />
             </Grid>
            <Grid  >
            <TextField 
            label='contraseña' 
            type='password'
            placeholder='contraseña'
            fullWidth
            name='password'
            value={ password }
            onChange={ onInputChange }
            />
          </Grid>
          <Grid container spacing={2}  >
           <Grid item>
            <Button 
            type='submit'
            color='error'
            >
             Crear cuenta
            </Button>
           </Grid>
       
           
           <Grid container direction='row' justifyContent='end'>
            <Typography>¿Ya tenés cuenta?</Typography>
            <Link component={RouterLink}  to='/auth/login'  >
            <p style={{color:'black'}} >Ingresar</p>
  
            </Link>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
     
      
  
    )
  }
  
