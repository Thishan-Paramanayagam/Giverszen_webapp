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
import MAccount from './MAccount';
import Listings from './Listings';
import Drivers from './Drivers';
//import {FaRegUserCircle} from 'react-icons/fa';


function UiStructure
() {
    const [ contentVisible , setContentVisible ] = useState( 0 )
    const [showModal, setShowModal] = useState(false);
  return (
    <div className='h-100'>

        <div>
        <div className=" w-full py-6 bg-[#dcfce7] items-center justify-between flex px-12 fixed z-10">
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
      <nav className="col-span-2 border-r border-gray-200 min-h-[90vh] w-[80px] xl:w-[250px]  px-1 flex flex-col items-start justify-between text-white text-lg">
        <div className="space-y-8 w-full mt-20 ">
          
        
            <ul className='nav nav-pills p-4'>
            
            <li className='p-4 border-b border-white cursor-pointer nav-link active' aria-current="page" onClick={ () => setContentVisible( 0 ) }> Dashboard</li>
            <li className='p-4 border-b border-white cursor-pointer nav-link' data-bs-toggle="pill" onClick={ () => setContentVisible( 1 ) }>Manage Users</li>
            <li className='p-4 border-b border-white cursor-pointer nav-link' data-bs-toggle="pill" onClick={ () => setContentVisible( 2 ) }>Complaints</li>
            <li className='p-4 border-b border-white cursor-pointer nav-link' data-bs-toggle="pill" onClick={ () => setContentVisible( 3 ) }>Listings</li>
            <li className='p-4 border-b border-white cursor-pointer nav-link' data-bs-toggle="pill" onClick={ () => setContentVisible( 4 ) }>Drivers</li>
            <li className='p-4 border-b border-white cursor-pointer nav-link' data-bs-toggle="pill" onClick={ () => setContentVisible( 5 ) }> Manage Account</li>
            <li className='p-4 cursor-pointer ' onClick={() => setShowModal(true)}>Logout</li>
            
            
            </ul>
            {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ease-in duration-300">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-green-200 outline-none focus:outline-none">
               
                <div className="relative p-6 flex-auto text-black ml-4"> Are you surely want to Logout?
                  
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                <div class="btn">
              <button class="w-36 h-10 rounded-full text-white
        transform hover:translate-x-1 transition duration-200 ease-in-out" id="bt" onClick={() => setShowModal(true)}>
            Yes
        </button>
        <button class="w-36 h-10 rounded-full text-white ml-4
         transform hover:translate-x-1 transition duration-200 ease-in-out" id="bt"onClick={() => setShowModal(false)}>
          No
        </button></div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
        </div>
      
      </nav>
     </div>

     <div>
     { contentVisible === 0 && <Dash/>}
     { contentVisible === 1 && <MUser/>}
     { contentVisible === 2 && <Complaints/>}
     { contentVisible === 3 && <Listings/>}
     { contentVisible === 4 && <Drivers/>}
     { contentVisible === 5 && <MAccount/>}
    </div>  
        
    </div>
  )
}

export default UiStructure
