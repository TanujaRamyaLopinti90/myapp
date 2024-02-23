import axios from "axios"
import React  from "react"
import ProductCart from "./cart.jsx"


function Products(){
    var[products,setProducts]=React.useState([])
     var[cartitems,setCartitems]=React.useState([])
    React.useEffect(()=>{
    axios.get("https://fakestoreapi.com/Products").then((res)=>{
        setProducts([...res.data])
        // console.log(res.data)
    })
    },[])
    function addtoCart(product){
        if(product.quantity){
            product.quantity++
        }
        else{
            product.quantity=1
        setCartitems([...cartitems,{...product}])
        }
        
    }
     React.useEffect(()=>{
     console.log(cartitems)
    },[products])
    return(
        <div className="d-flex">
            <div className="d-flex flex-wrap w-75">
               {
                products?.map((product)=>{
                    return(
                        <div id="d1" class="card m-3" style={{width:"250px"}}>
                          <img src={product.image}  id="r1"class="card-img-top" alt="..."/>
                          <div class="card-body d-flex flex-column justify-content-between">
                            <h5 class="card-title">{product.title}</h5>
                            <p class="card-text"><small class="text-body-secondary">{product.category}</small></p>
                            <button  id="b1" className="btn btn-success" onClick={()=>{addtoCart(product)}}>Add to cart</button>
                        
                          </div>
                          </div>
                    )
                })
               }
        </div>
        <div className="border border-dark" id="t1" >
        <ProductCart  cartitems={cartitems}></ProductCart>
        </div>
        </div>
    )}

export default Products