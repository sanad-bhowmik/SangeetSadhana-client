import React, { useContext, useEffect, useState } from 'react';
import logo from '../../../src/assets/image/logo.png';
import { getAuth } from 'firebase/auth';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import app from '../../firebase/firebase.config';
import './Header.css'

const auth = getAuth(app);

const Header = () => {
    const { user, setUser } = useContext(AuthContext); // Add setUser here
    const [photoURL, setPhotoURL] = useState('');
    const [displayName, setDisplayName] = useState('');

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
                setDisplayName(user.displayName);
                setPhotoURL(user.photoURL);
            } else {
                setUser(null);
                setDisplayName('');
                setPhotoURL('');
            }
        });
        return () => {
            unsubscribe();
        };
    }, []);
    return (
        <div className="navbar bg-gradient-to-r from-gray-100 to-gray-600">
            <div className="flex-1">
                <Link className="">
                    <img className='h-16 w-30' src={logo} alt="" />
                </Link>
            </div>
            <div className="flex gap-6 font-serif">
                <div className="form-control">
                    <Link to='/'><h1>Home</h1></Link>
                </div>
                {user && (
                 <>
                <div className="form-control">
                    <Link to='/instructor'><h1>Instructors</h1></Link>
                </div>
                <div className="form-control">
                    <Link to='/allclass'>
                        <h1>Classes</h1>
                    </Link>
                </div>
                <div className="form-control">
                            <Link to='/dashboard'><h1>Dashboard</h1></Link>
                        </div> 
                 </>
              )}
              <>
                {user ? (
                  <div className="relative">
                    <div className="group relative flex justify-center">
                      <button tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <img className="w-10 rounded-full" src={user.photoURL} alt={user.displayName} />
                      </button>
                      <span className="absolute top-10 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">
                        {user.displayName}
                      </span>
                    </div>
                    <button onClick={() => auth.signOut()} className="button h-10 w-20 " >
                    <span>LogOut</span>
                    </button>
                  </div>
                ) : (
                  <Link to="/login">Login</Link>
                )}
              </>
            </div>
        </div>
    );
};

export default Header;
