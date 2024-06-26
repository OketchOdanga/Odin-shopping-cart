import './home.css'
import { Link } from 'react-router-dom'
const Home = () => {
    return(
    <section className="home-page" id="homePage">
        <div className="navigation">
            <Link to={"/"}><Button text={'Home'}></Button></Link>
            <Link to={"./Products"}><Button text={'Products'}></Button></Link>
            <Link to={"./Cart"}><Button text={'Cart'}></Button></Link>
        </div>
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