import React from 'react';
import './Login.css'
import Header from '../../Shared/Header/Header';
import one from '../../assets/login/leaf_01.png'
import two from '../../assets/login/leaf_02.png'
import three from '../../assets/login/leaf_03.png'
import four from '../../assets/login/leaf_04.png'
import girl from '../../assets/login/girl.png'
import tree from '../../assets/login/trees.png'
import bg from '../../assets/login/bg.jpg'
import { Link } from 'react-router-dom';
const Login = () => {
    return (
        <div>
            <Header />
            <section  className='bg-black'>
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
                        <h2>SignIn</h2>
                        <div className="form">
                            <div className="inputbx">
                                <input type="email" required />
                                <i>Username</i>
                            </div>
                            <div className="inputbx">
                                <input type="password" required />
                                <i>Password</i>
                            </div>
                            <div className="links">
                                <Link href="#">Forgot password</Link>
                                <Link to="/registration">SignUp</Link>
                            </div>
                            <div className="inputbx">
                                <input type="submit" value="Login" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;