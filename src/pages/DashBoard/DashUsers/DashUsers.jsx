import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaEdit, FaTrash, FaUserAlt } from 'react-icons/fa';
import { toast, Toaster } from 'react-hot-toast';

const DashUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:5000/users')
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    const handleMakeAdmin = user => {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    toast.success(`${user.name} is now an admin`);
                    setUsers(prevUsers => {
                        return prevUsers.map(prevUser => {
                            if (prevUser._id === user._id) {
                                return { ...prevUser, role: 'admin' };
                            }
                            return prevUser;
                        });
                    });
                }
            })
    }
    return (
        <div>
            <Toaster />
            <h2 className="text-3xl font-bold text-center mb-6">User List</h2>
            <table className="w-full min-w-full divide-y divide-gray-200">
                <thead className=''>
                    <tr>
                        <th className="py-3 px-6 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        </th>
                        <th className="py-3 px-6 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Name
                        </th>
                        <th className="py-3 px-6 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Email
                        </th>
                        <th className="py-3 px-6 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Role
                        </th>
                        <th className="py-3 px-6 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {users.map((user, index) => (
                        <tr key={user._id}>
                            <td className="py-4 px-6">{index + 1}</td>
                            <td className="py-4 px-6">{user.name}</td>
                            <td className="py-4 px-6">{user.email}</td>
                            <td className="py-4 px-6">
                                <button className="flex items-center">
                                    {user.role === 'admin' ? 'admin' : <button onClick={() => handleMakeAdmin(user)}><FaUserAlt className="mr-1" /></button>}
                                </button>
                            </td>
                            <td className="py-4 px-6">
                                <button className="flex items-center">
                                    <FaTrash className="mr-1" />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DashUsers;
