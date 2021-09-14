import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <ul>
            <li>
                <Link to="/home">Home</Link>
                <Link to="/contact">Contact Us</Link>
            </li>
        </ul>
    );
}

export default Navbar;