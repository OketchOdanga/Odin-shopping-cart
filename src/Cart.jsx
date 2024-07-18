import { useState } from "react";
import { Navigation } from "./Nav"
import { CartItem } from "./CartItem";


export default function Cart() {
    const[cart, setCart] = useState([]);

    // remove item.
    const deleteItem = (MyCourse) => {
        const newCart = cart.filter(item => item.product.id !== MyCourse.id);
        setCart(newCart);
    }    
    // total amount to be paid.
    const totalAmount = () => {
        return cart.reduce((total, item) => total + item.product.price * item.quantity, 0)
    }

    return(
        <div>
            <Navigation/>
            <CartItem cart ={cart} setCart={setCart} deleteItem={deleteItem} totalAmount={totalAmount}/>
        </div>
    )
    
}