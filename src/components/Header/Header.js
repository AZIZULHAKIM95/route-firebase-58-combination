import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import './Header.css'
import { getAuth, signOut } from 'firebase/auth'
import app from '../../firebase.init';

const auth = getAuth(app)

const Header = () => {
    // const { user, handelSignOut } = useFirebase()
    const [user] = useAuthState(auth)
    return (
        <div>
            <div className='header'>
                <nav>
                    <Link to='/'>HOME</Link>
                    <Link to='/products'>PRODUCTS</Link>
                    <Link to='/orders'>ORDERS</Link>
                    <Link to='/reviews'>REVIEWS</Link>
                    <Link to='/about'>ABOUT</Link>
                    <Link to='/register'>REGISTER</Link>
                    <span>{user?.displayName && user.displayName}</span>
                    {
                        user?.uid ?
                            <button onClick={() => signOut(auth)} >Sign Out</button>
                            :
                            <Link to='/login'>LOG IN</Link>
                    }

                </nav>
            </div>
        </div>
    );
};

export default Header;