"use client"
import {useEffect, useReducer} from 'react'
import useSWR from 'swr'
import cartReducer from '../../reducers/cartReducer';

 const fetcher = () =>{
     return  fetch('https://fakestoreapi.com/products')
     .then(res => res.json());
}

const initialState = {
    products:[],
    cart:[]
}

function ProductList() {

    const { data, error } = useSWR("api/productList",fetcher);
    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>

    const [state, dispatch] =useReducer(cartReducer,initialState);

    

  return (
    <div className='productListContainer'>
        {data?.map((product,index) => (
            <div key={`${product.title}-${index}`}>
                <div>
                    <img src={product.image} width="200px" height="250px"/>
                </div>
                <div>
                    {product.title}
                </div>
            </div>)
        )}
    </div>
  )
}

export default ProductList