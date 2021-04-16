import React, { FC } from 'react';
import './spinner.styles.scss';

const Spinner: FC = () => (
  <div className="spinner-overlay">
    <div className="spinner-container" />
  </div>
);

export default Spinner;
