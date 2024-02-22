import React from "react";

const ProductCart=({cartitems})=>{
  return(
    <div>
        
            <h1 id="a1">PRODUCTS CART</h1>
           <ul>
            {
             cartitems.map((item)=>{
               return <li>{item.title}</li>
             })
            }
           </ul>
      
    </div>
  )
}
export default ProductCart

