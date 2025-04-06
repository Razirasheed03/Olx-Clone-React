import React, { useEffect, useState } from 'react'
import './product.css'
import { db } from '../../Service/firebase'
import { collection, getDocs } from 'firebase/firestore'
import { Link } from 'react-router-dom'

function Product() {
    const [product, setProducts] = useState([])

    const fetchProduct = async () => {
        const Snapshot = await getDocs(collection(db, 'products'))
        const productList = []
        Snapshot.forEach((doc) => {
            productList.push({ id: doc.id, ...doc.data() })
        })
        setProducts(productList)
    }

    useEffect(() => {
        fetchProduct()
    }, [])

    return (
        <div className="cards-container">
            {product.map((data) => (
                <Link to={`/products/details/${data.id}`} className="card" key={data.id}>
           
                    <img src={data.images?.[0] || '/placeholder.png'} alt={data.Title} />
                    <div>
                        <h3>{data.Title}</h3>
                        <h4>₹{parseInt(data.Price).toLocaleString('en-IN')}</h4>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default Product

