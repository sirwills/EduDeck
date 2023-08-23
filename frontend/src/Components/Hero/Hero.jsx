import React from 'react'
import { Link } from 'react-router-dom'
import hero from "../../assets/Hero.jpg"



const Hero = () => {
  return (
    <main className=' w-auto h-screen overflow-hidden flex flex-col  m-auto bg-[#C5A78B] items-center'>
      
      <section className='md:flex flex flex-col md:flex-row md:justify-between md:mx-20 h-72 items-center '>
        <div className='font-bold md:text-[30px] text-white'>
          <h2>
          Experience a new kind of learning - social, dynamic, and engaging.
           <br />Your adventure starts with us at CodeDeck!
          </h2>
        </div>


        <div className='flex flex-col gap-8 text-gray-300'>
          <div>
            <p>
            Improve your skills for a better future by learning in a fun way
            </p>
          </div>

          <div className='flex gap-8 items-center'>
          <Link className='px-3 py-2 bg-blue-600 rounded-full'><button>Get Started</button></Link>
            <Link><button>How it works</button></Link>
          </div>
        </div>
      </section>

      <section className='h-[40vh] md:w-auto  w-full object-contain  items-center flex justify-center rounded-tl-3xl rounded-br-3xl relative overflow-hidden bg-red-300  md:mx-20 mx-20 ' >
        <img className='h-full w-full object-cover overflow-hidden' src={hero} alt="" />
      </section>


      <section className='w-auto h-14 flex justify-evenly items-center md:mx-20 mt-10'>


        <div className=' text-center  w-[25vw]'>
          <h1 className='font-bold text-3xl text-white'>
            10k+
          </h1>
          <p className='text-gray-200'>Members</p>
        </div>

        <div className=' text-center border-l-4 border-r-4 w-[25vw]'>
          <h1 className='font-bold text-3xl text-white'>
            10k+
          </h1>
          <p className='text-gray-200'>Members</p>
        </div>

        <div className=' text-center  w-[25vw]'>
          <h1 className='font-bold text-3xl text-white'>
            10k+
          </h1>
          <p className='text-gray-200'>Members</p>
        </div>

        <div className=' text-center border-l-4 w-[25vw]'>
          <h1 className='font-bold text-3xl text-white'>
            10k+
          </h1>
          <p className='text-gray-200'>Members</p>
        </div>
        
      </section>
</main>
  )
}

export default Hero