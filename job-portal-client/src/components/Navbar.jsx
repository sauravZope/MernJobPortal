import React from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import { signOut } from 'firebase/auth';
import {database } from "../firebase/firebaseConfig";
import {useNavigate} from 'react-router-dom'
const Navbar = () => {
    // donot worry about this ,we used this in mobile mode.
    const [isMenuOpen, setisMenuOpen] = useState(false);
    const handleMenuToggler = () => {
        setisMenuOpen(!isMenuOpen);
    }
    //  general nav items 
    // we created array of items with each item as path and title ,used in map
    const navItems =
    [
        { path: '/home', title: "Start a Search" },
        { path: '/my-job', title: "My Jobs" },
        { path: '/salary', title: "Salary Estimate" },
        { path: '/post-job', title: 'Post A Job' },

    ] 
      const history=useNavigate();

    const handleClick=()=>
    {
        signOut(database).then(val=>{
            console.log(val);
            history('/');
        })
    }

    return (
        <header className='max-w-screen-2xl container-mx-auto xl:px-24 px-4'>
            <nav className='flex justify-between items-center py-6'>
                <a href='/' className="flex item-center gap-2 text-2xl text-black">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="29"
                        height='55'
                        viewBox="0 0 29 30"
                        fill="none"
                    >
                        <circle
                            cx="12.0143"
                            су="12.5143"
                            r="12.0143"
                            fill="#3575E2"
                            fillOpacity="0.4"
                        />
                        <circle cx="16.9857" су="17.4857" r="12.0143" fill="#3575E2" />
                    </svg>{" "}
                    <span>NeuroNexus Innovations Jobs</span>
                </a>
                {/*nav items for large devices */}
                <ul className='hidden md:flex gap-12'>
                    {
                        navItems.map(({ path, title })=>(
                        <li key={path} className='text-base text-primary'>
                            <NavLink
                                to={path}
                                className={({ isActive}) =>
                                     isActive ? "active" : ""
                                }
                            >
                          {title}
                            </NavLink>
                        </li>
                        ))        
                }
                </ul>
                {/*signUp and login btn */}
                <div className='text-base text-primary  font-medium space-x-5 hidden lg:block'>
                    <Link to="/login" className='py-2 px-5 border rounded' onClick={handleClick}>Sign Out</Link>
                    
                </div>

                {/*mobile menu*/}
                 <div className='md:hidden block'>
                    <button onClick={handleMenuToggler}> 
                    {   isMenuOpen? <FaXmark className="w-5 h-5 text-primary"/>:<FaBarsStaggered className="w-5 h-5 text-primary"/>
                   }
                   </button>
                 </div>
            </nav>

            {/*navitems for mobile*/}
            <div className={`px-4 bg-black py-5 rounded-sn ${isMenuOpen?"" :"hidden"}`}>
                <ul>
                    {
                         navItems.map(({ path, title })=>(
                            <li key={path} className='text-base text-white first:text-white py-1'>
                                <NavLink
                                    to={path}
                                    className={({ isActive}) =>
                                         isActive ? "active" : ""
                                    }
                                >
                              {title}
                                </NavLink>
                            </li>
                            ))}
                    <li className='text-white py-1' >
                         <Link to="/login">Log in</Link>
                         </li>
                </ul>
            </div>
        </header>
    )
}

export default Navbar