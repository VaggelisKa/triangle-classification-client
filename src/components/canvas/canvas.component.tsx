import React, { FC, useEffect, useRef } from 'react';
import { Point } from '../../models/Point';
import './canvas.component.scss';

interface Props {
  p1: Point,
  p2: Point,
  p3: Point
}

const Canvas: FC<Props> = ({ p1, p2, p3 }: Props) => {
  const canvasRef = useRef(null);

  const draw = (ctx: any) => {
    ctx.fillStyle = '#00000';

    ctx.beginPath();
    ctx.lineWidth = 4;
    ctx.moveTo(p1.xAxis! + 200, p1.yAxis! + 200);
    ctx.lineTo(p2.xAxis! + 200, p2.yAxis! + 200);
    ctx.lineTo(p3.xAxis! + 200, p3.yAxis! + 200);
    ctx.closePath();
    ctx.stroke();
  };

  useEffect(() => {
    const canvas: any = canvasRef.current;
    const context = canvas?.getContext('2d');

    draw(context);
  }, [draw]);

  return (
    <canvas ref={canvasRef} width={370} height={500} style={{width: '100%', textAlign: 'center'}} />
  );
};

export default Canvas;
