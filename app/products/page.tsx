import {use} from "react";


async function  getProduct() {
    const res = await fetch("https://product-app-101-server.vercel.app/api/products");
    return res.json()
}

export default function ProductsPage(){
    const products = use(getProduct());
    return(
        <div className="page">
            <h1> Hi there Products Page</h1>
            <div>
                { products.map(product => 
                    <div key={product}>
                        {product.name}
                    </div>    
                )}
            </div>
        </div>
    )
}