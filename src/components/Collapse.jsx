import React from 'react'
import { useState } from 'react'
import arrow from '../assets/images/arrow.png'

export default function Collapse({ datas, title }) {
    //state

    const [isOpen, setIsOpen] = useState(false)

    //Comportments
    const toggle = () => setIsOpen(!isOpen)

    //display
    return (
        <div className="collapse">
            <img
                onClick={toggle}
                className={`collapse__button ${isOpen ? 'active' : ''}`}
                src={arrow}
                alt="collapse button"
            />

            <h3>{title}</h3>
            {typeof datas === 'string' ? (
                <p className={`collapse__content ${isOpen ? 'active' : ''}`}>
                    {datas}
                </p>
            ) : (
                <ul className={`collapse__content ${isOpen ? 'active' : ''}`}>
                    {datas.map((data, index) => (
                        <li key={index}>{data}</li>
                    ))}
                </ul>
            )}
        </div>
    )
}
