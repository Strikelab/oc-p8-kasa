import React from 'react'
import { useState, useRef } from 'react'
import arrow from '../assets/images/arrow.png'

export default function Collapse({ datas, title }) {
    //---state

    const [isOpen, setIsOpen] = useState(false)

    //---Comportments
    // This toogle state value of collapsible element
    const toggle = () => setIsOpen(!isOpen)

    // To obtain current collapsible element
    const parentRef = useRef()
    // if (parentRef.current) console.log(parentRef.current.scrollHeight)

    //---display
    return (
        <div className="collapse">
            <img
                onClick={toggle} // call toggle function to update state
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
                    // cannot transition with the height:auto value in css
                    // instead with the useRef() Hook we can obtain the height
                    // of the current element and set this style value inline
                    // to animate collapsible element
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
