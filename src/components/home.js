import '../css/home.css';
import frutas from '../images/frutas.png'

function Home() {
    return (
        <div className='container'>
            <Nav />
            <div className='boxOne'>
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
            <img className='frutas' src={frutas} alt="" />
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
            <div className='threeBox'>
                <div className='threeBoxCircle'>
                    <div className='circleTwo'>
                        <div className='circleTwo1'>
                            All your meals with personalized recipes.
                        </div>
                        <div className='circleTwo2'>Learn new ways to improve your health in your routine
                        </div>
                        <div className='circleTwo3'>
                            Take care of your health.
                        </div>
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




export default Home;