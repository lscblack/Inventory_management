
import React from 'react';
import Sidebar2 from '../Layouts/Sidebar2';
import '../styles/dashbaord.css'
import OperationsAdmin from './OperationsAdmin';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Contents from './Contents';
function Operations() {
  return (
    <div className='dashboard'>
        <Sidebar2 />
        <div className='dashboard-content shadow-xl'>
        <div className="  w-full  ">
        <Contents/>
        <div className="flex">
       <div className="relative w-8/12 ml-52 mt-12">
   <input
     type="search"
     id="search-dropdown"
     className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-full border-s-gray-50 border-s-2 border border-gray-100 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-100 dark:border-s-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
     placeholder="Search...."
     required
   />
   <button
     type="submit"
     className="absolute flex items-center justify-center top-0 end-0 p-5 text-sm font-medium h-full text-white bg-blue-900 rounded-e-full border border-blue-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-900 dark:hover:bg-blue-700 dark:focus:ring-blue-900"
   >
     <svg
       className="w-4 h-4 text-slate-50 mr-2"
       aria-hidden="true"
       xmlns="http://www.w3.org/2000/svg"
       fill="none"
       viewBox="0 0 20 20"
     >
       <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
     </svg>
     <span className="sr-only">Search</span>
   </button>
 </div>
 </div>
      <OperationsAdmin/>
    </div>

  </div>
  </div>
  );
}

export default Operations;
