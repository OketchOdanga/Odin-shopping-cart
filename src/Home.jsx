import './home.css'
import { Link } from 'react-router-dom'
import { Navigation } from './Nav'
const Home = () => {
    return(
    <section className="home-page" id="homePage">
        <Navigation/>
        <div>
            <h1>Welcome to Koko Shanel</h1>
        </div>       
        <div className="description_home">
            <p>Take your style to a whole new level.</p>
        </div>
        <div>
            <Link to={"./Products"}>
                <Button text={'Shop with us'} backgroundColor={'red'}  className="home_button"/>
            </Link>
        </div>
    </section>
    )
}

export function Button({text, backgroundColor}) {
    const buttonStyle = {
        backgroundColor: backgroundColor
    }
    return(
        <button type="button" style={buttonStyle}>{text}</button>
    )
}


export default Home;