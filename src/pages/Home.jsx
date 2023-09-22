import React, { useState, useEffect } from 'react'
import Banner from '../components/Banner'
import Card from '../components/Card'
import Loader from '../components/Loader'
import ErrorMessage from '../components/ErrorMessage'
import { apiUrl, logementsEndPoint } from '../utils/setEnv'
export default function Home() {
    //---State
    const [logementsDatas, setLogementsDatas] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [status, setStatus] = useState({})

    const titleContent = <h1>Chez vous, partout&nbsp;et&nbsp;ailleurs</h1>
    const classNameValue = 'banner__homepage'

    //---comportements
    // This code will fetch the logements datas from the server when the component is first rendered.
    // The data will then be stored in the `logements` state. The render function will use the
    //  logements to render the component's UI.

    useEffect(() => {
        async function fetchLogements() {
            try {
               
                const url =`${apiUrl}/${logementsEndPoint}`
                setIsLoading(true)
                const response = await fetch(url)
                const logementsDatas = await response.json()
                setLogementsDatas(logementsDatas)
            } catch (error) {
                setStatus({ error: error.message })
            } finally {
                setIsLoading(false)
            }
        }
        fetchLogements()
    }, [])

    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }, [])

    //---display
    if (status.error) {
        return <ErrorMessage error={status.error} />
    } else if (isLoading) {
        return <Loader />
    } else {
        return (
            <div className="page-container">
                <Banner
                    titleContent={titleContent}
                    classNameValue={classNameValue}
                />
                <div className="cards-container">
                    {logementsDatas.map((logementDatas) => (
                        <Card
                            logementDatas={logementDatas}
                            key={logementDatas.id}
                        />
                    ))}
                </div>
            </div>
        )
    }
}
