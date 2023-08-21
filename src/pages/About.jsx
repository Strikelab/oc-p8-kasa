import React from 'react'
import Banner from '../components/Banner'
import Collapse from '../components/Collapse'
import datas from '../assets/data/aboutContent.json'

export default function About() {
    const { aboutContent } = datas

    return (
        <div className="page-container">
            <Banner classNameValue="banner__about" />
            {aboutContent.map(({ title, content, id }) => (
                <Collapse key={id} title={title} datas={content} />
            ))}
        </div>
    )
}
