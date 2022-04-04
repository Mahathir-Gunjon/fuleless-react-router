import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CustomLink from './NavLink/NavLink';
import { MenuAlt2Icon, XIcon } from '@heroicons/react/solid'

const Header = () => {
    const [menu, setMenu] = useState(false)
    return (
        <div>
            <nav className='bg-gray-900 py-4'>
                <div className="flex justify-between bg-gray-900 container w-5/6 mx-auto">
                    <div>
                        <Link to='/'>
                            <h3 className='text-4xl text-red-600 underline border-r-4 border-red-600 font-bold font-mono'>FueLLess</h3>
                        </Link>
                    </div>
                    <div className={`md:flex align-middle w-10/12 bg-gray-900 gap-4 text-base font-semibold justify-end absolute md:static ${menu ? 'top-16 p-4' : 'top-[-150px]'}`}>
                        <CustomLink to="/">Home</CustomLink>
                        <CustomLink to="/reviews">Reviews</CustomLink>
                        <CustomLink to="/dashboard">Dashboard</CustomLink>
                        <CustomLink to="/blogs">Blogs</CustomLink>
                    </div>
                    <div onClick={() => setMenu(!menu)} className="w-6 h-6 md:hidden text-red-600">
                        {menu ? <XIcon /> : <MenuAlt2Icon></MenuAlt2Icon>}
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;