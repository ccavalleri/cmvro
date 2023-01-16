import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Title
);
import { Line } from 'react-chartjs-2';

export default function Body() {
  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        data: [12, 19, 3, 5, 2, 3],
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    elements: {
      line: {
        tension: 0,
        borderWidth: 2,
        borderColor: 'rgba(47,97,68,1)',
        fill: 'start',
        backgroundColor: 'rgba(47,97,68,0.3)',
      },
      point: {
        radius: 0,
        hitRadius: 0,
      },
    },
    scales: {
      xAxis: {
        display: false,
      },
      yAxis: {
        display: false,
      },
    },
  };

  return (
    <div>
      <p className="text-gray-700 text-3xl mb-16 font-bold">Dashboard</p>
      <div className="grid lg:grid-cols-3 gap-5 mb-16">
        <div className="rounded bg-white h-56 shadow-lg">
          {' '}
          <Line data={data} width={400} height={120} options={options} />
        </div>
        <div className="rounded bg-white h-56 shadow-lg"></div>
        <div className="rounded bg-white h-56 shadow-lg"></div>
      </div>
      <div className="grid col-1 bg-white h-96 shadow-lg"></div>
    </div>
  );
}
