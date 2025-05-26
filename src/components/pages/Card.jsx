import React, { use, useContext } from 'react'


import  { Storecontext } from '../../context/Storecontext'
import { useNavigate, useNavigation } from 'react-router';
const Card = () => {
    const {cartItems,food_list,removeFromCart,getTotalamount,removeAll}= useContext(Storecontext);

   const navigate=useNavigate();
  return (
    
    <div className='m-10'>
        <div className='divcard    text-[max(1vw,12px)]  items-center text-gray-500   '>
            <div className={`mt-30 ml-0 max-sm:text-[2.5vw]  grid grid-cols-7 ${getTotalamount()?"":"hidden"}`}>
                <p>Items</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Minus</p>
                <p>Remove</p>
            </div>
            <br />
            <hr />
            {food_list.map((item,index)=>{
              if(cartItems[item._id]>0){
                return(
                  <div>
                  <div className='grid grid-cols-7 mt-[10px] mb-[10px] ml-0 mr-0 font-bold'>
                   <img className='w-[60px]' src={item.image} alt="" />
                   <p className='max-sm:ml-1 max-sm:text-[2.5vw]'> {item.name}</p>
                   <p>${item.price}</p>
                   <p>{cartItems[item._id]}</p>
                   <p>${item.price *cartItems[item._id]}</p>
                   <h6 onClick={()=>removeFromCart(item._id)} className='cursor-pointer text-amber-600 text-3xl '>-</h6>
                   <h6 onClick={()=>removeAll(item._id)} className='cursor-pointer text-amber-600 text-3xl '>X</h6>
                   
                  </div>
                  <hr className='h-[1px] bg-[#e2e2e2] border-none  ' />
    </div>
                )
              }
            })}
        </div>
        <div className='mt-[80px] flex justify-between  gap-[45px] max-md:flex-col'>
          <div className='flex flex-1 flex-col gap-[20px]'>
            <h2>Card Totals</h2>
            <div>
              <div className='flex justify-between font-bold'>
                <p>Subtotal</p>
                <p>${getTotalamount()}</p>
              </div>
              <hr className='mt-[10px] mb-[10px] ml-[0px] mr-[0px]' />
            <div>
              <p >Delivery Fee</p>
              <p>${getTotalamount()?5:0}</p>
            </div>
            <hr className='mt-[10px] mb-[10px] ml-[0px] mr-[0px]' />
            <div>
              <p>Total</p>
              <p>${getTotalamount()?getTotalamount()+5:0}</p>
            </div>
            <hr className='mt-[10px] mb-[10px] ml-[0px] mr-[0px]' />
            </div>
            <button onClick={()=>navigate('/Order')} className='bg-amber-600 rounded-2xl w-50 p-2 hover:cursor-pointer hover:bg-amber-500'>PROCEED TO CHECKOUT</button>
          </div>
          <div className='flex-1 justify-start  '>
            <div  >
              <p className='font-bold'>if you have a promo code, Enter it here</p>
              <div className='mt-[10px] flex justify-between items-center bg-[#eaeaea] rounded-[4px] '>
                <input className='bg-transparent border-none outline-none pl-[10px]' type="text" placeholder='Promo Code' />
                <button className='  outline-none pl-10px w-[150px] bg-black border-none text-white rounded-[4px]  p-2 hover:cursor-pointer  hover:bg-gray-600 hover:text-black'>Submit</button>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Card