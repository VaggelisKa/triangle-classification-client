import React, { FC, useEffect, useState } from 'react';
import './history-page.styles.scss';
import axios from 'axios';

import { ClassifiedTriangle } from '../../models/ClassifiedTriangle';
import Spinner from '../../components/spinner/spinner.component';
import Datatable from '../../components/datatable/datatable.component';

const HistoryPage: FC = () => {
  const [listOfTriangles, setListOfTriangles] = useState<ClassifiedTriangle[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState(null);

  const getListFromDB = async () => {
    try {
      setError(null);
      setLoading(true);

      const res = await axios.get('http://localhost:4000/api/triangles/pastSearches');

      setLoading(false);

      if (res.data) {
        setListOfTriangles(res.data);
      }
    } catch (error) {
      setLoading(false);
      setError(error.response?.data?.message || 'Unexpected Error, try refreshing');
    }
  };

  useEffect(() => {
    getListFromDB();
  }, []);

  return (
    loading ? <Spinner /> : (
      listOfTriangles.length > 0 ? (
        <div className="data-table">
          <Datatable listOfTriangles={listOfTriangles} />
        </div>
      ) : (
        <p
          style={{textAlign: 'center', paddingTop: 50}}
        >
          No searches available to display! Try adding some...
        </p>
      )
    )
  );
};

export default HistoryPage;
