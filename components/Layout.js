import SideBar from './SideBar';
import Header from './Header';
import { Transition } from '@headlessui/react';
import { useState, useEffect, Fragment } from 'react';

export default function Layout({ children }) {
  const [showNav, setShowNav] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  function handleResize() {
    if (innerWidth <= 640) {
      setShowNav(false);
      setIsMobile(true);
    } else {
      setShowNav(true);
      setIsMobile(false);
    }
  }

  useEffect(() => {
    if (typeof window != undefined) {
      addEventListener('resize', handleResize);
    }

    return () => {
      removeEventListener('resize', handleResize);
    };
  }, []);

  return (
  <div>
    <Header showNav={showNav} />
    <Transition
      as={Fragment}
      show={showNav}
      enter="transform transition duration-[400ms]"
      enterFrom="-translate-x-full"
      enterTo="translate-x-0"
      leave="transform transition duration-[400ms] ease-in-out"
      leaveFrom="translate-x-0"
      leaveTo="-translate-x-full"
    >
      <SideBar showNav={showNav} />
    </Transition>
    <main
      className={`pt-2 transition-all duration-[400ms] ${
        showNav && !isMobile ? 'pl-56' : ''
      }`}
    >
      {children}
    </main>
  </div>);
}
