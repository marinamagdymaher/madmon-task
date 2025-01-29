import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import useUnitsStore from "../zuztand/useUnitsStore";
import axios from "axios";

const API_URL = "https://678acd27dd587da7ac2b7246.mockapi.io/api/v1/units";

// const fetchUnits = async () => {
//   const response = await fetch(
//     API_URL
//   );
//   if (!response.ok) throw new Error("Error Fetch Data");
//   return response.json();
// };

// export default fetchUnits;

const fetchUnits = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error(
      "Error Fetching Units:",
      error.response?.data || error.message
    );
    throw new Error("Failed to fetch units");
  }
};

export default fetchUnits;

// Delete Unit (DELETE)
export const deleteUnit = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(
      "Error Fetching Units:",
      error.response?.data || error.message
    );
    throw new Error("Failed to fetch units");
  }
};

export const useFetchUnits = () => {
  const setUnits = useUnitsStore((state) => state.setUnits);

  return useQuery({
    queryKey: ["units"],
    queryFn: fetchUnits,
    onSuccess: (data) => {
      setUnits(data);
    },
  });
};

// Custom Hook to Delete Unit
export const useDeleteUnit = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteUnit,
    onSuccess: () => {
      queryClient.invalidateQueries(["units"]); // Refresh the unit list
    },
  });
};
