import React, { FC, ReactChildren } from 'react';
import './error-display.styles.scss';

interface Props {
  children: ReactChildren | ReactChildren[]
}

const ErrorDisplay: FC<Props> = ({children}: Props) => (
  <div className="error-container">
    <p className="error-text">
      {children}
    </p>
  </div>
);

export default ErrorDisplay;
