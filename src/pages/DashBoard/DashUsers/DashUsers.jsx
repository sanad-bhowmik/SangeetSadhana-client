import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaEdit, FaTrash, FaUserAlt } from 'react-icons/fa';
import { toast, Toaster } from 'react-hot-toast';

const DashUsers = () => {
    const [users, setUsers] = useState([]);
    const [selectedOption, setSelectedOption] = useState('');

    useEffect(() => {
        axios
            .get('https://sangeet-sadhana-server.vercel.app/users')
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    const handleMakeAdmin = user => {
        fetch(`https://sangeet-sadhana-server.vercel.app/users/admin/${user._id}`, {
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
            .catch(error => {
                console.log(error);
            });
    };

    const handleMakeInstructor = user => {
        fetch(`https://sangeet-sadhana-server.vercel.app/users/instructor/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    toast.success(`${user.name} is now an instructor`);
                    setUsers(prevUsers => {
                        return prevUsers.map(prevUser => {
                            if (prevUser._id === user._id) {
                                return { ...prevUser, role: 'instructor' };
                            }
                            return prevUser;
                        });
                    });
                }
            })
            .catch(error => {
                console.log(error);
            });
    };

    const handleDropdownChange = e => {
        setSelectedOption(e.target.value);
    };

    const handleRoleChange = (user, role) => {
        if (role === 'admin') {
            handleMakeAdmin(user);
        } else if (role === 'instructor') {
            handleMakeInstructor(user);
        }
    };
    const handleDeleteUser = (user) => {
        fetch(`https://sangeet-sadhana-server.vercel.app/users/${user._id}`, {
            method: 'DELETE',
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount) {
                    toast.success(`${user.name} has been deleted`);
                    setUsers((prevUsers) =>
                        prevUsers.filter((prevUser) => prevUser._id !== user._id)
                    );
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div>
            <Toaster />
            <h2 className="text-3xl font-bold text-center mb-6">User List</h2>
            <table className="w-full min-w-full divide-y divide-gray-200">
                <thead className="">
                    <tr>
                        <th className="py-3 px-6 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
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
                                {user.role === 'admin' ? (
                                    'admin'
                                ) : user.role === 'instructor' ? (
                                    'instructor'
                                ) : (
                                    <div>
                                        <select
                                            className="px-2 py-1 border border-gray-300 rounded"
                                            value={selectedOption}
                                            onChange={handleDropdownChange}
                                        >
                                            <option value="">Select Role</option>
                                            <option value="admin">Admin</option>
                                            <option value="instructor">Instructor</option>
                                        </select>
                                        <button
                                            className="px-2 py-1 ml-2 bg-blue-500 text-white rounded"
                                            onClick={() => handleRoleChange(user, selectedOption)}
                                        >
                                            Go
                                        </button>
                                    </div>
                                )}
                            </td>
                            <td className="py-4 px-6">
                                <button
                                    className="flex items-center"
                                    onClick={() => handleDeleteUser(user)}
                                >
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
