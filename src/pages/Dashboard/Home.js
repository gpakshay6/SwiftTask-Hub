import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MuiAppBar from '@mui/material/AppBar'
import { Button, CardActionArea, CardActions, Divider, Link, Tooltip, CardContent, Card, Grid, Paper, Container, Badge, IconButton, Typography, Toolbar, Box, CssBaseline } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailIcon from '@mui/icons-material/Mail';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ShareIcon from '@mui/icons-material/Share';

const Home = () => {
  const navigate = useNavigate();
  let token = localStorage.getItem('token')
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);

  useEffect(() => {
    if (!token) {
      navigate('/')
    }
  }, [token])

  const handleLogout = () => {
    localStorage.clear()
    navigate('/')
  }

  return (
    <Box sx={ { display: 'flex' } }>
      <CssBaseline />
      <MuiAppBar position="absolute" >
        <Toolbar>
          <IconButton>
            <img src="../Slogo.png" alt="Logo" style={ { flexGrow: 0, height: '40px', width: '40px', backgroundColor: '#fff', borderRadius: '50%' } } />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            sx={ { flexGrow: 1 } }
          >
            SwiftTask Hub
          </Typography>
          <Tooltip title='You have 2 new Notification' arrow>
            <IconButton color="inherit" >
              <Badge badgeContent={ 2 } color="success">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Tooltip>
          <div style={ { paddingRight: '14px' } }></div>
          <Tooltip title='Messages' arrow>
            <IconButton color="inherit">
              <Badge badgeContent={ 99 } color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
          </Tooltip>
          <div style={ { paddingRight: '14px' } }></div>
          <Tooltip title='Logout' arrow>
            <IconButton color="inherit">
              <LogoutIcon onClick={ handleLogout } />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </MuiAppBar>
      <Box
        component="main"
        sx={ {
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
        } }
      >
        <Toolbar />
        <Container maxWidth="lg" sx={ { mt: 4, mb: 4 } }>
          <Grid container spacing={ 3 }>
            <Grid item xs={ 12 } md={ 8 } lg={ 9 }>
              <Paper sx={ { p: 2 } }>
                <div style={ { display: 'flex', flexDirection: 'column', height: 240 } }>
                  <Typography variant="h5" component="h2">
                    Recent Activity
                  </Typography>
                  <Divider />
                  <div style={ { marginBottom: '5px' } }></div>
                  <Card variant="outlined" sx={ { margin: '5px 0px' } }>
                    <CardActionArea href='activity'>
                      <CardContent>
                        <Typography variant="subtitle2" color="text.primary">
                          John Doe completed 'Send Weekly Report'
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                  <Card variant="outlined" sx={ { margin: '5px 0px' } }>
                    <CardActionArea href='activity'>
                      <CardContent>
                        <Typography variant="subtitle2" color="text.primary">
                          New task added: 'Client Presentation'
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                  <Card variant="outlined" sx={ { margin: '5px 0px' } }>
                    <CardActionArea href='activity'>
                      <CardContent>
                        <Typography variant="subtitle2" color="text.primary">
                          New task added: 'Client Presentation'
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                  <Link href="#" underline="none">
                    <Typography variant="caption" sx={ { display: 'flex', justifyContent: 'end', alignItems: 'end', margin: '5px 0px' } }>
                      View More
                    </Typography>
                  </Link>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={ 12 } md={ 4 } lg={ 3 }>
              <Paper sx={ { p: 2 } }>
                <div style={ { display: 'flex', flexDirection: 'column', height: 240 } }>
                  <Typography variant="h5" component="h2">
                    Quick Stats
                  </Typography>
                  <Divider />
                  <Grid container rowSpacing={ 1 } columnSpacing={ { xs: 1, sm: 2, md: 3 } } sx={ { marginTop: '2px' } }>
                    <Grid item xs={ 6 }>
                      <Card variant="outlined" sx={ { p: 2, backgroundColor: '#8FCDFE', } }>
                        <Typography sx={ { fontSize: 25, display: 'flex', justifyContent: 'center', alignItems: 'center' } } color="text.primary" >
                          15
                        </Typography>
                        <Typography sx={ { fontSize: 14, display: 'flex', justifyContent: 'center', alignItems: 'center' } } color="text.secondary" >
                          Total Tasks
                        </Typography>
                      </Card>
                    </Grid>
                    <Grid item xs={ 6 }>
                      <Card variant="outlined" sx={ { p: 2, backgroundColor: '#96FE8F' } }>
                        <Typography sx={ { fontSize: 25, display: 'flex', justifyContent: 'center', alignItems: 'center' } } color="text.primary">
                          8
                        </Typography>
                        <Typography sx={ { fontSize: 14, display: 'flex', justifyContent: 'center', alignItems: 'center' } } color="text.secondary">
                          Completed
                        </Typography>
                      </Card>
                    </Grid>
                  </Grid>
                  <Grid container rowSpacing={ 1 } columnSpacing={ { xs: 1, sm: 2, md: 3 } } sx={ { marginTop: '2px' } }>
                    <Grid item xs={ 6 }>
                      <Card variant="outlined" sx={ { p: 2, backgroundColor: '#FEBE8F' } }>
                        <Typography sx={ { fontSize: 25, display: 'flex', justifyContent: 'center', alignItems: 'center' } } color="text.primary">
                          3
                        </Typography>
                        <Typography sx={ { fontSize: 14, display: 'flex', justifyContent: 'center', alignItems: 'center' } } color="text.secondary">
                          Overdue
                        </Typography>
                      </Card>
                    </Grid>
                    <Grid item xs={ 6 }>
                      <Card variant="outlined" sx={ { p: 2, backgroundColor: '#E5FE8F' } }>
                        <Typography sx={ { fontSize: 25, display: 'flex', justifyContent: 'center', alignItems: 'center' } } color="text.primary">
                          4
                        </Typography>
                        <Typography sx={ { fontSize: 14, display: 'flex', justifyContent: 'center', alignItems: 'center' } } color="text.secondary">
                          In Progress
                        </Typography>
                      </Card>
                    </Grid>
                  </Grid>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={ 12 }>
              <Paper sx={ { p: 2 } }>
                <Typography variant="h5" component="h2">
                  Tasks
                </Typography>
                <Divider />
                <div style={ { display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '15px' } }>
                  <Card
                    sx={ { maxWidth: 250 } }
                    onMouseEnter={ () => setIsHovered1(true) }
                    onMouseLeave={ () => setIsHovered1(false) }
                  >
                    <CardActionArea href='tasks'>
                      <CardContent>
                        <Typography gutterBottom variant="subtitle1" component="div">
                          Review Project Proposal
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          Lizards are a widespread group of squamate reptiles, with over 6,000
                          species, ranging across all continents except Antarctica
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                    { isHovered1 ? (
                      <>
                        <Tooltip title='Edit' arrow>
                          <IconButton color="inherit" size='small' >
                            <EditIcon fontSize='small' />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title='Delete' arrow size='small'>
                          <IconButton color="inherit" >
                            <DeleteIcon fontSize='small' />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title='Settings' arrow size='small'>
                          <IconButton color="inherit" >
                            <SettingsIcon fontSize='small' />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title='Share' arrow size='small'>
                          <IconButton color="inherit" >
                            <ShareIcon fontSize='small' />
                          </IconButton>
                        </Tooltip>
                        </>
                    ) : '.'}
                    </CardActions>
                  </Card>
                  <Card
                    sx={ { maxWidth: 250 } }
                    onMouseEnter={ () => setIsHovered2(true) }
                    onMouseLeave={ () => setIsHovered2(false) }
                  >
                    <CardActionArea href='tasks'>
                      <CardContent>
                        <Typography gutterBottom variant="subtitle1" component="div">
                          Prepare Meeting Agenda
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          Lizards are a widespread group of squamate reptiles, with over 6,000
                          species, ranging across all continents except Antarctica
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    { isHovered2 && (
                      <CardActions>
                        <Tooltip title='Edit' arrow>
                          <IconButton color="inherit" size='small' >
                            <EditIcon fontSize='small' />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title='Delete' arrow size='small'>
                          <IconButton color="inherit" >
                            <DeleteIcon fontSize='small' />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title='Settings' arrow size='small'>
                          <IconButton color="inherit" >
                            <SettingsIcon fontSize='small' />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title='Share' arrow size='small'>
                          <IconButton color="inherit" >
                            <ShareIcon fontSize='small' />
                          </IconButton>
                        </Tooltip>
                      </CardActions>
                    ) }
                  </Card>
                  <Card
                    sx={ { maxWidth: 250 } }
                    onMouseEnter={ () => setIsHovered3(true) }
                    onMouseLeave={ () => setIsHovered3(false) }
                  >
                    <CardActionArea href='tasks'>
                      <CardContent>
                        <Typography gutterBottom variant="subtitle1" component="div">
                          Send Weekly Report
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          Lizards are a widespread group of squamate reptiles, with over 6,000
                          species, ranging across all continents except Antarctica
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    { isHovered3 && (
                      <CardActions>
                        <Tooltip title='Edit' arrow>
                          <IconButton color="inherit" size='small' >
                            <EditIcon fontSize='small' />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title='Delete' arrow size='small'>
                          <IconButton color="inherit" >
                            <DeleteIcon fontSize='small' />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title='Settings' arrow size='small'>
                          <IconButton color="inherit" >
                            <SettingsIcon fontSize='small' />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title='Share' arrow size='small'>
                          <IconButton color="inherit" >
                            <ShareIcon fontSize='small' />
                          </IconButton>
                        </Tooltip>
                      </CardActions>
                    ) }
                  </Card>
                  <Card
                    sx={ { maxWidth: 250 } }
                    onMouseEnter={ () => setIsHovered4(true) }
                    onMouseLeave={ () => setIsHovered4(false) }
                  >
                    <CardActionArea href='tasks'>
                      <CardContent>
                        <Typography gutterBottom variant="subtitle1" component="div">
                          Client Call at 2 PM
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          Lizards are a widespread group of squamate reptiles, with over 6,000
                          species, ranging across all continents except Antarctica
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    { isHovered4 && (
                      <CardActions>
                        <Tooltip title='Edit' arrow>
                          <IconButton color="inherit" size='small' >
                            <EditIcon fontSize='small' />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title='Delete' arrow size='small'>
                          <IconButton color="inherit" >
                            <DeleteIcon fontSize='small' />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title='Settings' arrow size='small'>
                          <IconButton color="inherit" >
                            <SettingsIcon fontSize='small' />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title='Share' arrow size='small'>
                          <IconButton color="inherit" >
                            <ShareIcon fontSize='small' />
                          </IconButton>
                        </Tooltip>
                      </CardActions>
                    ) }
                  </Card>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={ 12 }>
              <Paper sx={ { p: 2 } }>
                <Typography variant="h5" component="h2">
                  Project Overview
                </Typography>
                <Divider />
                <div style={ { display: 'flex', flexDirection: 'row', marginTop: '15px' } }>
                  <Card >
                    <CardActionArea href='projects'>
                      <CardContent>
                        <Typography gutterBottom variant="subtitle1" component="div">
                          Project Name: ABC Project
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          Lizards are a widespread group of squamate reptiles, with over 6,000
                          species, ranging across all continents except Antarctica
                        </Typography>
                        <Typography variant="body2" color="text.secondary" component="div">
                          Status: In Progress
                        </Typography>
                        <Typography variant="body2" color="text.secondary" component="div">
                          Team Members: John Doe, Jane Smith
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button size="small" color="primary">
                        Share
                      </Button>
                    </CardActions>
                  </Card>
                  <div style={ { margin: '0px 10px' } }></div>
                  <Card >
                    <CardActionArea href='projects'>
                      <CardContent>
                        <Typography gutterBottom variant="subtitle1" component="div">
                          Project Name: ABC Project
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          Lizards are a widespread group of squamate reptiles, with over 6,000
                          species, ranging across all continents except Antarctica
                        </Typography>
                        <Typography variant="body2" color="text.secondary" component="div">
                          Status: In Progress
                        </Typography>
                        <Typography variant="body2" color="text.secondary" component="div">
                          Team Members: John Doe, Jane Smith
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button size="small" color="primary">
                        Share
                      </Button>
                    </CardActions>
                  </Card>
                </div>
                <div style={ { display: 'flex', flexDirection: 'row', marginTop: '15px' } }>
                  <Card >
                    <CardActionArea href='projects'>
                      <CardContent>
                        <Typography gutterBottom variant="subtitle1" component="div">
                          Project Name: ABC Project
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          Lizards are a widespread group of squamate reptiles, with over 6,000
                          species, ranging across all continents except Antarctica
                        </Typography>
                        <Typography variant="body2" color="text.secondary" component="div">
                          Status: In Progress
                        </Typography>
                        <Typography variant="body2" color="text.secondary" component="div">
                          Team Members: John Doe, Jane Smith
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button size="small" color="primary">
                        Share
                      </Button>
                    </CardActions>
                  </Card>
                  <div style={ { margin: '0px 10px' } }></div>
                  <Card >
                    <CardActionArea href='projects'>
                      <CardContent>
                        <Typography gutterBottom variant="subtitle1" component="div">
                          Project Name: ABC Project
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          Lizards are a widespread group of squamate reptiles, with over 6,000
                          species, ranging across all continents except Antarctica
                        </Typography>
                        <Typography variant="body2" color="text.secondary" component="div">
                          Status: In Progress
                        </Typography>
                        <Typography variant="body2" color="text.secondary" component="div">
                          Team Members: John Doe, Jane Smith
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button size="small" color="primary">
                        Share
                      </Button>
                    </CardActions>
                  </Card>
                </div>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

export default Home