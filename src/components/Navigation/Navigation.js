import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <Link to="signin">
      <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <p className="f3 link dim black underline pa3 pointer">Sign Out</p>
      </nav>
    </Link>
  );
};

export default Navigation;
