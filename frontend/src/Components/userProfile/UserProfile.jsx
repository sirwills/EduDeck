import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../dashboard/Dashboard'

const UserProfile = () => {
  return (
    <main className='flex w-screen h-screen'>
        <aside className='flex basis-3/12 w-[10%vw] bg-green-600'>

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