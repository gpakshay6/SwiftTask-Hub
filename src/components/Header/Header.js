import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MuiAppBar from '@mui/material/AppBar';
import { Toolbar, Typography, IconButton, Badge } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailIcon from '@mui/icons-material/Mail';
import LogoutIcon from '@mui/icons-material/Logout';

const Header = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) {
      navigate('/');
    }
  }, [token, navigate]);

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };
  return (
    <MuiAppBar position="fixed">
      <Toolbar>
        <IconButton>
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
        </IconButton>
        <Typography component="div" variant="h6" noWrap sx={{ flexGrow: 1 }}>
          SwiftTask Hub
        </Typography>
        <IconButton color="inherit" sx={{ marginLeft: '10px' }}>
          <Badge badgeContent={2} color="success">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <IconButton color="inherit" sx={{ marginLeft: '10px' }}>
          <Badge badgeContent={99} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <IconButton
          color="inherit"
          onClick={handleLogout}
          sx={{ marginLeft: '10px' }}
        >
          <LogoutIcon />
        </IconButton>
      </Toolbar>
    </MuiAppBar>
  );
};

export default Header;
