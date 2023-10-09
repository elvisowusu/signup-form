import { useState,useEffect } from 'react'
import {useForm} from "react-hook-form"
import * as yup from 'yup'
import './App.css'

function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  const schema = yup.object().shape({
    firstName: yup
    .string()
    .required(),
    lastName: yup
    .string()
        .required(),
        email: yup
        .string()
        .email()
        .required(),
        // fornumbers: yup
        //     .number()
        //     .positive()
        //     .integer()
        //     .min(18)
        //     .max()
        //     .required(),
        password: yup
        .string()
        .min(6)
        .max(15)
        .required(),
        // confirmPassword: yup
        //     .string()
        //     .oneOf([yup.ref("password"),null])
    //     .required(),
  })
  
  const {register, handleSubmit, errors} =useForm({
      //a resolver helps us to specify how our schema will look like 
      resolver:
  });

  const onSubmit =(data)=>{
    console.log(data)
  }




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
    <div className={`font-poppins flex flex-col justify-center items-center  h-[121vh] ${screenWidth <= 640? "bg-[url(./assets/bg-intro-mobile.png)]":"bg-[url(./assets/bg-intro-desktop.png)]"} bg-red-300 bg-cover overflow-cover sm:h-[100vh] sm:flex-row md:gap-[4rem]`}>
        <div className='text-white w-[17.6rem] text-sm text-center mb-[3.5rem] mt-[2.4rem] sm:text-left'>
          <h1 className='text-[1.5rem] px-2 mb-[1.2rem] leading-[2rem] sm:text-[1.6rem]'>Learn to code by watching others</h1>
          <p className='opacity-80'>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</p>
        </div>
        <div className="flex flex-col justify-center items-center px-4 h-[27rem] -mt-2 md:-mt-6 ">
          <div className='bg-blue text-center text-white px-[3rem] py-3 w-[17.3rem] mb-6 text-sm rounded-md md:w-[22rem]  lg:w-[2rem]'>
            Try it free 7 days <span className='text-grayishBlue'>then $20/mo. thereafter</span>
          </div>
          <div className='bg-white py-5 w-[17.3rem] rounded-lg md:w-[22rem] px-4'>
          <form 
              onSubmit={handleSubmit(onSubmit)}
              className='font-sans flex flex-col justify-center items-center '
            >
            <input
              className='border focus:outline-none focus:border-blue placeholder:text-black placeholder:font-bold px-[1rem] py-[0.6rem] border-y-2 border-x-2 w-full mb-3 rounded-md '
              placeholder="First Name" 
              type="text" 
              {...register("firstName")}
            />
            <input 
              className='border focus:outline-none focus:border-blue placeholder:text-black placeholder:font-bold px-[1rem] py-[0.6rem] border-y-2 border-x-2 w-full mb-3 rounded-md md:py-[0.8rem]'
              placeholder="Last Name"
              type="text"
              {...register("lastName")}
            />
            <input 
              className='border focus:outline-none focus:border-blue placeholder:text-black placeholder:font-bold inputs px-[1rem] py-[0.6rem] border-y-2 border-x-2 w-full mb-3 rounded-md'
              placeholder="Email Address" 
              type="email"
              {...register("email")}
            />
            <input 
              className='border focus:outline-none focus:border-blue placeholder:text-black placeholder:font-bold px-[1rem] py-[0.6rem] border-y-2 border-x-2 w-full mb-3 rounded-md'
              placeholder="Password"
              type="password"
              {...register("password")}
            />
            <input
              type='submit'
              className='font-poppins bg-greenish text-white w-full py-3 text-sm rounded-md'
              value="CLAIM YOUR FREE TRIAL" 
            />
          </form>
          <p className='text-[0.6rem] px-3 sm:px-8 text-center  mt-3 text-grayishBlue'>By clicking the button,you are agreeing to our <span className='text-reddish'>Terms and Services</span></p>
        
          </div>
          </div>
    </div>
  )
}

export default App