
import { Bounce } from "react-awesome-reveal"
import { getProjects } from "../projects"
import ProjectItem from "./ProjectItem"
import Modal from 'react-bootstrap/Modal';
import { useState } from "react";
import ReactMarkdown from 'react-markdown'
import rehypeRaw from "rehype-raw";

export default function Projects() {
    const [projects, setProjects] = useState([]);
    const [show, setShow] = useState(false);
    const [currentProject, setCurrentProject] = useState(null);

    useState(async () => {
        const res = await getProjects()
        setProjects(res)
    }, [])

    const showProject = async (project) => {
        setCurrentProject(project)
        setShow(true)
    }

    if (!projects.length) return null

    return (
        <section className="my-projects mb-12" id="my-projects">
            <h2>My Projects</h2>
            <h6>Hover over the project to learn more!</h6>
            <div className="projects-container row">
                <Bounce direction="left" triggerOnce className="col-md-6 gy-4">
                    <ProjectItem project={projects[0]} showProject={showProject} />
                </Bounce>
                <Bounce direction="right" triggerOnce className="col-md-6 gy-4">
                    <ProjectItem project={projects[1]} showProject={showProject} />
                </Bounce>
                <Bounce direction="left" triggerOnce className="col-md-6 gy-4">
                    <ProjectItem project={projects[2]} showProject={showProject} />
                </Bounce>
                <Bounce direction="right" triggerOnce className="col-md-6 gy-4">
                    <ProjectItem project={projects[3]} showProject={showProject} />
                </Bounce>
                <Bounce direction="left" triggerOnce className="col-md-6 gy-4">
                    <ProjectItem project={projects[4]} showProject={showProject} />
                </Bounce>
                {/* <Bounce direction="right" triggerOnce className="col-md-6 gy-4">
                    <ProjectItem project={projects[5]} link="/media/project/details/cupcake-ux-brief.pdf" />
                </Bounce> */}
            </div>

            <Modal show={show} onHide={() => setShow(false)} fullscreen animation={false}>
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                    <div id="project-modal">
                        <h1>
                            {currentProject?.title}
                        </h1>
                        <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                            {currentProject?.content}
                        </ReactMarkdown>
                    </div>
                </Modal.Body>
            </Modal>
        </section>
    )
}