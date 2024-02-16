import { Google } from "@mui/icons-material"
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"
import {Link as RouterLink} from 'react-router-dom'
import { AuthLayout } from "../layout/AuthLayout"
import {useForm} from '../../hooks'
import { useDispatch, useSelector } from "react-redux"
import {  startGoogleSingIn, startLoginWithEmailPassword } from "../../store/auth"
import { useMemo } from "react"
import { loginWithEmailPassword } from "../../firebase/providers"

const formData ={
  email:'',
  password : ''
}

export const LoginPage = () => {

  const dispatch = useDispatch()
  const {status,errorMessage} = useSelector(state =>state.auth)
  const {email,password,onInputChange} = useForm(formData)
  const isAuthenticating = useMemo(()=>status === 'checking',[status])

  const onSubmit = (event) =>{

    event.preventDefault()
    console.log({email,password});
    dispatch(startLoginWithEmailPassword({email,password}))


  }

  const onGoogleSingIn = () => {
    console.log('onGoogleSingIn');
    dispatch(startGoogleSingIn())
  }
  


  return (
   
      <AuthLayout title="Login">
        <form 
        onSubmit={onSubmit}
        className="animate__animated animate__fadeIn animate__faster"
        >
            <Grid container>
              <Grid item xs={12} sx={{mt:2}}>
                <TextField 
                  label="Correo" 
                  type="email" 
                  placeholder="fmontti@gmail.com" 
                  fullWidth
                  name="email"
                  value={email}
                  onChange={onInputChange}
                />
              </Grid>

              <Grid item xs={12} sx={{mt:2}}>
                <TextField 
                  label="Contraseña" 
                  type="password" 
                  fullWidth
                  name="password"
                  value={password}
                  onChange={onInputChange}
                />
              </Grid>
            </Grid>
            <Grid 
            container
            sx={{mt:1}}>
              <Grid 
                  item 
                  xs={12} 
                  display={!!errorMessage ? '':'none'}
                  >
                    <Alert
                      severity="error"
                    >
                        {errorMessage}
                    </Alert>
              </Grid>
            </Grid>
            <Grid container spacing={2} sx={{mb:2,mt:1}}>
                <Grid item xs={12} sm={6}>
                  <Button
                   disabled = {isAuthenticating} 
                   type="submit" 
                   variant="contained" 
                   fullWidth> 
                    Login
                  </Button>

                </Grid>
                <Grid item xs={12} sm={6}>

                  <Button 
                    disabled = {isAuthenticating} 
                    variant="contained" 
                    fullWidth
                    onClick={onGoogleSingIn}
                    > 
                    <Google/>
                    <Typography sx={{ml:1}}>Google</Typography>
                  </Button>

                </Grid>
            </Grid>

            <Grid container direction="row" justifyContent="end">
              <Link component={RouterLink} color="inherit" to="/auth/register">
                Crear una cuenta
              </Link>
            </Grid>
          </form>
      </AuthLayout>
        
  )
}


