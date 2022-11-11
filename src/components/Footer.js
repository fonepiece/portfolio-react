export default function Footer() {
    return (
        <footer className="site-footer" id="footer">
            <div className="contact-inforation">
                <h2>Let's chat!</h2>
                <p> If you have questions, don’t hesitate to use the links below to connect.</p>
                <ul className="social-icons">
                    <li><a href="mailto:reyhantaze89@gmail.com"><img src="/media/email-black.png" alt="email"/></a></li>
                    <li>
                        <a href="https://www.linkedin.com/in/reyhan-taze-bbb87a242/"><img src="/media/linked-in.png" alt="linkedin"/></a>
                        
                    </li>
                   
                    <li><a href="https://github.com/fonepiece"><img src="/media/github-black.png" alt="github"/></a></li>
                </ul>
            </div>
          

            <p className="foot-note"> ©2022 all rights reserved</p>
        </footer>
    )
}