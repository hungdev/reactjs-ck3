import React from 'react';
import {
  FaSearch,
  FaUser,
  FaHeart,
  FaShoppingCart,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import Eye from '../assets/Eye';
import EyeClose from '../assets/EyeClose';
import '../App.scss';
import Header from '../components/Header';

export default function Login() {
  return (
    <div className='mt-16 px-16 auth-screen'>
      {/* header */}
      <Header />

      {/* content */}
      <div className='wrap-content'>
        <div className='left'></div>
        <div className='flex w-1/2 justify-center items-center right '>
          <div className='w-4/5 p-10 border'>
            <div className='text-center text-3xl font-bold'>Login</div>
            <div className='mt-4'>Email</div>
            <input
              placeholder='type here' className='border-black border rounded pl-2 w-full h-10' />
            <div className='mt-2'>Password</div>
            <div className='relative'>
              <input
                placeholder='Must be at least 8 characters'
                className='border-black border rounded pl-2 w-full h-10'
                type={'password'}
              />
              <div className='eye-input'>  <EyeClose /> </div>
            </div>
            <div
              className='rounded w-full bg-gray-800 h-14 flex justify-center items-center uppercase font-medium text-white cursor-pointer mt-4'>
              Login
            </div>
            <div className='rounded w-full bg-gray-800 h-14 flex justify-center items-center uppercase font-medium text-white cursor-pointer mt-4'>
              Login as guest
            </div>
            <div className='flex justify-center items-center mt-2 flex-col'>
              <div className='flex'>Not a Member? <div to={'/register'} className='ml-2 text-blue-700 cursor-pointer'>Sign Up</div></div>
              <div className='mt-2 px-8 text-center'>By continuing, you agree to accept our Privacy Policy & Terms of Service.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
