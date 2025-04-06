import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../Service/firebase'
import ImageSlider from './imageSlide'
import './product.css'

function ProductDetails() {
    const { productId } = useParams()

    const [product, setProduct] = useState(null)

    useEffect(() => {
        const fetchProduct = async () => {
            const productRef = doc(db, 'products', productId)
            const productSnap = await getDoc(productRef)

            if (productSnap.exists()) {
                setProduct(productSnap.data())
            } else {
                console.log('Product not found')
            }
        }

        fetchProduct()
    }, [productId])

    if (!product) {
        return <p>Loading product details...</p>
    }

    const { Title, Description, Price, images, catgry, Brand, Year, BHK, Bathroom, Owner } = product

    return (
        <div className='manage'>
            {/* Left Side - Images & Title */}
            <div className='img-wrapper'>
                <ImageSlider images={images || []} />
                <div className='flex-img'>
                    {images && images.length > 0 ? (
                        images.map((url, index) => (
                            <img key={index} src={url} alt={`Product Image ${index + 1}`} />
                        ))
                    ) : (
                        <p>No Images Available</p>
                    )}
                </div>
                <div className='title'>
                    <h1>{Title}</h1>
                    <p className='font'><strong>Price:</strong> ₹{Price}</p>
                    <p>{Description}</p>
                </div>
            </div>

            {/* Right Side - Details */}
            <div className='mood'>
            <p><strong>Category:</strong> {catgry}</p>
                {catgry=='car'&&(
                    <>
                    
                    <p><strong>Brand:</strong> {Brand}</p>
                <p><strong>Year:</strong> {Year}</p>
                <p><strong>Owner:</strong> {Owner}</p>
                    </>
                )}

                {catgry=='house' &&(
                    <>
                    <p><strong>BHK:</strong> {BHK}</p>
                    <p><strong>Bathrooms:</strong> {Bathroom}</p>
                    </>
                )}
               
                
                
               
            </div>
        </div>
    )
}

export default ProductDetails
