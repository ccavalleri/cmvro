import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
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
  BarElement,
  Filler,
  Title,
  Tooltip,
  Legend
);
import { Line } from 'react-chartjs-2';
import MyBar from './charts/MyBar';
import MyDoughnut from './charts/MyDoughnut';

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
      <div className="grid lg:grid-cols-5 gap-4 mb-16">
        <div className="rounded-md bg-white h-60 shadow-lg">
          {' '}
          <Line data={data} width={400} height={120} options={options} />
        </div>
        <div className="rounded-md bg-white h-60 shadow-lg col-span-2">
          <MyBar />
        </div>
        <div className="rounded-md bg-white h-60 shadow-lg">
          {' '}
          <MyDoughnut />
        </div>
        <div className="rounded-md bg-white h-60 shadow-lg">
          {' '}
          <MyDoughnut />
        </div>
        <div className="grid col-1 bg-white h-96 shadow-lg col-span-3 rounded-md">
          {' '}
        </div>
        <div className="grid col-1 bg-white h-96 shadow-lg rounded-md"> </div>
        <div className="grid col-1 bg-white h-96 shadow-lg rounded-md"> </div>
      </div>
    </div>
  );
}
