import { useQuery } from 'react-query';
import axios from 'axios';
import React from 'react';

const fetchRandomMans = () => {
  return axios.get('http://localhost:4000/random-mans');
};

const fetchFriends = () => {
  return axios.get('http://localhost:4000/friends');
};

export const ParallelQueriesPage = () => {
  const { data: randoms } = useQuery('randoms', fetchRandomMans);
  const { data: friends } = useQuery('friends', fetchFriends);
  return <div>ParallelQueriesPage</div>;
};
