import React from 'react'
import Navbar from "../Layout/Navbar"
import Main from '../Layout/Main' 
import Banner from '../Components/banner'
import Footer from "../Layout/Footer"
import Lodging from '../Components/lodging'

import "../Styles/Home.css"

function Home() {
    return (
        <div role="main">
            <Main>
                <Navbar />
                <Banner>
                    <div className="banner banner-commun">
                        <h1>Chez vous, partout et ailleurs</h1>
                    </div>
                </Banner>
                <Lodging />
            </Main>
            <Footer />
        </div>
    )
}

export default Home