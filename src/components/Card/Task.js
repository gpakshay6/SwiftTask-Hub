import React, { useState, useEffect } from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  Tooltip,
  Divider,
  Grid,
} from '@mui/material';
import {
  Edit as EditIcon,
  Delete as DeleteIcon,
  Settings as SettingsIcon,
  Share as ShareIcon,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

const TaskCard = ({ label, task }) => {
  const [isHovered, setIsHovered] = useState(
    new Array(task.length).fill(false)
  );
  const [hideActionsTimeouts, setHideActionsTimeouts] = useState([]);

  useEffect(() => {
    return () => {
      hideActionsTimeouts.forEach((timeout) => clearTimeout(timeout));
    };
  }, [task]);

  const handleMouseEnter = (index) => {
    setIsHovered((prev) => {
      const updatedHovered = [...prev];
      updatedHovered[index] = true;
      return updatedHovered;
    });
    clearTimeout(hideActionsTimeouts[index]);
  };

  const handleMouseLeave = (index) => {
    const timeoutId = setTimeout(() => {
      setIsHovered((prev) => {
        const updatedHovered = [...prev];
        updatedHovered[index] = false;
        return updatedHovered;
      });
    }, 0);
    setHideActionsTimeouts((prev) => {
      const updatedTimeouts = [...prev];
      updatedTimeouts[index] = timeoutId;
      return updatedTimeouts;
    });
  };

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
        {task?.map((item, index) => {
          const { title, description, link } = item;
          return (
            <Grid item xs={12} sm={6} md={3} lg={3} key={index}>
              <Link to={`/${link}`} style={{ textDecoration: 'none' }}>
                <Card
                  sx={{ width: '100%', height: '100%', minHeight: 210 }}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                >
                  <CardActionArea href="tasks">
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
                    </CardContent>
                  </CardActionArea>
                  {isHovered[index] && (
                    <CardActions>
                      <Tooltip title="Edit" arrow>
                        <IconButton color="inherit" size="small">
                          <EditIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Delete" arrow size="small">
                        <IconButton color="inherit">
                          <DeleteIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Settings" arrow size="small">
                        <IconButton color="inherit">
                          <SettingsIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Share" arrow size="small">
                        <IconButton color="inherit">
                          <ShareIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>
                    </CardActions>
                  )}
                </Card>
              </Link>
            </Grid>
          );
        })}
      </Grid>
      <Link to="/tasks" style={{ textDecoration: 'none' }}>
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

export default TaskCard;
