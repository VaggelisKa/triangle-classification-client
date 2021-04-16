import { Point } from '../models/Point';

const isPointInputValid = (p1: Point, p2: Point, p3: Point): boolean => (
  !!p1.xAxis && !!p1.yAxis && !!p1.xAxis && !!p1.yAxis && !!p1.xAxis && !!p1.yAxis
);

export default isPointInputValid;
