import Body from '../../components/Body';
import Image from 'next/image';
import Avatar from '../../public/avatar.jpg';
import Inputfield from '../../components/form/Inputfield';
import VehicleList from '../../components/ui/VehicleList';
import Link from 'next/link';

export default function PersonnelnVehicles() {
  return (
    <div className="px-4 md:px-16">
      <div className="grid grid-cols-2">
        <div>
          <p className="text-gray-700 text-3xl mb-4 font-bold">
            Personnel and Vehicles
          </p>
        </div>
        <div>
          <form>
            <label
              for="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Last Name, First Name."
                required
              />
              <button
                type="submit"
                className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
      <Body
        content={
          <>
            <div className="grid gap-1 md:grid-cols-5">
              <div className="max-w-sm ml-2 mt-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <Image
                  src={Avatar}
                  alt="Picture of the author"
                  className="mx-2 my-2"
                />
                <div className="px-5 pb-5">
                  <div className="flex items-center justify-between"></div>
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
                      key="DoB"
                      name="DoB"
                      placeholder="date of birth"
                      errorMessage=""
                      maxlength="20"
                      label="Date of Birth"
                      type="date"
                      required="true"
                      value=""
                    />
                  </div>
                  <div>
                    <Inputfield
                      key="Nationality"
                      name="Nationality"
                      placeholder="Nationality"
                      errorMessage=""
                      maxlength="40"
                      label="Nationality"
                      type="text"
                      required="true"
                      value=""
                    />
                  </div>
                  <div>
                    <Inputfield
                      key="DoDComp"
                      name="DoDComp"
                      placeholder="US Navy US Army US AirForce NATO"
                      errorMessage=""
                      maxlength="40"
                      label="DoD Components"
                      type="text"
                      required="true"
                      value=""
                    />
                  </div>
                  <div>
                    <Inputfield
                      key="serviceType"
                      name="serviceType"
                      placeholder="Civilian Military Contractor"
                      errorMessage=""
                      maxlength="40"
                      label="Service Type"
                      type="text"
                      required="true"
                      value=""
                    />
                  </div>
                  <div>
                    <Inputfield
                      key="rankGrade"
                      name="rankGrade"
                      placeholder=""
                      errorMessage=""
                      maxlength="40"
                      label="Rank/Grade"
                      type="text"
                      required="true"
                      value=""
                    />
                  </div>
                  <div>
                    <Inputfield
                      key="command"
                      name="command"
                      placeholder="CNREURAFCENT"
                      errorMessage=""
                      maxlength="40"
                      label="Command"
                      type="text"
                      required="true"
                      value=""
                    />
                  </div>
                  <div>
                    <Inputfield
                      key="AD"
                      name="AD"
                      placeholder="Arrival Date"
                      errorMessage=""
                      maxlength="20"
                      label="Arrival Date"
                      type="date"
                      required="true"
                      value=""
                    />
                  </div>
                  <div>
                    <Inputfield
                      key="RD"
                      name="RD"
                      placeholder="Rotation Date"
                      errorMessage=""
                      maxlength="20"
                      label="Rotation Date"
                      type="date"
                      required="true"
                      value=""
                    />
                  </div>
                  <div>
                    <Inputfield
                      key="dutyPhone"
                      name="dutyPhone"
                      placeholder="Duty Phone"
                      errorMessage=""
                      maxlength="20"
                      label="Duty Phone"
                      type="text"
                      required="true"
                      value=""
                    />
                  </div>
                  <div>
                    <Inputfield
                      key="cellPhone"
                      name="cellPhone"
                      placeholder="Home Phone"
                      errorMessage=""
                      maxlength="20"
                      label="Cellular Phone"
                      type="text"
                      required="true"
                      value=""
                    />
                  </div>
                  <div>
                    <Inputfield
                      key="Email"
                      name="Email"
                      placeholder="Email"
                      errorMessage=""
                      maxlength="50"
                      label="Email"
                      type="text"
                      required="true"
                      value=""
                    />
                  </div>
                  <div>
                    <Inputfield
                      key="altEmail"
                      name="altEmail"
                      placeholder="Alternative Email"
                      errorMessage=""
                      maxlength="50"
                      label="Alternative Email"
                      type="text"
                      required="true"
                      value=""
                    />
                  </div>
                  <div>
                    <Inputfield
                      key="FPO"
                      name="FPO"
                      placeholder="FPO"
                      errorMessage=""
                      maxlength="50"
                      label="FPO Address"
                      type="text"
                      required="true"
                      value=""
                    />
                  </div>
                  <div>
                    <Inputfield
                      key="ZipCode"
                      name="ZipCode"
                      placeholder="ZipCode"
                      errorMessage=""
                      maxlength="50"
                      label="ZipCode"
                      type="text"
                      required="true"
                      value=""
                    />
                  </div>
                  <div className="">
                    <Inputfield
                      key="localAddress"
                      name="localAddress"
                      placeholder="Local Address"
                      errorMessage=""
                      maxlength="50"
                      label="Local Address"
                      type="text"
                      required="true"
                      value=""
                    />
                  </div>
                  <div>
                    <Inputfield
                      key="parkingSpots"
                      name="parkingSpots"
                      placeholder="Parking Spots"
                      errorMessage=""
                      maxlength="50"
                      label="Reserved Parking Spots"
                      type="text"
                      required="true"
                      value=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="grid gap-2 md:grid-cols-4 mt-2">
              <div className="col-span-4">
                <div className="border-b border-gray-200 dark:border-gray-700 bg-stone-100">
                  <ul className="font-bold flex flex-wrap -mb-px text-xl font-medium text-center text-gray-700 dark:text-gray-600">
                    <li className="mr-2">
                      <a
                        href="#"
                        className="font-bold inline-flex p-2 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group"
                      >
                        Current Vehicles
                      </a>
                    </li>
                    <li className="mr-2">
                      <a
                        href="#"
                        className="font-bold inline-flex p-2  border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
                        aria-current="page"
                      >
                        Family Members
                      </a>
                    </li>
                    <li className="mr-2">
                      <a
                        href="#"
                        className="font-bold inline-flex p-2 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
                      >
                        Driver License
                      </a>
                    </li>
                    <li className="mr-2">
                      <a
                        href="#"
                        className="font-bold inline-flex p-2 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
                      >
                        Audit Logs
                      </a>
                    </li>
                    <li className="mr-2">
                      <a
                        href="#"
                        className="font-bold inline-flex p-2 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
                      >
                        Tools
                      </a>
                    </li>
                  </ul>
                </div>
                <div id="myTabContent">
                  <div
                    className="h-[340px] p-3 rounded-lg bg-gray-50 dark:bg-gray-800"
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    <VehicleList />
                  </div>
                  <div
                    className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
                    id="dashboard"
                    role="tabpanel"
                    aria-labelledby="dashboard-tab"
                  >
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      This is some placeholder content the{' '}
                      <strong className="font-medium text-gray-800 dark:text-white">
                        Dashboard tab's associated content
                      </strong>
                      . Clicking another tab will toggle the visibility of this
                      one for the next. The tab JavaScript swaps classes to
                      control the content visibility and styling.
                    </p>
                  </div>
                  <div
                    className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
                    id="settings"
                    role="tabpanel"
                    aria-labelledby="settings-tab"
                  >
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      This is some placeholder content the{' '}
                      <strong className="font-medium text-gray-800 dark:text-white">
                        Settings tab's associated content
                      </strong>
                      . Clicking another tab will toggle the visibility of this
                      one for the next. The tab JavaScript swaps classes to
                      control the content visibility and styling.
                    </p>
                  </div>
                  <div
                    className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
                    id="contacts"
                    role="tabpanel"
                    aria-labelledby="contacts-tab"
                  >
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      This is some placeholder content the{' '}
                      <strong className="font-medium text-gray-800 dark:text-white">
                        Contacts tab's associated content
                      </strong>
                      . Clicking another tab will toggle the visibility of this
                      one for the next. The tab JavaScript swaps classes to
                      control the content visibility and styling.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
            <div className="flex justify-end col-span-4">
              <button
                type="button"
                className="mt-1 font-bold focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-lg px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              >
                SAVE
              </button>
            </div>
          </>
        }
      />
    </div>
  );
}
