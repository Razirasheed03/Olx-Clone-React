import React from 'react'
import img1 from '../../assets/img1.svg'
import img2 from '../../assets/img3.svg'
import img3 from '../../assets/igg4.svg'
import img4 from '../../assets/igm5.svg'
import img5 from '../../assets/img6.svg'
import './footer.css'
function Footer() {
  return (
    <div className='totalw'> 
      <div className="upper-footer">
        <div>
            <h5>POPULAR LOCATIONS</h5>
            <ul>
                <li>Kolkata</li>
                <li>Mumbai</li>
                <li>Chennai</li>
                <li>Pune</li>
            </ul>
        </div>
        <div>
            <h5>TRENDING LOCATIONS</h5>
            <ul>
                <li>Hyderabad</li>
                <li>chandigarh</li>
                <li>Nashik</li>
              
            </ul>
        </div>
        <div>
            <h5>ABOUT US</h5>
            <ul>
                <li>tech@olx</li>
               
              
            </ul>
        </div>
        <div>
            <h5>OLX</h5>
            <ul>
                <li>Blog</li>
                <li>Help</li>
                <li>Site Map</li>
               
              
            </ul>
        </div>

      </div>
      <div className="botum-footer">
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
          <img src={img4} alt="" />
          <img src={img5} alt="" />
      </div>
    </div>
  )
}

export default Footer
