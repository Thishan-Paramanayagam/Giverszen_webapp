import React, {useState} from 'react'
import {
    BellIcon,
    ChipIcon,
    InboxIcon,
    SearchIcon,
    UserCircleIcon,
  } from "@heroicons/react/outline";
  import GN from '../assets/GNL.png';
  import { Link } from 'react-router-dom'
import Dash from './Dash';
import MUser from './MUser';
import Complaints from './Complaints';
import Generatereport from './Generatereports';

function UiStructure
() {
    const [ contentVisible , setContentVisible ] = useState( 0 )
  return (
    <div className='h-100'>

        <div>
        <div className=" w-full py-6 bg-[#F0F5F5] items-center justify-between flex px-12 fixed z-10">
    {/* search */}
    <div className="w-full lg:flex hidden space-x-4 items-center justify-start py-2   ">
      <SearchIcon className="w-4 h-4" />
      <input
        type="text"
        placeholder="Search anything..."
        className="bg-transparent outline-none"
      />
    </div>
    {/* logo */}
    <div className="items-center w-full justify-center flex space-x-4">
      <ChipIcon className="w-6 h-6" />
      <h1 className="text-xl text-gray-900 font-medium "> Admin Dashboard </h1>
    </div>
    {/* icons */}
    <div className="items-center justify-end space-x-6 flex w-full">
      <BellIcon className="header-icon" />
      <InboxIcon className="header-icon" />
      <UserCircleIcon className="header-icon" />
      <img class="w-10 h-10 rounded-full mr-4" src={GN} alt='/' />
    </div>
  </div>
        </div>

      <div>
      <nav className="col-span-2 border-r border-gray-200 min-h-[90vh] w-[80px] xl:w-[250px]  px-1 flex flex-col items-start justify-between text-black">
        <div className="space-y-8 w-full mt-20 ">
          
        
            <ul className='nav nav-pills p-4'>
            
            <li className='p-4 border-b border-black cursor-pointer nav-link active' aria-current="page" onClick={ () => setContentVisible( 0 ) }> Dashboard</li>
            <li className='p-4 border-b border-black cursor-pointer nav-link' data-bs-toggle="pill" onClick={ () => setContentVisible( 1 ) }>Manage Users</li>
            <li className='p-4 border-b border-black cursor-pointer nav-link' data-bs-toggle="pill" onClick={ () => setContentVisible( 2 ) }>Complaints</li>
            <li className='p-4 border-b border-black cursor-pointer nav-link' data-bs-toggle="pill" onClick={ () => setContentVisible( 3 ) }>Generate report</li>
            <li className='p-4 border-b border-black cursor-pointer nav-link' data-bs-toggle="pill" onClick={ () => setContentVisible( 4 ) }>Manage Account</li>
            <li className='p-4 cursor-pointer'>Logout</li>
            
            
            </ul>
            <img className='w-[200px] mx-auto mt-6 ' src={GN} alt='/' />
        </div>
      
      </nav>
     </div>

     <div>
     { contentVisible === 0 && <Dash/>}
     { contentVisible === 1 && <MUser/>}
     { contentVisible === 2 && <Complaints/>}
     { contentVisible === 3 && <Generatereport/>}
     { contentVisible === 4 && <Complaints/>}
    </div>  
        
    </div>
  )
}

export default UiStructure
