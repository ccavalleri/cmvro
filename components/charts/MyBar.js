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

export default function MyBar() {
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
        data: [0.2, 0.59, 0.23, 0.15, 0.2, 0.1],
        backgroundColor: 'rgba(1,98,255,1)',
        barThickness: 10,
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
  return <Bar data={dataBar} width={400} height={120} options={optionsBar} />;
}
