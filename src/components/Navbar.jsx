import React, { useContext } from 'react'
import { useState } from 'react'
import {assets} from '../assets/frontend_assets/assets'
import { Link } from 'react-router-dom'
import { Storecontext } from '../context/Storecontext'
const Navbar = ({setShowLogin}) => {

   const [isOpen, setIsOpen] = useState(false);
  const [Menu,setmenu] = useState("home")
const {getTotalamount}=useContext(Storecontext)
  return (
    <div className='flex p-10  justify-between items-center'>
<Link to='/'><img  src={assets.logo}  className="w-30 h-20 lg:w-[140px]   " alt="" /></Link>
<ul className=' list-none  text-#49557e text-18 cursor-pointe  gap-[70px]  lg:text-[17px] max-md:hidden lg:flex '>
  <Link to="/" onClick={()=>setmenu("Home")} className={Menu==="home"? "active":""}>Home</Link>
  <a href="#ExploreMenu" onClick={()=>setmenu("Menu")} className={`${Menu==="Menu"? "active":""} md:ml-[20px]`}>Menu</a>
  <a href="#Appdownload" onClick={()=>setmenu("Mobile-app")} className={`{Menu==="Mobile-app"? "active":""} md:ml-[20px]`}>Mobile-App</a>
  <a href="#Footer" onClick={()=>setmenu("Contact-us")} className={`{Menu==="Contact-us"? "active":""} md:ml-[20px]`}>Contact us</a>
</ul>
<div className=' flex items-center  max-sm:gap-10 lg:gap-[50px] cursor-pointer'>
<div className='relative ' >
  <Link to='/Card'  ><img className='lg:w-[22px ] max-sm:ml-5 max-md:mr-5' src={assets.basket_icon} alt="" /></Link>
  
  <div className={` animate-bounce absolute min-w-2 max-sm:ml-5 min-h-2 bg-amber-600 rounded-3xl top-[-8px] ${getTotalamount()?"":"hidden"}   `} ></div>

  </div>
  <div className='max-md:gap-5 max-md:flex'>
    <button  onClick={()=>setShowLogin(true)} className='button lg:pt-[8px] pb-[8px] pl-[25px] pr-[25px] text-[15px] max-md:ml-[5px] max-sm:w-22  '> sign in</button>
    <button
        className="text-4xl lg:hidden md:hidden focus:outline-none transition-transform duration-700 hover:rotate-180 hover:cursor-pointer max-sm:text-3xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>
      </div>
       {isOpen && (
        <div className="absolute  h-full bg-[#00000050] grid top-4 left-0 w-full shadow-md px-6 py-4 space-y-4 lg:hidden md:hidden z-50">
          <div className='bg-[#00000090] ml-60 max-sm:ml-20 top-[50px] rounded-2xl   justify-between flex text-white shadow-gray-950 shadow-2xl'>
          
          <div className='mt-15 ml-5 gap-10 flex flex-col' >
          <a href="/" onClick={()=>setmenu("Home")} className="  hover:text-amber-700">Home</a>
          <a href="#ExploreMenu" onClick={()=>setmenu("Menu")} className="  hover:text-amber-700">Menu</a>
          <a href="#Appdownload" onClick={()=>setmenu("Mobile-app")} className="  hover:text-amber-700">Mobile-App</a>
          <a href="#Footer" onClick={()=>setmenu("Contact-us")} className="  hover:text-amber-700">Contact Us</a>
          
          </div>
        
          <h2 className='w-[18px] cursor-pointer text-2xl   h-6 m-3 text-white  transition-transform duration-200  hover:rotate-360  ' onClick={()=>setIsOpen(false)} src={assets.cross_icon} >X</h2>
          </div>
        </div>
      )}
  </div> 
</div>

    
  )
}

export default Navbar