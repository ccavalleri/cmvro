import React from 'react';
import { Carousel } from 'flowbite-react/lib/cjs/components/Carousel';
import { UserCircleIcon } from '@heroicons/react/solid';

export default function Layout({ children }) {
  return (
    <>
      <nav
        id="header"
        className="fixed w-full z-30 top-0 text-white bg-sky-700 shadow-lg"
      >
        <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
          <div className="grid grid-cols-1 items-center border-2 border-gray-300 roundedgit"> 
            <div className="text-xs text-center tracking-wide text-zinc-100 text-center bg-gradient-to-r from-sky-400 to-sky-600 opacity-95 shadow">
              Allied Forces in Italy
            </div>
            <div className="border border-sky-600 text-center bg-gradient-to-b from-sky-500 to-sky-700">
              <a
                className="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl text-sky-100 leading-tight drop-shadow-xl"
                href="#"
              >
                AFI <span className="text-blue-100">DMV</span>
                {/* C<span className="text-2xl text-white">entral</span> M
              <span className="text-2xl text-white">otor</span> V
              <span className="text-2xl text-white">ehicle</span> R
              <span className="text-2xl text-white">egistration</span> O
  <span className="text-2xl text-white">ffice</span> */}
              </a>
            </div>
            <div className="text-xs text-center text-zinc-100  bg-gradient-to-l from-sky-500 to-sky-600 px-1 tracking-wide  opacity-95 shadow">
              Department of Motor Vehicles
            </div>
          </div>
          <div className="block lg:hidden pr-4">
            <button
              id="nav-toggle"
              className="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
            ></button>
          </div>
          <div
            className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20"
            id="nav-content"
          >
            <ul className="list-reset lg:flex justify-end flex-1 items-center">
              {/* <li className="mr-3">
                <a
                  className="inline-block py-2 px-4 text-black font-bold no-underline"
                  href="#"
                >
                  Active
                </a>
              </li>
              <li className="mr-3">
                <a
                  className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
                  href="#"
                >
                  link
                </a>
              </li>
              <li className="mr-3">
                <a
                  className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
                  href="#"
                >
                  link
                </a>
              </li>*/}
            </ul>
            <UserCircleIcon className="h-9 w-9 text-white" />
            <button
              id="navAction"
              className="mx-auto lg:mx-0 text-xl text-white font-bold mt-4 lg:mt-0 py-2 px-1 opacity-90 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
            >
              My AFI DMV
            </button>
          </div>
        </div>
        <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
      </nav>

      <div className="pt-24 bg-gradient-to-b from-sky-600">
        <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center h-[500px] pb-3 ">
          {/*<div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
            <p className="uppercase tracking-loose w-full">
              What business are you?
            </p>
            <h1 className="my-4 text-5xl font-bold leading-tight">
              Main Hero Message to sell yourself!
            </h1>
            <p className="leading-normal text-2xl mb-8">
              Sub-hero message, not too long and not too short. Make it just
              right!
            </p>
            <button className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
              Subscribe
            </button>
          </div>
*/}

          <Carousel>
            <img src="Napoli.jpg" className="h-fit mt-3" />
          </Carousel>

          {/* <div className="w-full md:w-3/5 py-6 text-center">
            <img className="w-full md:w-4/5 z-50" src="Napoli.jpg" />
          </div>*/}
        </div>
      </div>
      <div className="relative -mt-12 lg:-mt-1 ">
        <svg
          viewBox="0 0 1428 174"
          version="1.1"
         /* className="bg-gradient-to-r from-cyan-500" */ 
          className="bg-gradient-to-t from-sky-500"
        >
          <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g
              transform="translate(-2.000000, 44.000000)"
              fill="#FFFFFF"
              fill-rule="nonzero"
            >
              {/*<path
                d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
                opacity="0.100000001"
              ></path>
              <path
                d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                opacity="0.100000001"
              ></path>
              <path
                d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
                id="Path-4"
                opacity="0.200000003"
        ></path> */}
            </g>
            <g
              transform="translate(-4.000000, 76.000000)"
              fill="#FFFFFF"
              fill-rule="nonzero"
            >
              <path d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"></path>
            </g>
          </g>
        </svg>
      </div>
      <section className="bg-white border-b py-8">
        <div className="container max-w-5xl mx-auto m-8">
          <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-blue-800 shadow-xl rounded-xl py-3">
            Go Tech, complete the most online!
          </h2>
          <div className="w-full mb-4">
            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>
          <div className="flex flex-wrap">
            <div className="w-5/6 sm:w-1/2 p-6">
              <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                Online Services
              </h3>
              <p className="text-gray-600 mb-8">
                No more line! Providing you with online services is our latest
                commitment. You are now free to get informed and to satisfy some
                of your needs with just a few clicks and without any stress or
                hurry.
                <br />
                <br />
                {/*Images from:
                <a
                  className="text-pink-500 underline"
                  href="https://undraw.co/"
                >
                  undraw.co
                </a>*/}
              </p>
            </div>
            <div className="w-32 h-32 sm:w-1/2 p-6 ">
              <img src="landing_page_img_1.png" />
            </div>
          </div>
          <div className="flex flex-wrap flex-col-reverse sm:flex-row mt-9">
            <div className="w-full flex sm:w-1/2 p-2 mt-6 justify-end">
              <img src="landing_page_img_3_4.png" />
            </div>
            <div className="w-full sm:w-1/2 p-6 mt-6">
              <div className="mt-5">
                <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                  Offices Locations
                </h3>
                <p className="text-gray-600 mb-8">
                  AFI DMV offices are spread across the Italian peninsula. Find
                  the one closest to you.
                  <br />
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white border-b py-8">
        <div className="container mx-auto flex flex-wrap pt-4 pb-12">
          <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
            What do you wish to achieve today?
          </h2>
          <div className="w-full mb-4">
            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>
          <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink ">
            <div className="flex-1 rounded-t rounded-b-none overflow-hidden shadow bg-gradient-to-r from-gray-100 to-transparent">
              <a
                href="#"
                className="flex flex-wrap no-underline hover:no-underline"
              >
                <p className="w-full text-gray-600 text-xs md:text-sm px-6"></p>
                <div className="w-full font-bold text-xl text-gray-800 px-6 mt-3">
                  Profile Creation
                </div>
                <p className="text-gray-800 text-base px-6 mb-5 mt-1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
                </p>
              </a>
              <div className="flex items-center mt-5 mr-3 justify-end ">
                <button className="mx-auto lg:mx-0 hover:underline gradient text-gray font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                  Action
                </button>
              </div>
            </div>
            {/*<div className="flex-none mt-auto bg-gradient-to-r from-gray-200 to-transparent rounded-b rounded-t-none text-gray-400 overflow-hidden shadow-md p-2">
              read more
            </div>*/}
          </div>
          <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink ">
            <div className="flex-1 rounded-t rounded-b-none overflow-hidden shadow bg-gradient-to-r from-gray-100 to-transparent">
              <a
                href="#"
                className="flex flex-wrap no-underline hover:no-underline"
              >
                <p className="w-full text-gray-600 text-xs md:text-sm px-6"></p>
                <div className="w-full font-bold text-xl text-gray-800 px-6 mt-3">
                  Vehicle Registration
                </div>
                <p className="text-gray-800 text-base px-6 mb-5 mt-1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
                </p>
              </a>
              <div className="flex items-center mt-5 mr-3 justify-end ">
                <button className="mx-auto lg:mx-0 hover:underline gradient text-gray font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                  Action
                </button>
              </div>
            </div>
            {/*<div className="flex-none mt-auto bg-gradient-to-r from-gray-200 to-transparent rounded-b rounded-t-none text-gray-400 overflow-hidden shadow-md p-2">
              read more
            </div>*/}
          </div>
          <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink ">
            <div className="flex-1 rounded-t rounded-b-none overflow-hidden shadow bg-gradient-to-r from-gray-100 to-transparent">
              <a
                href="#"
                className="flex flex-wrap no-underline hover:no-underline"
              >
                <p className="w-full text-gray-600 text-xs md:text-sm px-6"></p>
                <div className="w-full font-bold text-xl text-gray-800 px-6 mt-3">
                  Driver License Information
                </div>
                <p className="text-gray-800 text-base px-6 mb-5 mt-1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
                </p>
              </a>
              <div className="flex items-center mt-5 mr-3 justify-end ">
                <button className="mx-auto lg:mx-0 hover:underline gradient text-gray font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                  Action
                </button>
              </div>
            </div>
            {/*<div className="flex-none mt-auto bg-gradient-to-r from-gray-200 to-transparent rounded-b rounded-t-none text-gray-400 overflow-hidden shadow-md p-2">
              read more
            </div>*/}
          </div>
          <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink ">
            <div className="flex-1 rounded-t rounded-b-none overflow-hidden shadow bg-gradient-to-r from-gray-100 to-transparent">
              <a
                href="#"
                className="flex flex-wrap no-underline hover:no-underline"
              >
                <p className="w-full text-gray-600 text-xs md:text-sm px-6"></p>
                <div className="w-full font-bold text-xl text-gray-800 px-6 mt-3">
                  Plan an Appointment
                </div>
                <p className="text-gray-800 text-base px-6 mb-5 mt-1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
                </p>
              </a>
              <div className="flex items-center mt-5 mr-3 justify-end ">
                <button className="mx-auto lg:mx-0 hover:underline gradient text-gray font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                  Action
                </button>
              </div>
            </div>
            {/*<div className="flex-none mt-auto bg-gradient-to-r from-gray-200 to-transparent rounded-b rounded-t-none text-gray-400 overflow-hidden shadow-md p-2">
              read more
            </div>*/}
          </div>
          <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink ">
            <div className="flex-1 rounded-t rounded-b-none overflow-hidden shadow bg-gradient-to-r from-gray-100 to-transparent">
              <a
                href="#"
                className="flex flex-wrap no-underline hover:no-underline"
              >
                <p className="w-full text-gray-600 text-xs md:text-sm px-6"></p>
                <div className="w-full font-bold text-xl text-gray-800 px-6 mt-3">
                  Dependent Management
                </div>
                <p className="text-gray-800 text-base px-6 mb-5 mt-1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
                </p>
              </a>
              <div className="flex items-center mt-5 mr-3 justify-end ">
                <button className="mx-auto lg:mx-0 hover:underline gradient text-gray font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                  Action
                </button>
              </div>
            </div>
            {/*<div className="flex-none mt-auto bg-gradient-to-r from-gray-200 to-transparent rounded-b rounded-t-none text-gray-400 overflow-hidden shadow-md p-2">
              read more
            </div>*/}
          </div>
          <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink ">
            <div className="flex-1 rounded-t rounded-b-none overflow-hidden shadow bg-gradient-to-r from-gray-100 to-transparent">
              <a
                href="#"
                className="flex flex-wrap no-underline hover:no-underline"
              >
                <p className="w-full text-gray-600 text-xs md:text-sm px-6"></p>
                <div className="w-full font-bold text-xl text-gray-800 px-6 mt-3">
                  Road Tax Payment
                </div>
                <p className="text-gray-800 text-base px-6 mb-5 mt-1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
                </p>
              </a>
              <div className="flex items-center mt-5 mr-3 justify-end ">
                <button className="mx-auto lg:mx-0 hover:underline gradient text-gray font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                  Action
                </button>
              </div>
            </div>
            {/*<div className="flex-none mt-auto bg-gradient-to-r from-gray-200 to-transparent rounded-b rounded-t-none text-gray-400 overflow-hidden shadow-md p-2">
              read more
            </div>*/}
          </div>
        </div>
      </section>
      {/*
      <section className="bg-gray-100 py-8">
        <div className="container mx-auto px-2 pt-4 pb-12 text-gray-800">
          <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
            Pricing
          </h2>
          <div className="w-full mb-4">
            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>
          <div className="flex flex-col sm:flex-row justify-center pt-12 my-12 sm:my-4">
            <div className="flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-white mt-4">
              <div className="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow">
                <div className="p-8 text-3xl font-bold text-center border-b-4">
                  Free
                </div>
                <ul className="w-full text-center text-sm">
                  <li className="border-b py-4">Thing</li>
                  <li className="border-b py-4">Thing</li>
                  <li className="border-b py-4">Thing</li>
                </ul>
              </div>
              <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                <div className="w-full pt-6 text-3xl text-gray-600 font-bold text-center">
                  £0
                  <span className="text-base">for one user</span>
                </div>
                <div className="flex items-center justify-center">
                  <button className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-5/6 lg:w-1/3 mx-auto lg:mx-0 rounded-lg bg-white mt-4 sm:-mt-6 shadow-lg z-10">
              <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                <div className="w-full p-8 text-3xl font-bold text-center">
                  Basic
                </div>
                <div className="h-1 w-full gradient my-0 py-0 rounded-t"></div>
                <ul className="w-full text-center text-base font-bold">
                  <li className="border-b py-4">Thing</li>
                  <li className="border-b py-4">Thing</li>
                  <li className="border-b py-4">Thing</li>
                  <li className="border-b py-4">Thing</li>
                </ul>
              </div>
              <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                <div className="w-full pt-6 text-4xl font-bold text-center">
                  £x.99
                  <span className="text-base">/ per user</span>
                </div>
                <div className="flex items-center justify-center">
                  <button className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-white mt-4">
              <div className="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow">
                <div className="p-8 text-3xl font-bold text-center border-b-4">
                  Pro
                </div>
                <ul className="w-full text-center text-sm">
                  <li className="border-b py-4">Thing</li>
                  <li className="border-b py-4">Thing</li>
                  <li className="border-b py-4">Thing</li>
                </ul>
              </div>
              <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                <div className="w-full pt-6 text-3xl text-gray-600 font-bold text-center">
                  £x.99
                  <span className="text-base">/ per user</span>
                </div>
                <div className="flex items-center justify-center">
                  <button className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
          */}
      <section className="container mx-auto text-center py-3 mb-2">
        <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-slate-500">
          Guidelines
        </h2>
      </section>

      <footer class="bg-white dark:bg-gray-900">
        <div class="container px-6 py-12 mx-auto">
          <div class="md:flex md:-mx-3 md:items-center md:justify-between">
            <h1 class="text-xl font-semibold tracking-tight text-gray-800 md:mx-3 xl:text-2xl dark:text-white">
              Subscribe our newsletter to get update.
            </h1>

            <div class="mt-6 md:mx-3 shrink-0 md:mt-0 md:w-auto">
              <a
                href="#"
                class="inline-flex items-center justify-center w-full px-4 py-2 text-sm text-white duration-300 bg-gray-800 rounded-lg gap-x-3 hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80"
              >
                <span>Sign Up Now</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </a>
            </div>
          </div>

          <hr class="my-6 border-gray-200 md:my-10 dark:border-gray-700" />

          <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div>
              <p class="font-semibold text-gray-800 dark:text-white">
                Quick Link
              </p>

              <div class="flex flex-col items-start mt-5 space-y-2">
                <a
                  href="#"
                  class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  Home
                </a>
                <a
                  href="#"
                  class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  Who We Are
                </a>
                <a
                  href="#"
                  class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  Our Philosophy
                </a>
              </div>
            </div>

            <div>
              <p class="font-semibold text-gray-800 dark:text-white">
                Industries
              </p>

              <div class="flex flex-col items-start mt-5 space-y-2">
                <a
                  href="#"
                  class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  Retail & E-Commerce
                </a>
                <a
                  href="#"
                  class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  Information Technology
                </a>
                <a
                  href="#"
                  class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  Finance & Insurance
                </a>
              </div>
            </div>

            <div>
              <p class="font-semibold text-gray-800 dark:text-white">
                Services
              </p>

              <div class="flex flex-col items-start mt-5 space-y-2">
                <a
                  href="#"
                  class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  Translation
                </a>
                <a
                  href="#"
                  class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  Proofreading & Editing
                </a>
                <a
                  href="#"
                  class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  Content Creation
                </a>
              </div>
            </div>

            <div>
              <p class="font-semibold text-gray-800 dark:text-white">
                Contact Us
              </p>

              <div class="flex flex-col items-start mt-5 space-y-2">
                <a
                  href="#"
                  class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  +880 768 473 4978
                </a>
                <a
                  href="#"
                  class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  info@
                </a>
              </div>
            </div>
          </div>

          <hr class="my-6 border-gray-200 md:my-10 dark:border-gray-700" />

          <div class="flex flex-col items-center justify-between sm:flex-row">
            <a href="#" className='text-slate-600 text-medium font-bold'>AFI DMV</a>

            <p class="mt-4 text-sm text-gray-500 sm:mt-0 dark:text-gray-300">
              © Copyright 2023. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
