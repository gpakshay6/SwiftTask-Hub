import React, { useContext } from 'react';
import { Box, Grid } from '@mui/material';
import { ActivityCard, BreadCrumb } from '../../components';
import { ActivitiesContext } from '../../context/ActivitiesContext';

const Activity = () => {
  const { activities, toggleShowAll } = useContext(ActivitiesContext);

  const ActivityBreadCrumb = [
    {
      name: 'Dashboard',
      link: '/home',
      active: false,
    },
    {
      name: 'Activities',
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
            <BreadCrumb item={ActivityBreadCrumb} />
          </Grid>
        </Grid>
      </Box>
      <ActivityCard label={'Activities'} activities={activities} />
    </>
  );
};

export default Activity;
