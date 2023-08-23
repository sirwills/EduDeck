import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='w-full shadow-md flex justify-between md:justify-between m-auto h-12 items-center md:px-20 md:pl-4 relative  t0p-0 '>
        <div className='md:ml-20'>
            <h1 className='flex gap-2'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}            stroke="currentColor"className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
                EduDeck
            </h1>
        </div>

        <div className='md:flex items-center mt-[370px] py-4 md:mt-0 bg-green-300 md:bg-transparent flex md:flex-row flex-col w-screen absolute md:w-fit md:static justify-center gap-4  z-10'>
            <ul className='md:flex md:flex-row flex flex-col gap-4 md:pr-20 md:gap-10 itemx-center justify-center'>
                <li><Link to= '/'>Home</Link></li>
                <li><Link to= '/about'>About Us</Link></li>
                <li><Link to= '/gallery'>Gallery</Link></li>
                <li><Link to= '/membership'>Membership</Link></li>
                <li><Link to= '/contact'>Contact Us</Link></li>
            </ul>

            <div className='md:flex md:gap-10 md:flex-row flex flex-col gap-4 '>
                <Link className='py-1 px-4 rounded-md bg-red-700 text-white font-semibold' to="/register"><button>Sign Up</button></Link>
                <Link className='py-1 px-4 rounded-md bg-red-700 text-white font-semibold' to="/login"><button>Login</button></Link>
            </div>
            
            
        </div>
        <div className='md:hidden mr-4'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

            </div>
    </nav>
  )
}

export default Nav