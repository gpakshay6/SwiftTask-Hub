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
  root: {
    display: 'flex',
    alignItems: 'center',
    margin: theme.spacing(2, 0),
  },
  logo: {
    flexGrow: 0,
    height: '40px',
    width: '40px',
    backgroundColor: '#fff',
    marginRight: theme.spacing(1),
    borderRadius: '50%',
  },
  mainContainer: {
    height: '80vh',
  },
  background: {
    backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
  },
  form: {
    marginTop: theme.spacing(2),
    width: '100%',
  },
  viewMore: {
    textDecoration: 'none',
  },
}));

const Forget = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (data.get('email') !== '') {
      navigate('/');
    }
  };

  return (
    <>
      <div className={classes.root}>
        <img src="../Slogo.png" alt="Logo" className={classes.logo} />
        <Typography component="h1" variant="h6" color="inherit">
          SwiftTask Hub
        </Typography>
      </div>
      <Grid container component="main" className={classes.mainContainer}>
        <Grid item xs={false} lg={7} className={classes.background} />
        <Grid item sm={12} md={12} lg={5}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box className={classes.formContainer}>
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
              <Typography component="h1" variant="h6">
                Forgot Password
              </Typography>
              <Box
                component="form"
                onSubmit={handleSubmit}
                className={classes.form}
                noValidate
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

                <Button
                  type="submit"
                  size="medium"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Submit
                </Button>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link to="/" className={classes.viewMore}>
                      <Typography variant="body2">Back to Login</Typography>
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

export default Forget;
