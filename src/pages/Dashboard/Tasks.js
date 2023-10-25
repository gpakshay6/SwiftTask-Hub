import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Tasks = () => {
    const navigate = useNavigate();
    let token = localStorage.getItem('token')

    useEffect(() => {
        if (!token) {
            navigate('/')
        }
    }, [token])
  return (
    <div>Tasks</div>
  )
}

export default Tasks