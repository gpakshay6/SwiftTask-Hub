import React, { useContext } from 'react';
import { Grid, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
import {
  StatsCard,
  TaskCard,
  ProjectCard,
  ActivityCard,
} from '../../components';
import { quickStats, tasks, projects } from '../../Constants/constant';
import { ActivitiesContext } from '../../context/ActivitiesContext';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    boxShadow: `
      rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
      rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
      rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset`,
  },
}));

const Home = () => {
  const classes = useStyles();
  const { activities, resetActivities } = useContext(ActivitiesContext);

  resetActivities();

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8} lg={9}>
          <Paper className={classes.paper}>
            <ActivityCard label={'Recent Activity'} activities={activities} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4} lg={3}>
          <Paper className={classes.paper}>
            <StatsCard label={'Quick Stats'} stats={quickStats} />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <TaskCard label={'Tasks'} task={tasks} />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <ProjectCard label={'Project Overview'} projects={projects} />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
