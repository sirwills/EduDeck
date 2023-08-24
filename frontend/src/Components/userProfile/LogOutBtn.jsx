import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../redux/authSlice';

const LogOutBtn = () => {

    const dispatch = useDispatch();
    const  navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout())
        navigate('/login')
    }
  return (
    <div className='w-full flex justify-center' >
       
         <button onClick={handleLogout} className='px-2 w-[50%] py-1 bg-blue-600 rounded'>logout</button>

        
    </div>
  )
}

export default LogOutBtn