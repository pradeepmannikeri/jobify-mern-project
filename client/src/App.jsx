import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Landing,
  Register,
  Login,
  DashboardLayout,
  Error,
  HomeLayout,
  AllJobs,
  Stats,
  Admin,
  AddJob,
  EditJob,
  Profile,
} from "./pages";
import { registerActionPack } from "./pages/Register";
import { LoginActionPack } from "./pages/Login";
import { loaderActionPack } from "./pages/DashboardLayout";
import { addJobActionPack } from "./pages/AddJob";
import { loader as allJobsLoader } from "./pages/AllJobs";
import { editAction, editLoader } from "./pages/EditJob";
import { deleteAction } from "./pages/DeleteJob";
import { adminLoader } from "./pages/Admin";
import { profileActionPack } from "./pages/Profile";
import { statsLoader } from "./pages/Stats";

// Dark theme
const checkDefaultTheme = () => {
  const isDarkTheme = localStorage.getItem("darkTheme") === "true";
  document.body.classList.toggle("dark-theme", isDarkTheme);
  return isDarkTheme;
};

const isDarkThemeEnabled = checkDefaultTheme();

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "register",
        element: <Register />,
        action: registerActionPack,
      },
      {
        path: "login",
        element: <Login />,
        action: LoginActionPack,
      },
      {
        path: "dashboard",
        element: <DashboardLayout isDarkThemeEnabled={isDarkThemeEnabled} />,
        loader: loaderActionPack,
        children: [
          {
            index: true,
            element: <AddJob />,
            action: addJobActionPack,
          },
          {
            path: "stats",
            element: <Stats />,
            loader: statsLoader,
          },
          {
            path: "all-jobs",
            element: <AllJobs />,
            loader: allJobsLoader,
          },
          {
            path: "admin",
            element: <Admin />,
            loader: adminLoader,
          },
          {
            path: "edit-job/:id",
            element: <EditJob />,
            loader: editLoader,
            action: editAction,
          },
          {
            path: "delete-job/:id",
            action: deleteAction,
          },
          {
            path: "profile",
            element: <Profile />,
            action: profileActionPack,
          },
        ],
      },
    ],
    errorElement: <Error />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
