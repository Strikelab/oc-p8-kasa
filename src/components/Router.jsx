import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Test from './Test'
import Home from '../pages/Home'
import FicheLogement from '../pages/FicheLogement'
import PageNotFound from '../pages/PageNotFound'
import About from '../pages/About'

export default function Router() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route
                    path="/logement/:idLogement"
                    element={<FicheLogement />}
                />
                <Route path="/test" element={<Test />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}
