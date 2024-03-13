import React, { useState, useEffect, useContext } from 'react';
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
import { ActivitiesContext } from '../../context/ActivitiesContext';
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const TaskCard = ({ label, task }) => {
  const [isHovered, setIsHovered] = useState(
    new Array(task?.length).fill(false)
  );
  const { showAll } = useContext(ActivitiesContext);
  const visibleTask = showAll ? task : task?.slice(0, 4);
  const [hideActionsTimeouts, setHideActionsTimeouts] = useState([]);

  useEffect(() => {
    return () => {
      hideActionsTimeouts.forEach((timeout) => clearTimeout(timeout));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        {visibleTask?.map((item, index) => {
          const { id, title, description, link } = item;
          return (
            <Grid item xs={12} sm={6} md={3} lg={3} key={index}>
              <Tooltip title="Edit ,Delete coming soon..." arrow>
                <Card
                  sx={{
                    width: '100%',
                    height: '100%',
                    minHeight: 210,
                    boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
                  }}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                >
                  <CardActionArea sx={{ height: 165 }}>
                    <Link
                      to={`/${link}/${id}`}
                      style={{ textDecoration: 'none', color: 'inherit' }}
                    >
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
                    </Link>
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
                    </CardActions>
                  )}
                </Card>
              </Tooltip>
            </Grid>
          );
        })}
      </Grid>
      {!showAll && (
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
      )}
    </>
  );
};

export default TaskCard;
