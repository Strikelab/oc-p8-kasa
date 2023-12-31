import React from 'react'
import { useState, useRef } from 'react'
import arrow from '../assets/images/arrow.png'

export default function Collapse({ datas, title }) {
    //---state
    const [isOpen, setIsOpen] = useState(false)

    //---Comportments
    // toogle state value of collapsible element
    const toggle = () => setIsOpen(!isOpen)

    const handleDatas = () => {
        if (typeof datas === 'string') {
            return <li>{datas}</li>
        }
        return datas.map((data, index) => <li key={index}>{data}</li>)
    }

    // To obtain current collapsible element
    const parentRef = useRef()

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
            <div
                ref={parentRef}
                className={`collapse__content-parent ${isOpen ? 'active' : ''}`}
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
                <ul className="collapse__content">{handleDatas()}</ul>
            </div>
        </div>
    )
}
// collapse element animation inspiration:
// https://www.youtube.com/watch?v=4F8EYGao9pc
