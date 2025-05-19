import { Link } from 'react-router-dom'

function Home() {
    return (
        <>
            <div class="p-5 bg-primary text-white text-center">
                <h1>Welcome to the Store </h1>
                <p>Explore the Best Items On Best Price </p>
                <Link class="nav-link text" to={"/products"}>Shop Now</Link>
            </div>
        </>
    )
}

export default Home
