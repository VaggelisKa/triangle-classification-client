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
        defaultValue={''}
        type="number"
        value={pointValue.xAxis}
        placeholder="X axis"
        step="0.1"
        min={-200}
        max={200}
        onChange={xAxisChangeHandler}
      />
      <input
        defaultValue={''}
        value={pointValue.yAxis}
        type="number"
        step="0.1"
        placeholder="Y axis"
        min={-200}
        max={200}
        onChange={yAxisChangeHandler}
      />
    </div>
  );
};

export default FormInputGroup;
