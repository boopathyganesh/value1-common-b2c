"use client"

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  scales:{
    x:{
      grid:{
        display: true,
        color: "white"
      },
      border :{
        color: "white"
      },
      ticks:{
        color: "white"
      }
    },
    y: {
      grid:{
        display: true,
        color: "white"
      },
      border :{
        color: "white"
      },
      ticks:{
        color: "white"
      },
      type: 'linear' as const,
      display: true,
      position: 'left' as const,
      max : 10000
    }
  },
  responsive: true,
  plugins: {
    legend: {
      display:false,
      position: 'bottom' as const,
    },
    title: {
      display: false,
    },
  },
};

const labels = [
    1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973,
    1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983,
    1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993,
    1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003,
    2004, 2005, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014,
    2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024
];

const amounts = [
    6.325, 7.175, 8.375, 10.250, 16.200, 17.600, 18.400, 19.300, 20.200, 27.850,
    50.600, 54.000, 43.200, 48.600, 68.500, 93.700, 133.000, 167.000, 164.500, 180.000,
    197.000, 213.000, 214.000, 257.000, 313.000, 314.000, 320.000, 346.600, 433.400, 414.000,
    459.800, 468.000, 516.000, 472.500, 404.500, 423.400, 440.000, 430.000, 499.000, 560.000,
    585.000, 700.000, 1080.000, 1250.000, 1450.000, 1850.000, 2640.000, 3105.000, 2960.000,
    2800.650, 2634.350, 2862.350, 2966.750, 3143.800, 3522.000, 4865.100, 4872.000, 5267.000,
    6533.000, 7540.000
];

export const data = {
  labels: labels,
  datasets: [
    {
      label: 'Gold Rate',
      data: amounts,
      borderColor: 'rgb(250, 187, 4)',
      backgroundColor: 'rgba(250, 187, 4)',
    }
  ],
};

export function GoldHistoryGraph() {
  return <Line options={options} data={data} className='w-auto h-full' />;
}
