import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
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
  ArcElement,
  Filler,
  Title,
  Tooltip,
  Legend
);

import { Doughnut } from 'react-chartjs-2';

export default function MyDoughnut() {
  const data = {
    backgroundColor: [
      'rgb(2,88,255)',
      'rgb(249,151,0)',
      'rgb(255,199,0)',
      'rgb(32,214,152)',
    ],
    labels: ['Red', 'Blue', 'Yellow', 'Green'],
    datasets: [
      {
        label: 'Test1',
        data: [0.3, 0.4, 0.2, 0.1],
        backgroundColor: [
          'rgb(2,88,255)',
          'rgb(249,151,0)',
          'rgb(255,199,0)',
          'rgb(32,214,152)',
        ],
        hoverOffset: 4,
      },
    ],
  };
  const options = {
    elements: {
      arc: {
        weight: 0.2,
        borderWdth: 8,
      },
    },
    cutout: 5,
  };
  return <Doughnut data={data} width={50} height={50} options={options} />;
}
