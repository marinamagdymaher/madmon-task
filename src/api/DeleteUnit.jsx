import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useUnitsStore } from "../zuztand/useUnitsStore";


const deleteUnit = async (id) => {
  const response = await fetch(
    `https://678acd27dd587da7ac2b7246.mockapi.io/api/v1/units/${id}`,
    {
      method: "DELETE",
    }
  );
  if (!response.ok) throw new Error("Failed to delete unit");
  return id;
};

export default deleteUnit;

export const useDeleteUnit = () => {
  const queryClient = useQueryClient();
  const removeUnit = useUnitsStore((state) => state.removeUnit);

  return useMutation(deleteUnit, {
    onSuccess: (id) => {
      removeUnit(id);
      queryClient.invalidateQueries(["units"]); // Refetch units after deletion
    },
  });
};
