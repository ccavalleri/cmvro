export default function RadioBox({ title, options }) {
  return (
    <>
      <h3 class="block text-gray-700 xl:text-xl xl:font-bold md:text-sm">
        {title}
      </h3>
      <ul class="shadow items-center w-64 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        {options.map((option) => (
          <li
            class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600"
            key={option.label}
          >
            <div class="flex items-center pl-2">
              <input
                id="horizontal-list-radio-license"
                type="radio"
                value={option.value}
                name="list-radio"
                class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label class="w-full ml-2 py-1 my-1 text-sm font-medium text-gray-900 dark:text-gray-300">
                {option.label}
              </label>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
