import React, { useState, useEffect } from 'react';
import 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import 'tailwindcss/tailwind.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown, faCartShopping } from '@fortawesome/free-solid-svg-icons';

const course = [
  {
    nbr: 200,
    title: 'Items-In',
    titlee: 'All-items',
    icon: <FontAwesomeIcon icon={faCartArrowDown} className='text-blue-900 text-xl' />,
    links: 'https://example.com/details1', 
  },
  {
    nbr: 10,
    title: 'Items-Out',
    titlee: 'All-items',
    icon: <FontAwesomeIcon icon={faCartShopping} className='text-blue-900 text-xl' />,
    links: 'https://example.com/details2', 
  },
  {
    nbr: 100,
    title: 'All-items',
    titlee: 'All-items',
    icon: <FontAwesomeIcon icon={faCartShopping} className='text-blue-900 text-xl' />,
    links: 'https://example.com/details3',
  },
];

const Cards = () => {
  const [countupNumbers, setCountupNumbers] = useState(Array(course.length).fill(0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCountupNumbers((prevNumbers) =>
        prevNumbers.map((number, index) => (number < course[index].nbr ? number + 1 : number))
      );
    }, 20);

    return () => clearInterval(interval);
  }, []);


  const chartData = {
    labels: ['', '', '', '', '', '', ''],
    datasets: [
      {
        label: '',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        Color: '#A0A0A0',
        backgroundColor:'#A0A0A0',
      },
    ],
  };
  const chartOptions = {
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      x: [
        {
          grid: {
            display: false,
          },
          indexAxis: 'y',
          ticks: {
            color: 'transparent', 
          },
        },
      ],
      y: [
        {
          grid: {
            display: false,
          },
          ticks: {
            color: 'transparent', 
          },
        },
      ],
    },
    plugins: {
      legend: {
        display: false, 
      },
    },
  };
  return (
    
    <div className='card-container flex sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3  delay-[500ms] duration-[600ms] mr-14 ml-20 ' data-aos="fade-up">
   
  {course.map((item, index) => (
      
    <div key={index} className='card mt-8 shadow-2xl  rounded-lg relative overflow-hidden'>
     

      <div className='flex flex-col justify-between  h-40 w-48'>

        <div>
          <h2 className='text-md  text-gray-200 mb-2'>{item.title}</h2>
          <h1 className='text-2xl font-bold text-gray-200 mb-4'>{countupNumbers[index]}</h1>
          <p className='text-white'>{item.description}</p>
        </div>
        <div className='h-64 '>
            <Bar data={chartData} options={chartOptions} />
          </div>
      </div>
    
    </div>
  ))}
</div>

  );
};

export default Cards;
