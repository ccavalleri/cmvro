import { Modal } from 'flowbite-react/lib/cjs/components/Modal';
import Inputfield from './Inputfield';

export default function ModalWindowNote({ show, onCloseNote }) {
  return (
    <Modal show={show.modalShow} onClose={onCloseNote} size="6xl">
      <Modal.Header><p className="font-semibold">Note History:</p></Modal.Header>
      <Modal.Body>
        <div className="grid grid-cols-3 h-[400px]">
          <div className="col-span-3">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 overflow-y-auto">
              <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-2">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-2">
                    Description
                  </th>
                  <th scope="col" className="px-6 py-2">
                    Author
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="w-44 p-4">
                    <div className="flex items-center space-x-3 text-red-900">
                      <div>03/23/2023 10:35:05</div>
                    </div>
                  </td>
                  <td className="px-6 py-3 font-semibold text-gray-900 dark:text-white">
                    The sponsor needs to bring a valid id card
                  </td>
                  <td className="px-6 py-3">Tony Stark</td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="p-4">
                    <div className="flex items-center space-x-3 text-red-900">
                      <div>02/21/2023 12:40:40</div>
                    </div>
                  </td>
                  <td className="px-6 py-3 font-semibold text-gray-900 dark:text-white">
                    Safety Inspection document missing for AFI N-23456
                  </td>
                  <td className="px-6 py-3">Wanda Maximoff</td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="w-32 p-4">
                    <div className="flex items-center space-x-3 text-red-900">
                      <div>02/08/2023 16:40:45</div>
                    </div>
                  </td>
                  <td className="px-6 py-3 font-semibold text-gray-900 dark:text-white">
                    A police check needs to be performed
                  </td>
                  <td className="px-6 py-3">Steve Rogers</td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="w-32 p-4">
                    <div className="flex items-center space-x-3 text-red-900">
                      <div>12/12/2022 08:40:25</div>
                    </div>
                  </td>
                  <td className="px-6 py-3 font-semibold text-gray-900 dark:text-white">
                    Sponsor has returned the front cover plate
                  </td>
                  <td className="px-6 py-3">Tony Stark</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-span-3 mt-20 bg-gray-100 py-2 px-2 rounded-lg shadow">
            {' '}
            <Inputfield
              key="newNote"
              name="newNote"
              placeholder="Add a description here.."
              errorMessage=""
              maxlength="500"
              label="New note:"
              type="text"
              required="true"
              value=""
            />
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className="flex justify-end">
        <div>
          <button
            onClick={onCloseNote}
            className="font-bold focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-lg px-5 py-2 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            SAVE
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
