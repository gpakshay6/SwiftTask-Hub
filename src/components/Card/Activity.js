import React from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Divider,
} from '@mui/material';
import { Link } from 'react-router-dom';

const ActivityCard = ({ label, activities }) => {
  return (
    <>
      <Typography variant="h5" component="h2">
        {label}
      </Typography>
      <Divider />
      {activities?.map((item) => {
        const { title, link } = item;
        return (
          <>
            <Link to={`/${link}`} style={{ textDecoration: 'none' }}>
              <Card variant="outlined" sx={{ margin: '10px 0px' }}>
                <CardActionArea>
                  <CardContent>
                    <Typography variant="subtitle2" color="text.primary">
                      {title}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </>
        );
      })}
      <Link to="/activity" style={{ textDecoration: 'none' }}>
        <Typography
          variant="caption"
          sx={{
            display: 'flex',
            justifyContent: 'end',
            alignItems: 'end',
            margin: '5px 0px',
          }}
        >
          View More
        </Typography>
      </Link>
    </>
  );
};

export default ActivityCard;
