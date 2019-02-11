import React from 'react';
import { Link } from 'react-router-dom';

const header = () => {
    return (
        <header>
            <Link to='/trails'>Trails</Link>
            {/* <Link to='/user/:id'>Profile</Link> */}
        </header>
    )
}