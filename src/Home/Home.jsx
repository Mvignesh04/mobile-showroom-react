import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel';
import samsung from '../assets/samsung.webp';
import iphone from '../assets/iphone.webp';
import edge from '../assets/edge.webp';
import Nav from './Nav';
const Home = () => {
  return (
    <> 
         <aside className=''>
          <Carousel className='h-100'>
      <Carousel.Item>
        <img
          className='h-100'
          src={samsung}
          alt="First slide"
        />
        <Carousel.Caption className='m-60'>
          <h1><Link to="/Catogo">Shop</Link></h1>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className='h-100'
          src={iphone}
          alt="Second slide"
        />
        <Carousel.Caption className='m-60'>
          <h1><Link to="/Catogo">Shop</Link></h1>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className='h-100'
          src={edge}
          alt="Third slide"
        />
        <Carousel.Caption className='m-60'>
          <h1><Link to="/Catogo">Shop</Link></h1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </aside>
    </>
  )
}

export default Home



   


