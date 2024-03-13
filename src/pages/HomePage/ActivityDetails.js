import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Grid } from '@mui/material';
import { CommonTable, ChipContainer, BreadCrumb } from '../../components';
import { ActivitiesContext } from '../../context/ActivitiesContext';
import { formatDate } from '../../utils/utilities';

const ActivityDetails = () => {
  const { slug } = useParams();
  const { getActivityById, setSelected, selected } =
    useContext(ActivitiesContext);

  const ActivitiesBreadCrumb = [
    {
      name: 'Dashboard',
      link: '/home',
      active: false,
    },
    {
      name: 'Activities',
      link: '/activity',
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
    const activity = getActivityById(activityId);
    setSelected(activity);
  }, [slug, getActivityById, setSelected]);

  const activityFields = [
    { field: 'Date', value: formatDate(selected?.date) },
    { field: 'Description', value: selected?.description },
    { field: 'Assigned To', value: selected?.assignedTo },
    { field: 'Category', value: selected?.category },
    { field: 'Status', value: selected?.status },
  ];

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          <Grid item md={10} xs={10}>
            <BreadCrumb item={ActivitiesBreadCrumb} />
          </Grid>
        </Grid>
      </Box>
      {selected && (
        <>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <h2>{selected?.title}</h2>
            <div style={{ marginLeft: 'auto' }}>
              <ChipContainer priority={selected?.priority} />
            </div>
          </div>
          <CommonTable data={activityFields} priority={selected?.priority} />
        </>
      )}
    </div>
  );
};

export default ActivityDetails;
