import { useEffect, useState } from "react";
import Button from "../Components/Button";
import Cards from "../Components/Cards";
import { useDeleteUnit, useFetchUnits } from "../api/units";

import Filter from "../Components/Filter";

export default function Units() {
  const { data: units } = useFetchUnits();
  const { mutate: removeUnit } = useDeleteUnit();
  const [sortedData, setSortedData] = useState([]);
  console.log(sortedData);
  useEffect(() => {
    if (units) {
      setSortedData([...units]); // Set initial data
    }
  }, [units]);

  // Handle Delete
  const handleDelete = (id) => {
    console.log(id);
    if (window.confirm("Are you sure you want to delete this unit?")) {
      removeUnit(id);
      console.log("removeUnit", id);
    }
  };

  return (
    <div className="text-left">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <h5 className="text-3xl font-semibold pb-5">My Units</h5>
        <div className="flex items-center">
          <div className="flex p-2">
            {/* Tooltip Wrapper */}
            <Filter setSortedData={setSortedData} units={units} />
          </div>
          <Button buttonTitle="+ Add Units" colorBgButton="bg-blue-500" />
        </div>
      </div>
      {/* Render Cards */}
      <div>
        {sortedData?.map((item) => (
          <Cards key={item.id} item={item} handleDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
}
