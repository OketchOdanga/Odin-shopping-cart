import { Button } from "./Home"
export default function Cart() {
    return(
        <section>
        <div className="navigation">
            <Link to={"/"}><Button text={'Home'}></Button></Link>
            <Link to={"./Products"}><Button text={'Products'}></Button></Link>
            <Link to={"./Cart"}><Button text={'Cart'}></Button></Link>
        </div>
            <div></div>
            <div></div>
            <div>
                <div>
                    <Button text={'Submit your Order'}/>
                </div>
                <div>
                <span>Total Cost:</span><input type="button" value="" />
                </div>
            </div>
        </section>
    )
}