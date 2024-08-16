import axios from 'axios';
import { useEffect, useState } from 'react';
import { getUsername } from '../helper/helper';

// Set the base URL for axios
axios.defaults.baseURL = import.meta.env.VITE_SERVER_DOMAIN;

/** Custom hook for fetching data */
export default function useFetch(query) {
  const [data, setData] = useState({
    isLoading: false,
    apiData: undefined,
    status: null,
    serverError: null
  });

  useEffect(() => {
    const fetchData = async () => {
      setData(prev => ({ ...prev, isLoading: true, serverError: null }));

      try {
        const username = !query ? await getUsername() : '';
        const endpoint = !query ? `/api/user/${username}` : `/api/${query}`;

        console.log(`Fetching data from endpoint: ${endpoint}`); // Debug log

        const response = await axios.get(endpoint);
        const { data: responseData, status: responseStatus } = response;

        console.log(`Received response:`, responseData); // Debug log

        setData({
          isLoading: false,
          apiData: responseData,
          status: responseStatus,
          serverError: null
        });
      } catch (error) {
        console.error('Fetch error:', error); // Debug log
        setData({
          isLoading: false,
          apiData: undefined,
          status: null,
          serverError: error.response?.data?.message || error.message
        });
      }
    };

    fetchData();
  }, [query]);

  return [data, setData];
}
