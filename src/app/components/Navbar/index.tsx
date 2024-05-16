'use client';
import React, { useState, useEffect } from 'react';
//import NavbarHome from './NavbarHome';
import NavbarHomeConnected from './NavbarHomeConnected';

const Navbar: React.FC = () => {
  const isBrowser = () => typeof window !== 'undefined';
  const [windowSize, setWindowSize] = useState<[number, number] | null>(
    isBrowser() ? [window.innerWidth, window.innerHeight] : null
  );
  const [isLargeWindow, setIsLargeWindow] = useState<boolean>(false);

  useEffect(() => {
    if (isBrowser()) {
      const handleWindowResize = () => {
        setWindowSize([window.innerWidth, window.innerHeight]);
      };

      window.addEventListener('resize', handleWindowResize);

      return () => {
        window.removeEventListener('resize', handleWindowResize);
      };
    }
  }, []);

  useEffect(() => {
    if (windowSize && windowSize[0] >= 800) {
      setIsLargeWindow(true);
    } else {
      setIsLargeWindow(false);
    }
  }, [windowSize]);

  return isLargeWindow ? <NavbarHomeConnected/> : <div>Hello World !</div>;
};

export default Navbar;