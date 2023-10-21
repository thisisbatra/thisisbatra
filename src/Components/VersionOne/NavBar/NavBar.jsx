import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            nav works!
            <Link to='/home'><i className="bi bi-house-door"></i></Link>
            <Link to='/'>Back</Link>
        </div>
    );
}

export default NavBar;
