import { useState } from 'react'
import destopBg from "./assets/bg-intro-desktop.png"
import mobileBg from "./assets/bg-intro-mobile.png"
import './App.css'

function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  return (
    <div className={`${screenWidth <= 640? "bg-[url(./assets/bg-intro-mobile.png)]":"bg-[url(./assets/bg-intro-desktop.png)]"}`}>
        <div>
          <h1>Learn to code by watching others</h1>
          <p>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div>Try it free 7 days <span>then $20/mo. thereafter</span></div>
          <form 
            className='flex flex-col justify-center items-center'
            >
            <input
              placeholder="First Name" 
              name="firstName"
              type="text" 
            />
            <input 
              placeholder="Last Name" 
              name="lastName"
              type="text"
            />
            <input 
              placeholder="Email Address" 
              name="email"
              type="email" 
            />
            <input 
              placeholder="Password"
              name="password"
              type="password" 
            />
            <button>CLAIM YOUR FREE TRIAL</button>
          </form>
          <p>By clicking the button,you are agreeing to our <span className='text-red-400'>Terms and Services</span></p>
        </div>
    </div>
  )
}

export default App
