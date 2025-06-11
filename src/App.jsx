import React from 'react'
import {Routes, Route} from "react-router-dom"
import Landing from './Components/Landing'
import AllRestraunts from './Components/AllRestraunts'
import Menu from './Components/Menu'
import Search from './Components/Search'
import CarouselRestaurants from './Components/CarouselRestaurants'
import Checkout from './Components/Checkout'
import Error from './Components/Error'

const App = () => {
  return (
    <div>
      
      <Routes>  
        <Route path='/' element={<Landing />} />
        {/* <Route path='/landing' element={<Landing />} /> */}
        <Route path='/restraunts' element={<AllRestraunts />} />
        <Route path='/menu/:id' element ={<Menu/>} />
        <Route path='/carrestaurants/:id' element={<CarouselRestaurants  />} />
        <Route path='/search' element ={<Search />} />
        <Route path='/checkout' element={<Checkout  />} />
        <Route path='*' element={<Error/>} />
      </Routes>

    </div>
  )
}

export default App