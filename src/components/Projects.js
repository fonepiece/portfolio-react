import {projects} from "../projects"
import ProjectItem from "./ProjectItem"

export default function Projects() {

    return (
        <section className="my-projects" id="my-projects">
            <h2>My Projects</h2>
            <h6>Hover over the project to learn more!</h6>
            <div className="projects-container">
                <div className="project-row">
                    <ProjectItem project={projects[0]}/>
                    <ProjectItem project={projects[1]}/>
                </div>
                <div className="project-row">
                    <ProjectItem project={projects[2]}/>
                    <ProjectItem project={projects[3]}/>
                </div>
                <div className="project-row">
                    <ProjectItem project={projects[4]}/>
                    <ProjectItem project={projects[5]}/>
                </div>
            </div>
        </section>
    )
}