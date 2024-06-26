import { Button } from "./Home";
import { useState } from "react";
export default function ProductCard({imgSrc,title,category,price,description}){
    const[count, setCount] = useState(0);

    const handleIncrease=()=>{
        setCount((count) => ++count);
    }
    const handleDecrease=()=>{      
        if (count > 0) {
            setCount((count) => --count)
        } else {
            setCount((count) =>count = 0)
        };
    }
    const handleChange = (e) => {
        setCount(e.target.value)
    }
    return(
        <section className="product-card">
            <div className="product-card-image">
                <img src={imgSrc} alt="" />
            </div>
            <div>
                <h3>{title}</h3>
                <p>{category}</p>
            </div>
            <div className="product-card-about">
                {description}
            </div>
            <div>
                {price}
            </div>
            <div>
                <div>
                    <input type="button" value="-" onClick={handleDecrease} />
                    <input type="button" value={count} onChange={handleChange}/>
                    <input type="button" value="+"  onClick={handleIncrease}/>
                </div>
                <div>
                    <Button text={'Add to Cart'} backgroundColor={'red'}/>
                </div>
            </div>
        </section>

    )
}