import React, { useState, useEffect } from 'react'
import Banner from '../components/Banner'
import Card from '../components/Card'
export default function Home() {
    //State
    const [logements, setLogements] = useState([])
    const titleContent = <h1>Chez vous partout et ailleurs</h1>
    const classNameValue = 'banner__homepage'
    const apiUrl = 'http://localhost:3030/logements'
    //comportements
    // This code will fetch the logements datas from the server when the component is first rendered.
    // The data will then be stored in the `logements` state. The render function will use the
    //  logments to render the component's UI.

    useEffect(() => {
        // Fetch the data from the server.
        //TO DO : handle fetch errors
        fetch(apiUrl)
            .then((response) => response.json())
            .then((json) => {
                // Set the data state.
                setLogements(json)
            })
    }, [])
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }, [])
    //display
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
