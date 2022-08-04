import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className='navbar navbar-extend-lg navbar-dark bg-dark py-2'>
            <Link to="/" className='navbar-brand ml-5'>
                React Crud Contact App
            </Link>
        </nav>
    )
}

export default Navbar
