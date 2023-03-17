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
  BarElement,
} from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Sample Line Chart',
    },
  },
  scales: {
    y: {
      grid: {
        display: false,
      },
    },
  },
};

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const lineData = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [23, 67, 12, 34, 23, 75, 23],
      borderColor: '#9e2f2a',

      tension: 0.5,
      pointRadius: 0,
    },
  ],
};
export const barData = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [23, 67, 12, 34, 23, 75, 23],
      backgroundColor: '#9e2f2a',
    },
  ],
};
function SampleCharts() {
  return (
    <div
      style={{ display: 'flex', height: 400, justifyContent: 'space-between' }}
    >
      <Line options={options} data={lineData} />;
      <Bar options={options} data={lineData} />;
    </div>
  );
}

export default SampleCharts;
