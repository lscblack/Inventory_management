import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Sidebar2 from '../Layouts/Sidebar2';
import Contents from './Contents'; 
import { Line } from 'react-chartjs-2';
import { Doughnut } from 'react-chartjs-2';
import { faCodePullRequest, faCartShopping, faMoneyBill } from '@fortawesome/free-solid-svg-icons';


import { Link } from 'react-router-dom';
function Finance() {
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
    <>
      {/* <div className='dashboard'>
        <Sidebar2 />
        <div className='dashboard-content '>
          <div className='dash-menu  '>
          <Contents/>
           <div className='flex justify-center'>      
           <Piechart/>
           </div>
            <button className='btn-user bg-blue-900 mt-24 text-white px-8 py-3 rounded-full hover:bg-gray-500 text-sm focus:outline-none focus:border-red-700 mr-20'  data-aos="fade-up">
            View more ..
          </button>
            </div>
        </div>
      </div> */}

<div className='dashboard'>
        <Sidebar2 />
        <div className='dashboard-content shadow-2xl'>

       
       <div className='dashboard-content shadow-xl '>
<div className='dash-menu'>
          <Contents/>
          <div className=' flex flex-row w-11/12 bg-gray-100 rounded-xl py-8 shadow-lg ml-12 mt-8 mb-4'>
          <div className='basis-1/4 ml-24'>
                <div className='circle-menu w-12 h-12 shadow-xl flex items-center justify-center delay-[300ms] duration-[600ms] bg-blue-900' data-aos="fade-down">
                  <span className=''> <FontAwesomeIcon icon={faCodePullRequest} className='text-white shadow-2xl' /></span>
                </div>
                <Link to='/Request'><p className='text-gray-600 mt-4 delay-[200ms] duration-[600ms]' data-aos="fade-up">Request</p></Link> 
              </div>
              <div className='basis-1/4 ml-24'>
                <div className='circle-menu w-12 h-12 shadow-xl flex items-center justify-center delay-[300ms] duration-[600ms] bg-blue-900' data-aos="fade-down">
                  <span className=''> <FontAwesomeIcon icon={faCartShopping} className='text-white shadow-2x' /></span>
                </div>
                <Link to='/Report'><p className='text-gray-600 mt-4 delay-[200ms] duration-[600ms]' data-aos="fade-up">Report</p></Link> 
              </div>
              <div className='basis-1/4 ml-24'>
                <div className='circle-menu w-12 h-12 shadow-xl flex items-center justify-center delay-[300ms] duration-[600ms] bg-blue-900' data-aos="fade-down">
                  <span className=''> <FontAwesomeIcon icon={faMoneyBill} className='text-white shadow-2x' /></span>
                </div>
                <Link to='/Account' ><p className='text-gray-600 mt-4 delay-[200ms] duration-[600ms]' data-aos="fade-up">Account</p></Link> 
              </div>
          </div>
          <div>
      <div className='francs flex justify-center py-12 shadow-2xl mb-8' ><br />
           <h1 className='white-me text-4xl'>5000 $ / <span className='today'  data-aos="fade-down">Month</span></h1>
        </div>
    </div>
    <div className='finance-history-table px-4 bg-gray-100 py-6 shadow-2xl rounded-lg  mb-4 flex flex-row' data-aos="fade-down">
    <h1 className='header--title  delay-[300ms] duration-[600ms]    mb-4   ml-12 text-gray-900  font-semi-medium'  ></h1>
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

          </div>
      
</div>

           </div>
</div>

      
    </>
  );
}

export default Finance;