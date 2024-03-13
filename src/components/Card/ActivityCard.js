import React, { useContext } from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Divider,
  Paper,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { ActivitiesContext } from '../../context/ActivitiesContext';
import { formatDate, getStatusColor } from '../../utils/utilities';

const useStyles = makeStyles((theme) => ({
  cardLink: {
    textDecoration: 'none',
  },
  card: {
    margin: '10px 0px',
    boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
  },
  viewMore: {
    display: 'flex',
    justifyContent: 'end',
    alignItems: 'end',
    margin: '5px 0px',
    textDecoration: 'none',
  },
  activityContent: {
    display: 'flex',
    alignItems: 'center',
  },
  title: {
    flex: 1,
    minWidth: 100,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  date: {
    flexShrink: 0,
    minWidth: 100,
  },
  statusPaper: {
    flexShrink: 0,
    minWidth: 100,
    padding: theme.spacing(1),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const ActivityCard = ({ label, activities }) => {
  const classes = useStyles();
  const { showAll } = useContext(ActivitiesContext);

  const visibleActivities = showAll ? activities : activities.slice(0, 3);

  return (
    <>
      <Typography variant="h5" component="h2">
        {label}
      </Typography>
      <Divider />
      {visibleActivities?.map((item) => {
        const { id, title, date, status, link } = item;
        return (
          <Link key={id} to={`/${link}/${id}`} className={classes.cardLink}>
            <Card variant="outlined" className={classes.card}>
              <CardActionArea>
                <CardContent>
                  <div className={classes.activityContent}>
                    <Typography
                      variant="subtitle2"
                      color="text.primary"
                      className={classes.title}
                    >
                      {title}
                    </Typography>
                    {showAll && (
                      <>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          className={classes.date}
                        >
                          {formatDate(date)}
                        </Typography>
                        <Paper
                          className={classes.statusPaper}
                          style={{ backgroundColor: getStatusColor(status) }}
                        >
                          <Typography variant="body2" style={{ color: '#fff' }}>
                            {status}
                          </Typography>
                        </Paper>
                      </>
                    )}
                  </div>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
        );
      })}
      {!showAll && (
        <Link to={'/activity'} className={classes.viewMore}>
          <Typography variant="caption">View More</Typography>
        </Link>
      )}
    </>
  );
};

export default ActivityCard;
