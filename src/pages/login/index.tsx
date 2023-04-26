import { Button, Container, Grid } from '@mui/material'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { useFormik } from 'formik'
import React from 'react'
import { useNotification } from '../../context/notification.context'
import { LoginValidate } from '../../utils/validateForm';

type LoginType= {
  username: string,
  password: string
};

const LoginPage: React.FC<{}> = () => {
  const { getError, getSuccess } = useNotification();
  /*
  //hook useState
  const [loginData, SetLoginData] = React.useState<LoginType>({ 
    username: "",
    password: ""
   })

   //modificador de estado
   const dataLogin = (e:React.ChangeEvent<HTMLInputElement>) =>{
      SetLoginData({...loginData, [e.target.name]: e.target.value})
   }

   const handleSubmit = (e: React.FormEvent<HTMLInputElement>) =>{
      e.preventDefault();
      LoginValidate.validate(loginData).then(()=>{
        getSuccess(JSON.stringify(loginData));
      }).catch((error) => {
        getError(error.message)
      })
   };*/
   const formik = useFormik<LoginType>({
      initialValues: {
        username: '',
        password: '',
      },
      validationSchema: LoginValidate,
      onSubmit: (values:LoginType) => {
        getSuccess(JSON.stringify(values));
      },
    });

  return (
    <Container maxWidth="sm">
        <Grid container direction="column" alignItems="center" justifyContent="center"
              sx={{ minHeight: "100vh"}}>
          
          <Grid item>
            <Paper sx={{ padding: "1.2em", borderRadius: "0.5em"}}>
              <Typography variant="h4" sx={{ mt:1,mb:1}}>Iniciar sesion</Typography>
              <Box component="form" onSubmit={formik.handleSubmit}>
                <TextField fullWidth  margin="normal" label="Email" sx={{ mt:2,mb:1.5}} 
                          type="text"
                          name="username"
                          value={formik.values.username}
                          onChange={formik.handleChange}
                          error={formik.touched.username && Boolean(formik.errors.username)}
                          helperText={formik.touched.username && formik.errors.username}/>
                <TextField fullWidth  margin="normal" label="Password" sx={{ mt:1.5,mb:1.5}} 
                          type="password"
                          name="password"
                          value={formik.values.password}
                          onChange={formik.handleChange}
                          error={formik.touched.password && Boolean(formik.errors.password)}
                          helperText={formik.touched.password && formik.errors.password}/>
                <Button fullWidth type='submit' variant="contained" sx={{ mt:1.5,mb:3}}>
                    Iniciar sesion
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
    </Container>
  )
}

//para trabajarlo con lazy load se exporta por defecto LoginPage
export default LoginPage;