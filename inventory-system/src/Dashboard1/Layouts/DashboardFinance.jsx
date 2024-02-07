
import React, { useEffect } from 'react';
import '../styles/dashbaord.css';
import Logo from '../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUsers, faMoneyBillTransfer, faListCheck, faClipboardList, faGear } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css';
function MainFinance() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <div className='menu md:w-52 lg:w-52 px-7'>
      <div className='logo delay-[300ms] duration-[600ms]' data-aos="fade-up">
        <img src={Logo} className=' logo-icon  shadow-2xl shadow-black-500/40' alt='Logo' />
      </div>
      <div className='menu--list'>
        <Link to='/Home' className='item active delay-[100ms] duration-[600ms]' data-aos="fade-down">
          <FontAwesomeIcon icon={faHome} size="" className=' icon' />
          Home
        </Link>
        <Link to='/User' className='item delay-[300ms] duration-[600ms]' data-aos="fade-down">
          <FontAwesomeIcon icon={faUsers} size="" className=' icon' />
          Request
        </Link>
        <Link to='/Finance' className='item delay-[600ms] duration-[600ms]' data-aos="fade-down">
          <FontAwesomeIcon icon={faMoneyBillTransfer} size="" className=' icon' />
          Items-In
        </Link>
        <Link to='/operations' className='item delay-[900ms] duration-[600ms]' data-aos="fade-down">
          <FontAwesomeIcon icon={faListCheck} size="" className=' icon' />
          Items-out
        </Link>
        <Link to='/Report' className='item delay-[400ms] duration-[600ms]' data-aos="fade-down">
          <FontAwesomeIcon icon={faClipboardList} size="" className=' icon' />
          Settings
        </Link>
        <Link to='/Settings' className='item delay-[500ms] duration-[600ms]' data-aos="fade-down">
          <FontAwesomeIcon icon={faGear} size="" className=' icon' />
          Settings
        </Link>
      </div>
    </div>
    </div>
  );
}

export default MainFinance;
