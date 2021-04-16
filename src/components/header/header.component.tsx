import React, { FC } from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';

const Header: FC = () => (
  <div className="header-container">
    <div className="logo-container">
      <Link to="/">Home</Link>
    </div>
    <div className="options-container">
      <Link to="/history">ViewHistory</Link>
    </div>
  </div>
);

export default Header;
