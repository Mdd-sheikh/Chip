import React from 'react'

const Datacontainer = ({ data }) => {
    return (
        <>
            <div className="container flex gap-[10px] wrap-wrap">
                {data.map((item,index) => {
                    return (
                        <div className="boxes w-[100px] h-[30px] flex border-[1px] gap-[10px] items-center justify-center flex rounded-[5px]">
                            <div className="para">{item}</div>
                            <div className="btn w-[10px] h-[10px] rounded-[50px] bg-blue-400 text-[8px] justify-center"><button className='w-[10px] h-[10px]'>X</button></div>

                        </div>

                    )
                })}




            </div>
        </>
    )
}

export default Datacontainer;