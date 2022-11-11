import Projects from "./Projects";
import AboutMe from "./AboutMe";
import Intro from "./Intro";
import Tools from "./Tools";

export default function Home() {
    return (
        <main className="site-main">
            <Intro />
            <Projects />
            <AboutMe />
            <Tools />
        </main>
    )
}