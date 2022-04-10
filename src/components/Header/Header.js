import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className='header'>
                <nav>
                    <Link to='/'>HOME</Link>
                    <Link to='/login'>LOG IN</Link>
                </nav>
            </div>
        </div>
    );
};

export default Header;