export default function ProjectItem({ project, link, showProject }) {
    return (
        <div className="project">
            <img src={project.featuredImage} alt={project.featuredImageAlt} />
            <div className="project-details">
                <h4>{project.title}</h4>
                <p>{project.tools.join(' | ')}</p>
                {link
                    ? <a href={link}>See Details</a>
                    : (
                        <a onClick={() => showProject(project)}>
                            See Details
                        </a>
                    )
                }
            </div>
        </div>
    )
}