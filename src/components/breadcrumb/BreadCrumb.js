import React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const BreadCrumb = ({ item }) => {
  return (
    <div role="presentation">
      <Breadcrumbs
        separator={<NavigateNextIcon />}
        aria-label="breadcrumb"
        mb="15px"
      >
        {item.map((menuItem, index) => (
          <div key={index}>
            {menuItem.active === false ? (
              <Link
                underline="none"
                style={{ textDecoration: 'none', color: '#777E89' }}
                to={menuItem.link}
              >
                {menuItem.name}
              </Link>
            ) : (
              <Typography sx={{ color: '#282828', fontWeight: '600' }}>
                {menuItem.name}
              </Typography>
            )}
          </div>
        ))}
      </Breadcrumbs>
    </div>
  );
};

export default BreadCrumb;
