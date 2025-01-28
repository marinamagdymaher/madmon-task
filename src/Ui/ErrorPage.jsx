import { NavLink, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <>
      <div
        id="error-page"
        className="flex flex-col justify-center items-center h-screen p-6 bg-grey-100"
      >     
        <h1 className="text-5xl font-bold mb-4">404 Not Found</h1>
        <p className="text-lg text-grey-700 mb-4">
          Your visited page was not found. You may return to the home page.
        </p>
        {error && (
          <p className="text-grey-500 mb-6">
            <i>{error.statusText || error.message}</i>
          </p>
        )}
        <NavLink
          to="/"
          className="bg-red-200 text-white px-6 py-3 rounded shadow-md"
        >
          Back to Home Page
        </NavLink>
      </div>
    </>
  );
}
