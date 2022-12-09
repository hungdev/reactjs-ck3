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

export default function Header() {
  return (
    <div>
      <div className='flex flex-row h-14 items-center fixed w-full top-0 z-50'>
        <div className='flex flex-1 flex-row bg-white px-20 items-center h-full'>
          <div className='text-gray-300 text-4xl mr-auto cursor-pointer font-bold'>Cee</div>
          <div className='flex flex-row'>
            <div className='page-link mr-10 cursor-pointer w-16'>Home</div>
            <div className='page-link cursor-pointer w-20'>Product</div>
          </div>
        </div>
        <div className='flex w-1/2 h-full flex-row items-center justify-between'>
          <div className='ml-4 relative w-64'>
            <input
              className='border rounded-full pl-2 w-full h-7'
              placeholder='Search here'
            />
            <FaSearch className='absolute top-1.5 right-2.5' />
          </div>
          <div className='flex flex-row'>
            <FaUser className='text-2xl mr-10 text-gray-300' />
            <FaHeart className='text-2xl mr-10 text-gray-300' />
            <FaShoppingCart className='text-2xl mr-10 text-gray-300' />
            <FiLogOut className='text-2xl mr-10 text-gray-300' />
          </div>
        </div>
      </div>
    </div>
  );
}
