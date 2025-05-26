import React, { useState } from 'react'
import { assets } from '../assets/frontend_assets/assets'

const LoginPopup = ({setShowLogin}) => {
    const [currState,setCurrState]=useState('signup')
  return (
    <div className='  absolute z-10 w-full h-full bg-[#00000090] grid'>
        <form className=' place-self-center   w-[370px] text-[#808080] bg-white flex flex-col gap-[25px] pt-[25px] pb-[25px] pl-[30px] pr-[30px]  rounded-[8px] size--14 animate-[wiggle_1s_ease-in] max-sm:ml-[10px] max-sm:mr-[30px] max-sm:w-80' >
            <div className='flex justify-between items-center font-bold text-black '>
                <h2>{currState}</h2>
                <img className='w-[16px] cursor-pointer' onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className='flex flex-col gap-[20px] '> 
                {currState==='login'?<></>:<input type="text" placeholder='Your name' required />}
                
                <input  type="email" placeholder='Your email' required />
                <input type="password" placeholder='enter password' required/>
            </div>
            <button className= 'button bg-amber-600 w-50 ml-15 max-sm:ml-7'>{currState==='signup'?"create account":"Login"}</button>
            <div className='flex items-start gap-[8px] mt-[-15px]' >
                <input className='mt-1 size-6 ' type="checkbox" required  />
                <p>By continuing , i agree to the terms of use & privacy policy</p>                
            </div>
            {currState ==='login'? <p >create a new acount?<span className='cursor-pointer  text-amber-700 font-[500] ' onClick={()=>setCurrState('signup')}>Click here</span></p>:
             <p>Already have an account? <span className='cursor-pointer text-amber-700 font-[500]' onClick={()=>setCurrState('login')}>Login here</span   ></p>}
           
           
        </form>
    </div>
  )
}

export default LoginPopup