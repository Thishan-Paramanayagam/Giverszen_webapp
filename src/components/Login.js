import React from 'react'
import { useNavigate } from "react-router-dom";
import loginImg from '../assets/login.jpg'
import { useState } from "react";
import Modal from './Modal';
 function Login() {
    let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/UiStr`; 
    navigate(path);
  }

 


  return (
    
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
        <div className='hidden sm:block'>
            <img className='w-full h-full object-cover' src={loginImg} alt="" />
        </div>

        <div className='bg-gray-100 flex flex-col justify-center'>
            <form className='max-w-[400px] w-full mx-auto bg-white p-4'>
                <h2 className='text-4xl font-bold text-center py-6'>Giverszen</h2>
                <div className='flex flex-col py-2'>
                    <label>Admin name</label>
                    <input className='border p-2' type="text" />
                </div>
                <div className='flex flex-col py-2'>
                    <label>Password</label>
                    <input className='border p-2' type="password" />
                </div>
                <button className='border w-full my-5 py-2 transform hover:translate-y-1 transition duration-200 ease-in-out text-white' id="bt" onClick={routeChange}>Login</button>
                <div className='flex justify-between'>
                    <p className='flex items-center'><input className='mr-2' type="checkbox" /> Remember Me</p>
                
 
                   
                </div>
            </form>
        </div>
    </div>
  );
}



export default Login