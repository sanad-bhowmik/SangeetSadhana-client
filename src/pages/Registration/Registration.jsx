import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { toast, Toaster } from 'react-hot-toast';
import Header from '../../Shared/Header/Header';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Footer from '../../Shared/Footer/Footer';
import useTitle from '../../hooks/useTitle';

const Registration = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUserData } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    useTitle('Registration');

    const onSubmit = data => {
        const { email, password, name, confirm, photo } = data;

        if (password.length < 6 || !/[A-Z]/.test(password) || !/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            toast.error('Password must be at least 6 characters long, contain at least one capital letter, and have a special character.');
        } else if (password !== confirm) {
            toast.error('Passwords do not match.');
        } else {
            createUser(email, password)
                .then(result => {
                    const loggedUser = result.user;
                    console.log(loggedUser);
                    toast.success('Registration successful');
                    updateUserData(name, photo)
                        .then(() => {
                            const saveUser = { name: name, email: email };
                            fetch('https://sangeet-sadhana-server.vercel.app/users', {
                                method: 'POST',
                                headers: {
                                    'content-type': 'application/json'
                                },
                                body: JSON.stringify(saveUser)
                            })
                                .then(res => res.json())
                                .then(data => {
                                    if (data.insertedId) {
                                        toast.success('User created successfully');
                                        reset();
                                    }
                                });
                        });
                })
                .catch(error => {
                    console.log(error);
                    toast.error('Registration failed. Please try again.');
                });
        }
    };

    const toggleShowPassword = () => {
        setShowPassword(prevShowPassword => !prevShowPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    return (
        <div>
            <Header />
            <section className="bg-black">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <div className="sigin">
                    <div className="content">
                        <h2>Registration</h2>
                        <form onSubmit={handleSubmit(onSubmit)} className="form">
                            <div className="inputbx">
                                <input {...register("name", { required: true })} name="name" type="name" />
                                {errors.name && (
                                    <p className="text-red-500">This field is required</p>
                                )}
                                <i>Name</i>
                            </div>
                            <div className="inputbx">
                                <input {...register("email", { required: true })} name="email" type="email" />
                                {errors.email && (
                                    <p className="text-red-500">This field is required</p>
                                )}
                                <i>Email</i>
                            </div>
                            <div className="inputbx">
                                <input
                                    {...register("password", { required: true })}
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                />
                                {errors.password && (
                                    <p className="text-red-500">{errors.password.message}</p>
                                )}
                                <i>Password</i>
                                <button
                                    type="button"
                                    className="absolute top-1/2 right-2 transform -translate-y-1/2 focus:outline-none"
                                    onClick={toggleShowPassword}
                                >
                                    {showPassword ? (
                                        <FaEye className="text-white" />
                                    ) : (
                                        <FaEyeSlash className="text-gray-500" />
                                    )}
                                </button>
                            </div>
                            <div className="inputbx">
                                <input
                                    {...register("confirm", { required: true })}
                                    name="confirm"
                                    type={showConfirmPassword ? "text" : "password"}
                                />
                                {errors.confirm && (
                                    <p className="text-red-500">This field is required</p>
                                )}
                                <i>Confirm Password</i>
                            </div>
                            <div className="inputbx">
                                <input {...register("photo", { required: true })} name="photo" type="url" />
                                {errors.photo && (
                                    <p className="text-red-500">This field is required</p>
                                )}
                                <i>Photo</i>
                            </div>
                            <div className="links text-3xl">
                                <Link to="/login">Have Account?</Link>
                            </div>
                            <div className="inputbx">
                                <input type="submit" value="SignUp" />
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <Footer />
            <Toaster />
        </div>
    );
};

export default Registration;

