import React, { useState } from 'react'
import Inputbar from './Inputbar'
import Searchbar from './searchbar'
import Datacontainer from './Datacontainer'

const Main = () => {
    const [input,setInput] = useState("")
    const [storedata,setStoredata] = useState([])
    

    const storedataadd = () =>{
        const data = input.trim()
        if (data ===""){
            return 
        }
        setStoredata([...storedata,data])
        setInput("")
    }

    console.log(storedata);
    

  return (
    <>
    <Inputbar put = {input} setI = {setInput} add = {storedataadd}/>
    <Searchbar/>
    <Datacontainer data = {storedata}/>
    </>
  )
}

export default Main