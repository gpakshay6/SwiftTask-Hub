import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { getStatusColor } from '../../utils/utilities';

const useStyles = makeStyles((theme) => ({
  statusPaper: {
    flexShrink: 0,
    maxWidth: 100,
    padding: theme.spacing(1),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tableContainer: {
    '&.high-priority': {
      borderTop: `3px solid red`,
    },
    '&.medium-priority': {
      borderTop: `3px solid #ed6c02`,
    },
    '&.low-priority': {
      borderTop: `3px solid #2e7d32`,
    },
  },
}));

const CommonTable = ({ data, priority }) => {
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
    <TableContainer component={Paper}>
      <Table className={`${classes.tableContainer} ${containerClassName}`}>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.field}>
              <TableCell>
                <Typography variant="body2" sx={{ minWidth: 100 }}>
                  {row.field}
                </Typography>
              </TableCell>
              <TableCell>
                {row.field === 'Status' ? (
                  <Paper
                    className={classes.statusPaper}
                    style={{ backgroundColor: getStatusColor(row.value) }}
                  >
                    <Typography variant="body2" style={{ color: '#fff' }}>
                      {row.value}
                    </Typography>
                  </Paper>
                ) : (
                  row.value
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CommonTable;
