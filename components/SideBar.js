import { forwardRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ClipboardIcon,
  UserIcon,
  PencilIcon,
  SearchIcon,
  CalendarIcon,
  DocumentIcon,
} from '@heroicons/react/solid';
import { useRouter } from 'next/router';

const OperatorItems = [
  {
    name: 'Waiting List',
    url: '/',
    icon: <CalendarIcon className="h-5 w-5" />,
  },
  {
    name: 'Inprocessing',
    url: '/user',
    icon: <UserIcon className="h-5 w-5" />,
  },
  {
    name: 'Personnel and Vehicles',
    url: '/credit',
    icon: <ClipboardIcon className="h-5 w-5" />,
  },
  {
    name: 'Outprocessing',
    url: '/credit',
    icon: <PencilIcon className="h-5 w-5" />,
  },
  {
    name: 'Tag Tracker',
    url: '/credit',
    icon: <SearchIcon className="h-5 w-5" />,
  },
  {
    name: 'Forms and Reports',
    url: '/credit',
    icon: <DocumentIcon className="h-5 w-5" />,
  },
  {
    name: 'Sponsor Audit',
    url: '/sponsoraudit',
    icon: <UserIcon className="h-5 w-5" />,
  },
];
const AdministratorItems = [
  {
    name: 'Admin Log',
    url: '/',
    icon: <CalendarIcon className="h-5 w-5" />,
  },
  {
    name: 'Administrative Functions',
    url: '/user',
    icon: <UserIcon className="h-5 w-5" />,
  },
  {
    name: 'Approver Functions',
    url: '/credit',
    icon: <ClipboardIcon className="h-5 w-5" />,
  },
  {
    name: 'Supervisor Reports',
    url: '/credit',
    icon: <DocumentIcon className="h-5 w-5" />,
  },
  {
    name: 'Advanced Reports',
    url: '/credit',
    icon: <DocumentIcon className="h-5 w-5" />,
  },
];

const CadministratorItems = [
  {
    name: 'MOI Report',
    url: '/moi',
    icon: <CalendarIcon className="h-5 w-5" />,
  },
  {
    name: 'Vehicle Functions',
    url: '/admvehicle',
    icon: <UserIcon className="h-5 w-5" />,
  },
];

const SideBar = forwardRef(({ showNav }, ref) => {
  const router = useRouter();
  return (
    <div
      ref={ref}
      className="fixed w-64 h-full bg-white shadow-sm bg-slate-800"
    >
      <div className="flex items-center sidebar-p-a border-b-2 bg-darker sidebar-account pt-4 pb-4 bg-slate-900">
        <a href="#" className="flex items-center text-underline-0 text-body">
          <div className="avatar w-12 h-22 mr-2">
            <Image
              src="https://www.repstatic.it/content/nazionale/img/2015/12/02/104806208-2ae1f9f6-f588-4bd7-9e84-4dbcaaf02301.jpg?webp"
              alt="Avatar"
              className="h-22 rounded-full ml-1 bg-darker border-1"
              width={100}
              height={100}
            ></Image>
          </div>
          <div className="leading-none text-white text-lg ml-2">
            <div className="mb-1">
              <strong>Bart di Muccio</strong>
            </div>

            <small class="text-muted text-sm text-gray-300">
              CMVRO Administrator
            </small>
          </div>
        </a>
      </div>
      <div className="flex flex-col">
        <div className="pl-2 text-gray-200 mt-2">Operator</div>
        {OperatorItems.map((item) => {
          return (
            <>
              <Link href="/" keys="{item.name}">
                <div
                  className={`pl-3 py-1 mx-2 pt-2 rounded text-center cursor-pointer flex items-center transition-colors ${
                    router.pathname == '/'
                      ? 'text-gray-400 hover:text-blue-100'
                      : 'text-gray-400 hover:bg-orange-100 hover:text-orange-500'
                  }`}
                >
                  <div className="mr-2">{item.icon}</div>
                  <div>
                    <p>{item.name}</p>
                  </div>
                </div>
              </Link>
            </>
          );
        })}
        <div className="pl-2 text-gray-200 mt-2">Site Administrator</div>
        {AdministratorItems.map((item) => {
          return (
            <>
              <Link href="/" keys="{item.name}">
                <div
                  className={`pl-3 py-1 mx-2 pt-2 rounded text-center cursor-pointer flex items-center transition-colors ${
                    router.pathname == '/'
                      ? 'text-gray-400 hover:text-blue-100'
                      : 'text-gray-400 hover:bg-orange-100 hover:text-orange-500'
                  }`}
                >
                  <div className="mr-2">{item.icon}</div>
                  <div>
                    <p>{item.name}</p>
                  </div>
                </div>
              </Link>
            </>
          );
        })}
        <div className="pl-2 text-gray-200 mt-2">Central Administrator</div>
        {CadministratorItems.map((item) => {
          return (
            <>
              <Link href="/" keys="{item.name}">
                <div
                  className={`pl-3 py-1 mx-2 pt-2 rounded text-center cursor-pointer flex items-center transition-colors ${
                    router.pathname == '/'
                      ? 'text-gray-400 hover:text-blue-100'
                      : 'text-gray-400 hover:bg-orange-100 hover:text-orange-500'
                  }`}
                >
                  <div className="mr-2">{item.icon}</div>
                  <div>
                    <p>{item.name}</p>
                  </div>
                </div>
              </Link>
            </>
          );
        })}
      </div>
    </div>
  );
});

SideBar.displayname = 'SideBar';
export default SideBar;
