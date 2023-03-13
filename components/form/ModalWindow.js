import { Modal } from '../../node_modules/flowbite-react/lib/cjs/components/Modal';
import Inputfield from './Inputfield';

export default function ModalWindow({ show, onCloseDismiss }) {
  return (
    <Modal show={show} onClose={onCloseDismiss} size="4xl">
      <Modal.Header>Vehicle Dismiss Process</Modal.Header>
      <Modal.Body>
        <div className="grid grid-cols-3">
          <div className="flex justify-center">
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
          <div className="col-span-2 border-l-2">
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
