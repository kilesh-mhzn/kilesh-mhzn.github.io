import { useState } from 'react';
import './styles.css'
const Hamburger = ({isActive, toggleMenu}) => {
  // const [isOpen, setIsOpen] = useState(false);
  // const genericHamburgerLine = `h-1 w-8 my-1 rounded-full bg-white transition ease transform duration-300`;

  return (
    <>
      <label className='hamburger'>
        <input type='checkbox' onChange={toggleMenu} />
        <svg viewBox='0 0 32 32'>
          <path
            className='stroke-yellow-600 line line-top-bottom'
            d='M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22'></path>
          <path
            className='line stroke-yellow-600'
            d='M7 16 27 16'></path>
        </svg>
      </label>
    </>
  );
};

export default Hamburger;
