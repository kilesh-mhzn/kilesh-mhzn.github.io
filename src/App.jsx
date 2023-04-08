import { useState, useEffect } from 'react';
import {
  ThemeProvider,
} from './components/UI/ThemeToggle/context/ThemeContext';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Hamburger from './components/icons/hamburger';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navDeactiveClass, setNavDeactiveClass] = useState('');
  const toggleMenu = (curr) => {
    setIsMenuOpen(!isMenuOpen);
    !curr?setNavDeactiveClass(''):setNavDeactiveClass('navbar-deactive-site-wrapper')
  };
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 1024) {
       setIsMenuOpen(false)
      }
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <>
      <ThemeProvider>
        <div className='bg-skin-fill text-skin-base'>
          <Navbar />
          <div
            className={`container lg:static bg-skin-fill ${
              isMenuOpen
                ? 'navbar-active-site-wrapper'
                : navDeactiveClass
            }`}>
            <div className='lg:hidden flex items-center gap-20 py-5'>
              <div>
                <Hamburger
                  isActive='isMenuOpen'
                  toggleMenu={toggleMenu}
                />
              </div>
              <div className='uppercase whitespace-nowrap sm:text-2xl'>
                Kilesh Maharjan
              </div>
            </div>
            <Hero />
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
