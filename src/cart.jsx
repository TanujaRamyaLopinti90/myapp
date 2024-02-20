import React from "react";
import axios from "axios"

function Cart(){
    var[items,setItems]=React.useState([])
    var[isLoading,setLoading]=React.useState(null)
    React.useEffect(()=>{
    axios.get('https://dummyjson.com/carts').then((res)=>{
        console.log(res)
        setItems([...res.data.carts[0].products])
        setLoading(false)
    })
    },[])
    function incQut(item){
       var temp=[...items]
       temp=temp.map((titem)=>{
        if(titem.id==item.id){
            
         titem.quantity=item.quantity+1
        }
        console.log(item)
        return titem;
       })

       setItems([...temp])
    }
    function decQut(item){
        var temp=[...items]
        temp=temp.map((titem)=>{
         if(titem.id==item.id){
             
          titem.quantity=item.quantity-1
         }
         console.log(item)
         return titem;
        })
 
        setItems([...temp])
    }
    return(
     
          <div className= "CartBlock">
            <h1>Cart</h1>
            {
                isLoading && (<div class="spinner-border" role="status">
                                  <span class="visually-hidden">Loading...</span>
                          </div>)
              
            }
            <ul className="cartList">

            {
                items?.map((item)=>{
                    return<li className="cartItem">
                        <img src={item.thumbnail} alt=""/>
                        <b class="itemTitle">{item.title}</b>
                        <b class="itemPrice">Price:Rs{item.price}</b>
                        <div>
                            <button onClick={()=>{incQut(item)}}>+</button>
                            <b>{item.quantity}</b>
                            <button onClick={()=>{decQut(item)}}>-</button>
                        </div>
                        <div>
                        <b className="itemTotal">Rs.{item.price*item.quantity}</b>
                        </div>
                        </li>

                })
            }
            <h1 className="cartTotal">Total:{items?.reduce((sum,item)=>{
                return sum+(item.quantity*item.price)
            },0)}</h1>
        
            </ul>
             
          </div>
     
    )
}

export default Cart