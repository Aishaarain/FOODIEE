import React, { useContext, useState } from 'react'
import { assets } from '../assets/frontend_assets/assets'
import { Storecontext } from '../context/Storecontext'


const Footitem = ({id,name,price,description,image}) => {

const {cartItems,addToCart,removeFromCart}=useContext(Storecontext);
  return (
    <div className='w-100% m-auto rounded-2xl shadow-[0_0px_10px_rgba(0,0,0,15)] transition-0.3s animate-[wiggle_1s_ease-out]'>
        <div className='relative'>
<img className="w-100 rounded-t-2xl   " src={image} alt="" />
      {
                  !cartItems[id]? 
                  <img className='size-10 absolute bottom-50 right-[20px] cursor-pointer ' onClick={()=>addToCart(id )} src={assets.add_icon_white} alt="" />:
                  <div className='absolute bottom-50 right-[20px] flex align-middle gap-[10px] p-[6px] rounded-3xl bg-white'>
                    <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                    <p className='font-[500] '>{cartItems[id]}</p>
                    <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
                  </div>
                }
        <div className='p-[20px]   '> 
            <div className='flex justify-between align-middle mb-[10px] '>
                <p className='text-2xl font-[500]'>{name}</p>
                <img className='w-[80px]' src={assets.rating_starts} alt="" />
            </div>
            <p className='color-#676767 text-[12px]'> 
                {description}
            </p>
            <p className='text-amber-700 text-[22px] font-[500] m-0.5 '>${price}</p>
        </div>
    </div>
    </div>
  )
}

export default Footitem