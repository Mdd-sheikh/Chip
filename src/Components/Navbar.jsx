import React, { useState } from 'react'
import logo from '../assets/react.svg' 

const Navbar = () => {
    const [name,setname] = useState("menu")
  return (
    <div className=''>
        <div className="flex gap-[200px] justify-center items-center bg-blue-500 w-full h-15 text-white">
            <div className="left flex gap-[10px]">
                <img className='w-[30]px h-[30px]' src={logo} alt="" />
                logo
            </div>
            <div className="mid">
                <ul className='flex gap-[20px]'>
                    <li onClick={()=>{setname("Home")}}>Home{name==="Home"?<hr/>:<></>}</li>
                    <li onClick={()=>{setname("skill")}}>Skill{name==="skill"?<hr/>:<></>}</li>
                    <li onClick={()=>{setname("About")}}>About{name==="About"?<hr/>:<></>}</li>
                    <li onClick={()=>{setname("Courses")}}>Courses{name==="Courses"?<hr/>:<></>}</li>
                </ul>
            </div>
            <div className="right">
                <button>Sign Up</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar;