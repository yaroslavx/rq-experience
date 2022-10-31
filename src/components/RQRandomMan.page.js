import React from 'react';
import { useParams } from 'react-router-dom';
import { useRandomManData } from '../hooks/useRandomManData';

const RQRandomManPage = () => {
  const { rmId } = useParams();
  const { data, isLoading, isError, error } = useRandomManData(rmId);
  console.log(data);
  return (
    <>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <>
          <h2>React Query Random Man Pages</h2>
          {data?.data.name} {data?.data.alterEgo}
        </>
      )}
    </>
  );
};

export default RQRandomManPage;
