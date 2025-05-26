import React from 'react'
import { menu_list } from '../assets/frontend_assets/assets'
const ExploreMenu = ({category,SetCategory}) => {
  return (
    <div className='h1   flex flex-col gap-10 ml-20 max-sm:ml-10 max-sm:mt-5 max-lg:max-w-[100%] max-lg:text-[14px]' id='ExploreMenu'><h1>
        Explore the menu</h1>
        <p className='p text-xl mr-10 '>
            
Indulge your taste buds with our carefully crafted menu, featuring a delicious selection of appetizers,
 main courses, and desserts made from the freshest ingredients. </p>
 <div className='flex justify-between items-center  gap-10 align-middle mt-[20px] mb-[20px] mr-20 max-md:w-[90%]
 overflow-x-scroll '>
    {menu_list.map((item,index)=>{
        return(
            <div onClick={()=>SetCategory(prev=> prev===item.menu_name? "All" :item.menu_name)}  key={index}> 
           <img className={` ${category===item.menu_name? "active2": ""}  min-w-[80px] w-[7.5vw] cursor-pointer border-solid border rounded-full transition-0.2s`} src={item.menu_image} alt="" />
           <p className='p text-1.5xl text-center  mt-[10px] max-[1.4vw,16px]: '>{item.menu_name}</p>
            </div>
        )
    })}
 </div>
 <hr className='h-0.5 border-none mt-0 mb-5 mr-5 bg-gray-300 '  />
 </div>
  )
}

export default ExploreMenu