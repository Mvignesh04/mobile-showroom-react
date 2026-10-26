import React, { useState } from 'react'
import { BrowserRouter, Outlet, Route, Routes} from 'react-router-dom'
import Home from './Home'
import Catogo from './Catogo'
import Profile from './Profile'
import Whislet from './Whislet'
import Cart from './Cart'
import Login from './Login'
import Register from './Register'
import Nav from './Nav'

const Master = () => {
  let [wishlist,setWishlist] = useState([])
  let [addToCart,setAddToCart] = useState([])
  function Main(){
    return(
      <>
        <Nav count={wishlist.length}/>
        <Outlet/>
      </>
    )
  }
  return (
    <>
     <BrowserRouter>
     <Routes>
        <Route  element={<Main></Main>}>
          <Route path='/Home' element={<Home></Home>}></Route>
          <Route path='/Catogo' element={<Catogo wishlist={wishlist} setWishlist={setWishlist}></Catogo>}></Route>
          <Route path='/Profile' element={<Profile></Profile>}></Route>
          <Route path='/Whislet' element={<Whislet wishlist={wishlist} setWishlist={setWishlist} addToCart={addToCart} setAddToCart={setAddToCart}></Whislet>}></Route>
          <Route path='/Cart' element={<Cart addToCart={addToCart}></Cart>}></Route>
        </Route>
        <Route path='/' element={<Login></Login>}></Route>
        <Route path='/Register' element={<Register></Register>}></Route>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default Master
