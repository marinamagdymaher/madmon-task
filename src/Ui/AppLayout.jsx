import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import { useFetchUnits } from "../api/FetchUnits";

// eslint-disable-next-line react/prop-types
export default function AppLayout({ children }) {
  const { isLoading, isError, error } = useFetchUnits();

  // Loading and Error Handling
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <Header />
      <main>{children ?? <Outlet />}</main>
      <Footer />
    </div>
  );
}
