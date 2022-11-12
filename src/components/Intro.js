import { Fade, Slide } from "react-awesome-reveal"

export default function Intro() {
    return (
        <section id="intro-section">
            
            <div className="banner">
                <div className="intro">
                    <Slide direction="down" triggerOnce>
                        <h1>Reyhan Taze</h1>
                    </Slide>
                    <p className="summary">
                        <Fade direction="left" triggerOnce cascade>
                            <div><h2>UI/UX Designer - Front End Web Developer</h2></div>
                            <div>with a passion for creating engaging, interactive,</div>
                            <div>accessible websites and mobile applications.</div>
                        </Fade>
                    </p>
                </div>
                <Fade direction="right" triggerOnce>
                    <div className="avatar">
                        <img src="/media/avatar.png"/>
                    </div>
                </Fade>
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