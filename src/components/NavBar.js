import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navigation">
      <NavLink to ="/">Car Store</NavLink>
    </div>
  )
}

export default NavBar;