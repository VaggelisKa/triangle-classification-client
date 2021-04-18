import React, { FC } from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';

import {ReactComponent as Logo} from '../../assets/triangle-logo.svg';

const Header: FC = () => (
  <div className="header-container">
    <div className="logo-container">
      <Link to="/">
        <Logo className="logo" />
      </Link>
    </div>
    <div className="options-container">
      <Link to="/history">ViewHistory</Link>
    </div>
  </div>
);

export default Header;
