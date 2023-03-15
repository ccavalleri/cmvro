import { Modal } from 'flowbite-react/lib/cjs/components/Modal';
import Inputfield from './Inputfield';

export default function ModalWindowNote({ show, onCloseNote }) {
  return (
    <Modal show={show} onClose={onCloseNote} size="4xl">
      <Modal.Header>Note</Modal.Header>
      <Modal.Body>
        <div className="grid grid-cols-3">
          Note information
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
