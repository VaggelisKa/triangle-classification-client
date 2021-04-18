import React, { FC, useState } from 'react';
import './datatable.styles.scss';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ClassifiedTriangle } from '../../models/ClassifiedTriangle';
import { FaEye } from 'react-icons/fa';
import Modal from '../modal/modal.component';

interface Props {
  listOfTriangles: ClassifiedTriangle[]
}

const Datatable: FC<Props> = ({ listOfTriangles }: Props) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [triangleData, setTriangleData] = useState<ClassifiedTriangle>();

  const formatPointsP1 = (rowData: any) => {
    const {xAxis, yAxis} = rowData.p1;

    return `(${xAxis}, ${yAxis})`;
  };

  const formatPointsP2 = (rowData: any) => {
    const {xAxis, yAxis} = rowData.p2;

    return `(${xAxis}, ${yAxis})`;
  };

  const formatPointsP3 = (rowData: any) => {
    const {xAxis, yAxis} = rowData.p3;

    return `(${xAxis}, ${yAxis})`;
  };

  const openModal = (data: ClassifiedTriangle) => {
    setShowModal(true);
    setTriangleData(data);
  };

  const visualizeRowBody = (rowData: any) => {
    return (
      <>
        <button
          type="button"
          className="visualize-button"
          style={{backgroundColor: 'inherit', border: 'none', cursor: 'pointer'}}
          onClick={() => openModal(rowData)}
        >
          <FaEye size="25" color="white" />
        </button>
      </>
    );
  };

  return (
    showModal ? (
      <Modal
        triangle={triangleData}
        isVisible={showModal}
        setShowModal={setShowModal}
      />
    ) : (
      <div className="datatable-wrapper">
        <div className="card">
          <DataTable value={listOfTriangles}>
            <Column field="p1" body={formatPointsP1} header="P1" />
            <Column field="p2" body={formatPointsP2} header="P2" />
            <Column field="p3" body={formatPointsP3} header="P3" />
            <Column field="triangleClass" header="CLASS" />
            <Column header="VISUALIZE" body={visualizeRowBody} />
          </DataTable>
        </div>
      </div>
    )
  );
};

export default Datatable;
