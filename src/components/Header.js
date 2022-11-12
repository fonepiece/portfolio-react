import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function Header() {
    const [expanded, setExpanded] = useState(false)
    const location = useLocation();

    return (
        <header className="site-header">
            {!location.pathname.startsWith('/project/') ? (
            <Link to="/" className="site-name">
                <img src="/media/Untitled-2.png" alt="Reyhan Taze" />
            </Link>
            ) : (
                <HashLink to="/#my-projects">
                    <svg viewBox="0 0 68 33" className="chevron-left">
                        <path d="M.58 3.414l27.432 27.433c2.715 2.715 7.167 2.787 9.964.164L67.356 3.46 64.62.54 35.24 28.093c-1.222 1.146-3.212 1.114-4.4-.075L3.408.586.579 3.414z"></path>
                    </svg>
                </HashLink>
            )}
            <nav className="top-ul" id="top-ul">
                <input id="menu__toggle" type="checkbox" checked={expanded} onChange={e => setExpanded(e.currentTarget.checked)} />
                <label className="menu__btn" htmlFor="menu__toggle">
                    <span></span>
                </label>
                <ul className="menu__box circleBehind">
                    <li><HashLink onClick={() => setExpanded(false)} className="menu__item" to="/#my-projects">Projects</HashLink></li>
                    <li><HashLink onClick={() => setExpanded(false)} className="menu__item" to="/#about">About</HashLink></li>
                    <li><HashLink onClick={() => setExpanded(false)} className="menu__item" to="/#footer">Contact</HashLink></li>
                </ul>
            </nav>
        </header>
    )
}