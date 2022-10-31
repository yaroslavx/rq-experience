import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';

const fetchByEmail = (email) => {
  console.log(email);
  return axios.get(`http://localhost:4000/users/${email}`);
};

const fetchSomeByDependencyId = (id) => {
  return axios.get(`http://localhost:4000/dependencies/${id}`);
};

const DependentQueryPage = ({ email }) => {
  const { data: user } = useQuery(['user', email], () => fetchByEmail(email));
  const dependency = user?.data.dependency;

  useQuery(
    ['dependencies', dependency],
    () => fetchSomeByDependencyId(dependency),
    {
      enabled: !!dependency,
    }
  );
  return <div>DependentQueryPage</div>;
};

export default DependentQueryPage;
