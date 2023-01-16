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
import { Line, Bar } from 'react-chartjs-2';

export default function Body() {
  const dataBar = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: 'Test1',
        borderRadius: 30,
        data: [0.12, 0.19, 0.3, 0.5, 0.2, 0.3],
        backgroundColor: 'rgba(32,214,155,1)',
        barThickness: 10,
      },
      {
        label: 'Test2',
        borderRadius: 20,
        data: [0.2, 0.59, 0.23, 0.15, 0.20, 0.1],
        backgroundColor: 'rgba(1,98,255,1)',
        barThickness: 10,
      },
    ],
  };
  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        data: [12, 19, 3, 5, 2, 3],
      },
    ],
  };

  const optionsBar = {
    plugins: {
      legend: {
        position: 'top',
        align: 'center',
        labels: {
          boxWidth: 7,
          usePointStyle: true,
          pointStyle: 'circle',
        },
        title: {
          text: 'Vehicle Registration',
          display: true,
          color: '#000',
          font: { size: 16 },
        },
      },
    },
    scales: {
      xAxis: {
        display: false,
      },
      yAxis: {
       max: 1,
      },
    },
    elements: {
      bar: {
        barPercentage: 0.3,
        categoryPercentage: 1,
      },
    },
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
        <div className="rounded bg-white h-56 shadow-lg">
          <Bar data={dataBar} width={400} options={optionsBar} />
        </div>
        <div className="rounded bg-white h-56 shadow-lg"></div>
      </div>
      <div className="grid col-1 bg-white h-96 shadow-lg"></div>
    </div>
  );
}
