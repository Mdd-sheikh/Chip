import React, { useState } from 'react'
import logo from '../assets/image.png'

const Searchbar = () => {

  const [click,setclick] = useState("name")
  return (
    <div>
      <div className="dash "><button className='flex' onClick={()=> setclick("clk")}><img className='w-[35px] h-[35px]' src={logo}/>{click==="clk"?<input type='search' placeholder='search........'/>:<></>}</button></div>
     
    </div>
  ) 
}

export default Searchbar