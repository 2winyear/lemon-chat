import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './routes/ErrorPage.jsx';
import Personals from './routes/Personals.jsx';
import Root from './routes/Root.jsx';
import Lemon from './routes/Lemon.jsx';
import Chat from './routes/Chat.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  // {
  //   path: "/chat",
  //   element: <App />,
  //   errorElement: <ErrorPage />,
  // },
  {
    path: "/personals",
    element: <Personals />
  },
  {
    path: "/lemon",
    element: <Chat />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/chat",
    element: <Chat />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
