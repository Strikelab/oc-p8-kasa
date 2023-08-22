import React from 'react'
import Banner from '../components/Banner'
import Collapse from '../components/Collapse'
import datas from '../assets/data/aboutContent.json'
import { useEffect } from 'react'

export default function About() {
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }, [])
    const { aboutContent } = datas

    return (
        <div className="about">
            <Banner classNameValue="banner__about" />
            <div className="about__collapse-container">
                {aboutContent.map(({ title, content, id }) => (
                    <Collapse key={id} title={title} datas={content} />
                ))}
            </div>
        </div>
    )
}
