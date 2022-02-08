import '../css/home.css';
import '../css/mediaQuerys.css';
import frutas from '../images/frutas.png'
import logo from '../images/FoonkieMonkey.png'

function Home() {
    return (
        <div className='container'>
            <PrimerBox />
            <img className='frutas' src={frutas} alt="" />
            <SegundoBox />
            <TercerBox />
            {/* <Footer /> */}
        </div>
    )
}


function Nav() {
    return (
        <nav>
            <a href="">
                Item1
            </a>
            <a href="">
                Item2
            </a>
            <a href="">
                Item3
            </a>
            <button className='loginButton'>
                Login
            </button>
        </nav>
    )
}

function PrimerBox() {
    return (
        <div className='boxOne'>
            <Nav />

            <div className='boxOneFrist'>
                <p> Title Lorem ipsum</p>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, architecto ipsum? Molestias distinctio pariatur optio inventore blanditiis doloremque, consequatur qui quae odio. Provident consectetur ratione alias, in laboriosam nemo assumenda.
                </p>
            </div>
            <div className='boxOneSecond'>
                <div className='radianBox'>

                </div>
            </div>
        </div>
    )
}

function SegundoBox() {
    return (
        <div className='secondBox'>
            <button className='downloaderButton'>Download</button>
            <fieldset className='subBoxTwo'>
                <legend>Karen - New York</legend>
                <div >Lorem ipsum dolor, sit amet consectetur adipisicing elit.</div>
            </fieldset>
            <fieldset className='subBoxThree'>
                <legend>Karen - New York</legend>
                <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</div>
            </fieldset>

            <fieldset className='subBoxFour'>
                <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</div>
                <legend>Karen - New York</legend>
            </fieldset>

            <fieldset className='subBoxFive'>
                <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</div>
                <legend>Karen - New York</legend>
            </fieldset>
        </div>
    )
}

function TercerBox() {
    return (
        <div className='threeBox'>
            <div className='threeBoxCircle'>
                <div className='circleTwo1'>
                    <span>All your meals with personalized recipes.</span>
                </div>
                <div className='circleTwo2'>Learn new ways to improve your health in your routine
                </div>
                <div className='circleTwo3'>
                    Take care of your health.
                </div>
                <div className='circleTwo'>
                </div>
            </div>
            <div className='threeBoxText'>
                <h1>
                    Lorem ipsum.
                </h1>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa laboriosam quae alias maxime!
                </p>
                <button>
                    Download
                </button>
            </div>
        </div>
    )
}

function Footer() {
    return (
        <footer>
            <div className='footerOne'>
                <img src={logo} alt="" />
                <span>+0 (0000) 000 00-00</span>
                <span>support@sniff.com</span>
            </div>
            <div className='footerTwo'>
                Quick Links
                <div className='footerTwo2'>
                    <span>
                        Product
                    </span>
                    <span>
                        Information
                    </span>
                    <span>
                        Company
                    </span>
                    <span>
                        Foonkie monkey
                    </span>
                </div>
            </div>
            <div className='footerThree'>
                Subscribe
                <input placeholder='Get product updates' type="text" name="" id="" />
            </div>
        </footer>
    )
}



export default Home;