import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ErrorPage from './routes/ErrorPage.jsx';
import Personals from './routes/Personals.jsx';
import Root from './routes/Root.jsx';
import Lemon from './routes/Lemon.jsx';
import Chat from './routes/Chat.jsx';
import { Provider } from 'react-redux';
import { api } from "./api/api.js"
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <ErrorPage />,
//   },
  // {
  //   path: "/chat",
  //   element: <App />,
  //   errorElement: <ErrorPage />,
  // },
  // {
  //   path: "/personals",
  //   element: <Personals />
  // },
  // {
  //   path: "/lemon",
  //   element: <Chat />,
  //   errorElement: <ErrorPage />,
  // },
  // {
  //   path: "/chat",
  //   element: <Chat />,
  //   errorElement: <ErrorPage />,
  // },
// ]);

export const store = configureStore({
  reducer: { [api.reducerPath]: api.reducer },
  middleware: (getDefault) => getDefault().concat(api.middleware),
});
setupListeners(store.dispatch);

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <App />
    </Provider>
)
