import axios from 'axios';
import { useQueries } from 'react-query';

const fetchRandomMans = (rmId) => {
  return axios.get(`http://localhost:4000/random-mans/${rmId}`);
};
export const DynamicParallel = ({ rmIds }) => {
  const queryResults = useQueries(
    rmIds.map((id) => {
      return {
        queryKey: ['random-man', id],
        queryFn: () => fetchRandomMans(id),
      };
    })
  );
  console.log({ queryResults });
  return <div></div>;
};
