import React from 'react'
import { useState, useRef } from 'react'
import arrow from '../assets/images/arrow.png'

export default function Collapse({ datas, title }) {
    //state

    const [isOpen, setIsOpen] = useState(false)

    //Comportments
    const toggle = () => setIsOpen(!isOpen)
    const parentRef = useRef()
    // if (parentRef.current) console.log(parentRef.current.scrollHeight)
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
                <div
                    ref={parentRef}
                    className={`collapse__content-parent ${
                        isOpen ? 'active' : ''
                    }`}
                    style={
                        isOpen
                            ? { height: parentRef.current.scrollHeight + 'px' }
                            : { height: '0px' }
                    }
                >
                    <p className="collapse__content">{datas} </p>
                </div>
            ) : (
                <div
                    ref={parentRef}
                    className={`collapse__content-parent ${
                        isOpen ? 'active' : ''
                    }`}
                    style={
                        isOpen
                            ? { height: parentRef.current.scrollHeight + 'px' }
                            : { height: '0px' }
                    }
                >
                    <ul className="collapse__content">
                        {datas.map((data, index) => (
                            <li key={index}>{data}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}
