import Footer from "./Footer";
import Header from "./Header";
import HomePage from "./HomePage";
import {BrowserRouter, Routes, Route, useLocation} from 'react-router-dom';
import ProjectPage from "./ProjectPage";
import { useEffect } from "react";

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
    const onTop = () => {
        window.scrollTo(0, 0);
    }
    useEffect(() => {
        onTop()
    }, [routePath]);
    return null;
}