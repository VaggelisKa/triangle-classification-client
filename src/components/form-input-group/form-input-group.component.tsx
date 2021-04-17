import React, { FC } from 'react';
import { Point } from '../../models/Point';
import './form-input-group.styles.scss';

interface Props {
  xAxisChangeHandler: (event: any) => void;
  yAxisChangeHandler: (event: any) => void;
  pointValue: Point
}

const FormInputGroup: FC<Props> = ({ xAxisChangeHandler, yAxisChangeHandler, pointValue }: Props) => {
  return (
    <div className="input-container">
      <label className="input-label">Add Point</label>
      <input
        type="number"
        placeholder="X axis"
        step="0.1"
        min={-100}
        max={100}
        onChange={xAxisChangeHandler}
      />
      <input
        type="number"
        step="0.1"
        placeholder="Y axis"
        min={-100}
        max={100}
        onChange={yAxisChangeHandler}
      />
    </div>
  );
};

export default FormInputGroup;
