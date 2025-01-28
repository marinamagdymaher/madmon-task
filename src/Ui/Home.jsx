import Units from "../Pages/Units";
import Sidebar from "../Components/Sidebar";

export default function Home() {
  return (
    <div className="px-5 py-10">
      <div className="flex flex-col md:flex-row mt-9 gap-4">
        <Sidebar />
        <div className="flex-1">
          <Units />
        </div>
      </div>
    </div>
  );
}
