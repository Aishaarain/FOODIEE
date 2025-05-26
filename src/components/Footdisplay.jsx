import React, { useContext } from 'react'
import { Storecontext } from '../context/Storecontext'
import Footitem from './Footitem'

const Footdisplay = ({category}) => {
    const {food_list} = useContext(Storecontext)
      return (
    <div className='mt-[30px] m-[60px] ' id='foot-display'>
<h2 className='text-2xl font-[600] '>Top dishes near you</h2>
<div className='grid grid-cols-[repeat(auto-fill,_minmax(240px,_1fr))] gap-[30px] row-gap-[50px] mt-[20px] '>
  {food_list.map((item,index) => {
    if(category ==="All" || category === item.category)
        { 
   return <Footitem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
        }  

    
  })}

</div>
    </div>
  )
}

export default Footdisplay