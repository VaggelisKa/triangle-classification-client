import { Point } from '../models/Point';

const isPointInputValid = (p1: Point, p2: Point, p3: Point): boolean => (
  (p1.xAxis !== undefined && p1.yAxis !== undefined ) &&
  (p2.xAxis !== undefined && p2.yAxis !== undefined ) &&
  (p3.xAxis !== undefined && p3.yAxis !== undefined )
);

export default isPointInputValid;
