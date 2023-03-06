import Body from '../../components/Body';
import Image from 'next/image';
import Avatar from '../../public/avatar.jpg';
import Webcam from 'react-webcam';
import { useState } from 'react';
import Inputfield from '../../components/form/Inputfield';
import { AdjustmentsIcon, CalculatorIcon } from '@heroicons/react/outline';
import InputfieldIcon from '../../components/form/InputfieldIcon';
import RadioBox from '../../components/form/RadioBox';

export default function DriverLicense() {
  const [ImageExist, setImageExist] = useState(true);
  const options = [
    { name: 'option1', label: 'Yes' },
    { name: 'option2', label: 'No' },
  ];
  return (
    <div className="px-4 md:px-16">
      <p className="text-gray-700 text-3xl mb-4 font-bold">
        <span className="text-gray-400 mr-1">Edit:</span> Driver License
      </p>
      <Body
        content={
          <div className="grid gap-1 md:grid-cols-5">
            <div className="max-w-sm ml-2 mt-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              {ImageExist ? (
                <Image
                  src={Avatar}
                  alt="Sponsor Picture"
                  className="mx-2 my-2"
                />
              ) : (
                <Webcam />
              )}
              <div className="px-5 pb-1">
                <div className="flex items-center justify-center">
                  <button
                    type="button"
                    onClick={() => setImageExist(false)}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 mt-2 font-medium rounded-lg text-sm px-5 py-2 dark:bg-blue-400 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  >
                    Photo Capture
                  </button>
                </div>
              </div>
            </div>
            <div className="col-span-4">
              <div className="grid gap-2 md:grid-cols-4 mt-2">
                <div>
                  <Inputfield
                    key="mvroId"
                    name="mvroId"
                    placeholder="mvroID"
                    errorMessage=""
                    maxlength="8"
                    label="MVRO ID"
                    type="number"
                    required="true"
                    value=""
                  />
                </div>
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
                <div>
                  <Inputfield
                    key="DODID"
                    name="DODID"
                    placeholder="DODID"
                    errorMessage=""
                    maxlength="10"
                    label="DODID"
                    type="number"
                    required="true"
                    value=""
                  />
                </div>
                <div>
                  <Inputfield
                    key="PoB"
                    name="PoB"
                    placeholder="ex. PASADENA CALIFORNIA USA"
                    errorMessage=""
                    maxlength="50"
                    label="Place of Birth"
                    type="text"
                    required="true"
                    value=""
                  />
                </div>
                <div className="grid grid-cols-2">
                  <div>
                    <InputfieldIcon
                      key="height"
                      name="height"
                      placeholder="ex 1.7"
                      errorMessage=""
                      maxlength="10"
                      label="Height"
                      type="text"
                      required="true"
                      value=""
                      icon={
                        <AdjustmentsIcon className="cursor-pointer h-7 w-7 text-gray-500" />
                      }
                    />
                  </div>
                  <div>
                    <InputfieldIcon
                      key="weight"
                      name="weight"
                      placeholder="ex. 81"
                      errorMessage=""
                      maxlength="10"
                      label="Weight"
                      type="text"
                      required="true"
                      value=""
                      icon={
                        <AdjustmentsIcon className="cursor-pointer h-7 w-7 text-gray-500" />
                      }
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2">
                  <div>
                    <InputfieldIcon
                      key="hair"
                      name="hair"
                      placeholder="ex. black"
                      errorMessage=""
                      maxlength="20"
                      label="Hair"
                      type="text"
                      required="true"
                      value=""
                      icon={
                        <AdjustmentsIcon className="cursor-pointer h-7 w-7 text-gray-500" />
                      }
                    />
                  </div>
                  <div>
                    <InputfieldIcon
                      key="eyes"
                      name="eyes"
                      placeholder="ex. green"
                      errorMessage=""
                      maxlength="20"
                      label="Eyes"
                      type="text"
                      required="true"
                      value=""
                      icon={
                        <AdjustmentsIcon className="cursor-pointer h-7 w-7 text-gray-500" />
                      }
                    />
                  </div>
                </div>
                <div className="mt-1 ml-1">
                  <RadioBox title="Lenses" options={options} />
                </div>
                <div className="grid grid-cols-2">
                  <div>
                    <InputfieldIcon
                      key="uslicense"
                      name="uslicense"
                      placeholder="ex. "
                      errorMessage=""
                      maxlength="20"
                      label="US License"
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
                      key="uslicenseexp"
                      name="uslicenseexp"
                      placeholder="ex. "
                      errorMessage=""
                      maxlength="20"
                      label="Suspension Justification"
                      type="date"
                      required="true"
                      value=""
                    />
                  </div>
                </div>
                <div>
                  <InputfieldIcon
                    key="uslicenseIby"
                    name="uslicenseIby"
                    placeholder="ex. Pasadena, California"
                    errorMessage=""
                    maxlength="40"
                    label="US Driver License Issued By"
                    type="text"
                    required="true"
                    value=""
                    icon={
                      <AdjustmentsIcon className="cursor-pointer h-7 w-7 text-gray-500" />
                    }
                  />
                </div>
                <div className="grid grid-cols-2">
                  <div>
                    <Inputfield
                      key="mvrolicense"
                      name="mvrolicense"
                      placeholder="ex. "
                      errorMessage=""
                      maxlength="20"
                      label="MVRO License"
                      type="text"
                      required="true"
                      value=""
                    />
                  </div>
                  <div>
                    <Inputfield
                      key="mvrolicenseexp"
                      name="mvrolicenseexp"
                      placeholder="ex. "
                      errorMessage=""
                      maxlength="20"
                      label="MVRO License Exp"
                      type="date"
                      required="true"
                      value=""
                    />
                  </div>
                </div>
                <div className="break-inside-avoid-column"></div>
                <div className="col-span-4 border border-gray-200 rounded-lg shadow py-1 px-2 mr-3 bg-red-400 text-gray-700 md:text-md text-white font-bold">
                  Driver License Suspension Information
                </div>
                <div className="grid grid-cols-2">
                  <div>
                    <Inputfield
                      key="suspendedDate"
                      name="suspendedDate"
                      placeholder="ex. "
                      errorMessage=""
                      maxlength="20"
                      label="Suspended Date"
                      type="date"
                      required="true"
                      value=""
                    />
                  </div>
                  <div>
                    <Inputfield
                      key="suspendedUntil"
                      name="suspendedUntil"
                      placeholder="ex. "
                      errorMessage=""
                      maxlength="20"
                      label="Suspended Until"
                      type="date"
                      required="true"
                      value=""
                    />
                  </div>
                </div>
                <div className="col-span-3 mr-3">
                    <Inputfield
                      key="suspJustification"
                      name="suspJustification"
                      placeholder="ex. The sponsor failed the alcohol test on 12/03/2022"
                      errorMessage=""
                      maxlength="200"
                      label="Suspension Justification"
                      type="text"
                      required="true"
                      value=""
                    />
                  </div>
              </div>
            </div>
          </div>
        }
      />
    </div>
  );
}
