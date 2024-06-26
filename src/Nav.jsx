import { Link } from "react-router-dom";
import { Button } from "./Home";

export const Navigation = () => {
    return(
        <section className="navigation">
            <Link to={"/"}><Button text={'Home'}></Button></Link>
            <Link to={"./Products"}><Button text={'Products'}></Button></Link>
            <Link to={"./Cart"}><Button text={'Cart'}></Button></Link>
        </section>
    )
}