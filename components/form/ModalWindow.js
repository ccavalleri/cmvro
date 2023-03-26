import { Modal } from '../../node_modules/flowbite-react/lib/cjs/components/Modal';
import Inputfield from './Inputfield';
import { useState } from 'react';

import { InformationCircleIcon } from '@heroicons/react/outline';

export default function ModalWindow({ show, onCloseDismiss }) {
  const [modalSettings, setModalSettings] = useState({
    width: '4xl',
    gridCol2Span: 'col-span-9',
    gridCol3Span: 'col-span-1',
    showButtonGuide: 'show',
    showGuide: 'hidden',
  });

  return (
    <Modal show={show} onClose={onCloseDismiss} size={modalSettings.width}>
      <Modal.Header>Vehicle Dismiss Process</Modal.Header>
      <Modal.Body>
        <div className="grid grid-cols-12">
          <div className="justify-center col-span-2">
            <div class="w-full h-fit mr-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
              <a
                href="#"
                aria-current="true"
                className="block w-full px-4 py-2 text-white bg-blue-700 border-b border-gray-200 rounded-t-lg cursor-pointer dark:bg-gray-800 dark:border-gray-600"
              >
                Bonded
              </a>
              <a
                href="#"
                className="block w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
              >
                Confiscated
              </a>
              <a
                href="#"
                className="block w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
              >
                Driven
              </a>
              <a
                href="#"
                className="block w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
              >
                Junked
              </a>

              <a
                href="#"
                className="block w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
              >
                Nationalized
              </a>
              <a
                href="#"
                className="block w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
              >
                Shipped
              </a>
              <a
                href="#"
                className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
              >
                Stolen
              </a>
            </div>
          </div>
          <div
            className={`${modalSettings.gridCol2Span} border-l-2 mx-2 pr-1 border-r-2`}
          >
            <div className="grid grid-cols-2 ml-2">
              <div>
                <Inputfield
                  key="firstName"
                  name="firstName"
                  placeholder="First Name"
                  errorMessage=""
                  maxlength="25"
                  label="First Name"
                  type="text"
                  required="true"
                  value=""
                />
              </div>
              <div>
                <Inputfield
                  key="lastName"
                  name="lastName"
                  placeholder="Last Name"
                  errorMessage=""
                  maxlength="25"
                  label="Last Name"
                  type="text"
                  required="true"
                  value=""
                />
              </div>
              <div className="mt-1">
                <Inputfield
                  key="afiplate"
                  name="afiplate"
                  placeholder="AFI Plate"
                  errorMessage=""
                  maxlength="20"
                  label="AFI Plate"
                  type="text"
                  required="true"
                  value=""
                />
              </div>
              <div className="mt-1">
                <Inputfield
                  key="coverplate"
                  name="coverPlate"
                  placeholder="Cover Plate"
                  errorMessage=""
                  maxlength="20"
                  label="Cover Plate"
                  type="text"
                  required="true"
                  value=""
                />
              </div>
              <div className="mt-2 col-span-2">
                <Inputfield
                  key="coverplate"
                  name="coverPlate"
                  placeholder="Document Number"
                  errorMessage=""
                  maxlength="20"
                  label="Document Number"
                  type="text"
                  required="true"
                  value=""
                />
              </div>
              <div className="mt-1">
                <Inputfield
                  key="afiplate"
                  name="afiplate"
                  placeholder="AFI Plate"
                  errorMessage=""
                  maxlength="20"
                  label="Document date"
                  type="date"
                  required="true"
                  value=""
                />
              </div>
              <div className="mt-1">
                <Inputfield
                  key="coverplate"
                  name="coverPlate"
                  placeholder="Cover Plate"
                  errorMessage=""
                  maxlength="20"
                  label="Bonded Date"
                  type="date"
                  required="true"
                  value=""
                />
              </div>
            </div>
          </div>
          <div className={`${modalSettings.gridCol3Span}  mx-2 pr-1`}>
            {' '}
            <div className="flex justify-center">
              <button
                onClick={() =>
                  setModalSettings({
                    width: '7xl',
                    gridCol2Span: 'col-span-5',
                    gridCol3Span: 'col-span-5',
                    showButtonGuide: 'hidden',
                    showGuide: 'show',
                  })
                }
                className={`${modalSettings.showButtonGuide} ml-1 mt-1 text-white text-sm bg-blue-700 hover:bg-blue-800  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl px-3 py-1 text-center inline-flex dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
              >
                Guide
              </button>
            </div>
            <div className={`${modalSettings.showGuide} test-sm show px-1`}>
              <div>
                <div className="grid grid-cols-2 bg-slate-100 border border-gray-100 mb-2 shadow rounded-lg py-1">
                  <div className="text-xl font-bold pl-1 pt-0.5">Bonded</div>
                  <div className="text-gray-300 flex justify-end text-lg">
                    <span
                      onClick={() =>
                        setModalSettings({
                          width: '4xl',
                          gridCol2Span: 'col-span-9',
                          gridCol3Span: 'col-span-1',
                          showButtonGuide: 'show',
                          showGuide: 'hidden',
                        })
                      }
                      className="px-3 mr-1 cursor-pointer text-gray-400 border border-gray-200 rounded-lg hover:bg-gray-200"
                    >
                      X
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-2 border border-gray-200 rounded-lg py-2 text-slate-600">
                <p className="pl-1">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.{' '}
                </p>
                <p className="pl-1">
                  It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged.
                  It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker including
                  versions of Lorem Ipsum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className="flex justify-end">
        <div>
          <button
            onClick={onCloseDismiss}
            className="font-bold focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-lg px-5 py-2 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            SAVE
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
