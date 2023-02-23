import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <div>
      <nav className="App">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/projects">Projects</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
