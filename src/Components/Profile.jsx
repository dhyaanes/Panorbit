import React, {useEffect, useState} from 'react'
import './style.css'
import { Link, useNavigate,useParams} from 'react-router-dom'
import axios from 'axios';
import { faker } from '@faker-js/faker';


const Profile = () => {
  const navigate= useNavigate();
  let {id}= useParams()
  window. localStorage.setItem("id",id)
  let key=localStorage.getItem("id")
  console.log(key)
  let img=faker.image.avatar()

  const [data, setData] = useState([]);
    useEffect(() => {
        try {
            let data=axios.get('https://panorbit.in/api/users.json')
            .then((x)=>{
              let user=x.data.users
              setData(user)
            })
          } catch (error) {
            console.log(error);
          }
        }, []);
      
  return (
    <div className='profile'>
      <div className='left-navbar'>
      <ul>
          <li><Link to={`/profile/${key}}`}>Profile</Link></li>
          <li><Link to='/user'>Post</Link></li>
          <li><Link to='/user'>Gallery</Link></li>
          <li><Link to='/user'>ToDo</Link></li>
        </ul>
      </div>
      <div className='details' id='details1'>
        <div className='top-nav'>
          <h6>Profile</h6>
          <button onClick={()=> navigate('/') }>SIGN OUT</button>
        </div>
        <div className='user-details'>
          <div className='user-details-left'>
          {data.map((x)=>{
            if(x.id==id){
              return(
                <ul>
                  <img src={img} alt="" style={{height:"180px",width:"180px"}}/>
      <li><h6>{x.name}</h6></li>
      <li>Username : <h6>{x.username}</h6></li>
      <li>e-mail : <h6>{x.email}</h6></li>
      <li>Phone : <h6>{x.phone}</h6></li>
      <li>Website :<h6>{x.website}</h6></li>
      <hr />
      <li>Name :<h6>{x.name}</h6></li>
      <li>catchphrase:<h6>{x.company.catchPhrase}</h6></li>
      <li>bs :<h6>{x.company.bs}</h6></li>
      <label htmlFor=""></label>
    </ul>
        )
            }
               
            })}

          </div>
          
          <div className='user-details-right'>
          {data.map((x)=>{
            if(x.id==id){
                return(
                  <ul>
                  <li>Address :</li>
                  <li>Street :<h6>{x.address.street}</h6></li>
                  <li>Suite : <h6>{x.address.suite}</h6></li>
                  <li>City :<h6> {x.address.city}</h6></li>
                  <li>Zipcode : <h6>{x.address.zipcode}</h6></li>
                </ul>
                )}
            })}
            <div className='image'></div>
            <div className='chat'>
              <button>Chats</button>
            </div>
          </div>
        </div>
      </div>
            
    </div>
  )
}

export default Profile



