// ActivitiesContext.js
import React, { createContext, useState } from 'react';
import { recentActivities } from '../Constants/constant';

export const ActivitiesContext = createContext();

export const ActivitiesProvider = ({ children }) => {
  const [activities, setActivities] = useState(recentActivities);
  const [showAllActivities, setShowAllActivities] = useState(false);

  const toggleShowAllActivities = () => {
    setShowAllActivities(true);
  };

  const resetActivities = () => {
    setShowAllActivities(false);
  };

  return (
    <ActivitiesContext.Provider
      value={{
        activities,
        setActivities,
        showAllActivities,
        toggleShowAllActivities,
        resetActivities,
      }}
    >
      {children}
    </ActivitiesContext.Provider>
  );
};
