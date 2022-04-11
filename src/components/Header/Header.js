import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';
import './Header.css'

const Header = () => {
    const { user, handelSignOut } = useFirebase()
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
                            <button onClick={handelSignOut}>Sign Out</button>
                            :
                            <Link to='/login'>LOG IN</Link>
                    }

                </nav>
            </div>
        </div>
    );
};

export default Header;