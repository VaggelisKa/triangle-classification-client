import { Point } from '../models/Point';

const clearHomepageInputState = (
    func1: React.Dispatch<React.SetStateAction<Point>>,
    func2: React.Dispatch<React.SetStateAction<Point>>,
    func3: React.Dispatch<React.SetStateAction<Point>>
) => {
  const clearPointConfig: Point = {
    xAxis: undefined,
    yAxis: undefined
  };

  func1(clearPointConfig);
  func2(clearPointConfig);
  func3(clearPointConfig);
};

export default clearHomepageInputState;
