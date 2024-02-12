import React from 'react';
import { Paper, Typography } from '@mui/material';
import StatsCard from '../Card/Stats';

const Sidebar = (stats) => {
  return (
    <Paper sx={{ p: 2 }}>
      {/* <Typography variant="h5" component="h2">
        Quick Stats
      </Typography>
      <StatsCard stats={stats} /> */}
    </Paper>
  );
};

export default Sidebar;
