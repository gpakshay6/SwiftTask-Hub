import React from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  CardActions,
  Typography,
  Tooltip,
  Divider,
  Grid,
  IconButton,
} from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
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
          const { title, description, status, teamMembers, link, id } = item;
          return (
            <Grid item xs={12} sm={6} md={6} lg={6} key={index}>
              <Tooltip title="Share coming soon..." arrow>
                <Card
                  sx={{
                    boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
                  }}
                >
                  <CardActionArea>
                    <Link
                      to={`/${link}/${id}`}
                      style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                      <CardContent sx={{ minHeight: '190px' }}>
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
                    </Link>
                  </CardActionArea>
                  <CardActions>
                    <Tooltip title="Share" arrow>
                      <IconButton color="inherit" size="small">
                        <ShareIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                  </CardActions>
                </Card>
              </Tooltip>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default ProjectCard;
