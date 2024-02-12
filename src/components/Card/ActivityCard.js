import React, { useContext } from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Divider,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { ActivitiesContext } from '../../context/ActivitiesContext';

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
}));

const ActivityCard = ({ label, activities }) => {
  const classes = useStyles();
  const { showAllActivities } = useContext(ActivitiesContext);

  const visibleActivities = showAllActivities
    ? activities
    : activities.slice(0, 3);

  return (
    <>
      <Typography variant="h5" component="h2">
        {label}
      </Typography>
      <Divider />
      {visibleActivities?.map((item) => {
        const { title, link, id } = item;
        return (
          <Link key={id} to={`/${link}/${id}`} className={classes.cardLink}>
            <Card variant="outlined" className={classes.card}>
              <CardActionArea>
                <CardContent>
                  <Typography variant="subtitle2" color="text.primary">
                    {title}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
        );
      })}
      {!showAllActivities && (
        <Link to={'/activity'} className={classes.viewMore}>
          <Typography variant="caption">View More</Typography>
        </Link>
      )}
    </>
  );
};

export default ActivityCard;
