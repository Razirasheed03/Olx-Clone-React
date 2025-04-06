import React ,{useContext}from 'react'
import olxLogo from '../../assets/olx-logo.png'
import searc_img from '../../assets/search.png'
import heart from '../../assets/heart.png'
import {ProductContext} from '../../context/productContext'
import './navbar.css'
import {logout} from '../../Service/firebase'
import { useNavigate } from 'react-router-dom'

function Navbar() {
  const{Login,setLogin}=useContext(ProductContext)
  const navigate=useNavigate()
  return (
    <>
    <div className='navbar'>

      <img src={olxLogo} alt="" className='logo'/>
      <select name="" id="" className="place d-none  d-md-flex">
        <option value="India">India</option>
        <option value="kerala">Kerela</option>
        <option value="calicut">Calicut</option>
      </select>
     <div className='search-bar d-none  d-md-flex'>
        <input type="text"className='search' placeholder='Search...' />
        <img src={searc_img} alt="" />
     </div>
     <div className='lang'> 
        <select name="" id="" className='langu'>
            <option value="English">English</option>
        </select>
     </div>
     <div className='heart'>
        <img src={heart} alt="" />
     </div>
     {Login==false&&(<h3 className='loginolx' onClick={()=>navigate('/login')}>Login</h3>)}
     {Login==true&&(<h3 className='loginolx' onClick={()=>logout}>Log Out</h3>)}
     <h3 className='loginolx' onClick={()=>navigate('/login')}>Login</h3>
     <div className='sell' onClick={()=>navigate('/Sell')}>
        <h3>+ SELL</h3>
     </div>

    </div>
    <div></div>
    <div className='properties d-none d-md-flex' >
        <select name="" id="">
            <option value="">Car</option>
            <option value="">Bike</option>
            <option value="">House</option>
            <option value="">Pets</option>
        </select>
        <ul>
            <li>Car</li>
            <li>Motorcycle</li>
            <li>Mobile Phone</li>
            <li>Scooter</li>
            <li>For Sale:House & Apartment</li>
            <li>Commercial & Other Vehicles</li>
            <li>For Rent:House & Apartment</li>
            
        </ul>
    </div>
    </>
  )
}

export default Navbar
