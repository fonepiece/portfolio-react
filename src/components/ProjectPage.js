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
            <p>{description}</p>
            <img src={featuredImage} alt={featuredImageAlt}/>
            {links.map(link => <button key={link.text}><a href={link.link}>{link.text}</a></button>)}

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
            {tabs && tabs.length >= 3 && <Tabs
                defaultActiveKey="nav-design"
                id="nav-tab"
            >
                <Tab eventKey="nav-design" title="Design Process">
                    {tabs[0]}
                </Tab>
                <Tab eventKey="nav-dev" title="Development Process">
                    {tabs[1]}
                </Tab>
                <Tab eventKey="nav-learnings" title="Challenges&Learnings">
                    {tabs[2]}
                </Tab>
            </Tabs>}
            </section>
        </div>
    )
}