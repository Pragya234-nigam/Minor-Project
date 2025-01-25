'use client';
import React, { useEffect, useState, useContext } from 'react'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { UserContext } from '../context/UserContext';

const Navbar = () => {

    const router = useRouter();
    const { user, setUser } = useContext(UserContext);

    useEffect(() => {
        const loggedUser = JSON.parse(localStorage.getItem('user'));
        setUser(loggedUser);

    }, []); // Add empty dependency array to run only once

    const handleLogout = () => {
        localStorage.removeItem('user');
        setUser(null);
        toast.success('User Logout successfully');
        router.push('/');
    }

    return (
        <div className='mx-auto max-w-screen-2xl px-4 md:px-8'>
            <header className="mb-8 flex items-center justify-between py-4 md:mb-12 md:py-8 xl:mb-16">
                {/* logo - start */}
                <Link
                    href="/"
                    className="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl"
                    aria-label="logo"
                >
                    <svg
                        width={95}
                        height={94}
                        viewBox="0 0 95 94"
                        className="h-auto w-6 text-indigo-500"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M96 0V47L48 94H0V47L48 0H96Z" />
                    </svg>
                    CLUBS AND COMMITTEES
                </Link>
                {/* logo - end */}

                {/* nav - start */}
                <nav className="hidden gap-12 lg:flex">
                    <Link href="/" className="text-lg font-semibold text-indigo-500">
                        Home
                    </Link>
                    {user && (
                        <>
                            <Link
                                href="/Events"
                                className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
                            >
                                Events
                            </Link>

                            <Link
                                href="/activity"
                                className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
                            >
                                Activites By Students
                            </Link>

                            <Link
                                href="/about"
                                className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
                            >
                                About Members
                            </Link>
                            <Link
                                href="/message"
                                className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
                            >
                                Mail to Send
                            </Link>
                            <button
                                type='button'
                                onClick={handleLogout}
                                className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
                            >
                                Logout
                            </button>
                        </>
                    )}
                </nav>
                {/* nav - end */}

                {/* buttons - start */}
                <button
                    type="button"
                    className="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm font-semibold text-gray-500 ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                            clipRule="evenodd"
                        />
                    </svg>
                    Menu
                </button>
                {/* buttons - end */}
            </header>
        </div>
    )
}

export default Navbar;