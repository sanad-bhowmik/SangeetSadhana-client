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
import DashBoard from './pages/DashBoard/DashBoard';
import DashUsers from './pages/DashBoard/DashUsers/DashUsers';
import DashClass from './pages/DashBoard/DashClass/DashClass';
import StudentClass from './pages/DashBoard/StudentClass/StudentClass';
import Payment from './pages/DashBoard/Payment/Payment';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()
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
    path: '/dashboard',
    element: <DashBoard />,
    children: [
      {
        path: '/dashboard/users',
        element: <DashUsers />
      },
      {
        path: '/dashboard/class',
        element: <DashClass />
      },
      {
        path: '/dashboard/myclass',
        element: <StudentClass />
      },
      {
        path: '/dashboard/payment',
        element: <Payment />
      }
    ]
  },
  {
    path: '*',
    element: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);
