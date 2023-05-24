import { SearchIcon, ArrowNarrowDownIcon } from '@heroicons/react/solid';
import { DocumentReportIcon } from '@heroicons/react/outline';
import {
  BellIcon,
  PrinterIcon,
  ChatIcon,
  AdjustmentsIcon,
} from '@heroicons/react/outline';
import { useState, useRef } from 'react';
import ModalWindowNote from './form/ModalWindowNote';

export default function Header() {
  const searchInputRef = useRef(null);
  const [showNote, setShowNote] = useState({
    buttonShow: true,
    modalShow: false,
  });
  const onCloseNote = () => setShowNote({ buttonShow: true, modalShow: false });

  return (
    <>
      {' '}
      <ModalWindowNote
        show={showNote}
        onCloseNote={onCloseNote}
        position="top-right"
      />
      <header className="py-3 lg:py-0 bg-gray-200 shadow-md mdk-header--fixed sticky">
        <div className="lg:pl-4 px-8 flex flex-wrap items-center">
          <div className="items-center">
            <p className="flex items-center text-xl w-sidebar mr-4 hover:no-underline">
              <span className="mr-1 -mt-1 text-primary"></span>
              <span className="text-4xl text-blue-800 rounded-lg border px-2 py-1">
                <strong>AFI DMV Naples</strong>
              </span>
            </p>
          </div>

          <div className="flex-1 flex justify-between">
            <div className="relative text-gray-darker hidden lg:flex flex-grow">
              <div className="flex w-full mt-2 mb-2 mx-auto max-w-[90%] border border-gray-300 focus-within:shadow-lg px-2 py-3 rounded-full items-center sm:max-w-xl lg:max-w-2xl">
                <SearchIcon className="h-6 text-gray-700 mr-3" />
                <input
                  ref={searchInputRef}
                  type="text"
                  className="flex-grow focus:outline-none"
                />
                <AdjustmentsIcon className="h-6 text-gray-700 ml-3 mr-3" />
              </div>
              <button
                type="submit"
                className="absolute right-0 top-0 mt-3 mr-4"
              ></button>
            </div>
          </div>
          <label
            data-toggle="sidebar"
            className="pointer-cursor lg:hidden block"
          ></label>

          <div className="lg:flex lg:items-center lg:w-auto w-full" id="menu">
            <ul className="lg:flex items-center justify-between text-md text-gray-900 font-semibold pt-4 lg:pt-0">
              <li className="relative inline-block text-left"></li>
              <li className="relative inline-block text-left"></li>
              <li>
                {showNote.buttonShow ? (
                  <button
                    onClick={() =>
                      setShowNote({ buttonShow: true, modalShow: true })
                    }
                    type="button"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 uppercase git afocus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-2.5 text-center inline-flex dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    <DocumentReportIcon className="h-6 bl-2 mr-4 bg-blue cursor-pointer" />{' '}
                    Note
                  </button>
                ) : (
                  ''
                )}
              </li>
              <li className="relative inline-block text-left">
                <div className="grid grid-cols-3 shadow rounded-lg mx-2 h-12 content-center bg-gray-100">
                  <div
                    className="flex items-center lg:p-4 py-3 px-0 block hover:text-blue-600 font-semibold"
                    id="options-menue1"
                  >
                    <PrinterIcon className="h-7 ml-2 bl-2 bg-blue cursor-pointer" />
                  </div>
                  <div
                    className="flex items-center lg:p-4 py-3 px-0 block hover:text-blue-600 font-semibold"
                    id="options-menue1"
                  >
                    <ChatIcon className="h-6 ml-2 bl-2 bg-blue cursor-pointer" />
                  </div>
                  <div
                    className="flex items-center lg:p-4 py-3 px-0 block hover:text-blue-600 font-semibold"
                    id="options-menue1"
                  >
                    <BellIcon className="h-6 bg-blue cursor-pointer" />
                  </div>
                </div>
              </li>
              <li>
                <div className="flex space-x-2 justify-center">
                  <button
                    type="button"
                    className="w-full shadow rounded-lg h-12 content-center bg-gray-100 inline-block px-3 uppercase hover:bg-blue-600 hover:text-gray-100 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Support Desk
                  </button>
                </div>
              </li>

              <li>
                <button className="w-full shadow rounded-lg ml-2 mr-2 uppercase h-12 content-center bg-gray-100 inline-block hover:bg-blue-600 hover:text-gray-100 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                  Log Out
                </button>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}
