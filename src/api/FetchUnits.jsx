import { useQuery } from "@tanstack/react-query";
import { useUnitsStore } from "../zuztand/useUnitsStore";

const fetchUnits = async () => {
  const response = await fetch(
    "https://678acd27dd587da7ac2b7246.mockapi.io/api/v1/units"
  );
  if (!response.ok) throw new Error("Error Fetch Data");
  return response.json();
};

export default fetchUnits;


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
