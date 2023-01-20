import { forwardRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ClipboardIcon, PencilIcon, SearchIcon } from '@heroicons/react/solid';

import {
  ChartPieIcon,
  ClipboardListIcon,
  BriefcaseIcon,
  TableIcon,
  InboxIcon,
  CogIcon,
  AnnotationIcon,
  ViewListIcon,
  ChartBarIcon,
  OfficeBuildingIcon,
  UserAddIcon,
  UserRemoveIcon,
  IdentificationIcon,
  DocumentDuplicateIcon,
  DocumentIcon,
  CalendarIcon,
  HomeIcon,
  TagIcon,
  CheckCircleIcon,
  UsersIcon,
  UserIcon,
  LockOpenIcon,
  DocumentReportIcon,
  TruckIcon,
  ChartSquareBarIcon,UserCircleIcon
} from '@heroicons/react/outline';

import { Bars4Icon } from '@heroicons/react/solid';

import { useRouter } from 'next/router';

const OperatorItems = [
  {
    name: 'Waiting List',
    url: '/',
    icon: <CalendarIcon className="h-7 w-7" />,
  },
  {
    name: 'Inprocessing',
    url: '/user',
    icon: <UserAddIcon className="h-7 w-7" />,
  },
  {
    name: 'Personnel and Vehicles',
    url: '/credit',
    icon: <InboxIcon className="h-7 w-7" />,
  },
  {
    name: 'Outprocessing',
    url: '/credit',
    icon: <UserRemoveIcon className="h-7 w-7" />,
  },
  {
    name: 'Tag Tracker',
    url: '/credit',
    icon: <TagIcon className="h-7 w-7" />,
  },
  {
    name: 'Forms and Reports',
    url: '/credit',
    icon: <DocumentDuplicateIcon className="h-7 w-7" />,
  },
  {
    name: 'Sponsor Audit',
    url: '/sponsoraudit',
    icon: <UsersIcon className="h-7 w-7" />,
  },
];
const AdministratorItems = [
  {
    name: 'Admin Log',
    url: '/',
    icon: <ChartSquareBarIcon className="h-7 w-7" />,
  },
  {
    name: 'Foundation Data',
    url: '/user',
    icon: <OfficeBuildingIcon className="h-7 w-7" />,
  },
  {
    name: 'Administrative Functions',
    url: '/user',
    icon: <BriefcaseIcon className="h-7 w-7" />,
  },
  {
    name: 'Approver Functions',
    url: '/credit',
    icon: <LockOpenIcon className="h-7 w-7" />,
  },
  {
    name: 'Supervisor Reports',
    url: '/credit',
    icon: <DocumentReportIcon className="h-7 w-7" />,
  },
  {
    name: 'Advanced Reports',
    url: '/credit',
    icon: <ClipboardListIcon className="h-7 w-7" />,
  },
];

const CadministratorItems = [
  {
    name: 'MOI Report',
    url: '/moi',
    icon: <TableIcon className="h-7 w-7" />,
  },
  {
    name: 'Site Manager',
    url: '/admvehicle',
    icon: <IdentificationIcon className="h-7 w-7" />,
  },
  {
    name: 'Vehicle Functions',
    url: '/admvehicle',
    icon: <TruckIcon className="h-7 w-7" />,
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

            <small className="text-muted text-sm text-gray-300">
              CMVRO Administrator
            </small>
          </div>
        </a>
      </div>
      <div className="flex flex-col">
        {' '}
        
        <div className="pl-2 text-gray-200 mt-2 flex">Viewer</div>
        <Link href="/" key="{item.name}">
          <div
            className={`pl-3 py-1 mx-2 pt-2 rounded text-center cursor-pointer flex items-center transition-colors ${
              router.pathname == '/'
                ? 'text-gray-400 hover:text-blue-100'
                : 'text-gray-400 hover:bg-orange-100 hover:text-orange-500'
            }`}
          >
            <div className="mr-2">
              <ChartPieIcon className="h-7 w-7" />
            </div>
            <div>
              <p>Dashboard</p>
            </div>
          </div>
        </Link>
      </div>
      <div className="flex flex-col">
        <div className="pl-2 text-gray-200 mt-2">Operator</div>
        {OperatorItems.map((item) => {
          return (
            <Link href="/" key="{item.name}">
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
          );
        })}
        <div className="pl-2 text-gray-200 mt-2">Site Administrator</div>
        {AdministratorItems.map((item) => {
          return (
            <Link href="/" key="{item.name}">
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
          );
        })}
        <div className="pl-2 text-gray-200 mt-2">Central Administrator</div>
        {CadministratorItems.map((item) => {
          return (
            <Link href="/" key="{item.name}">
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
          );
        })}
      </div>
    </div>
  );
});

// eslint-disable-next-line react/display-name
SideBar.displayName = 'SideBar';
export default SideBar;
