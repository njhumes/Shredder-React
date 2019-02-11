import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <Link to='/trails'>Trails</Link>
            {/* <Link to='/user/:id'>Profile</Link> */}
        </header>
    )
}
export default Header;