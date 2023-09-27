import { Fade, Slide } from "react-awesome-reveal"
import { HashLink } from "react-router-hash-link"

export default function Intro() {
    return (
        <section id="intro-section">

            <div className="flex flex-col items-center md:flex-row gap-4">
                <Fade direction="left" triggerOnce>
                    <div className="w-64 sm:w-96">
                        <img src="/profile.png" />
                    </div>
                </Fade>
                <div className="">
                    <Slide direction="down" triggerOnce>
                        <div className="text-4xl">Hi, I am <span className="text-[#E36363] font-bold">Reyhan Taze</span></div>
                    </Slide>
                    <p className="mt-4">
                        <Fade direction="right" triggerOnce cascade>
                            <div className="text-4xl sm:text-6xl text-[#666666] font-extrabold">
                                <div>UI/UX</div>
                                <div className="pl-16"> Designer</div>

                            </div>
                            <div className="py-4 text-xl">
                                <div>
                                    I am currently working in the fast-paced environment of a startup SaaS company as a <b>UX Designer.</b>
                                </div>
                                <div className="mt-2">
                                    With my <b>8-years of experience as teacher</b>, I create intuitive interfaces that seamlessly guide users through digital experiences, making complex processes easily understandable and tailored to their needs.
                                </div>
                            </div>
                        </Fade>
                    </p>
                </div>
            </div>

            <div className="show-more">
                <HashLink className="intro-more-link" to="#my-projects">
                    <svg viewBox="0 0 68 33" className="chevron-down">
                        <path d="M.58 3.414l27.432 27.433c2.715 2.715 7.167 2.787 9.964.164L67.356 3.46 64.62.54 35.24 28.093c-1.222 1.146-3.212 1.114-4.4-.075L3.408.586.579 3.414z"></path>
                    </svg>
                </HashLink>
            </div>
        </section>
    )
}