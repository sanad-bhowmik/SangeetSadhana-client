import React, { useContext } from 'react';
import './Login.css'
import Header from '../../Shared/Header/Header';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import google from '../../assets/image/google.png'
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { toast, Toaster } from 'react-hot-toast';
import app from '../../firebase/firebase.config';
import Footer from '../../Shared/Footer/Footer';
import useTitle from '../../hooks/useTitle';

const Login = () => {
    const auth = getAuth(app)
    const { signIn } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    useTitle('Login')
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                toast.success('Login successful! Welcome Back');
            })
    }
    const handleGoogleSignIn = (event) => {
        event.preventDefault();
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const loggedUser = result.user;
                console.log(loggedUser);
                const saveUser = { name: loggedUser.displayName, email: loggedUser.email }
                fetch('http://localhost:5000/users',{
                    method: 'POST',
                    headers:{
                        'content-type':'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                toast.success('Login successful! Welcome');
                setUser(loggedUser);
            })
            .catch((error) => {
                toast.error('error', error.message);
            });
    };
    return (
        <div>
            <Toaster />
            <Header />
            <section className='bg-black'>
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
                        <form onSubmit={handleLogin} className="form">
                            <div className="inputbx">
                                <input name='email' type="email" required />
                                <i>Email</i>
                            </div>
                            <div className="inputbx">
                                <input name='password' type="password" required />
                                <i>Password</i>
                            </div>
                            <div className="links">
                                <Link href="#">Forgot password</Link>
                                <Link to="/registration">SignUp</Link>
                            </div>
                            <div>
                                <button onClick={handleGoogleSignIn} ><img className='h-16 ml-32' src={google} alt="" /></button>
                            </div>
                            <div className="inputbx">
                                <input type="submit" value="Login" />
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Login;