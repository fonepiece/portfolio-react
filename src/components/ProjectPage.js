import { Tab, Tabs } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { projects } from "../projects";

export default function ProjectPage() {
    const { projectId } = useParams();
    const project = projects.find(p => p.id === projectId);
    if(!project) return null;

    const {
        title,
        description,
        featuredImage,
        featuredImageAlt,
        links,
        overview,
        tabs
    } = project.projectDetails;
    return (
        <div className="project-title">
            <h1>{title}</h1>
            <p className="project-description">{description}</p>
            <div className="project-image-container">
                <img src={featuredImage} alt={featuredImageAlt}/>
            </div>
            <div className="project-links">
                {links.map(link => <a key={link.text} href={link.link}>{link.text}</a>)}
            </div>
            <section className="site-overview">
                <div>
                    <h4>Overview</h4>
                    <p>{overview.description}</p>
                    <dl className="row">
                        <dt className="col-sm-3">Toolkit</dt>
                        <dd className="col-sm-9">{overview.tools.join(', ')}</dd>
                        <dt className="col-sm-3">Responsiveness</dt>
                        <dd className="col-sm-9">{overview.responsiveness}</dd>
                        <dt className="col-sm-3">Roles</dt>
                        <dd className="col-sm-9">{overview.roles.join(' - ')}</dd>
                        <dt className="col-sm-3">Duration</dt>
                        <dd className="col-sm-9">{overview.duration}</dd>
                    </dl>
                </div>
            </section>

            <section>
            {tabs && <Tabs
                defaultActiveKey={tabs.design ? "nav-design" : "nav-dev"}
                id="nav-tab"
            >
                {tabs.design && <Tab eventKey="nav-design" title="Design Process">
                    {tabs.design}
                </Tab>}
                {tabs.dev && <Tab eventKey="nav-dev" title="Development Process">
                    {tabs.dev}
                </Tab>}
                {tabs.learnings && <Tab eventKey="nav-learnings" title="Challenges&Learnings">
                    {tabs.learnings}
                </Tab>}
            </Tabs>}
            </section>
        </div>
    )
}