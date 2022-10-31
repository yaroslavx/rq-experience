import axios from 'axios';
import { useQuery } from 'react-query';

const fetchRandomMans = () => {
  return axios.get('http://localhost:4000/superheroes1');
};

export const RQRandomMansPage = () => {
  const onSuccess = (data) => {
    console.log('Fetching is good', data);
  };
  const onError = (err) => {
    console.log('Fetching is not good', err);
  };
  const { isLoading, data, isError, error, isFetching, refetch } = useQuery(
    'random-mans',
    fetchRandomMans,
    {
      enabled: false,
      onSuccess,
      onError,
    }
  );

  return (
    <>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <>
          <h2>React Query Random Mans Pages</h2>
          <button onClick={refetch}>Fetch Random Mans</button>
          {data?.data.map((man) => (
            <div key={man.name}>{man.name}</div>
          ))}
        </>
      )}
    </>
  );
};
