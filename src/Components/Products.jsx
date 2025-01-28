import { useQuery } from "@tanstack/react-query";

export default function Products() {
  const fetchUnits = async () => {
    const response = await fetch(
      "https://678acd27dd587da7ac2b7246.mockapi.io/api/v1/units"
    );
    if (!response.ok) throw new Error("Error Fetch Data");
    return response.json();
  };
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["units"],
    queryFn: fetchUnits,
  });
  data?.map((unit) => console.log(unit.name));
  // console.log(units)
  if (isLoading) return <p>Loading...</p>; // Handle loading state
  if (isError) return <p>Error: {error.message}</p>; // Handle error state
  return (
    <div>
      
      { data.map((unit, i) => {
        console.log(unit.name);
        return <p key={i}>{unit.name}</p>;
      })}
    </div>
  );
}
