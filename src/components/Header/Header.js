import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MuiAppBar from '@mui/material/AppBar';
import {
  Toolbar,
  Typography,
  IconButton,
  Badge,
  Tooltip,
  Menu,
  MenuItem,
  Divider,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { notifications, mail } from '../../Constants/constant';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailIcon from '@mui/icons-material/Mail';
import LogoutIcon from '@mui/icons-material/Logout';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';

const useStyles = makeStyles((theme) => ({
  title: {
    flex: 1,
    minWidth: 100,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
}));

const Header = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const [anchorEl, setAnchorEl] = useState(null);
  const [notificationsData, setNotificationsData] = useState(null);
  const [mailData, setMailData] = useState(null);
  const open = Boolean(anchorEl);

  const handleClickNotification = (event) => {
    setAnchorEl(event.currentTarget);
    setNotificationsData(event.currentTarget);
  };
  const handleClickMail = (event) => {
    setAnchorEl(event.currentTarget);
    setMailData(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setNotificationsData(null);
    setMailData(null);
  };

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
        <Tooltip title="Add new Task Coming soon..." arrow>
          <IconButton color="inherit" sx={{ marginLeft: '10px' }}>
            <DashboardCustomizeIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Add new Project Coming soon..." arrow>
          <IconButton color="inherit" sx={{ marginLeft: '10px' }}>
            <NewspaperIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="You have 2 new notifications" arrow>
          <IconButton
            onClick={handleClickNotification}
            size="small"
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            color="inherit"
            sx={{ marginLeft: '10px' }}
          >
            <Badge badgeContent={2} color="success">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Tooltip>
        <Tooltip title="You have 116 new messages" arrow>
          <IconButton
            onClick={handleClickMail}
            size="small"
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            color="inherit"
            sx={{ marginLeft: '10px' }}
          >
            <Badge badgeContent={`99+`} color="secondary">
              <MailIcon />
            </Badge>
          </IconButton>
        </Tooltip>
        <Tooltip title="Logout" arrow>
          <IconButton
            color="inherit"
            onClick={handleLogout}
            sx={{ marginLeft: '10px' }}
          >
            <LogoutIcon />
          </IconButton>
        </Tooltip>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          {notificationsData &&
            notifications?.map((message) => {
              return (
                <>
                  <MenuItem onClick={handleClose}>
                    <Typography
                      variant="subtitle1"
                      color="text.primary"
                      className={classes.title}
                    >
                      {message.Message}
                    </Typography>
                  </MenuItem>
                  <Divider />
                </>
              );
            })}
          {mailData &&
            mail?.map((message) => {
              return (
                <>
                  <MenuItem onClick={handleClose}>
                    <Typography
                      variant="subtitle1"
                      color="text.primary"
                      className={classes.title}
                    >
                      {message.Message}
                    </Typography>
                  </MenuItem>
                  <Divider />
                </>
              );
            })}
        </Menu>
      </Toolbar>
    </MuiAppBar>
  );
};

export default Header;
