import React,{useState,useContext} from 'react'
import './form.css'
import { ProductContext } from '../../context/productContext';
function Form() {
   const {productData,setProductData}=useContext(ProductContext)
  
     function formCntrl(e) {
        const { name, value } = e.target;
        setProductData((prv) => ({ ...prv, [name]: value }));
     }
  
     function handle(e) {
        e.preventDefault();
        
     }
      
 
  return (
    <div>
      <div className='whole'>
         
         <div className='total'>
            <div className="form-div">
               <div>
                  <h2>Post Your Ad</h2>
               </div>
               <form onSubmit={handle}>
                  <div className='uni'>
                     <label>Category :</label>
                     <select name="catgry" value={productData.catgry} onChange={formCntrl} required>
                        <option value="">select</option>
                        <option value="car">Car</option>
                        <option value="house">House</option>
                     </select>
                  </div>

                  {productData.catgry === 'car' && (
                     <div className='carform'>
                        <div className='uni'>
                           <label>Brand :</label>
                           <input type="text" name="Brand" value={productData.Brand} onChange={formCntrl} required />
                        </div>
                        <div className='uni'>
                           <label>Year :</label>
                           <input type="text" name="Year" value={productData.Year} onChange={formCntrl} required />
                        </div>
                        <div className='uni'>
                           <label>No. of owners:</label>
                           <select name="Owner" value={productData.owner} onChange={formCntrl} required>
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                           </select>
                        </div>
                     </div>
                  )}

                  {productData.catgry === 'house' && (
                     <div className='home'>
                        <div className='uni'>
                           <label>BHK:</label>
                           <select name="BHK" value={productData.BHK} onChange={formCntrl} required>
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                           </select>
                        </div>
                        <div className='uni'>
                           <label>Bathrooms:</label>
                           <select name="Bathroom" value={productData.Bathrooms} onChange={formCntrl} required>
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                           </select>
                        </div>
                     </div>
                  )}

                  <div className='uni'>
                     <label>Title :</label>
                     <input type="text" name="Title" value={productData.Title} onChange={formCntrl} required />
                  </div>
                  <div className='uni'>
                     <label>Description :</label>
                     <textarea name="Description" value={productData.Description} onChange={formCntrl} required></textarea>
                  </div>
                  <div className='uni'>
                     <label>Price :</label>
                     <input type="number" min={1} name="Price" value={productData.price} onChange={formCntrl} required />
                  </div>
                  
                 
               </form>
            </div>
         </div>
      </div>
    </div>
  )
}

export default Form
