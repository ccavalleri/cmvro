import Body from '../../components/Body';
import Image from 'next/image';
import Avatar from '../../public/avatar.jpg';
import Cupra from '../../public/cupra-formentor.png';
import Gla from '../../public/gla.jpeg';
import DS4 from '../../public/ds4.jpeg';
import Inputfield from '../../components/form/Inputfield';
import { AdjustmentsIcon, CalculatorIcon } from '@heroicons/react/outline';
import InputfieldIcon from '../../components/form/InputfieldIcon';

export default function VehiclesEdit() {
  return (
    <div className="px-4 md:px-16">
      <p className="text-gray-700 text-3xl mb-4 font-bold">
        <span className="text-gray-400 mr-1">Edit:</span> Vehicles
      </p>
      <Body
        content={
          <>
            <div className="w-full grid grid-cols-4 p-2 bg-gray-50 dark:border-gray-600 dark:bg-gray-800">
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
              </div>
              <div>
                <div className="font-bold">Driver License</div>
                <div className="text-md text-gray-500 dark:text-gray-400">
                  G012345 | M12345
                </div>
              </div>
              <div>
                <div className="font-bold">PRD</div>
                <div className="text-md text-gray-500 dark:text-gray-400">
                  11/02/2024
                </div>
              </div>
            </div>
            <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
            <div className="w-full grid grid-cols-5 gap-6 p-3">
              <div className="max-w-sm bg-white border border-slate-400 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 hover:border-gray-400 cursor-pointer">
                <a href="#" className="flex justify-center">
                  <Image src={Cupra} alt="Cupra Formentor" height={90} />
                </a>
                <div className="p-2">
                  <a href="#">
                    <div className="flex justify-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Cupra Formentor 2022
                    </div>
                  </a>
                  <p className="flex justify-center">VZ5 2.5 TSI 287 kW</p>
                  <p className="flex justify-center mb-1 font-bold text-gray-700 dark:text-gray-400">
                    AFI N-23456 | EP178GN
                  </p>
                  <p className="flex justify-center font-bold text-gray-700 dark:text-gray-400">
                    <span className="text-gray-500 mr-1">PRD: </span> 02/22/2024
                  </p>
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
                    <span className="text-gray-500 mr-1">PRD: </span> 10/22/2023
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
                    <span className="text-gray-500 mr-1">PRD: </span> 02/08/2023
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
              <div className="break-inside-avoid-column"></div>
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
              <div>
                <div className="grid grid-cols-2 ml-2">
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
                  <div>
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
                  <div>
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
            </div>
          </>
        }
      />
    </div>
  );
}
