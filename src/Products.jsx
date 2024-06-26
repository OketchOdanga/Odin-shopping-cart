/* Product page  1. display a list products. 2. import product images from an API */
import { useState, useEffect } from "react"
import ProductCard from "./Card";
import { Navigation } from "./Nav";

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

    useEffect(() => {
        const FetchProduct = async () => {
            try {
                const postsData = await getRequestWithNativeFetch(`https://fakestoreapi.com/products?limit=5`);
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

    return(
        <section className="products" id="products">
            <Navigation/>
            <div>
                {loading && (<div>Loading posts ...</div>)}
                {error && <div>{error}</div>}
                <ul>
                    {data && data.map(({id, title, price, category, description,image}) => (
                    <li key={id}>
                        <ProductCard title={title} price={price} category={category} description={description} imgSrc={image}/>
                    </li>
                ))}
                </ul>
            </div>
        </section>
    )
}




export default Products;