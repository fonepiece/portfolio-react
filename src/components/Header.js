import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function Header({ show, setShow }) {
    const [expanded, setExpanded] = useState(false)
    const navigate = useNavigate();

    return (
        <header className="site-header">
            <div className="header-content">

                <button className="flex" onClick={() => show ? setShow(false) : navigate("/")}>
                    <svg viewBox="0 0 68 33" className={`chevron-left ${!show ? 'invisible' : ''}`}>
                        <path d="M.58 3.414l27.432 27.433c2.715 2.715 7.167 2.787 9.964.164L67.356 3.46 64.62.54 35.24 28.093c-1.222 1.146-3.212 1.114-4.4-.075L3.408.586.579 3.414z"></path>
                    </svg>
                    <img src="/logo.png" alt="Reyhan Taze" />
                </button>

                <nav className="top-ul" id="top-ul">
                    <input id="menu__toggle" type="checkbox" checked={expanded} onChange={e => setExpanded(e.currentTarget.checked)} />
                    <label className="menu__btn" htmlFor="menu__toggle">
                        <span></span>
                    </label>
                    <ul className="menu__box circleBehind">
                        <li>
                            {show
                                ? <a className="menu__item cursor-pointer" onClick={(e) => {e.preventDefault();setShow(false)}}>Projects</a>
                                : <HashLink onClick={() => setExpanded(false)} className="menu__item" to="/#my-projects">Projects</HashLink>
                            }
                        </li>
                        <li><Link onClick={() => setExpanded(false)} className="menu__item" to="/about">About</Link></li>
                        <li><HashLink onClick={() => setExpanded(false)} className="menu__item" to="/#footer">Contact</HashLink></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}