import React from 'react'
import { useEffect, useState } from 'react'
import { useParams, Navigate } from 'react-router'
import Tags from '../components/Tags'
import Rating from '../components/Rating'
import Collapse from '../components/Collapse'
import Slider from '../components/Slider'
import Loader from '../components/Loader'

export default function FicheLogement() {
    //---state
    //logement Datas
    const [logement, setLogement] = useState({})
    //Waiting for the API response
    const [loading, setLoading] = useState(true)
    // get logement id from url
    const { idLogement } = useParams()

    //---Comportments
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }, [idLogement])

    useEffect(() => {
        // call API on logement id modification
        const apiUrl = `http://192.168.1.2:3030/logements/${idLogement}`
        // Fetch the data from the server.
        fetch(apiUrl)
            .then((response) => {
                if (response.ok) {
                    return response.json()
                } else if (response.status === 404) {
                    setLogement({ error: 404 })
                    throw new Error('404 NOT FOUND')
                } else {
                    throw new Error('Something went wrong')
                }
            })
            .then((json) => {
                // Set the data state.
                setLogement(json)
                setLoading(false)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [idLogement])

    //---display
    if (logement.error === 404) {
        return <Navigate to="/404_Not_found" />
    } else if (loading) {
        return <Loader />
    } else {
        return (
            <div className="fiche-logement page-container">
                <Slider pictures={logement.pictures} />
                <div className="fiche-logement__head">
                    <h2 className="fiche-logement__title">{logement.title}</h2>
                    <p className="fiche-logement__location">
                        {logement.location}
                    </p>
                </div>

                <div className="fiche-logement__host">
                    <p className="fiche-logement__host__name">
                        {logement.host.name}
                    </p>
                    <img
                        className="fiche-logement__host__avatar"
                        src={logement.host.picture}
                        alt="avatar"
                    />
                </div>
                <Tags tags={logement.tags} />
                <Rating rating={parseInt(logement.rating)} />
                <div className="fiche-logement__collapse-container">
                    <Collapse
                        title="Description"
                        datas={logement.description}
                    />
                    <Collapse title="Équipements" datas={logement.equipments} />
                </div>
            </div>
        )
    }
}
