import Body from '../../components/Body';

export default function SiteManager() {
  const users = [
    {
      LastName: 'BAITA',
      FirstName: 'MICHELA',
      Role: 'OPERATOR',
      Installation: 'AVIANO',
      Phone: 6261234,
      Online: true,
    },
    {
      LastName: 'CIARANFI',
      FirstName: 'SARAH',
      Role: 'ADMINISTRATOR',
      Installation: 'AVIANO',
      Phone: 6261234,
      Online: true,
    },
    {
      LastName: 'DAVIS',
      FirstName: 'DOMINIC',
      Role: 'OPERATOR',
      Installation: 'AVIANO',
      Phone: 6261234,
      Online: true,
    },
    {
      LastName: 'EVERHART',
      FirstName: 'KAYLA',
      Role: 'OPERATOR',
      Installation: 'AVIANO',
      Phone: 6261234,
      Online: true,
    },
    {
      LastName: 'GODOY',
      FirstName: 'JAYLEEN',
      Role: 'OPERATOR',
      Installation: 'AVIANO',
      Phone: 6261234,
      Online: false,
    },
    {
      LastName: 'HANNAS',
      FirstName: 'HANNAH',
      Role: 'OPERATOR',
      Installation: 'AVIANO',
      Phone: 6261234,
      Online: true,
    },
    {
      LastName: 'KOLLOCK',
      FirstName: 'ELIJAH',
      Role: 'OPERATOR',
      Installation: 'AVIANO',
      Phone: 6261234,
      Online: true,
    },
    {
      LastName: 'MARICONDA',
      FirstName: 'PAMELA',
      Role: 'ADMINISTRATOR',
      Installation: 'AVIANO',
      Phone: 6261234,
      Online: true,
    },
    {
      LastName: 'ROSSI',
      FirstName: 'DANIELA',
      Role: 'OPERATOR',
      Installation: 'AVIANO',
      Phone: 6261234,
      Online: true,
    },
    {
      LastName: 'RUCKER-YOUNG',
      FirstName: 'LARRY',
      Role: 'OPERATOR',
      Installation: 'AVIANO',
      Phone: 6261234,
      Online: true,
    },
    {
      LastName: 'VALERI',
      FirstName: 'GIANLUCA',
      Role: 'OPERATOR',
      Installation: 'AVIANO',
      Phone: 6261234,
      Online: true,
    },
    {
      LastName: 'WILLIAMS',
      FirstName: 'JACKIE',
      Role: 'ADMINISTRATOR',
      Installation: 'AVIANO',
      Phone: 6261234,
      Online: true,
    },
    {
      LastName: 'ZUNIGA',
      FirstName: 'BRUNO',
      Role: 'OPERATOR',
      Installation: 'AVIANO',
      Phone: 6261234,
      Online: true,
    },
    {
      LastName: 'ANNOLI',
      FirstName: 'PAOLA',
      Role: 'ADMINISTRATOR',
      Installation: 'VICENZA',
      Phone: 6261234,
      Online: true,
    },
    {
      LastName: 'BROWN',
      FirstName: 'RAY',
      Role: 'ADMINISTRATOR',
      Installation: 'VICENZA',
      Phone: 6261234,
      Online: true,
    },
    {
      LastName: 'BRUSAMOLIN',
      FirstName: 'SILVIA',
      Role: 'ADMINISTRATOR',
      Installation: 'VICENZA',
      Phone: 6261234,
      Online: true,
    },
    {
      LastName: 'FALCONE',
      FirstName: 'ELENA',
      Role: 'OPERATOR',
      Installation: 'VICENZA',
      Phone: 6261234,
      Online: true,
    },
    {
      LastName: 'PRETA',
      FirstName: 'KATIA',
      Role: 'ADMINISTRATOR',
      Installation: 'VICENZA',
      Phone: 6261234,
      Online: true,
    },
    {
      LastName: 'SPAGNUOLO',
      FirstName: 'RITA',
      Role: 'ADMINISTRATOR',
      Installation: 'VICENZA',
      Phone: 6261234,
      Online: true,
    },
    {
      LastName: 'ATERNO',
      FirstName: 'DANIELA',
      Role: 'OPERATOR',
      Installation: 'NAPLES',
      Phone: 6261234,
      Online: true,
    },
    {
      LastName: 'BRANCALE',
      FirstName: 'GENNARO',
      Role: 'CENTRAL',
      Installation: 'NAPLES',
      Phone: 6261234,
      Online: true,
    },
    {
      LastName: 'CATALANO',
      FirstName: 'GIUSEPPINA',
      Role: 'OPERATOR',
      Installation: 'NAPLES',
      Phone: 6261234,
      Online: true,
    },
    {
      LastName: 'CAVALLERI',
      FirstName: 'CIRO',
      Role: 'CENTRAL',
      Installation: 'NAPLES',
      Phone: 6261234,
      Online: true,
    },
    {
      LastName: 'DE',
      FirstName: 'CRISTOFARO',
      Role: 'CARMELA',
      Installation: 'NAPLES',
      Phone: 6261234,
      Online: true,
    },
    {
      LastName: 'DEL',
      FirstName: 'GROSSO',
      Role: 'LUCA',
      Installation: 'NAPLES',
      Phone: 6261234,
      Online: true,
    },
    {
      LastName: 'DI',
      FirstName: 'GAETA',
      Role: 'ANNA',
      Installation: 'NAPLES',
      Phone: 6261234,
      Online: true,
    },
    {
      LastName: 'ESPOSITO',
      FirstName: 'ROSA',
      Role: 'ADMINISTRATOR',
      Installation: 'NAPLES',
      Phone: 6261234,
      Online: true,
    },
    {
      LastName: 'GLENN',
      FirstName: 'ANDREW',
      Role: 'APPLICATION',
      Installation: 'NAPLES',
      Phone: 6261234,
      Online: true,
    },
    {
      LastName: 'GREEN',
      FirstName: 'TODD',
      Role: 'APPLICATION',
      Installation: 'NAPLES',
      Phone: 6261234,
      Online: true,
    },
    {
      LastName: 'HOOKER',
      FirstName: 'BRUCE',
      Role: 'OPERATOR',
      Installation: 'NAPLES',
      Phone: 6261234,
      Online: true,
    },
    {
      LastName: 'IMPARATO',
      FirstName: 'STEFANO',
      Role: 'ADMINISTRATOR',
      Installation: 'NAPLES',
      Phone: 6261234,
      Online: true,
    },
    {
      LastName: 'JACKSON',
      FirstName: 'CURTIS',
      Role: 'VIEWER',
      Installation: 'NAPLES',
      Phone: 6261234,
      Online: true,
    },
    {
      LastName: 'LAMIS',
      FirstName: 'ALEXANDER',
      Role: 'ADMINISTRATOR',
      Installation: 'NAPLES',
      Phone: 6261234,
      Online: true,
    },
    {
      LastName: 'MARCHESE',
      FirstName: 'SIMONA',
      Role: 'CENTRAL',
      Installation: 'NAPLES',
      Phone: 6261234,
      Online: true,
    },
    {
      LastName: 'MAUTONE',
      FirstName: 'GIUSEPPE',
      Role: 'OPERATOR',
      Installation: 'NAPLES',
      Phone: 6261234,
      Online: true,
    },
    {
      LastName: 'PAGLIUCA',
      FirstName: 'FRANCESCO',
      Role: 'OPERATOR',
      Installation: 'NAPLES',
      Phone: 6261234,
      Online: true,
    },
    {
      LastName: 'PASSARELLI',
      FirstName: 'ANNA',
      Role: 'OPERATOR',
      Installation: 'NAPLES',
      Phone: 6261234,
      Online: false,
    },
    {
      LastName: 'PESTILLO',
      FirstName: 'JALEN',
      Role: 'APPLICATION',
      Installation: 'NAPLES',
      Phone: 6261234,
      Online: true,
    },
    {
      LastName: 'PETICCHI',
      FirstName: 'ANTONIO',
      Role: 'ADMINISTRATOR',
      Installation: 'NAPLES',
      Phone: 6261234,
      Online: true,
    },
    {
      LastName: 'PETRUCCI',
      FirstName: 'NICK',
      Role: 'VIEWER',
      Installation: 'NAPLES',
      Phone: 6261234,
      Online: true,
    },
    {
      LastName: 'PITAGORA',
      FirstName: 'RENATO',
      Role: 'VIEWER',
      Installation: 'NAPLES',
      Phone: 6261234,
      Online: true,
    },
    {
      LastName: 'RECANO',
      FirstName: 'LUCIA',
      Role: 'CENTRAL',
      Installation: 'NAPLES',
      Phone: 6261234,
      Online: true,
    },
    {
      LastName: 'REGA',
      FirstName: 'MICHELE',
      Role: 'OPERATOR',
      Installation: 'NAPLES',
      Phone: 6261234,
      Online: true,
    },
    {
      LastName: 'RICCARDO',
      FirstName: 'ANGELO',
      Role: 'OPERATOR',
      Installation: 'NAPLES',
      Phone: 6261234,
      Online: true,
    },
    {
      LastName: 'RIOLA',
      FirstName: 'CARMEN',
      Role: 'OPERATOR',
      Installation: 'NAPLES',
      Phone: 6261234,
      Online: true,
    },
    {
      LastName: 'SAMBRI',
      FirstName: 'SANDRA',
      Role: 'CENTRAL',
      Installation: 'NAPLES',
      Phone: 6261234,
      Online: true,
    },
    {
      LastName: 'SUPINO',
      FirstName: 'ALESSIA',
      Role: 'OPERATOR',
      Installation: 'NAPLES',
      Phone: 6261234,
      Online: true,
    },
    {
      LastName: 'SYMONDS',
      FirstName: 'JACQUELYN',
      Role: 'VIEWER',
      Installation: 'NAPLES',
      Phone: 6261234,
      Online: true,
    },
    {
      LastName: 'BALBO',
      FirstName: 'CARMELO',
      Role: 'OPERATOR',
      Installation: 'SIGONELLA',
      Phone: 6261234,
      Online: true,
    },
    {
      LastName: 'CUSCUNA',
      FirstName: 'NUCCIA',
      Role: 'ADMINISTRATOR',
      Installation: 'SIGONELLA',
      Phone: 6261234,
      Online: true,
    },
    {
      LastName: 'FRANKLIN',
      FirstName: 'CHRISTOPHER',
      Role: 'OPERATOR',
      Installation: 'SIGONELLA',
      Phone: 6261234,
      Online: true,
    },
    {
      LastName: 'MAVILIA',
      FirstName: 'LUCA',
      Role: 'ADMINISTRATOR',
      Installation: 'SIGONELLA',
      Phone: 6261234,
      Online: true,
    },
    {
      LastName: 'MESSINA',
      FirstName: 'GIUSY',
      Role: 'ADMINISTRATOR',
      Installation: 'SIGONELLA',
      Phone: 6261234,
      Online: true,
    },
    {
      LastName: 'PIRRONE',
      FirstName: 'GIUSEPPE',
      Role: 'OPERATOR',
      Installation: 'SIGONELLA',
      Phone: 6261234,
      Online: true,
    },
    {
      LastName: 'STOKES',
      FirstName: 'CHELSEA',
      Role: 'ADMINISTRATOR',
      Installation: 'SIGONELLA',
      Phone: 6261234,
      Online: false,
    },
    {
      LastName: 'APRILE',
      FirstName: 'SARA',
      Role: 'ADMINISTRATOR',
      Installation: 'LIVORNO',
      Phone: 6261234,
      Online: true,
    },
  ];

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
              <div ><span className='mx-1'>Filter by:</span><select className='rounded border border-gray-50 ml-1 shadow h-10 text-sm font-medium mb-2 text-blue-600'><option value="All">All the operators..</option><option value="Napoli">Napoli</option></select></div>
              <table className="w-full text-left text-sm font-light bg-gray-300">
                <thead className="border-b dark:border-neutral-500">
                  <tr>
                    <th scope="col" className="uppercase w-56 px-1 py-2">
                      Last Name
                    </th>
                    <th scope="col" className="uppercase w-52 px-1 py-2">
                      First Name
                    </th>
                    <th scope="col" className="uppercase w-52 px-1 py-2">
                      Installation
                    </th>
                    <th scope="col" className="uppercase w-52 py-2">
                      Phone
                    </th>
                    <th scope="col" className="uppercase w-56 py-2">
                      Role
                    </th>
                    <th scope="col" className="uppercase w-60 py-2">
                      Status
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
                              <tr key={user.LastName} className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600 ">
                                <td className="whitespace-nowrap px-1 py-3 font-medium w-56">
                                {user.LastName}
                                </td>
                                <td className="whitespace-nowrap px-1 py-3 w-56">
                                {user.FirstName}
                                </td>
                                <td className="whitespace-nowrap px-1 py-3 w-52">
                                {user.Installation}
                                </td>
                                <td className="whitespace-nowrap px-1 py-3 w-52">
                                {user.Phone}
                                </td>
                                <td className="whitespace-nowrap px-1 py-3 w-56">
                                {user.Role}
                                </td>
                                <td className="whitespace-nowrap px-1 py-3 w-52">
                                {user.Online ? "Online" : ""}
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div><button className="bg-gray-400 rounded text-white px-5 ml-2 border border-gray-200 shadow text-base py-1 mt-3 hover:bg-blue-500 tracking-wide">Print</button></div>
            </div>
            <div className="col-span-3"></div>
          </div>
        }
      />
    </div>
  );
}
