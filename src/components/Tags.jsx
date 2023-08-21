import React from 'react'

export default function Tags({tags}) {
    console.log(tags)
    return (
        <ul className="tags">
            {tags.map((tag) => (
                <li className="tag">{tag}</li>
            ))}
        </ul>
    )
}

