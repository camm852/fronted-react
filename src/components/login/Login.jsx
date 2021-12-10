import React from "react";
import { Navigate, Route} from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import LoadingButton from '@mui/lab/LoadingButton';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import axios from 'axios';
import Swal from "sweetalert2";
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {createTheme,ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Login = () => {
    const validationSchema = Yup.object({
        name: Yup.string("Enter your user name")
            .required("User name is required"),
        password: Yup.string("Enter your password")
            .min(3, "Minimum 3 characters length")
            .required("Password is required"),
    });

    const theme = createTheme();

    return (
        <div className="App">
            <Formik
                initialValues={{ name: "", password: "" }}
                validationSchema={validationSchema}
                onSubmit={async(values, { setSubmitting }) => {
                    setSubmitting(true)
                    const res = await axios.post('http://localhost:8080/ValidarUsuario', {
                        nombreUsuario: values.name,
                        contrasena: values.password
                    });
                    console.log(res.status)
                    if(res.status !== 200){
                        console.log("hola")

                        setSubmitting(false);
                        Swal.fire({
                            title: "Error",
                            text: "Fallo en la autenticacion",
                            icon: "error"
                        })
                    }else{
                        setSubmitting(false);
                        Swal.fire({
                            title: "Excelente",
                            text: "Autenticacion correcta",
                            icon: "success"
                        })
                        setTimeout(()=>{
                            <Route path="*" element={<Navigate to='/Sidebar' replace />} />
                        },2000)
                    }}}
                    >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                /* and other goodies */
                }) => (
                    //     {/* Material design */}
                    <ThemeProvider theme={theme}>
                        <Grid container component="main" sx={{ height: '100vh' }}>
                        <CssBaseline />
                        <Grid
                            item
                            xs={false}
                            sm={4}
                            md={7}
                            sx={{
                                backgroundImage: 'url(https://source.unsplash.com/random)',
                                backgroundRepeat: 'no-repeat',
                                backgroundColor: (t) =>
                                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        />
                        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                            <Box
                                sx={{
                                my: 8,
                                mx: 4,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                }}
                            >
                                <Avatar sx={{ m: 1, bgcolor: '#1976d2' }}>
                                    <LockOutlinedIcon />
                                </Avatar>
                                <Typography component="h1" variant="h5">
                                    Sign in
                                </Typography>
                                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                                    <TextField
                                        margin="normal"
                                        fullWidth
                                        id="name"
                                        name="name"
                                        label="User name"
                                        autoComplete="off"
                                        value={values.email}
                                        onChange={handleChange}
                                        error={touched.name && Boolean(errors.name)}
                                        helperText={touched.name && errors.name}
                                    />

                                    <TextField
                                        margin="normal"
                                        fullWidth
                                        id="password"
                                        name="password"
                                        label="Password"
                                        type="password"
                                        autoComplete="off"
                                        value={values.password}
                                        onChange={handleChange}
                                        error={touched.password && Boolean(errors.password)}
                                        helperText={touched.password && errors.password}
                                />
                                    <LoadingButton
                                        loading={isSubmitting}
                                        fullWidth
                                        variant="contained"
                                        type="submit"
                                    
                                        sx={{ mt: 3, mb: 2 }}
                                    >
                                        Sign In
                                    </LoadingButton>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </ThemeProvider>
                )}
            </Formik>
        </div>
    );
};

export default Login;
