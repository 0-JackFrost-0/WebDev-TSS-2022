export default function Navbar(){
    return <nav className='nav'>
        <a href='/' className="site-title">Bangalore PG</a>
        <ul>
            <li>
                <a href="/music">Music</a>
            </li>
            <li>
                <a href="/sports">Sports</a>
            </li>
            <li>
                <a href='/tech'>Tech</a>
            </li>
            <li>
                <a href='/contact-us'>Contact us</a>
            </li>
        </ul>
    </nav>
}