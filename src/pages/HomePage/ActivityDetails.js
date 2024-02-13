import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CommonTable, ChipContainer } from '../../components';
import { ActivitiesContext } from '../../context/ActivitiesContext';
import { formatDate } from '../../utils/utilities';

const ActivityDetails = () => {
  const { slug } = useParams();
  const { getActivityById, setSelectedActivity, selectedActivity } =
    useContext(ActivitiesContext);

  useEffect(() => {
    const activityId = parseInt(slug);
    const activity = getActivityById(activityId);
    setSelectedActivity(activity);
  }, [slug, getActivityById, setSelectedActivity]);

  const activityFields = [
    { field: 'Date', value: formatDate(selectedActivity?.date) },
    { field: 'Description', value: selectedActivity?.description },
    { field: 'Assigned To', value: selectedActivity?.assignedTo },
    { field: 'Category', value: selectedActivity?.category },
    { field: 'Status', value: selectedActivity?.status },
  ];

  return (
    <div>
      {selectedActivity && (
        <>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <h2>{selectedActivity?.title}</h2>
            <div style={{ marginLeft: 'auto' }}>
              <ChipContainer priority={selectedActivity?.priority} />
            </div>
          </div>
          <CommonTable
            data={activityFields}
            priority={selectedActivity?.priority}
          />
        </>
      )}
    </div>
  );
};

export default ActivityDetails;
