
export default function Sidebar() {
  const content = [
    { title: "My Accounts" },
    { title: "My Units" },
    { title: "My Reservation" },
  ];

  return (
    <div className="md:w-1/4 py-9">
      <ul className="space-y-2">
        {content.map((item, index) => (
          <li
            key={index}
            className={` bg-grey-50 text-blue-500 font-semibold px-4 py-2 rounded-md cursor-pointer flex justify-between items-center gap-2 `}
          >
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
