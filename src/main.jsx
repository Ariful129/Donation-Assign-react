import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root from './components/Root/Root';
import Home from './components/Home/Home';
import ErrorPage from './components/ErrorPage/ErrorPage';
import CardDetails from './components/CardDetails/CardDetails';
import Donation from './components/Donation/Donation';
import Statistics from './components/Statistics/Statistics';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/card/:id',
        element:<CardDetails></CardDetails>,
        loader: ()=>fetch('/donation.json')
      },
      {
        path:'/donation',
        element:<Donation></Donation>,
        loader:()=>fetch('/donation.json')
      },
      {
         path:'/statistic',
         element:<Statistics></Statistics>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
