import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container, Toolbar, CssBaseline } from '@mui/material';
import Login from './pages/Login/Login';
import Register from './pages/Signup/Register';
import Forget from './pages/Login/Forget';
import Home from './pages/Dashboard/Home';
import Activity from './pages/Dashboard/Activity';
import Tasks from './pages/Dashboard/Tasks';
import Projects from './pages/Dashboard/Projects';
import NoPage from './pages/NoPage';
import { Header } from './components';

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
          <Route path="*" element={<NoPage />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
};

const PrivateRoute = ({ component }) => (
  <>
    <Toolbar />
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Header />
      {component}
    </Container>
  </>
);

export default App;
