import { forwardRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ClipboardIcon,
  PencilIcon,
  SearchIcon,
  setUserInterface,
} from '@heroicons/react/solid';
import { useRouter } from 'next/router';

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
  ChartSquareBarIcon,
  UserCircleIcon,
} from '@heroicons/react/outline';

import { Bars4Icon } from '@heroicons/react/solid';

const Items = [
  {
    name: 'Registration',
    url: '/user/Registration',
    icon: <UserAddIcon className="h-7 w-7" />,
    noteButton: true,
  },
  {
    name: 'Driver License',
    url: '/user/DriverLicense',
    icon: <InboxIcon className="h-7 w-7" />,
    noteButton: true,
  },
  {
    name: 'Dependents',
    url: '/user/Dependents',
    icon: <TagIcon className="h-7 w-7" />,
    noteButton: false,
  },
  {
    name: 'Appointment',
    url: '/user/Appointment',
    icon: <TagIcon className="h-7 w-7" />,
    noteButton: false,
  },
  {
    name: 'Outprocessing',
    url: '/user/Outprocessing',
    icon: <UserRemoveIcon className="h-7 w-7" />,
    noteButton: true,
  },
];

const SideBarUser = forwardRef(({ showNav }, ref) => {
  const router = useRouter();
  const [isShown, setIsShown] = useState(false);

  return (
    <div
      ref={ref}
      className="fixed w-64 h-full bg-white shadow-sm bg-slate-800"
    >
      <div className="flex items-center sidebar-p-a border-b-2 bg-darker sidebar-account pt-4 pb-4 bg-slate-900">
        <a href="#" className="flex items-center text-underline-0 text-body">
          <div className="avatar w-12 h-22 mr-2">
            <Image
              src="https://avatarfiles.alphacoders.com/231/231694.jpg"
              alt="Avatar"
              className="h-22 rounded-full ml-1 bg-darker border-1"
              width={100}
              height={100}
            ></Image>
          </div>
          <div className="leading-none text-white text-lg ml-2">
            <Link href="/admin/Viewer/Profile">
              <div className="mb-1">
                <strong
                  className="hover:bg-sky-700"
                  onMouseEnter={() => setIsShown(true)}
                  onMouseLeave={() => setIsShown(false)}
                >
                  User
                </strong>
                {isShown && (
                  <span className="text-sm text-yellow-200 ml-2">
                    click to edit
                  </span>
                )}
              </div>
            </Link>
            <small className="text-muted text-sm text-gray-300">----</small>
          </div>
        </a>
      </div>

      <div className="flex flex-col">
        <div className="pl-2 text-gray-200 mt-2 bg-slate-700">Actions</div>
        {Items.map((item) => {
          return (
            <Link href={item.url} key={item.name} noteButton={item.noteButton}>
              <div
                className={`pl-3 py-1 mx-2 pt-2 rounded text-center cursor-pointer flex items-center transition-colors ${
                  router.pathname == item.url
                    ? 'text-gray-400 hover:text-blue-100'
                    : 'text-gray-400 hover:bg-gray-100 hover:text-gray-500'
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
SideBarUser.displayName = 'SideBar';
export default SideBarUser;
