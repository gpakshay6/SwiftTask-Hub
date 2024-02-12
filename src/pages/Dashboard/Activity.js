import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../../components';

const Activity = () => {
  const navigate = useNavigate();
  let token = localStorage.getItem('token');
  useEffect(() => {
    if (!token) {
      navigate('/');
    }
  }, [token]);

  return (
    <>
      <Header />
      <div> Activity </div>
    </>
  );
};

export default Activity;
