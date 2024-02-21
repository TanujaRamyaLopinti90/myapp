import React from "react";
import axios from "axios"

function Products(){
    var[products,setProducts]=React.useState([])
    React.useEffect(()=>{
    axios.get("https://fakestoreapi.com/Products").then((res)=>{
        setProducts([...res.data])
        console.log(res.data)
    })
    },[])
    return(
        <div>
            <h1>Products</h1>
            <div>
               {
                products?.map((product)=>{
                    return(
                        <div class="card m-2" style={{width:"250"}}>
                            <img src={product.image} class="card-img-top" alt="..."/>
                            <h5 class="card-tittle">{product.tittle}</h5>
                            <p class="card-text">{product.description.slice(0,100)}</p>
                            <p class="card-text"><small class="text-body-secondary">{product.category}</small></p>
                        </div>
                    )
                })
               }
            </div>
        </div>
    )
}
export default Products