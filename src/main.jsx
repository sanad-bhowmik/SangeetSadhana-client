import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Main/Main.jsx';
import Error from './pages/Error/Error';
import Instructor from './pages/Instructor/Instructor';
import Allclass from './pages/Allclass/Allclass';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/instructor',
    element: <Instructor />,
  },
  {
    path: '/instructors/:teacherId',
    element: <Allclass />,
  },
  {
    path: '*',
    element: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
