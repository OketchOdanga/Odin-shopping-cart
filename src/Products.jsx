/* Product page  1. display a list products. 2. import product images from an API */
import { useState, useEffect } from "react"
import ProductCard from "./Card";
import { Navigation } from "./Nav";
import { CartItem } from "./CartItem";

export const getRequestWithNativeFetch = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`HTTP error: Status ${response.status}`)
    }

    return response.json();
}

function Products() {
    const[data, setData] = useState(null);
    const[loading, setLoading] = useState(true);
    const[error, setError] = useState(null);
    const[cart, setCart] = useState([]);

    useEffect(() => {
        const FetchProduct = async () => {
            try {
                const postsData = await getRequestWithNativeFetch(`https://fakestoreapi.com/products`);
                setData(postsData);
                setError(null);
    
            } catch (error) {
                setError(error.message);
                setData(null);
            } finally {
                setLoading(false)
            }    
        }
        FetchProduct();
    },[])

    if (error) return <p>A network error was encountered</p>;
    if (loading) return <p>Loading...</p>;
    // adds product to cart.
    const addToCart = (shopItem) => {
        const currentitem = cart.find(item => item.product.id === shopItem.id);
        if (currentitem) {
            const cartItem = cart.map(
                item => item.product.id === shopItem ? {...item, quantity: item.quantity + 1} : item
            )
            setCart(cartItem)
            
        } else {
            setCart([...cart, {product: shopItem, quantity:1}])
        }
    }

    // removes products from the cart.
    const deleteItem = (shopItem) => {
        const newCart = cart.filter(item => item.product.id !== shopItem.id);
        setCart(newCart);
    }
    // calculates total amount purchased.
    const totalAmount = () => {
        return cart.reduce((total, item) => total + item.product.price * item.quantity, 0)
    }


    return(
        <>
        <section className="products" id="products">
            <Navigation/>
            <div>
                {loading && (<div>Loading posts ...</div>)}
                {error && <div>{error}</div>}
                <section>
                    <ProductCard shopping={data} addToCart={addToCart} />
                </section>
            </div>
        </section>
        <CartItem cart={cart} setCart={setCart} deleteItem={deleteItem} totalAmount={totalAmount}/>
        </>
    )
}




export default Products;