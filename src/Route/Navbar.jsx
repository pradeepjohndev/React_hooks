import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <>
            <nav className="flex bg-amber-200 text-black justify-evenly max-w-full">
                <Link to="/">Home</Link>
                <Link to="/About">About</Link>
                <Link to="/Contact">Contact</Link>
                <Link to="/Product">product</Link>
            </nav>
        </>
    )
}