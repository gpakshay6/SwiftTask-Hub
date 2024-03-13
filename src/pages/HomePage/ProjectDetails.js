import React, { useContext, useEffect } from 'react';
import { Typography, Grid, Box } from '@mui/material';
import { BreadCrumb } from '../../components';
import { makeStyles } from '@mui/styles';
import { useParams } from 'react-router-dom';
import { ActivitiesContext } from '../../context/ActivitiesContext';

const useStyles = makeStyles((theme) => ({
  card: {
    position: 'relative',
    width: '100%',
    height: '100%',
    cursor: 'pointer',
    '&:hover $overlay': {
      opacity: 1,
      animation: '$bounce 0.3s forwards',
    },
    '&:hover $image': {
      filter: 'blur(2px)',
    },
  },
  flex: {
    margin: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    maxWidth: '100%',
    maxHeight: '100%',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: 'white',
    opacity: 0,
    transition: 'opacity 0.3s ease',
  },
  textContainer: {
    textAlign: 'center',
  },
  '@keyframes bounce': {
    '0%': {
      transform: 'translateY(100%)',
    },
    '100%': {
      transform: 'translateY(0)',
    },
  },
}));

const ProjectDetails = () => {
  const { slug } = useParams();
  const { getProjectById, setSelected, selected } =
    useContext(ActivitiesContext);

  const TasksDetailsBreadCrumb = [
    {
      name: 'Dashboard',
      link: '/home',
      active: false,
    },
    {
      name: `${selected?.title}`,
      link: '',
      active: true,
    },
  ];

  useEffect(() => {
    const projectId = parseInt(slug);
    const project = getProjectById(projectId);
    setSelected(project);
  }, [slug, getProjectById, setSelected]);

  const classes = useStyles();

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
          <Grid container spacing={1}>
            <Grid item md={5.8}>
              <img
                src={selected?.imageUrl1}
                alt="Project"
                className={classes.image}
              />
            </Grid>
            <Grid item md={0.5}></Grid>
            <Grid item md={5.7}>
              <Typography
                variant="h5"
                sx={{ fontWeight: 500, marginBottom: '18px' }}
              >
                {selected?.subtitle1}
              </Typography>
              <div
                style={{ border: '1px solid white', marginBottom: '18px' }}
              ></div>
              <Box
                sx={{ maxHeight: 350, overflowY: 'auto', marginBottom: '18px' }}
              >
                <Typography variant="body2">
                  {selected?.description}
                  <ul>
                    {selected?.keypoints1?.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid item md={5.7}>
              <Typography
                variant="h5"
                sx={{ fontWeight: 500, marginBottom: '18px' }}
              >
                {selected?.subtitle2}
              </Typography>
              <div
                style={{ border: '1px solid white', marginBottom: '18px' }}
              ></div>
              <Box
                sx={{ maxHeight: 350, overflowY: 'auto', marginBottom: '18px' }}
              >
                <Typography variant="body2">
                  <ul>
                    {selected?.keypoints2?.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </Typography>
              </Box>
            </Grid>
            <Grid item md={0.5}></Grid>
            <Grid item md={5.8}>
              <img
                src={selected?.imageUrl2}
                alt="Project"
                className={classes.image}
              />
            </Grid>
          </Grid>
        </>
      )}
    </>
  );
};

export default ProjectDetails;
