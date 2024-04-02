import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../Shared/MainLayout";
import Home from "../Home/Home";
import Login from "../Authentication/Login";
import Registration from "../Authentication/Registration";
import SearchInOffers from "../Pages/SearchInOffers";
import SeeAll from "../Pages/SeeAll";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      {
        path: "/searchInOffers",
        element: <SearchInOffers></SearchInOffers>,
      },
      {
        path: "/seeAll",
        element: <SeeAll></SeeAll>,
      },
    ],
  },
]);
const Routes = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <RouterProvider router={router} />
    </div>
  );
};

export default Routes;
