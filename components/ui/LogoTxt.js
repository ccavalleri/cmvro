import Layout from '../Layout';

export default function LogoTxt() {
  return (
    <div className="grid grid-cols-1 items-center border-2 border-gray-300 rounded">
      <div className="text-xs text-center tracking-wide text-zinc-100 text-center bg-gradient-to-r from-sky-400 to-sky-600 opacity-95 shadow">
        Allied Forces in Italy
      </div>
      <div className="border border-sky-600 text-center bg-gradient-to-b from-sky-500 to-sky-700">
        <a
          className="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl text-sky-100 leading-tight drop-shadow-xl"
          href="#"
        >
          AFI <span className="text-blue-100">DMV</span>
          {/* C<span className="text-2xl text-white">entral</span> M
      <span className="text-2xl text-white">otor</span> V
      <span className="text-2xl text-white">ehicle</span> R
      <span className="text-2xl text-white">egistration</span> O
<span className="text-2xl text-white">ffice</span> */}
        </a>
      </div>
      <div className="text-xs text-center text-zinc-100  bg-gradient-to-l from-sky-500 to-sky-600 px-1 tracking-wide  opacity-95 shadow">
        Department of Motor Vehicles
      </div>
    </div>
  );
}

LogoTxt.getLayout = function (page) {
  return <Layout>{page}</Layout>;
};
