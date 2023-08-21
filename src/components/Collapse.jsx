import React from 'react'
import arrow from '../assets/images/arrow.png'
export default function Collapse({ datas, title }) {
    return (
        <div className="collapse">
            <img
                className="collapse__button"
                src={arrow}
                alt="collapse button"
            />
            <h3>{title}</h3>
            {typeof datas === 'string' ? (
                <p className="collapse__content">{datas}</p>
            ) : (
                <ul className="collapse__content">
                    {datas.map((data, index) => (
                        <li key={index}>{data}</li>
                    ))}
                </ul>
            )}
        </div>
    )
}
