import Projects from "./Projects";
import Intro from "./Intro";
import Tools from "./Tools";

export default function Home(props) {
    return (
        <main className="site-main" id="main">
            <Intro />
            <Projects {...props}/>
            <Tools />
        </main>
    )
}