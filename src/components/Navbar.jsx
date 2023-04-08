import React from 'react';
// import { logo } from '../assets';
import Hamburger from './icons/hamburger';
import ThemeToggle from './UI/ThemeToggle';

const Navbar = () => {
  const menuList = [
    { name: 'home' },
    { name: 'expertise' },
    { name: 'work' },
    { name: 'experience' },
    { name: 'contact' },
  ];
  return (
    <>
      <nav className='h-screen lg:h-auto flex flex-col lg:flex-row lg:items-center justify-between py-10 fixed lg:static bg-black lg:bg-skin-fill w-full px-10 left-0 top-0'>
        <div className='uppercase whitespace-nowrap'>
          Kilesh Maharjan
        </div>

        
        <ul className='flex flex-col lg:flex-row gap-8'>
          {menuList.map((menu, index) => {
            return (
              <li
                key={index}
                className='relative font-sono cursor-pointer font-semibold'>
                //&nbsp;{menu.name}
                &nbsp;
                <span className='absolute text-xs -top-4 right-2'>
                  {index.toString().padStart(2, '0')}
                </span>
              </li>
            );
          })}
        </ul>
        <div className=''>
          <ThemeToggle />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
