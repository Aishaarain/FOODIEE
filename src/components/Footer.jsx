import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div id='Footer' className= 'text-amber-50 bg-gray-700 flex flex-col items-center gap-[20px] p-[20px] pt-[80px]'>
<div className='w-100% grid grid-cols-3 gap-[80px] max-sm:flex max-sm:flex-col max-sm:gap-[35px]'>
    <div className='flex flex-col items-start gap[20px]'>
<img className='logo' src={assets.logo} alt="" />
<p className='mt-[10px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto saepe perferendis, recusandae iusto possimus quasi ab quia impedit vitae at!
</p>
<div className='flex '>
    <img className='img' src={assets.facebook_icon} alt="" />
    <img className='img' src={assets.twitter_icon} alt="" />
    <img className='img' src={assets.linkedin_icon} alt="" />
</div>
    </div>
    <div className='flex flex-col items-start gap[20px]'>
   
<h2 className='h2'>COMPANY</h2>
<ul>
    <li>Home    </li>
    <li>About us</li>
    <li>Delivery</li>
    <li>Privacy Policy</li>
</ul>
    </div>
    <div className='flex flex-col items-start gap[20px] max-sm:text-center'>
<h2 className='h2'>GET IN TOUCH</h2>
<ul>
    <li>+92 212456834-3</li>
    <li>contact@foodapp.com</li>
</ul>
    </div>
</div>
<hr className='w-full h-[2px] mt-[20px] text-gray-500' />

<p>
    Copyright 2024 @ Tomato.com - All Right Reserved
</p>
    </div>
  )
}

export default Footer