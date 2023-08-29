import React from 'react'
import { useEffect, useState } from 'react'
import { useParams, Navigate } from 'react-router'
import Tags from '../components/Tags'
import Rating from '../components/Rating'
import Collapse from '../components/Collapse'
import Slider from '../components/Slider'
import Loader from '../components/Loader'
import ErrorMessage from '../components/ErrorMessage'

export default function FicheLogement() {
    //---state
    //logement Datas
    const [logementDatas, setLogementDatas] = useState({})
    //fetch status
    const [status, setStatus] = useState({})
    //Waiting for the API response
    const [isLoading, setIsLoading] = useState(true)
    // get logement id from url
    const { idLogement } = useParams()

    //---Comportments
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }, [])

    useEffect(() => {
        async function fetchLogmentDatas() {
            try {
                // const url = `http://localhost:3030/api/logements/${idLogement}`
                const url = `https://kasa.strikelab.fr/api/logements/${idLogement}`

                setIsLoading(true)
                const response = await fetch(url)
                if (response.status === 404) {
                    return setStatus({ error: response.status })
                }
                const logementDatas = await response.json()
                setLogementDatas(logementDatas)
            } catch (error) {
                setStatus({ error: error.message })
            } finally {
                setIsLoading(false)
            }
        }
        fetchLogmentDatas()
    }, [idLogement])

    //---display
    if (status.error === 404) {
        return <Navigate to="/404_Not_Found" />
    } else if (status.error) {
        return <ErrorMessage error={status.error} />
    } else if (isLoading) {
        return <Loader />
    } else {
        return (
            <div className="fiche-logement">
                <Slider pictures={logementDatas.pictures} />
                <div className="fiche-logement__wrapper">
                    <div className="fiche-logement__header">
                        <h2 className="fiche-logement__title">
                            {logementDatas.title}
                        </h2>
                        <p className="fiche-logement__location">
                            {logementDatas.location}
                        </p>
                        <Tags tags={logementDatas.tags} />
                    </div>
                    <div className="fiche-logement__informations">
                        <div className="fiche-logement__informations__host">
                            <p className="fiche-logement__informations__host-name">
                                {logementDatas.host.name}
                            </p>
                            <img
                                className="fiche-logement__informations__host-avatar"
                                src={logementDatas.host.picture}
                                alt="avatar"
                            />
                        </div>

                        <Rating rating={parseInt(logementDatas.rating)} />
                    </div>
                </div>

                <div className="fiche-logement__collapse-container">
                    <Collapse
                        title="Description"
                        datas={logementDatas.description}
                    />
                    <Collapse
                        title="Équipements"
                        datas={logementDatas.equipments}
                    />
                </div>
            </div>
        )
    }
}
