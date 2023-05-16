import SideBar from './SideBarUser';
import Header from './Header';
import { Transition } from '@headlessui/react';
import { useState, useEffect, Fragment } from 'react';

export default function LayoutUser({ children }) {
  const [showNav, setShowNav] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [userInterface, setUserInterface] = useState({
    showNoteButton: false,
  });

  const d = new Date();
  let year = d.getFullYear();

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
      <Header showNav={showNav} showNoteButton={userInterface.showNoteButton} />
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
        <SideBar showNav={showNav} setUserInterface={setUserInterface} />
      </Transition>
      <main
        className={`pt-2 transition-all duration-[400ms] ${
          showNav && !isMobile ? 'pl-56' : ''
        }`}
      >
        {children}
        <div className="px-11 mx-5 mt-2 text-gray-500 text-md">
          <div className="flex justify-between">
            <div className="border border-gray-300 shadow-sm px-2 rounded-lg">
              Unclassified Information - For Official Use Only
            </div>
            <div className="border border-gray-300 shadow-sm px-2 rounded-lg">
              CMVRO CLOUD
              <span className="ml-2 border-gray-400 border-l-2 px-1">CCS</span>
              <span className="border-gray-400 border-l-2 px-2">©{year}</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
