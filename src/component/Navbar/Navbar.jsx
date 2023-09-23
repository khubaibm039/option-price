// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import Link from '../Link/Link';
import { AiOutlineMenu } from 'react-icons/ai';



const Navbar = () => {
    const [open, setOpen] = useState(false)

    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/contact', name: 'Contact' },
        { id: 4, path: '/products', name: 'Products' },
        { id: 5, path: '*', name: 'NotFound' },
    ];
    return (
        <nav>
            <AiOutlineMenu className='text-2xl md:hidden'></AiOutlineMenu>
            <ul className="md:flex gap-6">
                {
                    routes.map((route, idx) => <Link route={route} key={idx}></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;