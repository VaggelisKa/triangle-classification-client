import { useState } from 'react';
import axios, { Method } from 'axios';

interface HookParams {
  url: string,
  reqType: Method,
  body: any,
}

const useApiRequest = ({ url, reqType, body }: HookParams) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const sendRequest = async () => {
    try {
      setError(null);
      setLoading(true);

      const res = await axios({
        method: reqType,
        url,
        data: body
      });

      setLoading(false);

      return res.data;
    } catch (error) {
      setError(error.response?.data?.message || 'Something went wrong, try refreshing the page');
      setLoading(false);
    }
  };

  return { error, loading, sendRequest };
};

export default useApiRequest;
