import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import vector from '../assets/login.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/index.css';
import axios from 'axios'

const Login = () => {
  axios.defaults.withCredentials = true
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    role: 'admin', // Default role to 'admin'
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const { username, password, role } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  
  const handleButtonClick = async() => {
    console.log(formData)
    const handelNext = (data) => {
      if(data.error=="User does not exist"){
        setErrorMessage('Username And Passowrd Dont Match');
        setSuccessMessage('');
      }else{
        
        if (username.trim() === '' || password.trim() === '') {
          setErrorMessage('Please fill in all fields');
          setSuccessMessage('');
          return;
        }
    
        if (username !== '' && password !== '') {
          if (role.toLowerCase() === 'admin') {
            navigate('/Admin/Home');
            setSuccessMessage('Login successful!');
            setErrorMessage('');
            setTimeout(() => {
             
            }, 2000);
          } 
     
          else if (role.toLowerCase() === 'finance') {
            navigate('/Finance/Home');
            setSuccessMessage('Login successful!');
            setErrorMessage('');
            setTimeout(() => {
             
            }, 2000);
          } else if (role.toLowerCase() === 'operating manager') {
            navigate('/Operations/Home');
            setSuccessMessage('Login successful!');
            setErrorMessage('');
            setTimeout(() => {
             
            }, 2000);
          } else {
            navigate('/');
          }
        }
        
      }
      
    }
    try {
      const response = await axios.post('http://localhost:3001/api/v1/login', formData);
      console.log(handelNext(response.data)); // Handle the response as needed
    } catch (error) {
      console.error(error);
    }

  };

  return (
    <>
     {successMessage && <div className=" bg-green-500 text-gray-100  py-4 px-12 mb-4 text-bold ">{successMessage}</div>}
          {errorMessage && <div className="bg-red-500 text-gray-100  py-4 px-12 mb-4 text-bold">{errorMessage}</div>}
      <div className="main-div main-container w-full h-screen flex flex-col md:flex-row items-center justify-center">
        <div className="vector basics-1/2 bg-white md:w-4/12 sm-4/12 min-h-40 shadow-lg shadow-black-500 hidden md:block">
          <img src={vector} className="basics-1/2 size-min md:mt-24 mx-auto md:ml-0 md:mr-auto " alt="home vector" data-aos="fade-right" />
        </div>
        <div className="login-form basics-1/2 w-full md:w-5/12 bg-gradient-to-r from-blue-900 to-blue-999 p-8 md:p-12 shadow-lg">
          <h1 className="text-white mt-8 font-bold text-3xl md:text-4xl mb-4 md:mb-8 delay-[400ms] duration-[600ms]" data-aos="fade-down">
            Login Form
          </h1>
          <form className="form mx-4 md:mx-0">
            <input
              className="input-field mb-6 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300"
              id="username"
              type="text"
              placeholder="Username"
              data-aos="fade-down"
              value={username}
              onChange={handleChange}
              required
            />
            <input
              className="input-field mb-6 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300"
              id="password"
              type="password"
              placeholder="Password"
              data-aos="fade-down"
              value={password}
              onChange={handleChange}
              required
            />
          
            <select
              className="input-field mb-6 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-300  transition duration-300 "
              id="role"
              value={role}
              onChange={handleChange}
            >
              <option value="admin" >Admin</option>
              <option value="finance">Finance</option>
              <option value="operating manager">Operating Manager</option>
            </select>
            <button type="button" onClick={handleButtonClick} className='home-button mb-6 bg-white text-blue-800 rounded-full px-8 py-3 font-bold hover:bg-blue-700 hover:text-white transition duration-300'>Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
