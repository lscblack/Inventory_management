
import React from 'react';

function Weekelyy() {
  return (
    <div>
<div className='bg-blue-950 text-white py-4  w-full mt-8 px-12'  > Weekely Report</div>

<table className='finance-table mt-8'>
        <thead>
          <tr>
            <th>Item-name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total-Price</th>
            <th>Date</th>
            
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='font-bold'>Fans</td>
            <td>5</td>
            <td className="border p-2 delay-[300ms] duration-[600ms]" data-aos="zoom-in-down">$300</td>
            <td className="border p-2 delay-[300ms] duration-[600ms] " data-aos="zoom-in-down">$600</td>
            <td className="border p-2 delay-[300ms] duration-[600ms] " data-aos="zoom-in-down">20/12/2023</td>
            </tr>
            <tr>
            <td className='font-bold'>Water</td>
          <td>5</td>
          <td className="border p-2 delay-[300ms] duration-[600ms]" data-aos="zoom-in-down">$300</td>
          <td className="border p-2 delay-[300ms] duration-[600ms] " data-aos="zoom-in-down">$600</td>
          <td className="border p-2 delay-[300ms] duration-[600ms] " data-aos="zoom-in-down">4/12/2023</td>
        
          </tr>
          <tr>
            <td className='font-bold'>Water</td>
          <td>5</td>
          <td className="border p-2 delay-[300ms] duration-[600ms]" data-aos="zoom-in-down">$300</td>
          <td className="border p-2 delay-[300ms] duration-[600ms] " data-aos="zoom-in-down">$600</td>
          <td className="border p-2 delay-[300ms] duration-[600ms] " data-aos="zoom-in-down">4/12/2023</td>
        
          </tr>
          <tr>
            <td className='font-bold'>Water</td>
          <td>5</td>
          <td className="border p-2 delay-[300ms] duration-[600ms]" data-aos="zoom-in-down">$300</td>
          <td className="border p-2 delay-[300ms] duration-[600ms] " data-aos="zoom-in-down">$600</td>
          <td className="border p-2 delay-[300ms] duration-[600ms] " data-aos="zoom-in-down">4/12/2023</td>
        
          </tr>
        </tbody>
      </table>
      <button className='text-white bg-blue-950 py-2 px-8 mt-8 ml-12 rounded-full'>Download the report</button>
    </div>
  );
}

export default Weekelyy;


