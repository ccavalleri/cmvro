import Body from '../../components/Body';
import Image from 'next/image';
import Avatar from '../../public/avatar.jpg';
import Cupra from '../../public/cupra-formentor.png';
import Gla from '../../public/gla.jpeg';
import DS4 from '../../public/ds4.jpeg';
import Inputfield from '../../components/form/Inputfield';
import { AdjustmentsIcon, CalculatorIcon } from '@heroicons/react/outline';
import InputfieldIcon from '../../components/form/InputfieldIcon';
import Link from 'next/link';
import RadioBox from '../../components/form/RadioBox';
import ModalWindow from '../../components/form/ModalWindow';
import { useState } from 'react';

export default function VehiclesEdit() {
  const [showDismissModal, setShowDismissModal] = useState(false);
  const onCloseDismiss = () => setShowDismissModal(false);
  const options = [
    { name: 'option1', label: 'Yes' },
    { name: 'option2', label: 'No' },
  ];
  const handleClick = (event) => {};
  return (
    <>
      <ModalWindow show={showDismissModal} onCloseDismiss={onCloseDismiss} />
      <div className="px-4 md:px-16">
        <p className="text-gray-700 text-3xl font-bold">
          <nav className="flex mb-2" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <a
                  href="#"
                  className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                >
                  <svg
                    aria-hidden="true"
                    class="w-4 h-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                  </svg>
                  Dashboard
                </a>
              </li>
              <li>
                <div className="flex items-center">
                  <svg
                    aria-hidden="true"
                    class="w-6 h-6 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <a
                    href="#"
                    className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white"
                  >
                    Personnel and Vehicles
                  </a>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg
                    aria-hidden="true"
                    class="w-6 h-6 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
                    Edit:: Vehicles
                  </span>
                </div>
              </li>
            </ol>
          </nav>
          <span className="text-gray-400 mr-1">Edit:</span> Vehicles
        </p>
        <Body
          content={
            <>
              <div className="w-full grid grid-cols-5 p-2 bg-gray-50 dark:border-gray-600 dark:bg-gray-800">
                <div className="flex items-center space-x-4">
                  <Image
                    src={Avatar}
                    alt="Picture of the author"
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="font-medium dark:text-white">
                    <div className="font-bold">Michael J. Fox</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      MVRO id:{' '}
                      <span className="font-bold text-gray-700">87622</span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="font-bold">DODID</div>
                  <div className="text-md text-gray-500 dark:text-gray-400">
                    4587776312
                  </div>
                </div>{' '}
                <div>
                  <div className="font-bold">Driver License</div>
                  <Link href="/Operator/DriverLicense" className="">
                    <div className="text-md text-gray-500 dark:text-gray-400 ">
                      <span className="rounded-lg px-1 hover:bg-gray-300 hover:shadow">
                        G012345 | M12345
                      </span>
                    </div>
                  </Link>
                </div>
                <div>
                  <div className="font-bold">PRD</div>
                  <div className="text-md text-gray-500 dark:text-gray-400">
                    11/02/2024
                  </div>
                </div>
                <div className="w-full flex justify-end">
                  <button
                    type="button"
                    className="mt-1 py-1.5 px-7 ml-2 text-md font-bold text-gray-100 focus:outline-none bg-blue-300 rounded-lg border-4 border-blue-100 hover:bg-blue-600 hover:text-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  >
                    BASE TRANSFER
                  </button>
                </div>
              </div>
              <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 shadow" />
              <div className="w-full grid grid-cols-5 gap-6 p-3">
                <div className="max-w-sm bg-white border border-slate-400 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 hover:border-gray-400 cursor-pointer">
                  <a href="#" className="flex justify-center">
                    <Image src={Cupra} alt="Cupra Formentor" height={90} />
                  </a>
                  <div className="p-1">
                    <a href="#">
                      <div className="flex justify-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Cupra Formentor 2022
                      </div>
                      <div className="flex justify-center text-md">
                        WHITE 2.5 287 kW
                      </div>
                    </a>

                    <p className="flex justify-center mb-1 font-bold text-gray-700 dark:text-gray-400 mt-1">
                      <span className="text-gray-500 ml-1 border rounded px-1 bg-gray-100">
                        AFI N-23456{' '}
                      </span>
                      <span className="text-gray-500 ml-1 border rounded px-1 bg-gray-100">
                        EP178GN
                      </span>
                      <span className="text-gray-500 ml-1 border rounded px-1 bg-gray-100">
                        EXP: 02/22/2024
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
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:border-gray-400 cursor-pointer">
                  <a href="#" className="flex justify-center">
                    <Image
                      src={Gla}
                      alt="Mercedes Benz GLA"
                      className="object-center"
                      height={90}
                    />
                  </a>
                  <div className="p-2">
                    <a href="#">
                      <div className="flex justify-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Mercedes Benz GLA 2021
                      </div>
                    </a>
                    <p className="flex justify-center">
                      250 Automatic 2.2 4MATIC 165KW
                    </p>
                    <p className="flex justify-center mb-1 font-bold text-gray-700 dark:text-gray-400">
                      AFI 2N-26333 | EC728TT
                    </p>
                    <p className="flex justify-center font-bold text-gray-700 dark:text-gray-400">
                      <span className="text-gray-500 mr-1">EXP: </span>{' '}
                      10/22/2023
                    </p>
                  </div>
                </div>
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:border-gray-400 cursor-pointer">
                  <a href="#" className="flex justify-center">
                    <Image
                      src={DS4}
                      alt="DS4"
                      className="object-center"
                      height={90}
                    />
                  </a>
                  <div className="p-2">
                    <a href="#">
                      <div className="flex justify-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        DS4
                      </div>
                    </a>
                    <p className="flex justify-center">
                      Cross Rivoli 1.5 96KW Automatic
                    </p>
                    <p className="flex justify-center mb-1 font-bold text-gray-700 dark:text-gray-400">
                      AFI 2N-11223 | EX128XX
                    </p>
                    <p className="flex justify-center font-bold text-gray-700 dark:text-gray-400">
                      <span className="text-gray-500 mr-1">EXP: </span>{' '}
                      02/08/2023
                    </p>
                  </div>
                </div>
              </div>
              <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
              <div className="grid gap-1 md:grid-cols-5">
                <div className="grid grid-cols-2 ml-2">
                  <div>
                    <Inputfield
                      key="cylinders"
                      name="cylinders"
                      placeholder="cylinders"
                      errorMessage=""
                      maxlength="12"
                      label="Registration Exp."
                      type="date"
                      required="true"
                      value=""
                    />
                  </div>
                  <div>
                    <Inputfield
                      key="tires"
                      name="tires"
                      placeholder="Tires"
                      errorMessage=""
                      maxlength="12"
                      label="Registration Date"
                      type="date"
                      required="true"
                      value=""
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 ml-2">
                  <div>
                    <Inputfield
                      key="purchasedate"
                      name="purchasedate"
                      placeholder="purchase date"
                      errorMessage=""
                      maxlength="14"
                      label="Purchase Date"
                      type="date"
                      required="true"
                      value=""
                    />
                  </div>
                  <div>
                    <InputfieldIcon
                      key="afiplate"
                      name="afiplate"
                      placeholder="AFI Plate"
                      errorMessage=""
                      maxlength="20"
                      label="AFI Plate"
                      type="text"
                      required="true"
                      value=""
                      icon={
                        <AdjustmentsIcon className="cursor-pointer h-7 w-7 text-gray-500" />
                      }
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 ml-2">
                  <div className="ml-1">
                    <InputfieldIcon
                      key="coverplate"
                      name="coverPlate"
                      placeholder="Cover Plate"
                      errorMessage=""
                      maxlength="20"
                      label="Cover Plate"
                      type="text"
                      required="true"
                      value=""
                      icon={
                        <AdjustmentsIcon className="cursor-pointer h-7 w-7 text-gray-500" />
                      }
                    />
                  </div>
                  <div>
                    <Inputfield
                      key="coverplatedate"
                      name="coverPlateDate"
                      placeholder="Cover Plate Assignment Date"
                      errorMessage=""
                      maxlength="20"
                      label="Cover Plate Date"
                      type="date"
                      required="true"
                      value=""
                    />
                  </div>
                </div>
                <div className="ml-1">
                  <Inputfield
                    key="vin"
                    name="vin"
                    placeholder="VIN"
                    errorMessage=""
                    maxlength="17"
                    label="VIN"
                    type="text"
                    required="true"
                    value=""
                  />
                </div>
                <div className="mr-1 ml-2">
                  <InputfieldIcon
                    key="poaInfo"
                    name="poaInfo"
                    placeholder="POA Info"
                    errorMessage=""
                    maxlength="50"
                    label="POA Sponsor Information"
                    type="text"
                    required="true"
                    value=""
                    icon={
                      <AdjustmentsIcon className="cursor-pointer h-7 w-7 text-gray-500" />
                    }
                  />
                </div>
                <div className="grid grid-cols-2 ml-2">
                  <div className="ml-1">
                    <InputfieldIcon
                      key="make"
                      name="make"
                      placeholder="Make"
                      errorMessage=""
                      maxlength="20"
                      label="Make"
                      type="text"
                      required="true"
                      value=""
                      icon={
                        <AdjustmentsIcon className="cursor-pointer h-7 w-7 text-gray-500" />
                      }
                    />
                  </div>
                  <div className="ml-1">
                    <InputfieldIcon
                      key="model"
                      name="model"
                      placeholder="Model"
                      errorMessage=""
                      maxlength="20"
                      label="Model"
                      type="text"
                      required="true"
                      value=""
                      icon={
                        <AdjustmentsIcon className="cursor-pointer h-7 w-7 text-gray-500" />
                      }
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 ml-2">
                  <div className="">
                    <InputfieldIcon
                      key="body"
                      name="body"
                      placeholder="Body"
                      errorMessage=""
                      maxlength="20"
                      label="Body"
                      type="text"
                      required="true"
                      value=""
                      icon={
                        <AdjustmentsIcon className="cursor-pointer h-7 w-7 text-gray-500" />
                      }
                    />
                  </div>
                  <div>
                    <Inputfield
                      key="year"
                      name="year"
                      placeholder="Year"
                      errorMessage=""
                      maxlength="4"
                      label="Year"
                      type="number"
                      required="true"
                      value=""
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 ml-2">
                  <div>
                    <Inputfield
                      key="color"
                      name="color"
                      placeholder="Color"
                      errorMessage=""
                      maxlength="20"
                      label="Color"
                      type="text"
                      required="true"
                      value=""
                    />
                  </div>
                  <div className="ml-2 mt-1">
                    <RadioBox title="New Car" options={options} />
                  </div>
                </div>
                <div>
                  <div className="grid grid-cols-3 ml-2">
                    <div>
                      <Inputfield
                        key="cylinders"
                        name="cylinders"
                        placeholder="cylinders"
                        errorMessage=""
                        maxlength="1"
                        label="Cylinders"
                        type="text"
                        required="true"
                        value=""
                      />
                    </div>
                    <div className="mr-1">
                      <Inputfield
                        key="tires"
                        name="tires"
                        placeholder="Tires"
                        errorMessage=""
                        maxlength="1"
                        label="Tires"
                        type="text"
                        required="true"
                        value=""
                      />
                    </div>
                    <div className="mr-1">
                      <Inputfield
                        key="fueltype"
                        name="fueltype"
                        placeholder="ex diesel, hybrid, electric, unleaded"
                        errorMessage=""
                        maxlength="1"
                        label="Fuel Type"
                        type="text"
                        required="true"
                        value=""
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="grid grid-cols-2 ml-1">
                    <div>
                      <InputfieldIcon
                        key="weight"
                        name="weight"
                        placeholder="Weight"
                        errorMessage=""
                        maxlength="10"
                        label="Weight"
                        type="number"
                        required="true"
                        value=""
                        icon={
                          <CalculatorIcon className="cursor-pointer h-7 w-7 text-gray-500" />
                        }
                      />
                    </div>
                    <div className="mr-1">
                      <InputfieldIcon
                        key="value"
                        name="value"
                        placeholder="Value"
                        errorMessage=""
                        maxlength="6"
                        label="Value"
                        type="number"
                        required="true"
                        value=""
                        icon={
                          <CalculatorIcon className="cursor-pointer h-7 w-7 text-gray-500" />
                        }
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="grid grid-cols-3 ml-2 gap-3">
                    <div>
                      <Inputfield
                        key="cc"
                        name="weight"
                        placeholder="Weight"
                        errorMessage=""
                        maxlength="4"
                        label="CC"
                        type="number"
                        required="true"
                        value=""
                      />
                    </div>
                    <div>
                      <Inputfield
                        key="bhp"
                        name="value"
                        placeholder="Value"
                        errorMessage=""
                        maxlength="4"
                        label="BHP"
                        type="number"
                        required="true"
                        value=""
                      />
                    </div>
                    <div>
                      <Inputfield
                        key="kw"
                        name="kw"
                        placeholder="Value"
                        errorMessage=""
                        maxlength="4"
                        label="KW"
                        type="number"
                        required="true"
                        value=""
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="grid grid-cols-2 ml-1">
                    <div>
                      <InputfieldIcon
                        key="ecodir"
                        name="ecodir"
                        placeholder="Eco-directive"
                        errorMessage=""
                        maxlength="20"
                        label="Eco Directive"
                        type="text"
                        required="true"
                        value=""
                        icon={
                          <AdjustmentsIcon className="cursor-pointer h-7 w-7 text-gray-500" />
                        }
                      />
                    </div>
                    <div>
                      <Inputfield
                        key="customdoc"
                        name="customdoc"
                        placeholder="Custom Doc"
                        errorMessage=""
                        maxlength="40"
                        label="Costum Doc"
                        type="text"
                        required="true"
                        value=""
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="grid grid-cols-2 ml-1">
                    <div>
                      <Inputfield
                        key="entrydate"
                        name="entrydate"
                        placeholder="Entry date"
                        errorMessage=""
                        maxlength="20"
                        label="Entry date"
                        type="date"
                        required="true"
                        value=""
                      />
                    </div>
                    <div>
                      <Inputfield
                        key="entryport"
                        name="entryport"
                        placeholder="Entry port"
                        errorMessage=""
                        maxlength="20"
                        label="Entry Port"
                        type="text"
                        required="true"
                        value=""
                      />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 ml-1">
                  <div className="mr-1 ml-2">
                    <Inputfield
                      key="entryMethod"
                      name="entryMethod"
                      placeholder="Entry Method"
                      errorMessage=""
                      maxlength="50"
                      label="Entry Method"
                      type="text"
                      required="true"
                      value=""
                    />
                  </div>
                  <div className="mr-1 ml-2">
                    <Inputfield
                      key="a5t1ex1"
                      name="a5t1ex1"
                      placeholder="ex. document #"
                      errorMessage=""
                      maxlength="50"
                      label="A-5/T1/EX-1"
                      type="text"
                      required="true"
                      value=""
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2">
                  {' '}
                  <div className="ml-2 mr-1">
                    <InputfieldIcon
                      key="gasCard"
                      name="gasCard"
                      placeholder="# 12345"
                      errorMessage=""
                      maxlength="50"
                      label="Gas Card"
                      required="true"
                      value=""
                      icon={
                        <AdjustmentsIcon className="cursor-pointer h-7 w-7 text-gray-500" />
                      }
                    />
                  </div>
                  <div className="mr-1 ml-2">
                    <Inputfield
                      key="maxFuel"
                      name="maxFuel"
                      placeholder="fuel"
                      errorMessage=""
                      maxlength="50"
                      label="Max Fuel"
                      type="text"
                      required="true"
                      value=""
                    />
                  </div>
                </div>
                <div className="col-span-5">
                  <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
                </div>
                <div className="col-span-5">
                  <div className="col-span-4">
                    <div className="border-b border-gray-200 dark:border-gray-700 bg-stone-100">
                      <ul className="font-bold flex flex-wrap -mb-px text-xl font-medium text-center text-gray-700 dark:text-gray-600">
                        <li className="mr-2">
                          <a
                            href="#"
                            className="font-bold inline-flex p-2 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group"
                          >
                            Insurance
                          </a>
                        </li>
                        <li className="mr-2">
                          <a
                            href="#"
                            onClick={handleClick}
                            className="font-bold inline-flex p-2  border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
                            aria-current="page"
                          >
                            Lien Holder
                          </a>
                        </li>
                        <li className="mr-2">
                          <a
                            href="#"
                            className="font-bold inline-flex p-2 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
                          >
                            Safety Inspection
                          </a>
                        </li>
                        <li className="mr-2">
                          <a
                            href="#"
                            className="font-bold inline-flex p-2 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
                          >
                            Road Tax
                          </a>
                        </li>
                        <li className="mr-2">
                          <a
                            href="#"
                            className="font-bold inline-flex p-2 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
                          >
                            Trailer Link
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div id="myTabContent">
                      <div
                        className="h-[92px] p-3 rounded-lg bg-gray-50 dark:bg-gray-800"
                        id="profile"
                        role="tabpanel"
                        aria-labelledby="profile-tab"
                      >
                        <div className="grid grid-cols-5">
                          <div className="">
                            <Inputfield
                              key="entryMethod"
                              name="entryMethod"
                              placeholder="ex. Geiko"
                              errorMessage=""
                              maxlength="50"
                              label="Company"
                              type="text"
                              required="true"
                              value=""
                            />
                          </div>
                          <div className="">
                            <Inputfield
                              key="policyNumber"
                              name="policyNumber"
                              placeholder="ex. 12345"
                              errorMessage=""
                              maxlength="50"
                              label="Policy Number"
                              type="text"
                              required="true"
                              value=""
                            />
                          </div>
                          <div className="">
                            <Inputfield
                              key="policySD"
                              name="policySD"
                              placeholder="ex. "
                              errorMessage=""
                              maxlength="50"
                              label="Policy Start Date"
                              type="date"
                              required="true"
                              value=""
                            />
                          </div>
                          <div className="">
                            <Inputfield
                              key="policyED"
                              name="policyED"
                              placeholder="ex. "
                              errorMessage=""
                              maxlength="50"
                              label="Policy End Date"
                              type="date"
                              required="true"
                              value=""
                            />
                          </div>
                          <div></div>
                        </div>
                      </div>
                      <div
                        className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
                        id="dashboard"
                        role="tabpanel"
                        aria-labelledby="dashboard-tab"
                      ></div>
                      <div
                        className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
                        id="settings"
                        role="tabpanel"
                        aria-labelledby="settings-tab"
                      ></div>
                      <div
                        className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
                        id="contacts"
                        role="tabpanel"
                        aria-labelledby="contacts-tab"
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="col-span-5">
                  <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
                </div>

                <div className="col-span-2 border border-gray-200 py-1 ml-1">
                  <div className="border border-gray-200 rounded-md shadow bg-red-400 text-gray-700 md:text-md text-white font-bold py-1 px-1">
                    Options:
                  </div>{' '}
                  <div
                    class="inline-flex rounded-md shadow-sm mb-1 justify-right ml-2 mt-1"
                    role="group"
                  >
                    <button
                      type="button"
                      className="px-4 py-2 text-sm font-medium text-gray-900 bg-white-300 border border-blue-400 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
                    >
                      Transfer Ownership
                    </button>
                    <button
                      type="button"
                      className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-blue-400 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
                    >
                      Power Of Attorney
                    </button>
                  </div>
                </div>

                <div className="col-span-2 border border-gray-200 py-1">
                  <div className="border border-gray-200 rounded-md shadow bg-red-400 text-gray-700 md:text-md text-white font-bold py-1 px-1">
                    Documents:
                  </div>
                  <div
                    class="inline-flex rounded-md shadow-sm mb-1 justify-right mt-1 ml-1"
                    role="group"
                  >
                    <button
                      type="button"
                      className="px-4 py-2 text-sm font-medium text-gray-900 bg-gray-200 border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
                    >
                      FM1
                    </button>
                    <button
                      type="button"
                      className="px-4 py-2 text-sm font-medium text-gray-900 bg-white-300 border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
                    >
                      POA
                    </button>
                    <button
                      type="button"
                      className="px-4 py-2 text-sm font-medium text-gray-900 bg-white-300 border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
                    >
                      ACK
                    </button>
                    <button
                      type="button"
                      className="px-4 py-2 text-sm font-medium text-gray-900 bg-white-300 border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
                    >
                      Police Check
                    </button>
                    <button
                      type="button"
                      className="px-4 py-2 text-sm font-medium text-gray-900 bg-white-300 border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
                    >
                      IVA Exemption
                    </button>
                    <button
                      type="button"
                      className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
                    >
                      Registration
                    </button>
                  </div>
                </div>
                <div className="border border-gray-200 py-1 mr-1">
                  <div className="border border-gray-200 rounded-md shadow bg-red-400 text-gray-700 md:text-md text-white font-bold py-1 px-1">
                    Audit:
                  </div>
                  <div className="mt-1">
                    <button
                      type="button"
                      class="ml-1 py-2 px-7 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                    >
                      Logs
                    </button>
                  </div>
                </div>
              </div>
              <hr className="h-px my-1 bg-gray-200 border-0 dark:bg-gray-700" />
              <div className="grid grid-cols-2">
                <div className="mt-2 ml-2">
                  <span className="text-gray-500 ml-1 border rounded px-1 py-1 bg-slate-200 shadow">
                    Last Update:
                  </span>
                  <span className="text-gray-500 ml-1 border rounded px-1 py-1 bg-red-100 font-bold shadow">
                    Tony Stark
                  </span>
                  <span className="text-gray-500 ml-1 border rounded px-1 py-1 bg-blue-100 font-bold shadow">
                    02/08/2023 11:55:04
                  </span>
                </div>
                <div className="flex justify-end">
                  <button
                    type="button"
                    className="font-bold focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-lg px-5 py-2 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                  >
                    SAVE
                  </button>
                </div>
              </div>
            </>
          }
        />
      </div>
    </>
  );
}
