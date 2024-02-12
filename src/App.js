import React, { useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { Container, Toolbar, CssBaseline } from '@mui/material';
import { Header } from './components';
import Login from './pages/Login/Login';
import Register from './pages/Signup/Register';
import Forget from './pages/Login/Forget';
import Home from './pages/HomePage/Home';
import Activity from './pages/HomePage/Activity';
import ActivityDetails from './pages/HomePage/ActivityDetails';
import Tasks from './pages/HomePage/Tasks';
import Projects from './pages/HomePage/Projects';
import NoPage from './pages/NoPage';
import { ActivitiesProvider } from './context/ActivitiesContext';

const PrivateRoute = ({ component }) => {
  const navigate = useNavigate();
  let token = localStorage.getItem('token');
  useEffect(() => {
    if (!token) {
      navigate('/');
    }
  }, [token, navigate]);
  return (
    <ActivitiesProvider>
      <Toolbar />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Header />
        {component}
      </Container>
    </ActivitiesProvider>
  );
};

const App = () => {
  const defaultTheme = createTheme();

  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="forgot" element={<Forget />} />
          <Route path="home" element={<PrivateRoute component={<Home />} />} />
          <Route
            path="activity"
            element={<PrivateRoute component={<Activity />} />}
          />
          <Route
            path="tasks"
            element={<PrivateRoute component={<Tasks />} />}
          />
          <Route
            path="projects"
            element={<PrivateRoute component={<Projects />} />}
          />
          <Route
            path="/activity/:slug"
            element={<PrivateRoute component={<ActivityDetails />} />}
          />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
