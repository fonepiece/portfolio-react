import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function Header() {
    return (
        <header className="site-header">
            <Link to="/" className="site-name">
                <img src="/media/Untitled-2.png" alt="Reyhan Taze" />
            </Link>
            {/* <!-- <button className="night-mode">Too Bright</button> --> */}
            <nav className="top-ul" id="top-ul">
            <button className="menu-toggle" aria-controls="header-menu" aria-expanded="false" aria-label="Menu Toggle">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24">
                    <title>Menu Icon</title>
                    <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"></path>
                </svg>
            </button>
                <ul className="nav-menu circleBehind" id="header-menu">
                    <li><HashLink className="btn-border" to="/#my-projects">Projects</HashLink></li>
                    <li><HashLink className="btn-border" to="/#about">About</HashLink></li>
                    <li><HashLink className="btn-border" to="/#footer">Contact</HashLink></li>
                </ul>
            </nav>
        </header>
    )
}