export const formattedPrice = (price) => {
  const newPrice = price / 1000;
  return newPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export function formatDate(dateString) {
  const date = new Date(dateString); // Parse the date string into a Date object

  const day = date.getDate().toString().padStart(2, "0"); // Get day and ensure 2 digits
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Get month (0-indexed) and ensure 2 digits
  const year = date.getFullYear(); // Get year

  return `${day}/${month}/${year}`; // Format as DD/MM/YYYY
}

export const getStatusColor = (status) => {
  if (status === "reserved") return "bg-green-500";
  if (status === "pending") return "bg-blue-500";
  if (status === "rejected") return "bg-red-200";
  if (status === "sold") return "bg-grey-400";
  return "bg-gray-200"; // Default background color
};
