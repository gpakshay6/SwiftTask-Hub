import React from 'react';
import { Container, Toolbar, CssBaseline, Grid, Paper } from '@mui/material';
import {
  StatsCard,
  TaskCard,
  ProjectCard,
  ActivityCard,
  Header,
} from '../../components';
import {
  recentActivities,
  quickStats,
  tasks,
  projectOverview,
} from '../../Constants/constant';

const Home = () => {
  return (
    <>
      <CssBaseline />
      <Toolbar />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Header />
        <Grid container spacing={2}>
          <Grid item xs={12} md={8} lg={9}>
            <Paper sx={{ p: 2 }}>
              <ActivityCard
                label={'Recent Activity'}
                activities={recentActivities}
              />
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <Paper sx={{ p: 2 }}>
              <StatsCard label={'Quick Stats'} stats={quickStats} />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper sx={{ p: 2 }}>
              <TaskCard label={'Tasks'} task={tasks} />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper sx={{ p: 2 }}>
              <ProjectCard
                label={'Project Overview'}
                projects={projectOverview}
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Home;
