import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"
import {useDispatch} from 'react-redux'
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/authSlice";



const Signing = () => {

  

  const [emailUsername, setEmailUsername] = useState(true)
  const [passwordVisibility, setPasswordVisibility] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()
  


  const handleSubmit = async (e) =>{

    e.preventDefault()

    try {
      const response = await axios.post(`http://localhost:9000/auth/login`, {email, password})
      const data = response.data

      dispatch(login(data))
      navigate('/profile')
      
      
    } catch (error) {
      
    }

  }

  const toggleEmailUsername = () =>{
    setEmailUsername(prev => !prev)
  }
  
  const toggleVisibillity = () => {
    setPasswordVisibility(prev => !prev)
  }

  return (
    <main className="w-full h-screen bg-red-500 flex justify-center items-center">
      <section className="w-[60vh] h-[50vh] bg-white rounded-tr-3xl rounded-bl-3xl shadow-md flex flex-col">
        <div className="flex flex-col justify-center items-center m-10 gap-4">
          <div>
            <h1 className="text-center text-xl font-bold gap-2 flex">
              Need and account?{" "}
              <Link className="text-blue-500" to="/register">
                Sign up
              </Link>
            </h1>
          </div>

          <form className="w-full h-full mt-4 gap-4 flex flex-col">
            <div className="border w-[80%] rounded mx-10 p-2 flex gap-2">
              
              <div onClick={toggleEmailUsername}>
              { emailUsername ? (<svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>) : (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
</svg>
)}
              </div>
            
              <div className="border gap-2"></div>
              <input
                className="w-full outline-none"
                type={emailUsername ? "text" : "email"}
                onChange={(e)=>setEmail(e.target.value)}
                placeholder="Enter Username or Email"
                required
              />
            </div>

            <div className="border w-[80%] rounded mx-10 p-2 flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                />
              </svg>
              <div className="border gap-2"></div>

              <input
                className="w-full outline-none"
                type={passwordVisibility ? "text" : "password"}
                placeholder="Enter Password"
                onChange={(e)=>setPassword(e.target.value)}
                required
              />
              <div>
                
                <div onClick={toggleVisibillity}>
                  {
                    passwordVisibility ? (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                  </svg>
                  ) : (<svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>)
                  }
                </div>
              </div>
            </div>

            <button onClick={handleSubmit} className="px-2 py-3 mx-10 bg-blue-500 " type="submit">
              SIGN IN
            </button>
          </form>

          <div>
            <Link className="text-gray-400">Forgotten your password?</Link>
          </div>

          <div>
            <p>Problems signing in? <Link to='/contact'>Contact us</Link></p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Signing;
