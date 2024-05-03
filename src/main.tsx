import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LandingPage from './routes/Landing.tsx';
import Root from './routes/root.tsx';
import ErrorPage from './routes/ErrorPage.tsx';
import Venues from './routes/Venues.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <LandingPage/>
      },
      {
        path: "/sedes",
        element: <Venues/>
      },
      {
        path: "/informacion",
        element: <></>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
