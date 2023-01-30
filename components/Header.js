import { SearchIcon } from '@heroicons/react/solid';
import {
  BellIcon,
  PrinterIcon,
  ChatIcon,
  AdjustmentsIcon,
} from '@heroicons/react/outline';
import { useRef } from 'react';

export default function Header() {
  const searchInputRef = useRef(null);
  return (
    <header className="py-3 lg:py-0 bg-gray-200 shadow-md mdk-header--fixed">
      <div className="lg:pl-4 px-8 flex flex-wrap items-center">
        <div className="items-center">
          <p className="flex items-center text-xl w-sidebar mr-4 hover:no-underline">
            <span className="mr-1 -mt-1 text-primary"></span>
            <span className="text-4xl text-blue-800 rounded-lg border px-2 py-1">
              <strong>CMVRO</strong>
            </span>
          </p>
        </div>

        <div className="flex-1 flex justify-between">
          <div className="relative text-gray-darker hidden lg:flex flex-grow">
            <div className="flex w-full mt-2 mb-2 mx-auto max-w-[90%] border border-gray-200 focus-within:shadow-lg px-2 py-3 rounded-full items-center sm:max-w-xl lg:max-w-2xl">
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
            <li className="relative inline-block text-left">
              <p
                className="flex items-center lg:p-4 py-3 px-0 block hover:text-blue-600 font-semibold"
                id="options-menue1"
              >
                <PrinterIcon className="h-6 ml-4 bl-2 bg-blue cursor-pointer" />
              </p>
            </li>
            <li className="relative inline-block text-left">
              <p
                className="flex items-center lg:p-4 py-3 px-0 block hover:text-blue-600 font-semibold"
                id="options-menue1"
              >
                <BellIcon className="h-6 bg-blue cursor-pointer" />
              </p>
            </li>
            <li className="relative inline-block text-left">
              <p
                className="flex items-center lg:p-4 py-3 px-0 block hover:text-blue-600 font-semibold"
                id="options-menue1"
              >
                <ChatIcon className="h-6 ml-4 bl-2 bg-blue cursor-pointer" />
              </p>
            </li>
            <li>
              <div className="flex space-x-2 justify-center">
                <button
                  type="button"
                  className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-md leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Support Desk
                </button>
              </div>
            </li>

            <li>
              <p
                className="flex items-center lg:p-4 py-3 px-0 block hover:text-blue-600 font-semibold"
                id="options-menue2"
              >
                Sign in
              </p>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
