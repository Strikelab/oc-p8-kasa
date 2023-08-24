import React from 'react'
import iconInfo from '../assets/images/info.svg'

export default function ErrorMessage({ error }) {
    return (
        <div className="error">
            <p className="error__message">
                <img src={iconInfo} alt="icone information" />
                {`Une erreur est survenue, le serveur a répondu : ${error}`}
            </p>
        </div>
    )
}
