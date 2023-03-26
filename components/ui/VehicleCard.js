import Cupra from '../../public/cupra-formentor.png';
import Gla from '../../public/gla.jpeg';
import DS4 from '../../public/ds4.jpeg';
import Trailer from '../../public/trailer.jpg';

import Image from 'next/image';

export default function VehicleCard({ options, setShowDismissModal }) {
  return (
    <div className="max-w-sm bg-white border border-slate-400 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 hover:border-gray-400 cursor-pointer">
      <a href="#" className="flex justify-center">
        <Image
          src={
            options.image === 'Cupra'
              ? Cupra
              : options.image === 'Gla'
              ? Gla
              : options.image === 'DS4'
              ? DS4
              : options.image === 'Trailer'
              ? Trailer
              : ''
          }
          alt={options.model}
          height={90}
        />
      </a>
      <div className="p-1">
        <a href="#">
          <div className="flex justify-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {options.model}
          </div>
          <div className="flex justify-center text-md">{options.info}</div>
        </a>

        <p className="flex justify-center mb-1 font-bold text-gray-700 dark:text-gray-400 mt-1">
          <span className="text-gray-500 ml-1 border rounded px-1 bg-gray-100">
            {options.afiPlate}
          </span>
          <span className="text-gray-500 ml-1 border rounded px-1 bg-gray-100">
            {options.coverPlate}
          </span>
          <span className="text-gray-500 ml-1 border rounded px-1 bg-gray-100">
            EXP: {options.expiration}
          </span>{' '}
        </p>
      </div>
      <hr className="h-px mb-1 bg-gray-200 border-0 dark:bg-gray-700" />
      <div className="grid grid-cols-2">
        <div className="">
          <button
            onClick={() => setShowDismissModal(true)}
            type="button"
            class="py-2 px-7 ml-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            DISMISS
          </button>
        </div>
        <div
          class="inline-flex rounded-md shadow-sm mb-1 justify-right"
          role="group"
        >
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium text-gray-900 bg-green-300 border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
          >
            Enable
          </button>
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
          >
            Disable
          </button>
        </div>
      </div>
    </div>
  );
}
