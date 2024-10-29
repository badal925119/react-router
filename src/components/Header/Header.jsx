import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div>
            <h1>Navbar</h1>
            <nav className="flex gap-5 text-green-600 font-bold bg-orange-300  shadow-md">
                <Link  to='/'>Home</Link>
                <Link to='/users'>Users</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
            </nav>
        </div>
    );
};

export default Header;