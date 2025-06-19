import React from 'react'

const Inputbar = ({ put, setI,add }) => {


    return (
        <div className='items-center my-[10px]'>
            <input className='border-[1.5px] w-120 h-10 border-radius-[5px] rounded-l-[5px]' onChange={(e) => setI(e.target.value)} value={put} type="text" placeholder='add....' />
            <button className='w-[90px] h-10 bg-blue-400 rounded-r-[5px] mx-[5px]' onClick={add}>Add</button>
        </div>
    )
}

export default Inputbar