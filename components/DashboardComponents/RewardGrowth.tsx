"use client"

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

export const options = {
  scales: {
    x: {
      border: {
        color: "black"
      },
      ticks: {
        color: "black"
      }
    },
    y: {
      border: {
        color: "black"
      },
      ticks: {
        color: "black"
      },
      type: 'linear' as const,
      display: true,
      position: 'left' as const,
    }
  },
  responsive: true,
  plugins: {
    legend: {
      display: false,
      position: 'bottom' as const,
    },
    title: {
      display: false,
    },
  },
};

const labels = [
  'January', 'February', 'March', 'April', 'May', 'June', 'July'
];

const amounts = [
  3.7, 4.175, 8.0, 12.0, 18.0, 21.0, 22.0
];

export const data = {
  labels: labels,
  datasets: [
    {
      label: 'Gold in gms',
      data: amounts,
      backgroundColor: 'rgba(250, 187, 4, 0.5)',
      borderColor: 'rgba(250, 187, 4, 1)',
      borderWidth: 1,
    }
  ],
};

const RewardGrowth = () => {
  return (
    <div className="flex flex-col items-center justify-center rounded-3xl w-full h-72 bg-white">
      <h1>Rewards Growth (2024)</h1>
      <div className='w-max h-auto'>
        <Bar options={options} data={data} height={250} width={400} />
      </div>
    </div>
  )
}

export default RewardGrowth;
