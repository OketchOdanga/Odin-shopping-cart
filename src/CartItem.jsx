/* eslint-disable react/prop-types */
export const CartItem = ({cart, setCart, deleteItem, totalAmount}) => {
    return(
        <section className="cart">
            <h2>My Cart</h2>
            {cart.length === 0 ? (
                <p className="cart-empty">Your cart is empty</p>
            ) : (
            <div className="items-wrapper">
                {cart.map((item) => (
                    <div className="cart-item" key={item.product.id}>
                        <div className="itemImage">
                            <img src={item.product.image} alt='' />
                        </div>
                        <h3>{item.product.title}</h3>
                        <div className="item-price">ksh {item.product.price}</div>
                        <div className="item-quantity">
                            <button type="button" onClick={
                            () => {
                            setCart((prevCart) => {
                                const newCart = prevCart.map((prevItem) => 
                                    prevItem.product.id === item.product.id ?
                                    {...prevItem, quantity: Math.max(item.quantity - 1, 1)} 
                                    
                                : prevItem)
                                return newCart
                                })
                            }}>
                            -
                            </button>
                            <p>{item.quantity}</p>
                            <button type="button" onClick={
                            () => {setCart((prevCart) => {
                                    const newCart = prevCart.map((prevItem) => 
                                        prevItem.product.id === item.product.id ? 
                                        {...prevItem, quantity: item.quantity + 1}                                       
                                    : prevItem)
                                    return newCart
                                })
                                } }
                                >+
                            </button>
                        </div>
                        <div className="item-delete">
                            <button type="button" onClick={() => deleteItem(item.product)}>
                                Remove
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            )}
            <div className="total-amount">
                <span>TotalPrice: ksh {totalAmount()}</span>
                <button type="button" onClick={ () => {alert(`Your order amounts to ksh.${totalAmount()} .Thank you for shopping with us`)
                setCart([])}
            }>CheckOut</button>
            </div>            
        </section>
    )
}
