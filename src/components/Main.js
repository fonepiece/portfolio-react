import Footer from "./Footer";
import Header from "./Header";
import HomePage from "./HomePage";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ProjectPage from "./ProjectPage";

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
        </BrowserRouter>
    )
}