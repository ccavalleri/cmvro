export default function Body() {
  return (
    <div>
      <p className="text-gray-700 text-3xl mb-16 font-bold">Dashboard</p>
      <div className="grid lg:grid-cols-3 gap-5 mb-16">
        <div className="rounded bg-white h-56 shadow-lg"></div>
        <div className="rounded bg-white h-56 shadow-lg"></div>
        <div className="rounded bg-white h-56 shadow-lg"></div>
      </div>
      <div className="grid col-1 bg-white h-96 shadow-lg"></div>
    </div>
  );
}
