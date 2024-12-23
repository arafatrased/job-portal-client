import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import JobDetails from "../pages/JobDetails/JobDetails";
import PrivateRoute from "./PrivateRoute";
import JobApply from "../pages/JobApply/JobApply";
import MyApplications from "../pages/myApplications/MyApplications";
import AddJob from "../pages/addJob/AddJob";
import MyPostedJobs from "../pages/MyPostedJobs/MyPostedJobs";
import ViewApplications from "../viewApplications/viewApplications";



  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <h2>Page Not found</h2>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
        },
        {
          path: 'register',
          element: <Register></Register>
        },
        {
          path: 'login',
          element: <Login></Login>

        },
        {
          path: '/jobs/:id',
          element:<PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
          loader: ({ params }) => fetch(`http://localhost:5000/jobs/${params.id}`)
        },
        {
          path: '/jobApply/:id',
          element: <PrivateRoute><JobApply></JobApply></PrivateRoute>
        },
        {
          path: 'myApplications',
          element: <PrivateRoute><MyApplications></MyApplications></PrivateRoute>
        },
        {
          path: 'addJob',
          element: <PrivateRoute><AddJob></AddJob></PrivateRoute>
        },
        {
          path: 'myPostedJobs',
          element: <PrivateRoute><MyPostedJobs></MyPostedJobs></PrivateRoute>
        },
        {
          path: 'viewApplications/:job_id',
          element: <PrivateRoute><ViewApplications></ViewApplications></PrivateRoute>,
          loader: ({ params }) => fetch(`http://localhost:5000/job-applications/jobs/${params.job_id}`)
        },

      ]
    },
  ]);

export default router;