import React, { useContext } from 'react';
import { ActivityCard } from '../../components';
import { ActivitiesContext } from '../../context/ActivitiesContext';

const Activity = () => {
  const { activities, toggleShowAllActivities } = useContext(ActivitiesContext);

  toggleShowAllActivities();
  return (
    <>
      <ActivityCard label={'Activities'} activities={activities} />
    </>
  );
};

export default Activity;
