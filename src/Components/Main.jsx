import React, { useState,useEffect} from 'react'
import './style.css'
import {useNavigate } from 'react-router-dom'
import axios from 'axios';

const Main = () => {
    const [data, setData] = useState([]);
    let navigate=useNavigate()
    useEffect(() => {
        try {
            let data=axios.get('https://panorbit.in/api/users.json').then((x)=>{setData(x.data.users)})
          } catch (error) {
            console.log(error);
          }
        }, []);
        console.log(data);
  return (
    <div className='main'>
        <div className='header'>
        <center><h3>Select an account</h3></center><br />
            {data.map((x)=>{
                return(
                        <h6 onClick={(e)=>{
                            e.preventDefault()
                            navigate(`/profile/${x.id}`)
                        }}>{x.name}</h6>
                )
            })}
        </div>
        
    </div>
  )
}

export default Main