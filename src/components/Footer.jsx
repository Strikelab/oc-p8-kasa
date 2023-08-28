import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'
export default function Footer() {
    return (
        <footer>
            <Link to="/">
                <Logo />
            </Link>
            <p>© 2020 Kasa. All rights&nbsp;reserved</p>
        </footer>
    )
}
