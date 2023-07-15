import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addInfor } from '../redux/action/ActionRegister';
import { NavLink } from 'react-router-dom';


export default function Register() {
    const [userName,setUserName]=useState('');
    const [password,setPassword]=useState('');
    const [email,setEmail]=useState('');
    const dispatch=useDispatch();
    const handleSetInfor=()=>{
        dispatch(addInfor(userName,email,password))
    }
  return (
    <div>
       <div className='d-flex flex-column align-items-center border'>
            <h3>Register</h3>
            <label htmlFor="">Name</label>
            <input type="text" placeholder='Name' className='border border-radius-5' value={userName} onChange={(e)=>setUserName(e.target.value)} />
            <label htmlFor="">Email</label>
            <input type="email" placeholder='Enter Email' value={email} onChange={(e)=>setEmail(e.target.value)} />
            <label htmlFor="">Password</label>
            <input type="password" placeholder='Enter password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <NavLink to='/signinbootstrap'><button className='mt-3' onClick={handleSetInfor}>Submit</button></NavLink>
       </div>
    </div>
  )
}
