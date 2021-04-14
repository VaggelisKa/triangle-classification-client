import React, { FC } from 'react';
import './form-input-group.styles.scss';

interface Props {
  xAxisChangeHandler: (event: any) => void;
  yAxisChangeHandler: (event: any) => void;
  otherProps?: any
}

const FormInputGroup: FC<Props> = ({ xAxisChangeHandler, yAxisChangeHandler, ...otherProps }: Props) => {
  return (
    <div className="input-container">
      <label className="input-label">Add Point</label>
      <input
        type="number"
        placeholder="X axis"
        min={0}
        max={100}
        onChange={xAxisChangeHandler}
        {...otherProps}
      />
      <input
        type="number"
        placeholder="Y axis"
        min={0}
        max={100}
        onChange={yAxisChangeHandler}
      />
    </div>
  );
};

export default FormInputGroup;
