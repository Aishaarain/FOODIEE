import React, { useState } from 'react'
import Header from '../Header'
import ExploreMenu from '../ExploreMenu'
import Footdisplay from '../Footdisplay'
import Appdownload from '../Appdownload'

const Home = () => {
  const [category,SetCategory]=useState("All")
  return (
    <div >
      <Header/>
      <ExploreMenu category={category} SetCategory={SetCategory}/>
      <Footdisplay category={category}/>
      <Appdownload/>
      
    </div> 
  )
}

export default Home