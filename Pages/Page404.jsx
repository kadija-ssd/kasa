import React, { Fragment } from 'react'
import { Link } from "react-router-dom"
import Main from "../Layout/Main"
import Navbar from "../Layout/Navbar"
import Footer from "../Layout/Footer"

import "../Styles/Page404.css"

function Page404() {
    return (
        <Fragment>
            <Main>
                <Navbar />
                <div className='error commun-error'>
                    <span>404</span>
                    <h4>Oups! La page que vous demandez n'existe pas.</h4>
                    <p><Link to="/">Retourner sur la page d’accueil</Link></p>
                </div>
            </Main>
            <Footer />
        </Fragment>
    )
}

export default Page404