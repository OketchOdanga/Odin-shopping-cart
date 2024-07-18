/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
export default function ProductCard({shopping,addToCart}){
    return(
        <section className="cardprototype">
            {shopping.map((product)=>(
                <div key={product.id} className="product-card">
                    <div className="product-card-image">
                        <img src={product.image} alt={product.title} />
                    </div>
                         <div className="product-details">
                            <h5>{product.title}</h5>
                            <p>{product.category}</p>
                        </div>
                        <div>
                            Ksh. {product.price}
                        </div>
                        <div className="add-to-cart">
                            <button type="button" onClick={() => addToCart(product)}>
                                Add to Cart
                            </button>
                        </div>
                </div>
            ))}  
        </section>
    )
}