import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/dashbaord.css'
import {faCartArrowDown} from '@fortawesome/free-solid-svg-icons'
const Userchart = () => {
  const chartData = {
    labels: ['O.Manager', 'Finance'],
    datasets: [
      {
        label: 'Users',
        data: [1, 1],
        backgroundColor: ['#1f3373', '#3a519e'],
      },
    ],
  };
  return (
  
    <div className='finance-history-table px-2 bg-gray-100 py-6 shadow-2xl rounded-lg mt-4 mb-4 flex flex-row '>
        <div className=' flex flex-row  '>
        <div className='  px-2 bg-gray-300 py-2 shadow-2xl rounded-lg mt-2 w-4/12 mr-32 ml-4 h-60'>
        <p className='header--title  delay-[300ms] duration-[600ms]  ml-12  text-gray-900  font-semi-medium text-sm mt-4'  data-aos="fade-down">Available Users</p>
     <div className="w-56 ml-8">
     <Doughnut data={chartData} options={chartOptions} />
        </div>
        </div>
        </div>
        </div>

   
  );
  };
export default Userchart;
