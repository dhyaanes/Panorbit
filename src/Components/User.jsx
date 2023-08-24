import React from 'react'
import { Link, useNavigate} from 'react-router-dom'
import './style.css'

const User = () => {

  const id = window.localStorage.getItem("id")
  const navigate= useNavigate();
  return (
    <div className='profile'>
      <div className='left-navbar'>
      <ul>
          <li><Link to={`/profile/${id}`}>Profile</Link></li>
          <li><Link to='/user'>Post</Link></li>
          <li><Link to='/user'>Gallery</Link></li>
          <li><Link to='/user'>ToDo</Link></li>
        </ul>
      </div>

      <div className='details'>
      <div className='top-nav'>
          <h6>Profile</h6>
          <button onClick={()=> navigate('/') }>SIGN OUT</button>
      </div>
      <div className='post'>
        <h1>Coming soon...</h1>
      </div>
      </div>
    </div>
  )
}

export default User