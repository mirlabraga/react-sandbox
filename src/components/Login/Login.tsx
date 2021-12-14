import React, { useEffect, useState } from "react";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { signInWithUserAndPassword } from '../../libs/Cognito';
import { auth0 } from '../../libs/auth0';
import { IUser } from "./IUser";
import { useNavigate } from "react-router-dom";

const theme = createTheme();

export default function Login() {

  const [user, setUser] = useState<IUser>({ username: '', password: '' });
  let navigate = useNavigate();

  const handleSubmit = async () => {
    await auth0.loginWithRedirect();
  }

  const handleSign = async () => {
    const sign = await signInWithUserAndPassword(user.username, user.password);
    if (sign) {
      navigate('/home')
    }
  }

  return (
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
            backgroundColor: (t: any) =>
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
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sample: React + Cognito
            </Typography>

            <Box sx={{ mt: 1 }}>

              <Box width="80%" m={1}>
                <TextField
                  fullWidth
                  variant="outlined"
                  onChange={(evt: any) => {
                    if (evt && evt.currentTarget) {
                      const newUser = { ...user, username: evt.currentTarget.value };
                      setUser(newUser);
                    }
                  }}
                />
              </Box>

              <Box width="80%" m={1}>
                <TextField
                  fullWidth
                  variant="outlined"
                  type="password"
                  autoComplete="current-password"
                  onChange={(evt: any) => {
                    if (evt && evt.currentTarget) {
                      const newUser = { ...user, password: evt.currentTarget.value };
                      setUser(newUser);
                    }
                  }}
                />
              </Box>

              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={(evt: any) => {
                  handleSign(); 
                }}
              >
                Sign In Cognito
              </Button>

            </Box>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In OAuth0
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}