import React, { FC, useRef } from 'react';
import { animated, useSpring } from 'react-spring';
import './modal.styles.scss';
import { MdClose } from 'react-icons/md';
import { HiOutlineLightBulb } from 'react-icons/hi';
import Canvas from '../canvas/canvas.component';

interface Props {
  isVisible: boolean,
  setShowModal: any,
  triangle: any
}

const Modal: FC<Props> = ({isVisible, setShowModal, triangle}: Props) => {
  const modalRef = useRef(null);

  const animation = useSpring({
    config: {
      duration: 350,
    },
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? `translateY(0%)` : `translateY(-100%)`
  });

  const closeModal = (e: any) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  return (
    <>
      {
        isVisible ? (
          <div className="background-container" ref={modalRef} onClick={closeModal}>
            <animated.div style={animation}>
              <div className="modal-wrapper">
                <div className="modal-text">
                  <div className="pro-tip-text">
                    <p>
                      Pro Tip <span><HiOutlineLightBulb size="20" color="yellow" /></span>
                    </p>
                    <p className="pro-tip-subtitle">Try larger input numbers for better visualization results!</p>
                  </div>
                  <h2>{triangle?.triangleClass}</h2>
                  <pre>
                    <p>{`Point: (${triangle?.p1?.xAxis}, ${triangle?.p1?.yAxis})` }</p>
                    <p>{`Point: (${triangle?.p2?.xAxis}, ${triangle?.p2?.yAxis})` }</p>
                    <p>{`Point: (${triangle?.p3?.xAxis}, ${triangle?.p3?.yAxis})` }</p>
                  </pre>
                </div>
                <div className="modal-content">
                  <Canvas p1={triangle.p1} p2={triangle.p2} p3={triangle.p3} />
                </div>
                <MdClose onClick={() => setShowModal((prev: any) => !prev)} aria-label="Close Modal" className="close-icon" />
              </div>
            </animated.div>
          </div>
        ) : null
      }
    </>
  );
};

export default Modal;
