import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Main/Main.jsx';
import Error from './pages/Error/Error';
import Instructor from './pages/Instructor/Instructor';
import Allclass from './pages/Allclass/Allclass';
import Login from './pages/Login/Login';
import Registration from './pages/Registration/Registration';
import AuthProvider from './providers/AuthProvider';

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
    path: '/instructors/:id',
    element: <Allclass />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/registration',
    element: <Registration />
  },
  {
    path: '*',
    element: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>
);
