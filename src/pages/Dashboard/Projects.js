import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Projects = () => {
    const navigate = useNavigate();
    let token = localStorage.getItem('token')

    useEffect(() => {
        if (!token) {
            navigate('/')
        }
    }, [token])
  return (
    <div>Projects</div>
  )
}

export default Projects