import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from './NavLink/NavLink';

const Header = () => {
    return (
        <div>
            <nav className='sticky bg-indigo-100 py-4'>
                <div className="flex justify-between  container w-5/6 mx-auto">
                    <Link to='/'>
                        <h3 className='text-3xl text-indigo-900 font-semibold'>logho Ekhane</h3>
                    </Link>
                    <div className="flex align-middle gap-4 text-base font-semibold">
                        <CustomLink to="/">Home</CustomLink>
                        <CustomLink to="/reviews">Reviews</CustomLink>
                        <CustomLink to="/dashboard">Dashboard</CustomLink>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;