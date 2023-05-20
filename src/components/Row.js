import React,{useState,useEffect} from 'react'
import axios from 'axios'
const Row = ({title,fetchURl}) => {
  const [movies,setmovie]=useState([]);

  useEffect(()=>{
    
  },[])
  return (
    <div>{fetchURl}</div>
    
  )
}

export default Row