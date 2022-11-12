import Footer from "./Footer";
import Header from "./Header";
import HomePage from "./HomePage";
import {BrowserRouter, Routes, Route, useLocation} from 'react-router-dom';
import ProjectPage from "./ProjectPage";
import { useEffect, useLayoutEffect, useState } from "react";

export default function Main() {
    return (
        <BrowserRouter>
            <div className="site-wrapper">
            <Header />
                <Routes>
                    <Route path="/" exact element={<HomePage />} />
                    <Route path="/project/:projectId" element={<ProjectPage />} />
                </Routes>
            </div>
            <Footer />
            <ScrollToTop />
        </BrowserRouter>
    )
}

function ScrollToTop() {
    const routePath = useLocation();
    const [scrolled, setScrolled] = useState(false);

    const onTop = () => {
        window.scrollTo(0, 0);
    }
    useEffect(() => {
        onTop()
    }, [routePath]);

    useLayoutEffect(() => {
        function updatePosition() {
            setScrolled(window.pageYOffset > 350);
        }
        window.addEventListener('scroll', updatePosition);
        updatePosition();
        return () => window.removeEventListener('scroll', updatePosition);
    }, []);

    if (!scrolled) return null;
    return (
        <a className="scroll-to-top-link">
            <svg viewBox="0 0 68 33" className="chevron-up" onClick={onTop}>
                <path d="M.58 3.414l27.432 27.433c2.715 2.715 7.167 2.787 9.964.164L67.356 3.46 64.62.54 35.24 28.093c-1.222 1.146-3.212 1.114-4.4-.075L3.408.586.579 3.414z"></path>
            </svg>
        </a>
    );
}