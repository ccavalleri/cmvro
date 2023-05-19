import Body from '../../../components/Body';
import Image from 'next/image';
import Avatar from '../../../public/avatar.jpg';
import Cupra from '../../../public/cupra-formentor.png';
import Gla from '../../../public/gla.jpeg';
import DS4 from '../../../public/ds4.jpeg';
import Trailer from '../../../public/trailer.jpg';

import Inputfield from '../../../components/form/Inputfield';
import { AdjustmentsIcon, CalculatorIcon } from '@heroicons/react/outline';
import InputfieldIcon from '../../../components/form/InputfieldIcon';
import Link from 'next/link';
import RadioBox from '../../../components/form/RadioBox';
import ModalWindow from '../../../components/form/ModalWindow';
import { Tabs } from 'flowbite-react/lib/cjs/components/Tab';
import { Button } from 'flowbite-react/lib/cjs/components/Button';
import { useState, useRef } from 'react';
import VehicleCard from '../../../components/ui/VehicleCard';
import Layout from '../../../components/Layout';

export default function VehiclesEdit() {
  const [showDismissModal, setShowDismissModal] = useState(false);
  const onCloseDismiss = () => setShowDismissModal(false);
  const [activeTab, setActiveTab] = useState(0);
  const [TrailerTab, setTrailerTab] = useState(true);

  const [cardBorder, setCardBorder] = useState({
    card1: 'border',
    card2: 'border',
    card3: 'border',
    card4: 'border',
    card5: 'border',
  });

  const tabsRef = useRef(null);
  const options = [
    { name: 'option1', label: 'Yes' },
    { name: 'option2', label: 'No' },
  ];
  const vehicle_1 = {
    image: 'Cupra',
    model: 'Cupra Formentor 2022',
    info: 'WHITE 2.5 287 kW',
    type: 'A',
    afiPlate: 'AFI N-23456',
    coverPlate: 'EP178GN',
    expiration: '02/22/2024',
    fiscal: 'P',
  };
  const vehicle_2 = {
    image: 'Gla',
    model: 'Mercedes Benz GLA 2021',
    info: 'BLACK 2.2 165KW',
    type: 'A',
    afiPlate: 'AFI 2N-26333',
    coverPlate: 'EC728TT',
    expiration: '10/22/2023',
    fiscal: 'S',
  };
  const vehicle_3 = {
    image: 'DS4',
    model: 'DS4 Cross Rivoli 2022',
    info: 'GOLD 1.5 105KW',
    type: 'A',
    afiPlate: 'AFI 2N-11223',
    coverPlate: 'EX128XX',
    expiration: '02/08/2023',
    fiscal: 'S',
  };
  const vehicle_4 = {
    image: 'Trailer',
    model: 'La Mancelle',
    info: 'LIBERTY 440PC',
    type: 'R',
    afiPlate: 'AFI 2N-33442',
    coverPlate: 'PN311AX',
    expiration: '02/08/2023',
    fiscal: 'S',
  };

  const vehicle_5 = {
    image: 'Moped',
    model: 'Ruckus 2018',
    info: '49CC',
    type: 'X',
    afiPlate: 'N346',
    coverPlate: 'X72J2Z',
    expiration: '08/28/2023',
    fiscal: 'S',
  };
  const handleClick = (event) => {};
  return (
    <>
      {' '}
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
          <span className="text-gray-400 mr-1">Edit:</span> Vehicles{' '}
        </p>
        <Body
          content={
            <>
              <div className="w-full grid grid-cols-6 p-2 bg-gray-50 dark:border-gray-600 dark:bg-gray-800">
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
                  <div className="font-bold">Driver&apos;s License</div>
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
                <div className="border border-gray-200 shadow rounded-lg flex items-center font-bold text-xl">
                  <span className="ml-11 mx-2 h-7 border border-r-2"></span>
                  <span className="ml-2">A</span>
                  <span className="ml-1">:</span>
                  <span className="text-red-500 ml-1">3</span>
                  <span className="mx-2 h-7 border border-r-2"></span>
                  <span className="ml-2">M</span>
                  <span className="ml-1">:</span>
                  <span className="text-blue-500 ml-1">0</span>
                  <span className="mx-2 h-7 border border-r-2"></span>
                  <span className="ml-2">R</span>
                  <span className="ml-1">:</span>
                  <span className="text-blue-500 ml-1">1</span>
                  <span className="mx-2 h-7 border border-r-2"></span>
                  <span className="ml-2">X</span>
                  <span className="ml-1">:</span>
                  <span className="text-blue-500 ml-1">1</span>
                  <span className="mx-2 h-7 border border-r-2"></span>
                </div>
                <div className="w-full flex justify-end">
                  <button
                    type="button"
                    className="mt-1 py-1.5 px-7 ml-2 text-md font-bold text-gray-100 focus:outline-none bg-blue-500 rounded-lg border-4 border-blue-100 hover:bg-blue-600 hover:text-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  >
                    BASE TRANSFER
                  </button>
                </div>
              </div>
              <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 shadow" />
              <div className="w-full grid grid-cols-5 gap-6 p-3">
                <div className="flex items-center col-span-2">
                  <VehicleCard
                    id="card1"
                    options={vehicle_1}
                    setShowDismissModal={setShowDismissModal}
                    setTrailerTab={setTrailerTab}
                    setCardBorder={setCardBorder}
                    cardBorder={cardBorder.card1}
                  />
                  <div className="h-5 w-5 bg-gray-200 border-gray-400 border-b-2 border-t-2"></div>
                  <VehicleCard
                    id="card2"
                    options={vehicle_4}
                    setShowDismissModal={setShowDismissModal}
                    setTrailerTab={setTrailerTab}
                    setCardBorder={setCardBorder}
                    cardBorder={cardBorder.card2}
                  />
                </div>
                <VehicleCard
                  id="card3"
                  options={vehicle_2}
                  setShowDismissModal={setShowDismissModal}
                  setCardBorder={setCardBorder}
                  setTrailerTab={setTrailerTab}
                  cardBorder={cardBorder.card3}
                />
                <VehicleCard
                  id="card4"
                  options={vehicle_3}
                  setShowDismissModal={setShowDismissModal}
                  setCardBorder={setCardBorder}
                  setTrailerTab={setTrailerTab}
                  cardBorder={cardBorder.card4}
                />
                <VehicleCard
                  id="card5"
                  options={vehicle_5}
                  setShowDismissModal={setShowDismissModal}
                  setCardBorder={setCardBorder}
                  setTrailerTab={setTrailerTab}
                  cardBorder={cardBorder.card5}
                />
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
                    label="POA Information"
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
                <div className="grid grid-cols-3 ml-2">
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
                  <div>
                    <Inputfield
                      key="odometer"
                      name="odometer"
                      placeholder="ex. 78902"
                      errorMessage=""
                      maxlength="4"
                      label="Odometer"
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
                        name="cc"
                        placeholder="cc"
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
                      placeholder="fuel allowance"
                      errorMessage=""
                      maxlength="50"
                      label="Fuel Allowance"
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
                  <div className="col-span-4 h-36">
                    <Tabs.Group
                      aria-label="Default tabs"
                      style="default"
                      ref={tabsRef}
                      onActiveTabChange={(tab) => setActiveTab(tab)}
                      className=""
                    >
                      <Tabs.Item active title="Insurance" className="">
                        {' '}
                        <div className="grid grid-cols-5">
                          <div className="-m-2">
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
                          <div className="-m-2 ml-2">
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
                          <div className="-m-2 ml-2">
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
                          <div className="-m-2 ml-2">
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
                      </Tabs.Item>
                      <Tabs.Item title="Lien Holder">
                        <div className="grid grid-cols-5">
                          <div className="-m-2 col-span-3">
                            <Inputfield
                              key="lienHolder"
                              name="lienHolder"
                              placeholder="ex. AXA Financial Business"
                              errorMessage=""
                              maxlength="50"
                              label="Lien Holder"
                              type="text"
                              required="true"
                              value=""
                            />
                          </div>
                          <div className="-m-2 ml-2">
                            <Inputfield
                              key="lienAmount"
                              name="lienAmount"
                              placeholder="ex. 12345"
                              errorMessage=""
                              maxlength="6"
                              label="Lien Amount"
                              type="number"
                              required="true"
                              value=""
                            />
                          </div>
                          <div className="-m-2 ml-2">
                            <Inputfield
                              key="lienExp"
                              name="lienExp"
                              placeholder="ex. "
                              errorMessage=""
                              maxlength="20"
                              label="Lien Expiration"
                              type="date"
                              required="true"
                              value=""
                            />
                          </div>
                        </div>
                      </Tabs.Item>
                      <Tabs.Item title="Safety Inspection">
                        <div className="grid grid-cols-5">
                          <div className="-m-2">
                            <Inputfield
                              key="safetyStartDate"
                              name="safetyStartDate"
                              placeholder=""
                              errorMessage=""
                              maxlength="50"
                              label="Start Date"
                              type="date"
                              required="true"
                              value=""
                            />
                          </div>
                          <div className="-m-2 ml-2">
                            <Inputfield
                              key="safetyEndDate"
                              name="safetyEndDate"
                              placeholder=""
                              errorMessage=""
                              maxlength="50"
                              label="End Date"
                              type="date"
                              required="true"
                              value=""
                            />
                          </div>
                          <div className="-m-2 col-span-3"></div>
                        </div>
                      </Tabs.Item>
                      <Tabs.Item title="Road Tax">
                        {' '}
                        <div className="grid grid-cols-5">
                          <div className="-m-2">
                            <Inputfield
                              key="roadtaxStartDate"
                              name="roadtaxStartDate"
                              placeholder=""
                              errorMessage=""
                              maxlength="50"
                              label="Start Date"
                              type="date"
                              required="true"
                              value=""
                            />
                          </div>
                          <div className="-m-2 ml-2">
                            <Inputfield
                              key="roadtaxEndDate"
                              name="roadtaxEndDate"
                              placeholder=""
                              errorMessage=""
                              maxlength="50"
                              label="End Date"
                              type="date"
                              required="true"
                              value=""
                            />
                          </div>
                          <div className="-m-2 ml-2">
                            <InputfieldIcon
                              key="roadtaxAmount"
                              name="roadtaxAmount"
                              placeholder="Value"
                              errorMessage=""
                              maxlength="6"
                              label="Road Tax Amount"
                              type="number"
                              required="true"
                              value=""
                              icon={
                                <CalculatorIcon className="cursor-pointer h-7 w-7 text-gray-500" />
                              }
                            />
                          </div>
                          <div className="col-span-2"></div>
                        </div>
                      </Tabs.Item>
                      <Tabs.Item title="Trailer Link" disabled={TrailerTab}>
                        <select>
                          <option value="">Cupra Formentor 2022</option>
                          <option value="">Mercedes Benz GLA</option>
                        </select>
                      </Tabs.Item>
                    </Tabs.Group>
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
                    03/27/2023 22:54:04
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

VehiclesEdit.getLayout = function (page) {
  return <Layout>{page}</Layout>;
};
