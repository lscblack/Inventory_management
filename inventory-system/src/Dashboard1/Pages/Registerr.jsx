import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';
import vector from '../assets/login.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/index.css';
// import axios from "axios";


// const navigate = useNavigate();
// const [user, setUser]= useState({

//     username:'',
//     email:'',
//     password:'',
    
// });

// const [error,setError]=useState("");
// const changeInput =(e)=>{
//     setUser({...user,[e.target.name]:e.target.value})
// }

// const signupSave = async (e) =>{
//     e.preventDefault();

//     if(!user.username){
//         setError("UserName is required,please Provide your userName");
//     }else if (!user.email){
//         setError("Email is provided,please provide your Email");
//     }else if(!user.password){
//         setError("Password is required,please provide your password")
//     }else{
//         setError("");
//         console.log(user);
//         axios.post("http://localhost:3000//api/users",user)
//         .then(response =>{
//             if(response.data.message !== 'Error'){
//                 console.log(response.data);
//                 navigate("/Login")
//             }else{
//                 setError("Failed to save")
//             }
//         })
//         .catch(err=>{
//             setError(err);
//         })
//     }
// }

const Registerr = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    role: 'admin', // Default role to 'admin'
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const { username, password, role ,email} = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleButtonClick = () => {
    if (username.trim() === '' || password.trim() === '') {
      setErrorMessage('Please fill in all fields');
      setSuccessMessage('');
      return;
    }

    if (username !== '' && email !== '' && password !== '' && role !== '') {

     
        setTimeout(() => {
          window.location.href = '/Login'; 
        }, 2000);
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
            Register Form
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
              type=""
              placeholder="Email"
              data-aos="fade-down"
            
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
        
          
        <Link to='/Login' ><button type="button" onClick={handleButtonClick} className='home-button mb-6 bg-white text-blue-800 rounded-full px-8 py-3 font-bold hover:bg-blue-700 hover:text-white transition duration-300' href="/login">Submit</button></Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Registerr ;
