import { Link } from "react-router-dom";

export default function ProjectItem({project}) {
    return (
        <div className="project">
        <img src={project.featuredImage} alt={project.featuredImageAlt} />
        <div className="project-details">
            <h3>{project.title}</h3>
            <p>{project.tools.join(' | ')}</p>
            <button> <Link to={`project/${project.id}`}>See Details</Link></button>
        </div>
    </div>
    )
}