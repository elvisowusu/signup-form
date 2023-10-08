import { useState,useEffect } from 'react'
import desktopBg from "./assets/bg-intro-desktop.png"
import mobileBg from "./assets/bg-intro-mobile.png"
import './App.css'

function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Remove event listener when the component is unmounted
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array ensures that the effect runs once when the component mounts

  return (
    <div className={`font-poppins flex flex-col justify-center items-center  h-[121vh] ${screenWidth <= 640? "bg-[url(./assets/bg-intro-mobile.png)]":"bg-[url(./assets/bg-intro-desktop.png)]"} bg-red-300 bg-cover overflow-scroll sm:h-[100vh] sm:flex-row`}>
        <div className='text-white w-[17.6rem] text-sm text-center mb-[3.5rem] mt-[2.4rem]'>
          <h1 className='text-[1.5rem] px-2 mb-[1.2rem] leading-[2rem]'>Learn to code by watching others</h1>
          <p className='opacity-80'>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</p>
        </div>
        <div className="flex flex-col justify-center items-center px-4 h-[27rem] -mt-2 md:-mt-6 ">
          <div className='bg-blue text-center text-white px-[3rem] py-3 w-[17.3rem] mb-6 text-sm rounded-md md:w-[20rem] lg:w-[22rem]'>
            Try it free 7 days <span className='text-grayishBlue'>then $20/mo. thereafter</span>
          </div>
          <div className='bg-white py-5 w-[17.3rem] rounded-lg md:w-[20rem] px-4'>
          <form 
              className='flex flex-col justify-center items-center '
            >
            <input
              className='px-[1rem] py-[0.4rem] border-y-2 border-x-2 w-full mb-3 rounded-md'
              placeholder="First Name" 
              name="firstName"
              type="text" 
            />
            <input 
              className='px-[1rem] py-[0.4rem] border-y-2 border-x-2 w-full mb-3 rounded-md'
              placeholder="Last Name" 
              name="lastName"
              type="text"
            />
            <input 
              className='inputs px-[1rem] py-[0.4rem] border-y-2 border-x-2 w-full mb-3 rounded-md'
              placeholder="Email Address" 
              name="email"
              type="email" 
            />
            <input 
              className='px-[1rem] py-[0.4rem] border-y-2 border-x-2 w-full mb-3 rounded-md'
              placeholder="Password"
              name="password"
              type="password" 
            />
            <button 
              className='bg-greenish text-white w-full py-3 text-sm rounded-md'>
              CLAIM YOUR FREE TRIAL
            </button>
          </form>
          <p className='text-[0.6rem] text-center px-8 mt-3 text-grayishBlue'>By clicking the button,you are agreeing to our <span className='text-reddish'>Terms and Services</span></p>
        
          </div>
          </div>
    </div>
  )
}

export default App
