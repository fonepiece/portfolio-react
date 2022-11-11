
import { Bounce } from "react-awesome-reveal"
import {projects} from "../projects"
import ProjectItem from "./ProjectItem"

export default function Projects() {

    return (
        <section className="my-projects" id="my-projects">
            <h2>My Projects</h2>
            <h6>Hover over the project to learn more!</h6>
            <div className="projects-container row">
                <Bounce direction="left" triggerOnce className="col-md-6 gy-4">
                    <ProjectItem project={projects[0]}/>
                </Bounce>
                <Bounce direction="right" triggerOnce className="col-md-6 gy-4">
                    <ProjectItem project={projects[1]}/>
                </Bounce>
                <Bounce direction="left" triggerOnce className="col-md-6 gy-md-4">
                    <ProjectItem project={projects[2]}/>
                </Bounce>
                <Bounce direction="right" triggerOnce className="col-md-6 gy-4">
                    <ProjectItem project={projects[3]}/>
                </Bounce>
                <Bounce direction="left" triggerOnce className="col-md-6 gy-4">
                    <ProjectItem project={projects[4]}/>
                </Bounce>
                <Bounce direction="right" triggerOnce className="col-md-6 gy-4">
                    <ProjectItem project={projects[5]} link="/media/project/details/cupcake-ux-brief.pdf"/>
                </Bounce>
            </div>
        </section>
    )
}