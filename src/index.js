import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MainPage from './pages/MainPage';
import AboutPage from './pages/AboutPage';
import ErrorPage from './pages/ErrorPage';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    errorElement: <ErrorPage />
  },
  {
    path: '/about',
    element: <AboutPage />
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
