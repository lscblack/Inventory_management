// LineChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Doughnut } from 'react-chartjs-2';
const Chartt= () => {
  const chartData = {
    labels: ['January', 'February', 'March', 'April','May','June','July','August'],
    datasets: [
      {
        label: 'Mony',
        data: [10000, 20000, 80000, 8100,10000, 20000, 80000, 8100,],
        fill: false,
        borderColor: '#1f3373',
      },
    ],
  };
  const Data = {
    labels: ['Used', 'Left'],
    datasets: [
      {
        label: 'Money-Used',
        data: [400000, 1000000],
        backgroundColor: ['#1f3373', '#3a519e'],
      },
    ],
  };
  const chartOptions = {
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          display: true,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  const chartOptionss = {
    scales: {
      x: {
        display: false, // Hide x-axis
        grid: {
          display: false,
        },
      },
      y: {
        display: false, // Hide y-axis
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        position: 'right',
      },
    },
  };
  return (
    <div className='finance-history-table px-4 bg-gray-100 py-6 shadow-2xl rounded-lg  mb-4 flex flex-row'>
    <h1 className='header--title  delay-[300ms] duration-[600ms]    mb-4   ml-12 text-gray-900  font-semi-medium'  data-aos="fade-down"></h1>
    <div className=" w-full  bg-gray-100">
      <div className="w-full h-60">
        <Line data={chartData} options={chartOptions}  className='w-full'/>
      </div>
    </div>

    <div className='  px-2  py-2 rounded-lg mt-2 w-8/12 mr-32 ml-4 h-60 shadow-md'>
        <p className='header--title  delay-[300ms] duration-[600ms]  ml-12  text-gray-900  font-semi-medium text-sm mt-4'  data-aos="fade-down">Money Used</p>
     <div className="w-60 ml-8">
     <Doughnut data={Data} options={chartOptionss} />
        </div>
        </div>
    </div>

    
  );
};

export default Chartt;
