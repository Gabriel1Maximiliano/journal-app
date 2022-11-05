
import React from 'react'
import {Link as RouterLink} from 'react-router-dom'
import { Button,Grid, Typography,TextField,Link } from '@mui/material'
import { Google } from '@mui/icons-material'
import { AuthLayout } from '../layout/AuthLayout'

export const RegisterPage = () => {
 
    return (
     
    <AuthLayout title='login' >
  <form>
        <Grid container>
          <Grid item sx={12}>
            <TextField 
            label='Nombre completo' 
            type='text'
            placeholder='pepito perez'
            fullWidth
            />
            </Grid>
            <Grid item>
            <TextField 
            label='Contraseña' 
            type='password'
            placeholder='contraseña'
            fullWidth
            />
          </Grid>
          <Grid container spacing={2}  >
           <Grid item>
            <Button color='error'>
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
  
