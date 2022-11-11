export default function Intro() {
    return (
        <section id="intro-section">
            <div className="banner">
                <div className="intro">
                    <h1>Reyhan Taze</h1>
                    <p className="summary">
                        <span>UI/UX Designer</span> -
                        <span> End Web Developer</span><br/>
                        with a passion for creating engaging, interactive,<br/>
                        accessible websites and mobile applications.
                    </p>
                </div>
                <div className="avatar">
                    <img src="/media/avatar.png"/>
                </div>
            </div>
            <div className="show-more">
            <a className="intro-more-link" href="#my-projects">
                <svg viewBox="0 0 68 33" className="chevron-down">
                    <path d="M.58 3.414l27.432 27.433c2.715 2.715 7.167 2.787 9.964.164L67.356 3.46 64.62.54 35.24 28.093c-1.222 1.146-3.212 1.114-4.4-.075L3.408.586.579 3.414z"></path>
                </svg>
            </a>
            </div>
        </section>
    )
}