import React from 'react'
import { Link, animateScroll as scroll } from 'react-scroll'
//import { useRecoilState } from "recoil";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function NavAdmin() {
  return (
    <nav className="col-span-2 border-r border-gray-200 min-h-[90vh] w-[80px] xl:w-[250px] pt-8 px-1 flex flex-col items-start justify-between text-black">
    <div className="space-y-8 w-full mt-20 ">
      
     
        <ul className=' p-4'>
        <FontAwesomeIcon icon="fas fa-user" />
        <li className='p-4 border-b border-black cursor-pointer'><Link to="dash" smooth={true} duration={500}>Dashboard</Link></li>
        <li className='p-4 border-b border-black cursor-pointer'><Link to="muser" smooth={true} offset={-200} duration={500}>Manage Users</Link></li>
        <li className='p-4 border-b border-black cursor-pointer'><Link to="comp" smooth={true} offset={-100} duration={500}>Complaints</Link></li>
        <li className='p-4 border-b border-black cursor-pointer'>Generate report</li>
        <li className='p-4 border-b border-black cursor-pointer'>Manage Account</li>
        <li className='p-4 cursor-pointer'>Logout</li>
        
        
        </ul>
    </div>
  
  </nav>
  );
}

// function NavItem({ link }) {
//     const [activeNav, setActiveNav] = useRecoilState(activeNavItemState);
//     return (
//       <div
//         onClick={() => setActiveNav(link.id)}
//         key={link.id}
//         className={`w-full flex items-center justify-start space-x-8 px-5 cursor-pointer
//          group hover:border-gray-900 border-l-4 border-transparent ${
//            activeNav === link.id && "border-gray-900 "
//          } `}
//       >
//         <span> {link.icon}</span>
//         <h1
//           className={` group-hover:text-white xl:flex hidden ${
//             activeNav === link.id && "text-white"
//           }} `}
//         >
//           {link.title}
//         </h1>
//       </div>
    
  
  
 

export default NavAdmin