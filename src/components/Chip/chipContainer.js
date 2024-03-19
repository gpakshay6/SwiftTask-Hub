import React from 'react';
import { Chip } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  chipColor: {
    '&.high-priority': {
      backgroundColor: `red`,
      color: '#fff',
    },
    '&.medium-priority': {
      backgroundColor: `#ed6c02`,
      color: '#fff',
    },
    '&.low-priority': {
      backgroundColor: `#2e7d32`,
      color: '#fff',
    },
  },
}));

const ChipContainer = ({ priority }) => {
  const classes = useStyles();
  const containerClassName =
    priority?.toLowerCase() === 'high'
      ? 'high-priority'
      : priority?.toLowerCase() === 'medium'
      ? 'medium-priority'
      : priority?.toLowerCase() === 'low'
      ? 'low-priority'
      : '';

  return (
    <Chip
      label={priority}
      className={`${classes.chipColor} ${containerClassName}`}
    />
  );
};

export default ChipContainer;
