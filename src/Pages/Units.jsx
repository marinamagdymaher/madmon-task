import Button from "../Components/Button";
import Cards from "../Components/Cards";
import { useUnitsStore } from "../zuztand/useUnitsStore";
import { useFetchUnits } from "../api/FetchUnits";

export default function Units() {
  const units = useUnitsStore((state) => state.units);
  console.log(units);
  const { data } = useFetchUnits();
  return (
    <div className="text-left">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <h5 className="text-3xl font-semibold pb-5">My Units</h5>
        <div className="flex items-center">
          <div className="flex p-2">
            <button>
              <img
                src="filter icon.png"
                alt="filter icon.png"
                className="mx-2"
              />
            </button>
            <button>
              <img src="Frame 49191.png" alt="Frame 49191.png" />
            </button>
          </div>
          <Button buttonTitle="+ Add Units" colorBgButton="bg-blue-500" />
        </div>
      </div>
      {/* Render Cards */}
      <div>
        {data?.map((item) => (
          <Cards key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
