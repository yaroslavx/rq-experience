import axios from 'axios';
import { useQuery } from 'react-query';

const fetchRandomMans = () => {
  return axios.get('http://localhost:4000/random-mans');
};

export const useRandomMansData = (onSuccess, onError) => {
  return useQuery('random-mans', fetchRandomMans, {
    onSuccess,
    onError,
    // select: (data) => {
    //   const MansNames = data.data.map((man) => man.name);
    //   return MansNames;
    // },
  });
};
