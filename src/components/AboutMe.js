import { useEffect, useState } from "react";
import Fade from 'react-reveal/Fade';

export default function AboutMe() {
    const [level, setLevel] = useState(1);
    const [audio, setAudio] = useState();

    const onSelect = (level) => {
        setLevel(level);
        audio.play();
    }

    useEffect(() => {
        setAudio(new Audio('/media/click.wav'));
    }, [])
    

    return (
        <section className="about" id="about">
            <h2>About ME</h2>
            <div className="about-container">
                <div id="about-me">
                    <div className="about-button-container">
                        <span>shortest</span>
                        <button onClick={() => onSelect(1)} className={level >= 1 ? 'active' : ''}></button>
                        <button onClick={() => onSelect(2)} className={level >= 2 ? 'active' : ''}></button>
                        <button onClick={() => onSelect(3)} className={level >= 3 ? 'active' : ''}></button>
                        <button onClick={() => onSelect(4)} className={level >= 4 ? 'active' : ''}></button>
                        <button onClick={() => onSelect(5)} className={level >= 5 ? 'active' : ''}></button>
                        <span>longest</span>
                    </div>
                    <Fade when={level >= 1}>
                        <p>
                            Thank you for scrolling this far.
                            From being a teacher in a school to coding on a web page, I love combining the worlds of
                            logic and creative design to make eye-catching, accessible, and user-friendly websites and applications.
                        </p>
                    </Fade>
                    <Fade when={level >= 2}>
                        <p>
                            I am recently graduated from BCIT Front end Web development. 
                            I deepened my HTML/ CSS knowledge and learned so much, especially more advanced web 
                            technologies such as React and the Javascript ecosystem. The program also taught me design / UX, as well
                            as backend development with PHP/ WordPress, and e-commerce platforms such 
                            as Shopify and WooCommerce. I havea bachelor of honours in Education Sciences from Middle 
                            East Technical University. In relation to design and web development, I had courses 
                            which are Teaching Methods, Psychology, Research Methods, Assessment and Evaluation,
                            Sociology, Visual Arts, and Material Development.
                        </p>
                    </Fade>
                    <Fade when={level >= 3}>
                        <p>
                            I believe in lifelong learning and continuous improvement. This is one of the reasons as a experienced teacher I
                            followed my passion and have a step on Web Deseign-Developmet area.
                            I worked as a kindergarten teacher for 5 years in public elementary schools with over 150 students and 20 teachers.
                        </p>
                    </Fade>
                    <Fade when={level >= 4}>
                        <p>
                            I Speak Turkish and English as a native. I also speak and understand German and planning to learn French in the near future.
                        </p>
                    </Fade>
                    <Fade when={level >= 5}>
                        <p>
                            Outside Of the Work;<br/>
                            I am a mother of 2 angels, a 4-year-old boy, and a 6-year-old girl.
                            Inspiration for designs comes from living an active fun-filled life. Hanging out
                            with friends, and creating memories with people are things she loves and is important to me. 
                            My ever-inquisitive mind pushes me to
                            explore other fields like fashion and I love traveling too. 
                            I am also passionate about nature, photography, cake decoration and CrossFit, 
                            and I always curious to learn more when it comes to new technologies and creative design.
                        </p>
                    </Fade>
                </div>
                <div>
                    <img src="/media/profile_photo.jpg"/>
                </div>
            </div>
        </section>
    )
}