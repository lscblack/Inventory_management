import React from 'react';
import Sidebar2 from '../Layouts/Sidebar2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Rcomponent from './Rcomponent';
import { faCalendar, faCalendarDay, faCalendarDays, faCalendarWeek } from '@fortawesome/free-solid-svg-icons';
import Contents from './Contents';
import { Link } from 'react-router-dom';
function    Report() {
  return (

    <div className='dashboard'>
        <Sidebar2 />
        <div className='dashboard-content shadow-xl '>
          <div className='dash-menu'>
          <Contents/>
          <div className=' flex flex-row w-11/12 bg-gray-100 rounded-xl py-8 shadow-lg ml-12 mt-12'>
          <div className='basis-1/4 ml-24'>
          <Link to='/Daily'  > <div className='circle-menu w-12 h-12 shadow-xl flex items-center justify-center delay-[300ms] duration-[600ms]' data-aos="fade-down">
                  <span className=''> <FontAwesomeIcon icon={faCalendarDay} className='text-white' /></span>
                </div>
                <p className='text-gray-600 mt-4 delay-[200ms] duration-[600ms]' data-aos="fade-up">Daily</p></Link>
              </div>
              <div className='basis-1/4 ml-24'>
               <Link to='/Weekly'  > <div className='circle-menu w-12 h-12 shadow-xl flex items-center justify-center delay-[300ms] duration-[600ms]' data-aos="fade-down">
                  <span className=''> <FontAwesomeIcon icon={faCalendarWeek} className='text-white' /></span>
                </div>
                <p className='text-gray-600 mt-4 delay-[200ms] duration-[600ms]' data-aos="fade-up">Weekly</p></Link>
              </div>
              <div className='basis-1/4 ml-24'>
              <Link to='/Monthly'  > <div className='circle-menu w-12 h-12 shadow-xl flex items-center justify-center delay-[300ms] duration-[600ms]' data-aos="fade-down">
                  <span className=''> <FontAwesomeIcon icon={faCalendarDays} className='text-white' /></span>
                </div>
                <p className='text-gray-600 mt-4 delay-[200ms] duration-[600ms]' data-aos="fade-up">Monthly</p></Link>
              </div>
              <div className='basis-1/4 ml-24'>
              <Link to='/Annualy'  > <div className='circle-menu w-12 h-12 shadow-xl flex items-center justify-center delay-[300ms] duration-[600ms]' data-aos="fade-down">
                  <span className=''> <FontAwesomeIcon icon={faCalendar} className='text-white' /></span>
                </div>
                <p className='text-gray-600 mt-4 delay-[200ms] duration-[600ms]' data-aos="fade-up">Annualy</p></Link>
              </div>
          </div>
          <Rcomponent/> 
          </div>
      
     

           </div>
        </div>


    
 
  );
}

export default Report;
