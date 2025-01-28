import Button from "./Button"; // Ensure Button component is imported
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { formatDate, formattedPrice, getStatusColor } from "../Utils/Utils";
// import { useDeleteUnit } from "../api/DeleteUnit";

export default function Cards({ item }) {
  const createdPrice = formattedPrice(item?.price);
  const createdDate = formatDate(item?.createdAt);
  const status = item?.status;
  console.log(status);
  const bgColor = getStatusColor(status);
  const isSold = status === "sold";
  const cardOpacity = isSold ? "opacity-50" : "opacity-100";

  // const { mutate: deleteUnit } = useDeleteUnit();
  // const handleDelete = (id) => {
  //   deleteUnit(id);
  // };
  return (
    <div
      className={`bg-grey-50 ${cardOpacity} flex flex-col md:flex-row gap-5 rounded shadow-md mb-4`}
    >
      <div className="w-full md:w-1/3 ">
        <img
          src={item.coverUrl}
          alt="Property overview"
          // h-dvh
          className="w-full h-full object-cover rounded-l"
        />
      </div>
      <div className="flex-1 py-5 px-3">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-3">
          <h3 className="text-2xl font-bold">{item.name}</h3>
          {status && (
            <p className={`${bgColor} text-white rounded px-2 py-1`}>
              {status}
            </p>
          )}

          <p className="text-red-500 font-bold text-3xl">{createdPrice} EGP</p>
        </div>
        <h4 className="font-semibold mb-2">{item.address}</h4>
        <div className="flex gap-4 mb-4">
          <div className="flex items-center gap-2">
            <div className="border border-blue-500 p-2 rounded">
              <img src="/room.png" alt="Room icon" className="rouneded-l" />
            </div>
            <h5>{item.bedroomsNumber}</h5>
          </div>
          <div className="flex items-center gap-2">
            <div className="border border-blue-500 p-2 rounded">
              <img src="/bath.png" alt="Bathroom icon" />
            </div>
            <h5>{item.bathroomsNumber}</h5>
          </div>
          <div className="flex items-center gap-2">
            <div className="border border-blue-500 p-2 rounded">
              <img src="/square.png" alt="Square footage icon" />
            </div>
            <h5>{item.space}</h5>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <Button
            buttonTitle="Assign a broker"
            colorBgButton="bg-white"
            colorText="text-blue-500"
          />
          <div className="text-left">
            <h6 className="font-semibold">Added</h6>
            <span>{createdDate}</span>
          </div>
        </div>
      </div>
      <button
        className="bg-red-500 hover:text-red-700 text-white p-5 opacity-50 rounded-r"
      >
        <FontAwesomeIcon icon={faTrash} className="text-xl" />
      </button>
    </div>
  );
}
