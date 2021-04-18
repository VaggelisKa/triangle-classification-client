import React, { FC, useState } from 'react';
import './home-page.styles.scss';

import isPointInputValid from '../../helpers/isInputValid';

import { Point } from '../../models/Point';
import { ClassifiedTriangle } from '../../models/ClassifiedTriangle';

import FormInputGroup from '../../components/form-input-group/form-input-group.component';
import ErrorDisplay from '../../components/error-display/error-display.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import Modal from '../../components/modal/modal.component';
import Spinner from '../../components/spinner/spinner.component';
import formatInput from '../../helpers/formatInput';
import clearHomepageInputState from '../../helpers/clearInputState';
import useApiRequest from '../../hooks/useApiRequest';

const HomePage: FC = () => {
  const [firstPointValue, setFirstPointValue] = useState<Point>({ xAxis: undefined, yAxis: undefined });
  const [secondPointValue, setSecondPointValue] = useState<Point>({ xAxis: undefined, yAxis: undefined });
  const [thirdPointValue, setThirdPointValue] = useState<Point>({ xAxis: undefined, yAxis: undefined});
  const [triangleData, setTriangleData] = useState<ClassifiedTriangle>();
  const [showModal, setShowModal] = useState<boolean>(false);

  const { error, loading, sendRequest } = useApiRequest({
    reqType: 'POST',
    url: 'http://localhost:4000/api/triangles/classify',
    body: {
      p1: firstPointValue,
      p2: secondPointValue,
      p3: thirdPointValue
    }
  });

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const data = await sendRequest();

    if (data) {
      setTriangleData(data);
      setShowModal(true);
      clearHomepageInputState(setFirstPointValue, setSecondPointValue, setThirdPointValue);
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
              xAxisChangeHandler={event => setFirstPointValue({...firstPointValue, xAxis: formatInput(event.target.value)})}
              yAxisChangeHandler={event => setFirstPointValue({...firstPointValue, yAxis: formatInput(event.target.value)})}
            />
          </div>
          <div className="form-group">
            <FormInputGroup
              pointValue={secondPointValue}
              xAxisChangeHandler={event => setSecondPointValue({...secondPointValue, xAxis: formatInput(event.target.value)})}
              yAxisChangeHandler={event => setSecondPointValue({...secondPointValue, yAxis: formatInput(event.target.value)})}
            />
          </div>
          <div className="form-group">
            <FormInputGroup
              pointValue={thirdPointValue}
              xAxisChangeHandler={event => setThirdPointValue({...thirdPointValue, xAxis: formatInput(event.target.value)})}
              yAxisChangeHandler={event => setThirdPointValue({...thirdPointValue, yAxis: formatInput(event.target.value)})}
            />
          </div>
          <CustomButton
            isDisabled={!isPointInputValid(firstPointValue, secondPointValue, thirdPointValue)}
            text="Classify Triangle"
          />
          {
            error && <ErrorDisplay>{error!}</ErrorDisplay>
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
