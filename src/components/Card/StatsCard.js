import React from 'react';
import { Card, CardContent, Typography, Divider, Grid } from '@mui/material';

const StatsCard = ({ label, stats }) => {
  return (
    <>
      <Typography variant="h5" component="h2">
        {label}
      </Typography>
      <Divider />
      <Grid
        container
        rowSpacing={2}
        columnSpacing={2}
        sx={{ marginTop: '0px' }}
      >
        {stats?.map((item, index) => {
          const { title, value, backgroundColor } = item;
          return (
            <>
              <Grid item xs={6} sm={6} md={6} lg={6} key={index}>
                <Card
                  variant="outlined"
                  sx={{
                    backgroundColor: backgroundColor,
                  }}
                >
                  <CardContent>
                    <Typography
                      sx={{
                        fontSize: 25,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                      color="text.primary"
                    >
                      {value}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: 14,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                      color="text.secondary"
                    >
                      {title}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </>
          );
        })}
      </Grid>
    </>
  );
};

export default StatsCard;
