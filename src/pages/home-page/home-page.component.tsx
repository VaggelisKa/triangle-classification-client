import React, { FC, useState } from 'react';
import axios from 'axios';
import './home-page.styles.scss';

import isPointInputValid from '../../helpers/isInputValid';

import { Point } from '../../models/Point';
import { ClassifiedTriangle } from '../../models/ClassifiedTriangle';

import FormInputGroup from '../../components/form-input-group/form-input-group.component';
import ErrorDisplay from '../../components/error-display/error-display.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import Modal from '../../components/modal/modal.component';
import Spinner from '../../components/spinner/spinner.component';

const HomePage: FC = () => {
  const [firstPointValue, setFirstPointValue] = useState<Point>({ xAxis: undefined, yAxis: undefined });
  const [secondPointValue, setSecondPointValue] = useState<Point>({ xAxis: undefined, yAxis: undefined });
  const [thirdPointValue, setThirdPointValue] = useState<Point>({ xAxis: undefined, yAxis: undefined });
  const [triangleData, setTriangleData] = useState<ClassifiedTriangle>();
  const [errorMessage, setErrorMessage] = useState(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    try {
      setErrorMessage(null);
      setLoading(true);

      const res = await axios.post('http://localhost:4000/api/triangles/classify', {
        p1: firstPointValue,
        p2: secondPointValue,
        p3: thirdPointValue
      });

      setLoading(false);

      if (res.data) {
        setTriangleData(res.data);
        setShowModal(true);
      }
    } catch (error) {
      setLoading(false);
      setErrorMessage(error.response.data.message);
    }
  };

  return (
    loading ? <Spinner /> : (
      <div className="container">
        <h2>Triangle Classification App</h2>
        <form className="input-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <FormInputGroup
              pointValue={firstPointValue}
              xAxisChangeHandler={event => setFirstPointValue({...firstPointValue, xAxis: +event.target.value})}
              yAxisChangeHandler={event => setFirstPointValue({...firstPointValue, yAxis: +event.target.value})}
            />
          </div>
          <div className="form-group">
            <FormInputGroup
              pointValue={secondPointValue}
              xAxisChangeHandler={event => setSecondPointValue({...secondPointValue, xAxis: +event.target.value})}
              yAxisChangeHandler={event => setSecondPointValue({...secondPointValue, yAxis: +event.target.value})}
            />
          </div>
          <div className="form-group">
            <FormInputGroup
              pointValue={thirdPointValue}
              xAxisChangeHandler={event => setThirdPointValue({...thirdPointValue, xAxis: +event.target.value})}
              yAxisChangeHandler={event => setThirdPointValue({...thirdPointValue, yAxis: +event.target.value})}
            />
          </div>
          <CustomButton
            isDisabled={!isPointInputValid(firstPointValue, secondPointValue, thirdPointValue)}
            text="ClassifyTriangle"
          />
          {
            errorMessage && <ErrorDisplay>{errorMessage!}</ErrorDisplay>
          }
        </form>
        <Modal
          isVisible={showModal}
          triangle={triangleData}
          setShowModal={setShowModal}
        />
      </div>
    )
  );
};

export default HomePage;
