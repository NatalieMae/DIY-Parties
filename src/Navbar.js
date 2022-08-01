import {Link, useMatch, useResolvedPath } from 'react-router-dom';
import React from 'react';

function Navbar() {
    
    return (
        <nav className='nav'>
           
            {/* <CustomLink href="/finalproject/src/pages/NataliesPics.js"></CustomLink> */}
            <ul>
                <CustomLink to="/finalproject/src/pages/Home.js">Home</CustomLink>
                <ul>
                <CustomLink to="/finalproject/src/pages/Flowers.js">Flowers</CustomLink>
            </ul>
                <br></br>
                <Link to='/finalproject' className="site-title">
                    Natalie's Photography
                </Link>
                <br></br>
                
                <CustomLink to="/finalproject/src/pages/About.js">About</CustomLink>
                <CustomLink to="/finalproject/src/pages/Contact.js">Contact Information</CustomLink>
            </ul>
               
            

        </nav>
    )
}

function CustomLink({to, children,  ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true})

    return (
        <li className={isActive ? "active" : "" }>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}

export default Navbar;