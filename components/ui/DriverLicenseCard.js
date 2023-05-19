import NatoLogo from '../../public/us-nato-logo.png';
import Image from 'next/image';
import Avatar from '../../public/avatar.jpg';
import CnreLogo from '../../public/cneurafcent_logo.png';
import Layout from '../Layout';

export default function DriverLicenseCard({}) {
  return (
    <div className="col-span-3 border border-gray-200 rounded-lg shadow py-1 px-2 mr-3 h-84 text-gray-700 md:text-md text-white font-bold ml-2 mt-2">
      <div className="col-span-3 border border-gray-200 rounded-md shadow bg-red-400 text-gray-700 md:text-md text-white font-bold py-1 px-1">
        Driver License Preview
      </div>
      <div className="grid grid-cols-2">
        <div className="border border-gray-300 rounded-lg shadow-lg h-[270px] w-[500px] mx-9 my-2 bg-slate-200">
          <div className="grid grid-cols-3">
            <div>
              {' '}
              <Image src={NatoLogo} alt="Nato Logo" className="mx-1 my-1" />
            </div>
            <div className="col-span-2">
              <p className="text-blue-700 text-sm ml-2 mt-1">
                Allied Forces Italy (AFI) Driver License
              </p>
              <p className="text-blue-700 text-sm ml-2 mt-1">
                Patente di guida Forze Alleate Italia (AFI)
              </p>
            </div>

            <div>
              {' '}
              <Image src={Avatar} alt="Avatar" className="mx-1 my-1" />
            </div>
            <div className="col-span-2">
              <div className="grid grid-cols-3 ml-1">
                <div>
                  <span className="text-blue-700">1. </span>
                  <span className="text-slate-900 ml-1 uppercase">Fox</span>
                </div>
                <div className="col-span-2">
                  <span className="text-blue-700 ml-1">2. </span>
                  <span className="text-slate-900 ml-1 uppercase">
                    Michael J.
                  </span>
                </div>
                <div className="grid grid-cols-2">
                  <div className="mt-1">
                    <span className="text-blue-700">a. </span>
                    <span className="text-slate-900 ml-1 uppercase text-sm">
                      NO
                    </span>
                  </div>
                  <div className="ml-1 mt-1">
                    <span className="text-blue-700">b. </span>
                    <span className="text-slate-900 uppercase text-sm">
                      181
                    </span>
                  </div>
                </div>
                <div className="col-span-2 mt-1">
                  <span className="text-blue-700 ml-1">3. </span>
                  <span className="text-slate-900 ml-1 uppercase text-sm">
                    03/20/1991 PASADENA - CA
                  </span>
                </div>
                <div className="mt-1">
                  <span className="text-blue-700">c. </span>
                  <span className="text-slate-900 uppercase text-sm ml-1">
                    80
                  </span>
                </div>
                <div className="mt-1">
                  <span className="text-blue-700 ml-1">d. </span>
                  <span className="text-slate-900 uppercase text-sm">
                    AZZURRI
                  </span>
                </div>
                <div className="mt-1">
                  <span className="text-blue-700">e. </span>
                  <span className="text-slate-900 uppercase text-sm">
                    CASTANI
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border border-gray-300 rounded-lg shadow-lg h-[270px] w-[500px] mx-9 my-2 bg-slate-200">
          <div className="grid grid-cols-3 justify-center">
            <div>
              {' '}
              <Image
                src={CnreLogo}
                alt="CNREURAFCENT Logo"
                className="mx-1 my-1 w-24"
              />
            </div>
            <div className="col-span-2">
              <p className="text-blue-700 text-sm ml-2 mt-1">
                CENTRAL MOTOR VEHICLE REGISTRATION OFFICE
              </p>
              <p className="text-blue-700 text-sm ml-2 mt-1">
                Viale F. Ruffo di Calabria, 80144 Napoli(NA)
              </p>
            </div>

            <div className="col-span-3 text-gray-700 text-sm px-2 border border-gray-300 bg-slate-100 w-fit rounded-lg mx-1">
              <p>
                In order to operate motor vehicles, the driver must carry the
                following documents:
              </p>
              <p>(a) The vehicle registration card;</p>
              <p>
                (b) The valid driver&#39;s license for the corresponding
                category of the vehicle;
              </p>
              <p>(c) The valid International driver&#39;s license; </p>
              <p>(d) The personal identification document;</p>
              <p>(e) The compulsory insurance certificate.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

DriverLicenseCard.getLayout = function (page) {
  return <Layout>{page}</Layout>;
};
