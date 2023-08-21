import React from 'react'
import { Link } from 'react-router-dom'

export default function Card({ logementDatas }) {
    const { id, title } = logementDatas
    return (
        <Link className="card" to={`/logement/${id}`} state={logementDatas}>
            <h2 className="card__title">{title}</h2>
        </Link>
    )
}
