import "./App.css";
import Home from "./Ui/Home";
import ErrorPage from "./Ui/ErrorPage";
import Contact from "./Pages/Contacts";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./Ui/AppLayout";
import About from "./Pages/About";
import Favorite from "./Pages/Favorite";
import Units from "./Pages/Units";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      errorElement: (
        <AppLayout>
          <ErrorPage />
        </AppLayout>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "contacts",
          element: <Contact />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "favorite",
          element: <Favorite />,
        },
        {
          path: "units",
          element: <Units />,
        },
      ],
    },
  ]);

  const client = new QueryClient({
    defaultOptions: {
      mutations: {
        onError: (error) => {
          console.error("Global Mutation Error:", error.message);
        },
      },
    },
  });
  
  return (
    <QueryClientProvider client={client}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
