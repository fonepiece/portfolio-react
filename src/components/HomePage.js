import Projects from "./Projects";
import AboutMe from "./AboutMe";
import Intro from "./Intro";
import Tools from "./Tools";

export default function Home() {
    return (
        <main className="site-main" id="main">
            <Intro />
            <Projects />
            <AboutMe />
            <Tools />
        </main>
    )
}