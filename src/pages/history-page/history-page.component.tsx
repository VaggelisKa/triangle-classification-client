import React, { FC, useEffect, useState } from 'react';
import './history-page.styles.scss';

import { ClassifiedTriangle } from '../../models/ClassifiedTriangle';
import Spinner from '../../components/spinner/spinner.component';
import Datatable from '../../components/datatable/datatable.component';
import useApiRequest from '../../hooks/useApiRequest';
import ErrorDisplay from '../../components/error-display/error-display.component';

const HistoryPage: FC = () => {
  const [listOfTriangles, setListOfTriangles] = useState<ClassifiedTriangle[]>([]);
  const { error, loading, sendRequest } = useApiRequest({
    reqType: 'GET',
    url: 'http://localhost:4000/api/triangles/pastSearches',
    body: {}
  });

  const getListFromDB = async () => {
    const data = await sendRequest();

    if (data) {
      setListOfTriangles(data);
    }
  };

  useEffect(() => {
    getListFromDB();
  }, []);

  return (
    loading ? <Spinner /> : (
      listOfTriangles.length > 0 ? (
        <>
          <h3 style={{textAlign: 'center'}}>Past Search History</h3>
          <div className="data-table">
            <Datatable listOfTriangles={listOfTriangles} />
          </div>
        </>
      ) : (
        error ? <ErrorDisplay>{error!}</ErrorDisplay> : (
          <p
            style={{textAlign: 'center', paddingTop: 50}}
          >
            No searches available to display! Try adding some...
          </p>
        )
      )
    )
  );
};

export default HistoryPage;
