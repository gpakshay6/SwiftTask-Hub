// ActivitiesContext.js
import React, { createContext, useState } from 'react';
import { recentActivities } from '../Constants/constant';

export const ActivitiesContext = createContext();

export const ActivitiesProvider = ({ children }) => {
  const [activities, setActivities] = useState(recentActivities);
  const [showAllActivities, setShowAllActivities] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState(null);

  const toggleShowAllActivities = () => {
    setShowAllActivities(true);
  };

  const resetActivities = () => {
    setShowAllActivities(false);
  };

  const getActivityById = (id) => {
    return activities.find((activity) => activity.id === id);
  };

  return (
    <ActivitiesContext.Provider
      value={{
        activities,
        setActivities,
        showAllActivities,
        toggleShowAllActivities,
        resetActivities,
        getActivityById,
        selectedActivity,
        setSelectedActivity,
      }}
    >
      {children}
    </ActivitiesContext.Provider>
  );
};
