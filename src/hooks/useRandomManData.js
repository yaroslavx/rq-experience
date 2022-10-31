import axios from 'axios';
import { useQuery, useQueryClient } from 'react-query';

const fetchRandomMan = ({ queryKey }) => {
  const id = queryKey[1];
  return axios.get(`http://localhost:4000/random-mans/${id}`);
};

export const useRandomManData = (id) => {
  const queryClient = useQueryClient();
  return useQuery(['random-man', id], fetchRandomMan, {
    initialData: () => {
      const man = queryClient
        .getQueryData('random-mans')
        ?.data?.find((man) => man.id === parseInt(id));

      if (man) {
        return {
          data: man,
        };
      } else {
        return undefined;
      }
    },
  });
};
