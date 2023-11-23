import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiSettings } from "react-icons/fi";
import { PiUsersThreeBold } from "react-icons/pi";  //user 
import { GrDocument } from "react-icons/gr";  //General ledger 
import { BsDatabaseGear } from "react-icons/bs";  //data base  
import { IoKeyOutline } from "react-icons/io5";  //integration 
import { GoLock } from "react-icons/go";  //Change password 
// import { TfiWorld } from "react-icons/Tfi";  //Change password 
import { TbWorld } from "react-icons/Tb";  //Change password 
import { HiOutlineDocument} from "react-icons/hi2";  //Change password 

function SideNav() {
  return (

     <> 
    
     
      

    <div class="hidden md:fixed md:top-36 md:bottom-0 md:flex md:w-64 md:flex-col bg-gray-800 pl-3">
      {/* Sidebar Header */}
     <div  className="sideNavMain">

    <div  className= "flex flex-1 flex-col overflow-y-auto pt-5 pb-12 desktop-sideBar">
        

        
        
      
      {/* Sidebar Links */}
     
        <ul className='text-white'>
          <li style={{ marginBottom: '20px' }}>
            <NavLink
              className={(isActive) =>
                `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100  ${isActive ? "text-green-400y" : "text-yellow-400"}text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white rounded-md lg:border-0 lg:p-0  h-7`
              }
            >
              <div className='flex   items-center space-x-2'>     
                <div><FiSettings /></div>
                <div >General</div>
              </div>
            </NavLink>
          </li>

          <li style={{ marginBottom: '20px' }}>
            <NavLink
              to="/userRegistration"
              className={(isActive) =>
                `block py-2 pr-4 pl-3 duration-100 border-b border-gray-100  ${isActive ? "text-green-400y" : "text-yellow-400"}text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white rounded-md lg:border-0 lg:p-0  h-7`
              }
            >
              
              <div className='flex   items-center space-x-2'>   
                <div><PiUsersThreeBold /></div>
                <div >User</div>
              </div>
            </NavLink>
          </li>

          <li style={{ marginBottom: '20px' }}>
            <NavLink
              className={(isActive) =>
                `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100  ${isActive ? "text-green-400y" : "text-yellow-400"}text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white rounded-md lg:border-0 lg:p-0  h-7`
              }
            >
              

              <div className='flex   items-center space-x-2'>   
                <div><BsDatabaseGear /></div>
                <div >CostCenter</div>
              </div>
            </NavLink>
          </li>

          <li style={{ marginBottom: '20px' }}>
            <NavLink
              className={(isActive) =>
                `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100  ${isActive ? "text-green-400y" : "text-yellow-400"}text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white rounded-md lg:border-0 lg:p-0  h-7`
              }
            >
              
              <div className='flex   items-center space-x-2'>   
                <div><HiOutlineDocument /></div>
                <div >General Ledger</div>
              </div>
            </NavLink>
          </li>
          {/* Add more NavLink items here as needed */}



          <li style={{ marginBottom: '20px' }}>
            <NavLink
              className={(isActive) =>
                `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100  ${isActive ? "text-green-400y" : "text-yellow-400"}text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white rounded-md lg:border-0 lg:p-0  h-7`
              }
            >
              
              <div className='flex   items-center space-x-2'>   
                <div><HiOutlineDocument /></div>
                <div >non financial budget</div>
              </div>
            </NavLink>
          </li>


          <li style={{ marginBottom: '20px' }}>
            <NavLink
              className={(isActive) =>
                `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100  ${isActive ? "text-green-400y" : "text-yellow-400"}text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white rounded-md lg:border-0 lg:p-0  h-7`
              }
            >
              
              <div className='flex   items-center space-x-2'>   
                <div><BsDatabaseGear /></div>
                <div >Employee Type</div>
              </div>
            </NavLink>
          </li>

          <li style={{ marginBottom: '20px' }}>
            <NavLink
              className={(isActive) =>
                `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100  ${isActive ? "text-green-400y" : "text-yellow-400"}text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white rounded-md lg:border-0 lg:p-0  h-7`
              }
            >
              

              <div className='flex   items-center space-x-2'>   
                <div><IoKeyOutline /></div>
                <div >Integration</div>
              </div>
            </NavLink>
          </li>


          <li style={{ marginBottom: '20px' }}>
            <NavLink
              className={(isActive) =>
                `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100  ${isActive ? "text-green-400y" : "text-yellow-400"}text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white rounded-md lg:border-0 lg:p-0  h-7`
              }
            >
              

              <div className='flex   items-center space-x-2'>   
                <div><GoLock /></div>
                <div >Subscription</div>
              </div>
            </NavLink>
          </li>


          <li style={{ marginBottom: '20px' }}>
            <NavLink
              className={(isActive) =>
                `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100  ${isActive ? "text-green-400y" : "text-yellow-400"}text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white rounded-md lg:border-0 lg:p-0  h-7`
              }
            >
              

              <div className='flex   items-center space-x-2'>   
                <div><GoLock /></div>
                <div >Change Password </div>
              </div>
            </NavLink>
          </li>

          <li style={{ marginBottom: '20px' }}>
            <NavLink
              className={(isActive) =>
                `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100  ${isActive ? "text-green-400y" : "text-yellow-400"}text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white rounded-md lg:border-0 lg:p-0  h-7`
              }
            >
             

              <div className='flex   items-center space-x-2'>   
                <div><TbWorld /></div>
                <div >Support </div>
              </div>
            </NavLink>
          </li>
        </ul>
      
      </div>
    </div>
    </div>

  
   
    
   
    </>
    
  );
}

export default SideNav;
