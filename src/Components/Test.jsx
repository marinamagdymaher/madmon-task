import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchUnits = async () => {
  const response = await axios.get('https://678acd27dd587da7ac2b7246.mockapi.io/api/v1/units');
  return response.data;
};

export const useUnits = () => {
  return useQuery(['units'], fetchUnits, {
    staleTime: 300000, // Optional: cache data for 5 minutes
    refetchOnWindowFocus: false, // Prevent refetching on window focus
  });
};
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

const deleteUnit = async (id) => {
  await axios.delete(`https://678acd27dd587da7ac2b7246.mockapi.io/api/v1/units/${id}`);
};

export const useDeleteUnit = () => {
  const queryClient = useQueryClient();

  return useMutation(deleteUnit, {
    onSuccess: () => {
      // Invalidate and refetch units after a successful delete
      queryClient.invalidateQueries(['units']);
    },
    onError: (error) => {
      console.error('Error deleting unit:', error);
    },
  });
};
import React from 'react';
import { useUnits, useDeleteUnit } from './hooks'; // Adjust the import path

const UnitList = () => {
  const { data: units, isLoading, isError } = useUnits();
  const { mutate: deleteUnit } = useDeleteUnit();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading units.</div>;

  return (
    <div>
      <h1>Units</h1>
      <ul>
        {units.map((unit) => (
          <li key={unit.id}>
            {unit.name}
            <button onClick={() => deleteUnit(unit.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UnitList;
