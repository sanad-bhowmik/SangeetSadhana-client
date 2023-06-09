import React from 'react';
import useAdmin from '../../../hooks/useAdmin';
import { useQuery } from "@tanstack/react-query";

const AdminDashboard = () => {
    const { user } = useAuth();
    // const [axiosSecure] = useAxiosSecure();
    const [isAdmin, isAdminLoading] = useAdmin(); // Use the useAdmin hook to check if the user is an admin
  
    const { data: stats = {} } = useQuery({
      queryKey: ['admin-stats'],
      queryFn: async () => {
        const res = await axiosSecure('/admin-stats');
        return res.data;
      }
    });
  
    const { data: chartData = [] } = useQuery({
      queryKey: ['chart-data'],
      queryFn: async () => {
        const res = await axiosSecure('/order-stats');
        return res.data;
      }
    });
  
    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
  
    return (
        <div>
            
        </div>
    );
};

export default AdminDashboard;