import React from 'react'
import Navbar from '../../components/navbar/navbar'
import Banner from '../../components/Banner/banner'
import Product from '../Product/product'
import Footer from '../../components/footer/footer'
function Home() {
  return (
    <div className=''>
     <Navbar/>
     <Product/>
     <Footer/>
     {/* <Banner/> */}
    </div>
  )
}

export default Home
