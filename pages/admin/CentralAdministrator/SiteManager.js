import Body from '../../../components/Body';
import users from '../../../data/operators.json';
import Inputfield from '../../../components/form/InputfieldIcon';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Signature from '../../../public/signature.jpg';
import { Line } from 'react-chartjs-2';

export default function SiteManager() {
  const [userList, setUserList] = useState([]);
  const [base, setBase] = useState('All');

  useEffect(() => {
    setUserList(users);
    console.log(userList);
  }, []);

  const data = {
    labels: [
      '01/04',
      '02/04',
      '03/04',
      '04/04',
      '05/04',
      '06/04',
      '07/04',
      '08/04',
    ],
    datasets: [
      {
        data: [0, 0, 3, 2, 2, 1, 3, 0],
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    elements: {
      line: {
        tension: 0,
        borderWidth: 2,
        borderColor: 'rgba(47,97,68,1)',
        fill: 'start',
        backgroundColor: 'rgba(47,97,68,0.3)',
      },
      point: {
        radius: 0,
        hitRadius: 0,
      },
    },
    scales: {
      xAxis: {
        display: false,
      },
      yAxis: {
        display: false,
      },
    },
  };

  const baseFilter = function (e) {
    console.log(e.target.value);
    setBase(e.target.value);
    return setUserList(
      e.target.value === 'All'
        ? users
        : users.filter((user) => user.Installation == e.target.value)
    );
  };

  return (
    <div className="px-4 md:px-16">
      <p className="text-gray-700 text-3xl mb-4 font-bold">Site Manager</p>
      <Body
        color="bg-gradient-to-t from-slate-100 to-red-50"
        content={
          <div className="grid grid-cols-2">
            <div className="">
              <div className="col-span-2">
                <div className="mt-2 py-0.5 py-1 ml-1 border border-gray-400 shadow-sm px-2 rounded-lg bg-slate-200 tracking-wide">
                  Site Director:
                </div>
              </div>

              <div className="col-span-2 border border-gray-400 rounded-lg ml-2 py-3 bg-gray-200">
                <table className="text-sm text-left text-gray-500 dark:text-gray-400 overflow-y-auto border border-gray-300 shadow-sm px-2 rounded-xl px-3">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-150 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-2 text-center">
                        LastName
                      </th>
                      <th scope="col" className="px-6 py-2 text-center">
                        FirstName
                      </th>
                      <th scope="col" className="px-6 py-2 text-center">
                        Installation
                      </th>
                      <th scope="col" className="px-6 py-2 text-center">
                        Phone
                      </th>
                      <th scope="col" className="px-6 py-2 text-center">
                        Roles
                      </th>
                      <th scope="col" className="px-6 py-2 text-center">
                        Status
                      </th>
                      <th scope="col" className="px-6 py-2 text-center">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-yellow-200 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <td className="px-6 py-3 text-center font-semibold text-gray-900 dark:text-white">
                        Williams
                      </td>
                      <td className="px-6 py-3 text-center">
                        <div className="flex items-center font-semibold space-x-3 text-gray-900">
                          Jared
                        </div>
                      </td>
                      <td className="px-6 py-3 text-center font-semibold text-gray-900 dark:text-white">
                        Aviano
                      </td>
                      <td className="px-6 py-3 text-center font-semibold text-gray-900 dark:text-white text-center">
                        7245611
                      </td>
                      <td className="px-6 py-3 text-center font-semibold text-gray-900 dark:text-white">
                        Administrator
                      </td>
                      <td className="px-6 py-3 text-center font-semibold text-gray-900 dark:text-white">
                        Online
                      </td>
                      <td className="px-6 py-3 text-center">
                        <a
                          href="#"
                          className="font-medium text-red-600 dark:text-red-500 hover:underline border border-yellow-300 bg-gray-100 rounded px-1"
                        >
                          Edit
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-span-3"></div>
              <div className="col-span-2">
                <div className="mt-5 py-0.5 py-1 ml-1 border border-gray-400 shadow-sm px-2 rounded-lg bg-slate-200 tracking-wide">
                  Site Operator:
                </div>
              </div>
              <div className="w-full col-span-3"></div>
              <div className="col-span-2 border border-gray-400 rounded-lg ml-2 py-3 bg-gray-200">
                <div>
                  <span className="mx-1">Filter by:</span>
                  <select
                    className="rounded border border-gray-50 ml-1 shadow h-10 text-sm font-medium mb-2 text-blue-600"
                    onChange={baseFilter}
                    value={base}
                  >
                    <option value="All" key="All">
                      All the operators..
                    </option>
                    <option value="AVIANO" key="AVIANO">
                      Aviano
                    </option>
                    <option value="LIVORNO" key="LIVORNO">
                      Livorno
                    </option>
                    <option value="NAPLES" key="NAPLES">
                      Napoli
                    </option>
                    <option value="SIGONELLA" key="SIGONELLA">
                      Sigonella
                    </option>
                    <option value="VICENZA" key="VICENZA">
                      Vicenza
                    </option>
                  </select>
                </div>
                <table className="w-full text-left text-sm font-light bg-gray-300">
                  <thead className="border-b dark:border-neutral-500">
                    <tr>
                      <th
                        scope="col"
                        className="uppercase w-48 px-1 py-2 border border-gray-200"
                      >
                        Last Name
                      </th>
                      <th
                        scope="col"
                        className="uppercase w-52 px-1 py-2 border border-gray-200"
                      >
                        First Name
                      </th>
                      <th
                        scope="col"
                        className="uppercase w-44 px-1 py-2 border text-center border-gray-200"
                      >
                        Installation
                      </th>
                      <th
                        scope="col"
                        className="uppercase w-44 py-2 text-center"
                      >
                        Phone
                      </th>
                      <th
                        scope="col"
                        className="uppercase w-60 py-2 text-center border border-gray-200"
                      >
                        Role
                      </th>
                      <th
                        scope="col"
                        className="uppercase w-40 py-2 text-center"
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className="uppercase w-20 py-2 border border-gray-200"
                      >
                        &nbsp;
                      </th>
                    </tr>
                  </thead>
                </table>
                <div className="flex flex-col overflow-y-auto">
                  <div className="h-96 sm:-ml-2 lg:-ml-1 w-full">
                    <div className="inline-block w-full py-2 sm:px-6 lg:px-4 bg-white ">
                      <div className="">
                        <table className="w-full text-left text-sm font-light -ml-2">
                          <tbody className="">
                            {userList.map(function (user, index) {
                              return (
                                <>
                                  <tr
                                    key={index}
                                    className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600 cursor-pointer "
                                  >
                                    <td className="whitespace-nowrap px-1 py-3 font-medium w-56">
                                      {user.LastName}
                                    </td>
                                    <td className="whitespace-nowrap px-1 py-3 w-56">
                                      {user.FirstName}
                                    </td>
                                    <td className="whitespace-nowrap px-1 py-3 w-44">
                                      {user.Installation}
                                    </td>
                                    <td className="whitespace-nowrap px-1 py-3 w-56">
                                      {user.Phone}
                                    </td>
                                    <td className="whitespace-nowrap px-1 py-3 w-56">
                                      {user.Role}
                                    </td>
                                    <td className="whitespace-nowrap px-1 py-3 w-44">
                                      <div className="flex justify-between">
                                        <div className="">Active</div>
                                        {user.Online ? (
                                          <div className="h-2 w-2 bg-green-600 rounded mt-1.5"></div>
                                        ) : (
                                          <div className="h-2 w-2 bg-red-600 rounded mt-1.5"></div>
                                        )}
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="px-1"></td>
                                  </tr>
                                </>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 flex justify-between">
                  <div>
                    <button className="bg-gray-400 rounded text-white px-5 ml-2 border border-gray-200 shadow text-base py-1 mt-3 hover:bg-blue-500 tracking-wide">
                      Print
                    </button>
                  </div>
                  <div className="py-3 flex justify-end mr-7 text-slate-700 font-bold">
                    Total Users: {userList.length}
                  </div>
                </div>
              </div>
              <div className="col-span-3 "></div>
            </div>
            <div className="grid grid-cols-3 border border-gray-400 px-2 py-2 mx-2 my-2 rounded-lg bg-slate-50 content-start">
              <div>
                <Inputfield
                  key="firstNameSM"
                  name="firstNameSM"
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
                  key="lastNameSM"
                  name="lastNameSM"
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
                  key="creationDate"
                  name="creationDate"
                  placeholder="Creation Date"
                  errorMessage=""
                  maxlength="20"
                  label="Creation Date"
                  type="date"
                  required="true"
                  value=""
                />
              </div>
              <div className="col-span-2">
                <Inputfield
                  key="emailSM"
                  name="emailSM"
                  placeholder="Email"
                  errorMessage=""
                  maxlength="45"
                  label="Email"
                  type="text"
                  required="true"
                  value=""
                />
              </div>
              <div>
                <Inputfield
                  key="phoneSM"
                  name="phoneSM"
                  placeholder="(626) 8998"
                  errorMessage=""
                  maxlength="25"
                  label="Phone"
                  type="text"
                  required="true"
                  value=""
                />
              </div>
              <div className="col-span-3">
                <div className="grid grid-cols-4">
                  <div>
                    <Inputfield
                      key="edipi"
                      name="edipi"
                      placeholder="Edipi"
                      errorMessage=""
                      maxlength="10"
                      label="EDIPI"
                      type="text"
                      required="true"
                      value=""
                    />
                  </div>
                  <div>
                    <Inputfield
                      key="certIssued"
                      name="certIssued"
                      placeholder="Certificate Issuance"
                      errorMessage=""
                      maxlength="20"
                      label="Certificate Issuance"
                      type="date"
                      required="true"
                      value=""
                    />
                  </div>
                  <div>
                    <Inputfield
                      key="certExp"
                      name="certExp"
                      placeholder="Certificate Expiration"
                      errorMessage=""
                      maxlength="20"
                      label="Certificate Expiration"
                      type="date"
                      required="true"
                      value=""
                    />
                  </div>
                  <div>
                    <div className="block text-gray-700 xl:text-xl xl:font-bold md:text-sm ml-2 mt-1">
                      Status:
                    </div>
                    <div className="mr-1">
                      <select
                        className="rounded ml-1 shadow h-10 py-1 w-full text-md font-medium mb-2 text-gray-600 border border-gray-600"
                        name="statusSM"
                      >
                        <option value="Active" key="Active">
                          Active
                        </option>
                        <option value="Disabled" key="Disabled">
                          Disabled
                        </option>
                        <option value="Locked" key="Locked">
                          Locked
                        </option>
                        <option value="Pending" key="Pending">
                          Pending Registration
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="rounded-md bg-white h-60 shadow-lg col-span-4">
                    <Line
                      data={data}
                      width={300}
                      height={120}
                      options={options}
                    />
                  </div>
                  <div className="col-span-4">
                    <div className="border border-gray-200 rounded-md shadow bg-red-400 text-gray-700 md:text-md text-white font-bold py-1 px-1">
                      Roles:
                    </div>{' '}
                    <div className="flex justify-left mt-1 border border-gray-200 rounded px-1 py-1">
                      <div className="mb-[0.125rem] mr-4 inline-block min-h-[1.5rem] pl-[1.5rem] pr-3 border-r-4">
                        <input
                          className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:checked:focus:border-primary"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio1"
                          value="option1"
                        />
                        <label
                          className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                          for="inlineRadio1"
                        >
                          Viewer
                        </label>
                      </div>

                      <div className="mb-[0.125rem] mr-4 inline-block min-h-[1.5rem] pl-[1.5rem] pr-3 border-r-4">
                        <input
                          className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:checked:focus:border-primary"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio2"
                          value="option2"
                        />
                        <label
                          className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                          for="inlineRadio2"
                        >
                          Operator
                        </label>
                      </div>
                      <div className="mb-[0.125rem] mr-4 inline-block min-h-[1.5rem] pl-[1.5rem] pr-3 border-r-4">
                        <input
                          className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:checked:focus:border-primary"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio3"
                          value="option3"
                        />
                        <label
                          className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                          for="inlineRadio3"
                        >
                          Administrator
                        </label>
                      </div>

                      <div className="mb-[0.125rem] mr-4 inline-block min-h-[1.5rem] pl-[1.5rem] pr-3 border-r-4">
                        <input
                          className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:checked:focus:border-primary"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio4"
                          value="option4"
                        />
                        <label
                          className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                          for="inlineRadio4"
                        >
                          Central Administrator
                        </label>
                      </div>

                      <div className="mb-[0.125rem] mr-4 inline-block min-h-[1.5rem] pl-[1.5rem]">
                        <input
                          className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary"
                          type="checkbox"
                          id="inlineCheckbox1"
                          value="option1"
                        />
                        <label
                          className="inline-block pl-[0.15rem] hover:cursor-pointer"
                          for="inlineCheckbox1"
                        >
                          Printing
                        </label>
                      </div>

                      <div className="mb-[0.125rem] mr-4 inline-block min-h-[1.5rem] pl-[1.5rem]">
                        <input
                          className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary"
                          type="checkbox"
                          id="inlineCheckbox2"
                          value="option2"
                        />
                        <label
                          className="inline-block pl-[0.15rem] hover:cursor-pointer"
                          for="inlineCheckbox2"
                        >
                          Approver
                        </label>
                      </div>
                      <div className="mb-[0.125rem] mr-4 inline-block min-h-[1.5rem] pl-[1.5rem]">
                        <input
                          className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary"
                          type="checkbox"
                          id="inlineCheckbox2"
                          value="option2"
                        />
                        <label
                          className="inline-block pl-[0.15rem] hover:cursor-pointer"
                          for="inlineCheckbox2"
                        >
                          Supervisor
                        </label>
                      </div>
                    </div>
                    <div className="border border-gray-200 rounded-md shadow bg-red-400 text-gray-700 md:text-md text-white font-bold py-1 px-1 mt-1">
                      Installation:
                    </div>
                    <div className="flex justify-left mt-1 border border-gray-200 rounded px-1 py-1">
                      <div className="mb-[0.125rem] mr-4 inline-block min-h-[1.5rem] pl-[1.5rem] pr-3 border-r-4">
                        <input
                          className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:checked:focus:border-primary"
                          type="radio"
                          name="installationRadio"
                          id="installationRadio1"
                          value="option1"
                        />
                        <label
                          className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                          for="inlineRadio1"
                        >
                          Aviano
                        </label>
                      </div>
                      <div className="mb-[0.125rem] mr-4 inline-block min-h-[1.5rem] pl-[1.5rem] pr-3 border-r-4">
                        <input
                          className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:checked:focus:border-primary"
                          type="radio"
                          name="installationRadio"
                          id="installationRadio3"
                          value="option3"
                        />
                        <label
                          className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                          for="installationRadio3"
                        >
                          La Spezia
                        </label>
                      </div>

                      <div className="mb-[0.125rem] mr-4 inline-block min-h-[1.5rem] pl-[1.5rem] pr-3 border-r-4">
                        <input
                          className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:checked:focus:border-primary"
                          type="radio"
                          name="installationRadio"
                          id="installationRadio4"
                          value="option4"
                        />
                        <label
                          className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                          for="installationRadio4"
                        >
                          Livorno
                        </label>
                      </div>
                      <div className="mb-[0.125rem] mr-4 inline-block min-h-[1.5rem] pl-[1.5rem] pr-3 border-r-4">
                        <input
                          className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:checked:focus:border-primary"
                          type="radio"
                          name="installationRadio"
                          id="installationRadio5"
                          value="option5"
                        />
                        <label
                          className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                          for="installationRadio5"
                        >
                          Napoli
                        </label>
                      </div>

                      <div className="mb-[0.125rem] mr-4 inline-block min-h-[1.5rem] pl-[1.5rem] pr-3 border-r-4">
                        <input
                          className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:checked:focus:border-primary"
                          type="radio"
                          name="installationRadio"
                          id="installationRadio6"
                          value="option6"
                        />
                        <label
                          className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                          for="installationRadio6"
                        >
                          Sigonella
                        </label>
                      </div>
                      <div className="mb-[0.125rem] mr-4 inline-block min-h-[1.5rem] pl-[1.5rem] pr-3 border-r-4">
                        <input
                          className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:checked:focus:border-primary"
                          type="radio"
                          name="installationRadio"
                          id="installationRadio7"
                          value="option7"
                        />
                        <label
                          className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                          for="installationRadio7"
                        >
                          Vicenza
                        </label>
                      </div>
                    </div>
                    <div className="border border-gray-200 rounded-md shadow bg-red-400 text-gray-700 md:text-md text-white font-bold py-1 px-1 mt-3">
                      Director Signature:
                    </div>
                    <div className="flex items-center space-x-4">
                      <Image
                        src={Signature}
                        alt="Picture of the Site Director"
                        className="w-54 h-16 border border-gray-300 rounded mt-3 shadow ml-1"
                      />
                    </div>
                  </div>{' '}
                  <div className="col-span-4">
                    <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
                  </div>
                  <div className="flex justify-between col-span-4">
                    <button
                      type="button"
                      className="mt-1 font-bold focus:outline-none text-white bg-slate-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-lg px-5 py-2 mr-2 mb-2 dark:bg-slate-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                    >
                      DELETE
                    </button>
                    <button
                      type="button"
                      className="mt-1 font-bold focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-lg px-5 py-2 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                    >
                      SAVE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
      />
    </div>
  );
}
