import React, { useState,useContext } from 'react'
import dir from '../../assets/dir.png'
import './sell.css'
import { db } from '../../Service/firebase'
import { collection,addDoc } from 'firebase/firestore'
import { ProductContext } from '../../context/productContext'
import HandleImage from '../../Service/cloudinary'
import Form from '../../components/form/Form'
import Image from '../../components/Image/Image'
import { useNavigate } from 'react-router-dom'
function Sell() {
   const navigate=useNavigate()

   const {productData}=useContext(ProductContext)

   console.log(productData,'data data')
   
   const handleSubmint=async()=>{
    try {
        if ((productData.catgry !== "car" && productData.catgry !== "house") || productData.images.length === 0) {
            return alert('Category and Images must be inserted');
         }

      
         if (!productData.Title || !productData.Price || !productData.Description) {
            return alert('Please fill all required fields');
         }
        const docRef=await addDoc(collection(db,'products'),productData)
        alert('Product added succes fully')
        if(docRef){
            navigate('/')
        }
    } catch (error) {
        console.log('error upload',error)
    }
   }
  
   return (
      <>
      <div className='direct' onClick={() => navigate(-1)}>
            <img src={dir} alt="" />
         </div>
      <div className='wrapper'>

      <Form/>
      <Image/>

      <div className='sell-btn'>
        <button onClick={handleSubmint}>Sell</button>
      </div>
      </div>
      </>
   );
}

export default Sell;
