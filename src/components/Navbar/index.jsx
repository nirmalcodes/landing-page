import React from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
    const links = [
        {
            name: 'Home',
            path: 'home',
            isScroll: true,
        },
        {
            name: 'Services',
            path: 'services',
            isScroll: true,
        },
        {
            name: 'AboutUs',
            path: 'aboutUs',
            isScroll: true,
        },
        {
            name: 'Our Clients',
            path: 'ourClients',
            isScroll: true,
        },
        {
            name: 'Contact Us',
            path: 'contactUs',
            isScroll: true,
        },
    ];

    return (
        <>
            <div className="fixed inset-x-0 top-0 flex items-center justify-between bg-teal-500 p-5 drop-shadow-xl">
                <div className="">Navbar</div>
                <nav>
                    <ul className="flex gap-2">
                        {links.map((link, index) => (
                            <li className="" key={`link-${index}`}>
                                {link?.isScroll === true ? (
                                    <ScrollLink
                                        activeClass="active-link"
                                        to={link?.path}
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                        isDynamic={true}
                                    >
                                        {link?.name}
                                    </ScrollLink>
                                ) : (
                                    <Link to={link?.path} className="">
                                        {link?.name}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </>
    );
};

export default Navbar;
