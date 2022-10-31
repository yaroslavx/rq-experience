import axios from 'axios';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { useRandomMansData } from '../hooks/useRandomMansData';

export const RQRandomMansPage = () => {
  const onSuccess = (data) => {
    console.log('Fetching is good', data);
  };
  const onError = (err) => {
    console.log('Fetching is not good', err);
  };
  const { isLoading, data, isError, error, isFetching, refetch } =
    useRandomMansData(onSuccess, onError);

  return (
    <>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <>
          <h2>React Query Random Mans Pages</h2>
          <button onClick={refetch}>Fetch Random Mans</button>
          {data?.data.map((man) => (
            <div key={man.id}>
              <Link to={`/rq-random-mans/${man.id}`}>{man.name}</Link>
            </div>
          ))}
          {/* {data.map((name) => (
            <div key={name}>{name}</div>
          ))} */}
        </>
      )}
    </>
  );
};
