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
import Enroll from './pages/DashBoard/Enroll/Enroll';
import AddCls from './pages/DashBoard/Instructor/AddCls/AddCls';
import ClsInstructor from './pages/DashBoard/Instructor/ClsInstructor/ClsInstructor';
import EachClass from './components/EachClass/EachClass';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import PrivateRoute from './Routes/PrivateRoute';

const queryClient = new QueryClient();
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
    path: '/eachcls',
    element: <EachClass />,
  },
  {
    path: '/registration',
    element: <Registration />,
  },
  {
    path: '/dashboard',
    element: <PrivateRoute><DashBoard /></PrivateRoute>,
    children: [
      {
        path: 'users', // Remove the leading slash to make it a relative path
        element: <DashUsers />,
      },
      {
        path: 'class', // Remove the leading slash to make it a relative path
        element: <DashClass />,
      },
      {
        path: 'myclass', // Remove the leading slash to make it a relative path
        element: <StudentClass />,
      },
      {
        path: 'payment',
        element: <Payment />,
      },
      
      {
        path: 'enroll', // Remove the leading slash to make it a relative path
        element: <Enroll />,
      },
      {
        path: 'addcls', // Remove the leading slash to make it a relative path
        element: <AddCls />,
      },
      {
        path: 'instructorcls', // Remove the leading slash to make it a relative path
        element: <ClsInstructor />,
      },
    ],
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
