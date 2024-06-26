import { Button } from "./Home"
import { Navigation } from "./Nav"
export default function Cart() {
    return(
        <section>
            <Navigation/>
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