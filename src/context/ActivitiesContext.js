// ActivitiesContext.js
import React, { createContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { recentActivities, tasks, projects } from '../Constants/constant';

export const ActivitiesContext = createContext();

export const ActivitiesProvider = ({ children }) => {
  const { slug } = useParams();
  const [activities, setActivities] = useState(recentActivities);
  const [alltasks, setAllTasks] = useState(tasks);
  const [projectDetail, setProjectDetail] = useState(projects);
  const [showAll, setShowAll] = useState(false);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    if (slug === undefined) {
      setShowAll(false);
      setSelected(null);
    }
  }, [slug]);

  const toggleShowAll = () => {
    setShowAll(true);
  };

  const resetActivities = () => {
    setShowAll(false);
  };

  const getActivityById = (id) => {
    return activities.find((activity) => activity.id === id);
  };

  const getTaskById = (id) => {
    return alltasks.find((task) => task.id === id);
  };

  const getProjectById = (id) => {
    return projects.find((project) => project.id === id);
  };

  return (
    <ActivitiesContext.Provider
      value={{
        activities,
        setActivities,
        alltasks,
        setAllTasks,
        projectDetail,
        setProjectDetail,
        showAll,
        toggleShowAll,
        resetActivities,
        getActivityById,
        getTaskById,
        getProjectById,
        selected,
        setSelected,
      }}
    >
      {children}
    </ActivitiesContext.Provider>
  );
};
