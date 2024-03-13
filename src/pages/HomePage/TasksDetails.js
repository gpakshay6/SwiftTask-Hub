import React, { useContext, useEffect } from 'react';
import { Typography, Divider, Paper, Grid, Box } from '@mui/material';
import { ChipContainer, BreadCrumb } from '../../components';
import { useParams } from 'react-router-dom';
import { ActivitiesContext } from '../../context/ActivitiesContext';
import { getStatusColor } from '../../utils/utilities';

const TasksDetails = () => {
  const { slug } = useParams();
  const { getTaskById, setSelected, selected } = useContext(ActivitiesContext);

  const TasksDetailsBreadCrumb = [
    {
      name: 'Dashboard',
      link: '/home',
      active: false,
    },
    {
      name: 'Tasks',
      link: '/tasks',
      active: false,
    },
    {
      name: `${selected?.title}`,
      link: '',
      active: true,
    },
  ];

  useEffect(() => {
    const activityId = parseInt(slug);
    const activity = getTaskById(activityId);
    setSelected(activity);
  }, [slug, getTaskById, setSelected]);

  const Images1 = [
    { src: selected?.img1, alt: 'Technology', width: 300, height: 250 },
    { src: selected?.img2, alt: 'Statistics', width: 300, height: 250 },
  ];
  const Images2 = [
    { src: selected?.img3, alt: 'Jack', width: 100, height: 100 },
    { src: selected?.img4, alt: 'Mary', width: 100, height: 100 },
    { src: selected?.img5, alt: 'Kathiren', width: 100, height: 100 },
    { src: selected?.img6, alt: 'John', width: 100, height: 100 },
  ];

  return (
    <>
      {selected && (
        <>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={1}>
              <Grid item md={10} xs={10}>
                <BreadCrumb item={TasksDetailsBreadCrumb} />
              </Grid>
            </Grid>
          </Box>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <h2>{selected?.title}</h2>
            <div style={{ marginLeft: 'auto' }}>
              <ChipContainer priority={selected?.priority} />
            </div>
          </div>
          <Divider />
          <Paper style={{ padding: 50 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={12} lg={7}>
                <Grid>
                  {Images1.map((image, index) => (
                    <img
                      key={index}
                      src={image.src}
                      alt={image.alt}
                      width={image.width}
                      height={image.height}
                      style={{ borderRadius: '5%', padding: 5, marginRight: 3 }}
                    />
                  ))}
                </Grid>
                <Grid>
                  {Images2.map((image, index) => (
                    <img
                      key={index}
                      src={image.src}
                      alt={image.alt}
                      width={image.width}
                      height={image.height}
                      style={{
                        borderRadius: '50%',
                        padding: 5,
                        marginRight: 10,
                      }}
                    />
                  ))}
                </Grid>
              </Grid>
              <Grid item sm={6} md={6} lg={5}>
                <Typography variant="subtitle1">
                  Description: {selected?.description}
                </Typography>
                <Typography variant="subtitle1">
                  Deadline: {selected?.deadline.toDateString()}
                </Typography>
                <Typography variant="subtitle1">
                  Assigned To: {selected?.assignedTo}
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ color: getStatusColor(selected?.status) }}
                >
                  Status: {selected?.status}
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </>
      )}
    </>
  );
};

export default TasksDetails;
