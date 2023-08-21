import React from 'react'

export default function Tags({ tags }) {
    return (
        <ul className="tags">
            {tags.map((tag, index) => (
                <li className="tag" key={index}>
                    {tag}
                </li>
            ))}
        </ul>
    )
}
