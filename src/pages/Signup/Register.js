import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  Button,
  CssBaseline,
  TextField,
  Grid,
  Box,
  Typography,
  Container,
} from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  viewMore: {
    textDecoration: 'none',
  },
}));

const Register = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (
      data.get('firstName') !== '' &&
      data.get('lastName') !== '' &&
      data.get('email') !== '' &&
      data.get('password') !== ''
    ) {
      navigate('/');
    }
  };

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
        <Grid sm={12} md={12} lg={5}>
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
                }}
              />
              <Typography component="h1" variant="h5">
                Register
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 3 }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      autoComplete="given-name"
                      name="firstName"
                      required
                      fullWidth
                      id="firstName"
                      label="First Name"
                      autoFocus
                      size="small"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="lastName"
                      label="Last Name"
                      name="lastName"
                      autoComplete="family-name"
                      size="small"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      size="small"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="new-password"
                      size="small"
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  size="medium"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign Up
                </Button>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link to="/" variant="body2" className={classes.viewMore}>
                      <Typography variant="body2">
                        Already have an account? Sign in
                      </Typography>
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

export default Register;
