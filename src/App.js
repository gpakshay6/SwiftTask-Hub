import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Register from './pages/Signup/Register';
import Forget from './pages/Login/Forget';
import Home from './pages/Dashboard/Home';
import Activity from './pages/Dashboard/Activity';
import Tasks from './pages/Dashboard/Tasks';
import Projects from './pages/Dashboard/Projects';
import NoPage from './pages/NoPage';

const App = () => {
  const defaultTheme = createTheme();

  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <Routes>
          <Route path="/">
            <Route index element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="forgot" element={<Forget />} />
            <Route path="home" element={<Home />} />
            <Route path="activity" element={<Activity />} />
            <Route path="tasks" element={<Tasks />} />
            <Route path="projects" element={<Projects />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
