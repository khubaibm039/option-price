
import { useState } from 'react';
import Link from '../Link/Link';
import { HiMenuAlt1 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';



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
            <div onClick={() => setOpen(!open)} className='md:hidden p-4'>
                {
                    open === true ?
                        <AiOutlineClose className='cursor-pointer text-2xl'></AiOutlineClose>
                        :
                        <HiMenuAlt1 className='text-2xl cursor-pointer'></HiMenuAlt1>
                }

            </div>
            <ul className={`md:flex justify-between absolute md:static bg-yellow-300 py-6 shadow-lg duration-1000 ${open ? 'top-12' : '-top-60'}`}>
                {
                    routes.map((route, idx) => <Link route={route} key={idx}></Link>)
                }
            </ul>
            <div className={open ? 'red' : 'green'}></div>
        </nav>
    );
};

export default Navbar;