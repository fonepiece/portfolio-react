import { useState, useEffect } from "react";
import aboutMe from '../content/aboutme.md'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from "rehype-raw";
import Tools from "./Tools";

export default function AboutMe() {
    const [content, setContent] = useState('')
    useEffect(() => {
        (async () => {
            const c = await fetch(aboutMe).then(v => v.text())
            setContent(c)
        })()

    }, [])

    return (
        <main className="site-main" id="about">
            <ReactMarkdown rehypePlugins={[rehypeRaw]} components={{
                tools({ node, inline, className, children, ...props }) {
                    return <Tools />
                }
            }}>
                {content}
            </ReactMarkdown>
        </main>
    )
}