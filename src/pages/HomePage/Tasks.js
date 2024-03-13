import React, { useContext } from 'react';
import { Box, Grid } from '@mui/material';
import { TaskCard, BreadCrumb } from '../../components';
import { ActivitiesContext } from '../../context/ActivitiesContext';

const Tasks = () => {
  const { alltasks, toggleShowAll } = useContext(ActivitiesContext);

  const TasksBreadCrumb = [
    {
      name: 'Dashboard',
      link: '/home',
      active: false,
    },
    {
      name: 'Tasks',
      link: '',
      active: true,
    },
  ];

  toggleShowAll();
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          <Grid item md={10} xs={10}>
            <BreadCrumb item={TasksBreadCrumb} />
          </Grid>
        </Grid>
      </Box>
      <TaskCard label={'Tasks'} task={alltasks} />
    </>
  );
};

export default Tasks;
