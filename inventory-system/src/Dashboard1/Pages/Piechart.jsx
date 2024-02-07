import React from 'react';
import AOS from 'aos'


import 'aos/dist/aos.css'
const MyTable = () => {
  return (
<table className='finance-table mt-12'>
        <thead>
          <tr data-aos="fade-up">
          <th>Date</th>
            <th>Money On the account</th>
            <th>Money Used</th>
            <th>Money Remaining</th>
            
          </tr>
        </thead>
        <tbody>
          <tr  data-aos="zoom-in-down">
          <td className='font-bold'>22/02/2020</td>
              <td>$6000</td>
            <td>$1000</td>
           <td>$5000</td>
            </tr>
            <tr  data-aos="zoom-in-down">
            <td className='font-bold'>22/02/2021</td>
            <td>$6000</td>
          <td>$1000</td>
         <td>$5000</td>
          </tr>
          <tr  data-aos="zoom-in-down">
          <td className='font-bold'>22/02/2023</td>
            <td>$6000</td>
          <td>$1000</td>
         <td>$5000</td>
          </tr>
        </tbody>
      </table>
      
  );
};

export default MyTable;