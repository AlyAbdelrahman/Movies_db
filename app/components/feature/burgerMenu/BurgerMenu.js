'use client'
import { useState } from 'react';
import Link from 'next/link'
import Account from '../account/Account';


const activeSide = "bg-gray-800 h-full w-60 transform transition-all fixed duration-700 text-white  justify-center p-2 z-10";
const hiddenSide = "bg-gray-800 h-full w-60 transform transition-all fixed duration-700 text-white  justify-center p-2 -translate-x-60 z-10";
const activeButton = "fixed w-[8%] h-full bg-red-900 top-0 cursor-pointer transition-all transform duration-700 flex items-center justify-center z-10";
const normalButton = "fixed w-[8%]  h-full bg-red-900 top-0 cursor-pointer transition-all transform duration-700 flex items-center justify-center translate-x-60 z-10";

const BurgerMenu = () => {
    const [isActive, setIsActive] = useState(false);
    const [isMenuClosed, setIsMenuClosed] = useState(true);
    const handleToggle = () =>{
        setIsActive(!isActive)
        if(isMenuClosed ){
            setIsMenuClosed(false)
            
        }else{
            setTimeout(() => {
            setIsMenuClosed(true)

            }, 1000);
        }
    }

    return (
        <div className="col-span-1 relative sm:block  md:hidden  lg:hidden ">
            <div className={`h-full w-full transform transition-all duration-1000 z-10 ${isMenuClosed ? '' : 'fixed'}`}>

                <div className={isActive ? activeSide : hiddenSide}>
                    <svg
                        className="w-12 h-12 mb-2"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 3h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V5a2 2 0 012-2zM15 8a1 1 0 100-2 1 1 0 000 2zm-2 8a2 2 0 100-4 2 2 0 000 4z"
                        ></path>
                    </svg>
                    <p className="text-xl font-bold text-white mb-2">Movies Theater</p>
                    <div className="sm:block md:block lg:hidden">
                        <Account />
                    </div>
                    <Link href="/" className="flex items-center text-white hover:underline">
                        <svg
                            className="w-6 h-6 mr-2"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 12h14M12 5l7 7-7 7"
                            ></path>
                        </svg>
                        Home
                    </Link>
                </div>

            </div>
            <div
                className={`${isActive ? normalButton : activeButton} `}
                onClick={() => handleToggle()}
            >
                <div className="clicker">
                &#9776;
                </div>
            </div>
        </div>
    );
};

export default BurgerMenu;
