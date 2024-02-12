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
            <Paper
              sx={{
                p: 2,
                boxShadow:
                  'rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset',
              }}
            >
              <ActivityCard
                label={'Recent Activity'}
                activities={recentActivities}
              />
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <Paper
              sx={{
                p: 2,
                boxShadow:
                  'rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset',
              }}
            >
              <StatsCard label={'Quick Stats'} stats={quickStats} />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper
              sx={{
                p: 2,
                boxShadow:
                  'rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset',
              }}
            >
              <TaskCard label={'Tasks'} task={tasks} />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper
              sx={{
                p: 2,
                boxShadow:
                  'rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset',
              }}
            >
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
