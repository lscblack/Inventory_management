import React, { useEffect, useState } from 'react';
import '../styles/dashbaord.css';
import Logo from '../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUsers, faMoneyBillTransfer, faListCheck, faClipboardList, faSignOut, faUser } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css';
import axios from 'axios'

const Sidebar2 = ({ user }) => {
  axios.defaults.withCredentials = true
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init({ duration: 2000 });
  },
    []);
  const logoutHandeler = (res) => {
    if (res.data.status === 'Logged out') {
      navigate('/');
    }
  }
  const handleLogout = () => {

    axios.get('http://localhost:3001/api/v1/logout')
      .then(res => logoutHandeler(res))
      .catch(error => console.log(error))


  };
  /*====-----
    # For current login 
    cg Token Auth
    --------=======*/
  //create variables
  const [auth, setAuth] = useState(false)
  const [uname, setUname] = useState('')
  const [role, setRole] = useState('')
  // Handle Errors
  const handleError = (error) => {
    if (error.data.status == "Successfully") {
      setAuth(true)
      setUname(error.data.username)
      setRole(error.data.role)
    } else {
      navigate('/')
    }
  }
  //handle token Checkings fo login
  useEffect(() => {
    axios.get('http://localhost:3001/')
      .then(res => handleError(res))
      .catch(error => console.log(error))
  }, [])

  return (
    <div className='menu md:w-52 lg:w-52 px-7'>
      <Link to='/' ><div className='logo delay-[300ms] duration-[600ms] mt-8' data-aos="fade-up">
        <img src={Logo} className=' logo-icon  shadow-2xl shadow-black-500/40' alt='Logo' />
        <h1 className='text-danger font-semibold text-xl'>SheCan<span className='text-blue-700'>Code</span></h1>

      </div></Link>
      {
          auth ?
            <p>
              <center className='text-2xl text-white'>{uname} , {role}</center>
            </p>
            :
            <center></center>

        }

      <div className='menu--list'>
        <Link to='/Home' className='item delay-[100ms] duration-[600ms]' data-aos="fade-down">
          <FontAwesomeIcon icon={faHome} size="" className=' icon' />
          Dashboard
        </Link>
        <Link to='/User' className='item delay-[300ms] duration-[600ms]' data-aos="fade-down">
          <FontAwesomeIcon icon={faUsers} size="" className=' icon' />
          Users
        </Link>
        <Link to='/Finance' className='item delay-[600ms] duration-[600ms]' data-aos="fade-down">
          <FontAwesomeIcon icon={faMoneyBillTransfer} size="" className=' icon' />
          Finance
        </Link>
        <Link to='/operations' className='item delay-[900ms] duration-[600ms]' data-aos="fade-down">
          <FontAwesomeIcon icon={faListCheck} size="" className=' icon' />
          Operations
        </Link>
        <Link to='/Report' className='item delay-[400ms] duration-[600ms]' data-aos="fade-down">
          <FontAwesomeIcon icon={faClipboardList} size="" className=' icon' />
          Report
        </Link>
        <a className='item delay-[900ms] duration-[600ms] ' onClick={handleLogout} data-aos="fade-down">
          <FontAwesomeIcon icon={faSignOut} size="" className=' icon' />
          Logout
        </a>
      </div>
      <div className='flex flex-row'>
        <FontAwesomeIcon
          icon={faUser}
          size="base"
          className='absolute top-4 right-4  mr-24  mt-2 basis-1'
        />
        <p className=' basis-1 absolute top-4 right-8  ml-32 mt-1 '>Admin</p>
      </div>

    </div>

  );
};

export default Sidebar2;