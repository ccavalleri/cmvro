export default function Inputfield({ placeholder }) {
  return (
    <div className="ml-2 mt-1">
      <label className="block text-gray-700 text-xl font-bold">
        {placeholder}
      </label>
      <input
        className="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="username"
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
}
