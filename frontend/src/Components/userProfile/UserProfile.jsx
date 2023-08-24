import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../dashboard/Dashboard'
import LogOutBtn from './LogOutBtn'
import UserDetails from './userDetails/UserDetails'


const UserProfile = () => {


  return (
    <main className='flex w-screen h-screen'>
        <aside className='flex w-ful -h-full basis-3/12 bg-green-600'>
        <div className='m-4 bg-green-300 w-full h-full rounded-xl flex flex-col items-center gap-4'>
            <UserDetails/>
            <LogOutBtn/>
        </div>
            
        </aside>
        

        <section className='flex basis-9/12 w-64'>

            <Routes>
                <Route path='/dashboard' element={<Dashboard/>}/>
            </Routes>

        </section>
    </main>
  )
}

export default UserProfile