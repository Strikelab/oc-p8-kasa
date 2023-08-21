import React from 'react'
import { useLocation } from 'react-router'
import PageNotFound from './PageNotFound'
export default function FicheLogement() {
    //we get datas from HomePage Cards Link state
    const logementDatas = { ...useLocation().state }
    const { id, title } = logementDatas
    console.log(logementDatas.id)

    if (id) {
        return (
            <div className="fiche-logement page-container">
                <h2> Fiche Logement: {id}</h2>
                <h3>{title}</h3>
            </div>
        )
    } else {
        return <PageNotFound />
    }
}
