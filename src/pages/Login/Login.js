import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const Login = () => {
  const navigate = useNavigate();
  let token = localStorage.getItem('token');

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (data.get('email') !== '' && data.get('password') !== '') {
      navigate('home');
      localStorage.setItem('token', 'wrsedtrfghrsetdftg');
    }
  };

  useEffect(() => {
    if (token) {
      navigate('home');
    }
  }, [token]);

  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', margin: '15px' }}>
        <img
          src="../Slogo.png"
          alt="Logo"
          style={{
            flexGrow: 0,
            height: '40px',
            width: '40px',
            backgroundColor: '#fff',
            marginRight: '5px',
          }}
        />
        <Typography component="h1" variant="h6" color="inherit">
          SwiftTask Hub
        </Typography>
      </div>
      <Grid container component="main" sx={{ height: '80vh' }}>
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              'url(https://source.unsplash.com/random?wallpapers)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item sm={12} md={12} lg={5}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                height: '80vh',
              }}
            >
              <img
                src="../Slogo.png"
                alt="Logo"
                style={{
                  flexGrow: 0,
                  height: '40px',
                  width: '40px',
                  backgroundColor: '#fff',
                  borderRadius: '50%',
                }}
              />
              <Typography component="h1" variant="h6">
                Sign in
              </Typography>
              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  size="small"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  size="small"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />

                <Button
                  type="submit"
                  size="medium"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="forgot" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="register" variant="body2">
                      {"Don't have an account? Register"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Container>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
