import React from 'react';

export default function Body({color}) {
  return (
    <div className={`flex flex-col xl:h-[900px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ${color}`}>
      <div className="col"></div>
    </div>
  );
}
