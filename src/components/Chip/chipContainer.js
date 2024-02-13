import React from 'react';
import { Chip } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  priorityLow: {
    backgroundColor: theme.palette.success.main,
    color: theme.palette.success.contrastText,
  },
  priorityMedium: {
    backgroundColor: theme.palette.warning.main,
    color: theme.palette.warning.contrastText,
  },
  priorityHigh: {
    backgroundColor: theme.palette.error.main,
    color: theme.palette.error.contrastText,
  },
}));

const ChipContainer = ({ priority }) => {
  const classes = useStyles();

  let chipClassName;
  switch (priority.toLowerCase()) {
    case 'low':
      chipClassName = classes.priorityLow;
      break;
    case 'medium':
      chipClassName = classes.priorityMedium;
      break;
    case 'high':
      chipClassName = classes.priorityHigh;
      break;
    default:
      chipClassName = '';
  }

  return <Chip label={priority} className={chipClassName} />;
};

export default ChipContainer;
