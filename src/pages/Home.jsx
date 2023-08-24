import React, { useState, useEffect } from 'react'
import Banner from '../components/Banner'
import Card from '../components/Card'
import Loader from '../components/Loader'
import iconInfo from '../assets/images/info.svg'
import ErrorMessage from '../components/ErrorMessage'
export default function Home() {
    //---State
    const [logements, setLogements] = useState([])
    const [loading, setLoading] = useState(false)

    const titleContent = <h1>Chez vous partout et ailleurs</h1>
    const classNameValue = 'banner__homepage'

    //---comportements
    // This code will fetch the logements datas from the server when the component is first rendered.
    // The data will then be stored in the `logements` state. The render function will use the
    //  logements to render the component's UI.

    // useEffect(() => {
    //     setLoading(true)
    //     const apiUrl = 'http://192.168.1.2:3030/logements'
    //     // Fetch the data from the server.
    //     fetch(apiUrl)
    //         .then((response) => {
    //             if (response.ok) {
    //                 return response.json()
    //             }
    //             throw new Error('Something went wrong')
    //         })
    //         .then((json) => {
    //             // Set the data state.
    //             console.log(json)
    //             setLogements(json)
    //             setLoading(false)
    //             console.log(json)
    //         })
    //         .catch((error) => {
    //             console.warn(
    //                 `Serveur inaccessible, le serveur a répondu: ${error.message}`
    //             )
    //         })
    // }, [])

    useEffect(() => {
        async function fetchLogements() {
            try {
                const apiUrl = 'http://192.168.1.2:3030/logements'
                setLoading(true)
                const response = await fetch(apiUrl)
                const logementsDatas = await response.json()
                setLogements(logementsDatas)
            } catch (error) {
                setLogements({ error: error.message })
            } finally {
                setLoading(false)
            }
        }
        fetchLogements()
    }, [])

    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }, [])

    //---display
    if (logements.error) {

        return (
            <ErrorMessage error={logements.error}/>
            // <div className="error">
            //     <p className="error__message">
            //         {' '}
            //         <img src={iconInfo} alt="icone information" />
            //         {`Une erreur est survenue, le serveur a répondu : ${logements.error}`}
            //     </p>
            // </div>
        )
    }
    if (loading) {
        return <Loader />
    } else {
        return (
            <div className="page-container">
                <Banner
                    titleContent={titleContent}
                    classNameValue={classNameValue}
                />
                <div className="cards-container">
                    {logements.map((logement) => (
                        <Card logementDatas={logement} key={logement.id} />
                    ))}
                </div>
            </div>
        )
    }
}
