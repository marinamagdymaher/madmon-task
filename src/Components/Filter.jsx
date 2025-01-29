import * as Tooltip from "@radix-ui/react-tooltip";

export default function Filter({ setSortedData, units }) {
  const sortByDate = () => {
    console.log("sortByDate");
    if (!units) return; // Fallback if data isn't available
    setSortedData(
      [...units].sort((a, b) => new Date(b.date) - new Date(a.date))
    );
  };

  const sortByPrice = () => {
    console.log("sortByPrice");
    if (!units) return; // Fallback if data isn't available
    setSortedData(
      [...units].sort((a, b) => parseFloat(a.price) - parseFloat(b.price))
    );
  };
  return (
    <div>
      <Tooltip.Provider delayDuration={200}>
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <button
              onClick={() => {
                sortByDate();
              }}
            >
              <img
                src="filter icon.png"
                alt="filter icon.png"
                className="mx-2"
              />
            </button>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content
              className="bg-grey-900 text-white px-2 py-1 text-sm rounded-md shadow-lg"
              side="top"
              align="center"
            >
              Sort By Date
              <Tooltip.Arrow className="fill-gray-900" />
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </Tooltip.Provider>
      <Tooltip.Provider delayDuration={200}>
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <button
              onClick={() => {
                sortByPrice();
              }}
            >
              <img src="Frame 49191.png" alt="Frame 49191.png" />
            </button>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content
              className="bg-grey-900 text-white px-2 py-1 text-sm rounded-md shadow-lg"
              side="top"
              align="center"
            >
              Sort By Price
              <Tooltip.Arrow className="fill-gray-900" />
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </Tooltip.Provider>
    </div>
  );
}
