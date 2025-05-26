import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Appdownload = () => {
  return (
    <div id='Appdownload' className='m-auto mt-[100px] text-2xl text-center font-[500] ' >
<p>For Better Experience Download <br /> Food App</p>
<div className=' flex justify-center mb-[40px] gap-[40px] '>
    <img className='w-[120px] max-w-[180px] duration-100 cursor-pointer mt-5 hover:scale-[1.05]' src={assets.play_store} alt="" />
    <img className='w-[120px] max-w-[180px] duration-100 cursor-pointer mt-5 hover:scale-[1.05]' src={assets.app_store} alt="" />
</div>
    </div>
  )
}

export default Appdownload