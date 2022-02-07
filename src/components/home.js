import '../css/home.css';


function Home() {
    return (
        <div className="sectionNav">
            <Nav />
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
            <button>
                Login
            </button>
        </nav>
    )
}

export default Home;