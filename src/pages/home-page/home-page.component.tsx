import React, { FC, useState } from 'react';
import './home-page.styles.scss';

import isPointInputValid from '../../helpers/isInputValid';

import { Point } from '../../models/Point';
import FormInputGroup from '../../components/form-input-group/form-input-group.component';

const HomePage: FC = () => {
  const [firstPointValue, setFirstPointValue] = useState<Point>({ xAxis: null, yAxis: null });
  const [secondPointValue, setSecondPointValue] = useState<Point>({ xAxis: null, yAxis: null });
  const [thirdPointValue, setThirdPointValue] = useState<Point>({ xAxis: null, yAxis: null });

  const handleSubmit = (event: any): void => {
    event.preventDefault();

    console.log(firstPointValue, secondPointValue, thirdPointValue);
  };

  return (
    <div className="container">
      <h2>Triangle Classification App</h2>
      <form className="input-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <FormInputGroup
            xAxisChangeHandler={event => setFirstPointValue({...firstPointValue, xAxis: +event.target.value})}
            yAxisChangeHandler={event => setFirstPointValue({...firstPointValue, yAxis: +event.target.value})}
          />
        </div>
        <div className="form-group">
          <FormInputGroup
            xAxisChangeHandler={event => setSecondPointValue({...secondPointValue, xAxis: +event.target.value})}
            yAxisChangeHandler={event => setSecondPointValue({...secondPointValue, yAxis: +event.target.value})}
          />
        </div>
        <div className="form-group">
          <FormInputGroup
            xAxisChangeHandler={event => setThirdPointValue({...thirdPointValue, xAxis: +event.target.value})}
            yAxisChangeHandler={event => setThirdPointValue({...thirdPointValue, yAxis: +event.target.value})}
          />
        </div>
        <button
          type="submit"
        >
          Classify Triangle
        </button>
      </form>
    </div>
  );
};

export default HomePage;
