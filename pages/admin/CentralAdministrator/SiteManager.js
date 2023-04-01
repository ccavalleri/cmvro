import Body from '../../../components/Body';
import users from '../../../data/operators.json';

export default function SiteManager() {
  return (
    <div className="px-4 md:px-16">
      <p className="text-gray-700 text-3xl mb-4 font-bold">Site Manager</p>
      <Body
        color="bg-gradient-to-t from-slate-100 to-red-50"
        content={
          <div className="grid grid-cols-5 gap-2 ">
            <div className="col-span-2">
              <div className="mt-2 py-0.5 py-1 ml-1 border border-gray-300 shadow-sm px-2 rounded-lg bg-slate-200 tracking-wide">
                Site Director:
              </div>
            </div>
            <div className="col-span-3 "></div>
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
              <div className="mt-2 py-0.5 py-1 ml-1 border border-gray-300 shadow-sm px-2 rounded-lg bg-slate-200 tracking-wide">
                Site Operator:
              </div>
            </div>
            <div className="w-full col-span-3"></div>
            <div className="col-span-2 border border-gray-400 rounded-lg ml-2 py-3 bg-gray-200">
              <div>
                <span className="mx-1">Filter by:</span>
                <select className="rounded border border-gray-50 ml-1 shadow h-10 text-sm font-medium mb-2 text-blue-600">
                  <option value="All">All the operators..</option>
                  <option value="Napoli">Napoli</option>
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
                    <th scope="col" className="uppercase w-44 py-2 text-center">
                      Phone
                    </th>
                    <th
                      scope="col"
                      className="uppercase w-60 py-2 text-center border border-gray-200"
                    >
                      Role
                    </th>
                    <th scope="col" className="uppercase w-40 py-2 text-center">
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
                          {users.map(function (user) {
                            return (
                              <>
                                <tr
                                  key={user.LastName}
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
              <div>
                <button className="bg-gray-400 rounded text-white px-5 ml-2 border border-gray-200 shadow text-base py-1 mt-3 hover:bg-blue-500 tracking-wide">
                  Print
                </button>
              </div>
            </div>
            <div className="col-span-3"></div>
          </div>
        }
      />
    </div>
  );
}
