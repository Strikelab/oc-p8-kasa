import React from 'react'
import { NavLink } from 'react-router-dom'
export default function NavBar() {
    return (
        <nav>
            <ul>
                <NavLink to="/">
                    <li>Accueil</li>
                </NavLink>
                <NavLink to="/about">
                    <li>A Propos</li>
                </NavLink>
            </ul>
        </nav>
    )
}
