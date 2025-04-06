import React,{createContext,useState} from 'react'

export const ProductContext=createContext()

function ProductProvider({children}) {
  const [Login,setLogin]=useState('false')
    const [productData,setProductData]=useState({
        catgry:'',
        Brand:'',
        Year:'',
        Owner:'',
        BHK:'',
        Bathroom:'',
        Title:'',
        Description:'',
        Price:'',
        images:''
        
    })
  return (
    <ProductContext.Provider value={{productData,setProductData,setLogin,Login}}>
        {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider
