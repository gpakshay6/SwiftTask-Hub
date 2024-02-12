import React from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  CardActions,
  Typography,
  Button,
  Divider,
  Grid,
} from '@mui/material';
import { Link } from 'react-router-dom';

const ProjectCard = ({ label, projects }) => {
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
        {projects?.map((item, index) => {
          const { title, description, status, teamMembers, link } = item;
          return (
            <Grid item xs={12} sm={6} md={6} lg={6} key={index}>
              <Link to={`/${link}`} style={{ textDecoration: 'none' }}>
                <Card
                  sx={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }}
                >
                  <CardActionArea href="projects">
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        component="div"
                      >
                        {title}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {description}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        component="div"
                      >
                        Status: {status}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        component="div"
                      >
                        Team Members: {teamMembers.join(', ')}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      Share
                    </Button>
                  </CardActions>
                </Card>
              </Link>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default ProjectCard;
