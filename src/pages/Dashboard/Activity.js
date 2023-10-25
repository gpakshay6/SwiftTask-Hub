import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Activity = () => {
    const navigate = useNavigate();
    let token = localStorage.getItem('token')

    useEffect(() => {
        if (!token) {
            navigate('/')
        }
    }, [token])
  return (
    <div>Activity</div>
  )
}

export default Activity