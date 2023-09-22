import React from 'react'
import { Link } from 'react-router-dom'

export default function Card({ logementDatas }) {
    const { id, title, cover } = logementDatas
    console.log('logementDatas',logementDatas)
    return (
        <Link className="card" to={`/logement/${id}`} state={logementDatas}>
            <img
                className="card__thumbnail"
                src={cover}
                alt="aperçu du logement"
            />
            <h2 className={'card__title'}>{title}</h2>
        </Link>
     
    )
}
