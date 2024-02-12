import React from 'react';
import { useParams } from 'react-router-dom';

const ActivityDetails = () => {
  const { slug } = useParams();

  return (
    <div>
      <h2>Activity Details</h2>
      <p>Fetching details for activity with slug: {slug}</p>
    </div>
  );
};

export default ActivityDetails;
