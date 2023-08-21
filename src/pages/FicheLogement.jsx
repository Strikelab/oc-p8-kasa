import React from 'react'
import { useLocation } from 'react-router'
import PageNotFound from './PageNotFound'
import Tags from '../components/Tags'
import Rating from '../components/Rating'
import Collapse from '../components/Collapse'

export default function FicheLogement() {
    //we get datas from HomePage Cards Link state
    const logementDatas = { ...useLocation().state }
    const { id, title, description, host, cover, location, tags, rating } =
        logementDatas

    if (id) {
        return (
            <div className="fiche-logement page-container">
                <img
                    className="fiche-logement__cover"
                    src={cover}
                    alt="avatar"
                />

                <h2 className="fiche-logement__title">{title}</h2>
                <p className="fiche-logement__location">{location}</p>
                <div className="fiche-logement__host">
                    <p className="fiche-logement__host__name">{host.name}</p>
                    <img
                        className="fiche-logement__host__avatar"
                        src={host.picture}
                        alt="avatar"
                    />
                </div>
                <Tags tags={tags} />
                <Rating rating={parseInt(rating)} />
                <Collapse />
                <Collapse />
            </div>
        )
       
    } else {
        return <PageNotFound />
    }
}
