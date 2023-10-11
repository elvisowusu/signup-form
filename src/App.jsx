import { useState,useEffect } from 'react'
import {useForm} from "react-hook-form"
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import {BiSolidErrorCircle} from 'react-icons/bi'
import './App.css'

function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  const schema = yup.object().shape({
    firstName: yup
        .string()
        .required("First Name cannot be empty"),
    lastName: yup
        .string()
        .required("Last Name cannot be empty"),
    email: yup
        .string()
        .email()
        .required("Looks like this is not an email"),
  //fornumbers: yup
        //     .number()
        //     .positive()
        //     .integer()
        //     .min(18)
        //     .max()
        //     .required(),
    password: yup
        .string()
        .required("Password cannot be empty")
        .min(6,"password should exceed 6 characters")
        .max(15,"password shouldn't exceed 15 characters"),
  //confirmPassword: yup
        // .string()
        //.oneOf([yup.ref("password"),null],"Passwords don't match")
        //.required(),
  })
  
  const {register, handleSubmit, formState:{errors}} =useForm({
      //a resolver helps us to specify how our schema will look like 
      resolver: yupResolver(schema),
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
        <div className='text-white w-[17.6rem] sm:w-[18rem] md:w-[20rem] lg:w-[25rem] xl:w-[33rem] text-sm text-center mb-[3.5rem] mt-[2.4rem] sm:text-left md:text-[1rem] md:leading-6'>
          <h1 className='text-[1.5rem] px-2 mb-[1.2rem] leading-[2rem] md:leading-[2.2rem] lg:leading-[2.4rem] xl:leading-[3rem] sm:text-[1.7rem] md:text-[1.9rem] lg:text-[2.1rem] xl:text-[3.1rem] xl:mb-6'>Learn to code by watching others</h1>
          <p className='opacity-80 ml-2'>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</p>
        </div>
        <div className="flex flex-col justify-center items-center px-4 h-[27rem] -mt-2 md:-mt-6 ">
          <div className='bg-blue text-center text-white px-[3rem] py-3 xl:py-5 w-[17.3rem] mb-6 text-sm rounded-md md:w-[22rem] md:text-[1rem]  lg:w-[25rem] xl:w-[31rem] shadow-sm shadow-gray-700 drop-shadow-sm'>
            Try it free 7 days <span className='text-grayishBlue'>then $20/mo. thereafter</span>
          </div>
          <div className='bg-white py-5 xl:py-9 w-[17.3rem] px-4 xl:px-9 rounded-lg md:w-[22rem] lg:w-[25rem] xl:w-[31rem] shadow-md shadow-gray-600 drop-shadow-2xl'>
          <form 
              onSubmit={handleSubmit(onSubmit)}
              className='font-sans flex flex-col justify-center items-center '
            >
            <input
              className={`border ${errors.firstName? 'border-reddish':''} focus:outline-none focus:border-blue placeholder:text-black placeholder:font-bold px-[1rem] lg:px-[1.5rem] xl:px-[1.7rem] py-[0.6rem] lg:py-[0.9rem] border-y-2 border-x-2 w-full rounded-md`}
              placeholder={errors.firstName?"":"First Name"} 
              type="text" 
              {...register("firstName")}
            />
            {errors.firstName? <BiSolidErrorCircle className='absolute right-8 xl:right-[3.4rem] bottom-[22.8rem] md:bottom-[24.6rem] lg:bottom-[26.9rem] h-5 md:h-6 w-5 md:w-6 text-reddish' />:""}
            <p className='text-[0.7rem] font-bold text-reddish ml-[6rem] sm:ml-[5.5rem] md:ml-[10rem] lg:ml-[12.6rem] xl:ml-[16.7rem] italic' >{errors.firstName?.message}</p>
            <input 
              className={`border ${errors.lastName? 'border-reddish':''} focus:outline-none focus:border-blue placeholder:text-black placeholder:font-bold px-[1rem] lg:px-[1.5rem] xl:px-[1.7rem] py-[0.6rem] lg:py-[0.9rem] border-y-2 border-x-2 w-full mt-3 md:mt-4 rounded-md`}
              placeholder={errors.lastName?"":"Last Name"}
              type="text"
              {...register("lastName")}
            />
            {errors.lastName? <BiSolidErrorCircle className='absolute right-8 xl:right-[3.4rem] bottom-[18.1rem] md:bottom-[19.65rem] lg:bottom-[21.4rem] h-5 md:h-6 w-5 md:w-6 text-reddish' />:""}
            <p className='text-[0.7rem] font-bold text-reddish ml-[6rem] sm:ml-[5.5rem] md:ml-[10rem] lg:ml-[12.6rem] xl:ml-[16.7rem] italic'>{errors.lastName?.message}</p>
            <input 
              className={`border focus:outline-none focus:border-blue ${errors.email?' placeholder-red-600 font-poppins text-sm md:text-lg border-reddish' :'placeholder:text-black'}  placeholder:font-bold inputs px-[1rem] lg:px-[1.5rem] xl:px-[1.7rem] py-[0.6rem] lg:py-[0.9rem] border-y-2 border-x-2 w-full mt-3 md:mt-4 rounded-md`}
              placeholder={errors.email? "email@example/com": "Email Address"} 
              type="email"
              {...register("email")}
            />
            {errors.email? <BiSolidErrorCircle className='absolute right-8 xl:right-[3.4rem] bottom-[13.5rem] md:bottom-[14.7rem] lg:bottom-[15.7rem] h-5 md:h-6 w-5 md:w-6 text-reddish' />:""}
            <p className='text-[0.7rem] font-bold text-reddish ml-[5.5rem] sm:ml-[5rem] md:ml-[9.4rem] lg:ml-[12.1rem] xl:ml-[16rem] italic'>{errors.email?.message}</p>
            <input 
              className={`border ${errors.password? 'border-reddish':''} focus:outline-none focus:border-blue placeholder:text-black placeholder:font-bold px-[1rem] lg:px-[1.5rem] xl:px-[1.7rem] py-[0.6rem] lg:py-[0.9rem]  border-y-2 border-x-2 w-full mt-3 md:mt-4 rounded-md`}
              placeholder={errors.password?"":"Password"}
              type="password"
              {...register("password")}
            />
             {errors.password? <BiSolidErrorCircle className='absolute right-8 xl:right-[3.4rem] bottom-[9rem] md:bottom-[9.8rem] lg:bottom-[10rem] h-5 md:h-6 w-5 md:w-6 text-reddish' />:""}
            <p className='text-[0.7rem] font-bold text-reddish text-right w-[15rem] md:ml-[4.5rem] xl:ml-[10.9rem] italic'>{errors.password?.message}</p>
            <input
              type='submit'
              className='cursor-pointer font-poppins bg-greenish text-white w-full py-3 md:py-4 text-sm mt-2 md:mt-4 rounded-md'
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