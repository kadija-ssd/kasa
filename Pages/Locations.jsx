import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import Navbar from "../Layout/Navbar"
import Footer from "../Layout/Footer"
import Main from "../Layout/Main"
import Page404 from "./Page404"
import Collapse from '../Components/collapse'
import Carousel from '../Components/carousel'

import "../Styles/Locations.css"
import records from "../Backend/accomodations.json"

const Stars = [1, 2, 3, 4, 5]

function Locations() {
    // récupère l'ID de l'URL
    const [searchParams] = useSearchParams();
    const [idLogement] = useState(searchParams.get('_id'));
    
    // cherche l'id dans le fichier accomodations.json
    const record = records.find(element => element.id === idLogement)
    
    // si l'URL à été modifié manuellement, redirection vers la page d'erreur
    if (!record) return(<Page404 />)

    // récupère la liste des elements
    const equipements = record.equipments.map((element, index) => (
          <li className='description-content' key={"equip-"+index.toString()}>{element}</li>
        ))
    

    return (
        <div className='logement'>
            <Main>
                <Navbar />

                {/* carousel d'images */}
                <Carousel pictures={record.pictures}/>

                {/* 1 - affiche le titre, l'emplacement et les tags */}
                <div className='ficheLogement'>
                    <div className='div-description'>
                        <h1>{record.title}</h1>
                        <h4>{record.location}</h4>
                        <div className='div-tags'>
                            { record.tags.map((element, index) => {
                                return(<p className='tags' key={"tags-"+index}>{element}</p>)
                            })}
                        </div>
                    </div>

                    {/* 2 - Affiche le nom du propriétaire et sa photo */}
                    <div className='bloc-stars'>
                        <div className='div-etoiles'>
                            <p>{record.host.name}</p>
                            <img src={record.host.picture} alt={record.title} />
                        </div>
                        
                        {/* 3 - Met et colorie les étoiles */}
                        <div className='stars'>
                            {
                                Stars.map(element => {
                                    const nbreEtoiles = parseInt(record.rating)
                                    return(<span key={"star-"+element} className={element <= nbreEtoiles ? 'span1' : 'span2'}>★</span>)
                                })
                            }
                        </div>
                    </div>
                </div>


                {/* affiche la description et les équipements */}
                <div className='collapseLogement'>
                    <Collapse title="Description" content={record.description} />
                    <Collapse title="Equipements" content={equipements} />
                </div>

            </Main>
            <Footer />
        </div>
    )
}

export default Locations