import React from 'react';
import Image from 'next/image';
import Cupra from '../../public/cupra-formentor.png';
import Gla from '../../public/gla.jpeg';
import DS4 from '../../public/ds4.jpeg';
import Link from 'next/link';

export default function VehicleList({}) {
  return (
    <div className="w-fit relative shadow-md sm:rounded-lg h-fit">
      <table className="text-sm text-left text-gray-500 dark:text-gray-400 overflow-y-auto">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-2 text-center">
              Model
            </th>
            <th scope="col" className="px-6 py-2 text-center">
              Make
            </th>
            <th scope="col" className="px-6 py-2 text-center">
              Year
            </th>
            <th scope="col" className="px-6 py-2 text-center">
              AFI Plate | Cover Plate
            </th>
            <th scope="col" className="px-6 py-2 text-center">
              Expiration Date
            </th>
            <th scope="col" className="px-6 py-2 text-center">
              Power of Attorney
            </th>
            <th scope="col" className="px-6 py-2 text-center">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="w-32 p-4">
              <Image src={Cupra} alt="Cupra Formentor" className="mx-2 my-2" />
            </td>
            <td className="px-6 py-3 text-center font-semibold text-gray-900 dark:text-white">
              Cupra Formentor
              <p className="text-gray-400 text-md">VZ5 2.5 TSI 287 kW</p>
            </td>
            <td className="px-6 py-3 text-center">
              <div className="flex items-center space-x-3 text-gray-900">
                <div>2022</div>
              </div>
            </td>
            <td className="px-6 py-3 text-center font-semibold text-gray-900 dark:text-white">
              AFI N-23456 | EP178GN
            </td>
            <td className="px-6 py-3 text-center font-semibold text-gray-900 dark:text-white text-center">
              02/22/2024
            </td>
            <td className="px-6 py-3 text-center font-semibold text-gray-900 dark:text-white">
              -
            </td>
            <td className="px-6 py-3 text-center">
              <a
                href="#"
                className="font-medium text-red-600 dark:text-red-500 hover:underline"
              >
                Edit
              </a>
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="w-32 p-3">
              <Image src={Gla} alt="Mercedes GLA" className="mx-2 my-2" />
            </td>
            <td className="px-6 py-3 text-center font-semibold text-gray-900 dark:text-white">
              Mercedes Benz GLA
              <p className="text-gray-400 text-md">
                250 Automatic 2.2 4MATIC 165KW
              </p>
            </td>
            <td className="px-6 py-3 text-center">
              <div className="flex items-center space-x-3 text-gray-900">
                <div>2021</div>
              </div>
            </td>
            <td className="px-6 py-3 text-center font-semibold text-gray-900 dark:text-white">
              AFI 2N-26333 | EC728TT
            </td>
            <td className="px-6 py-3 text-center font-semibold text-gray-900 dark:text-white text-center">
              10/22/2023
            </td>
            <td className="px-6 py-3 text-center font-semibold text-gray-900 dark:text-white">
              -
            </td>
            <td className="px-6 py-3 text-center">
              <a
                href="#"
                className="font-medium text-red-600 dark:text-red-500 hover:underline"
              >
                Edit
              </a>
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="w-32 p-3">
              <Image src={DS4} alt="DS4" className="mx-2 my-2" />
            </td>
            <td className="px-6 py-3 text-center font-semibold text-gray-900 dark:text-white">
              DS4
              <p className="text-gray-400 text-md">
                Cross Rivoli 1.5 96KW Automatic
              </p>
            </td>
            <td className="px-6 py-3 text-center">
              <div className="flex items-center space-x-3 text-gray-900">
                <div>2021</div>
              </div>
            </td>
            <td className="px-6 py-3 text-center font-semibold text-gray-900 dark:text-white">
              AFI 2N-11223 | EX128XX
            </td>
            <td className="px-6 py-3 text-center font-semibold text-gray-900 dark:text-white text-center">
              02/08/2023
            </td>
            <td className="px-6 py-3 text-center font-semibold text-gray-900 dark:text-white">
              -
            </td>
            <td className="px-6 py-3 text-center">
              <a
                href="#"
                className="font-medium text-red-600 dark:text-red-500 hover:underline"
              >
                Edit
              </a>
            </td>
          </tr>
        </tbody>
      </table>
      <div>
        <Link
          href="/Operator/VehiclesEdit"
          className="text-gray-500 px-2 py-1 text-md rounded-lg bg-slate-200 mb-1 hover:bg-gray-300"
        >
          Edit all
        </Link>
      </div>
    </div>
  );
}
