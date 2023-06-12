import React from 'react'
import { Link } from "react-router-dom"
import records from "../Backend/accomodations.json"
import "../Styles/Lodging.css"

// composant qui permet de récupérer la liste des logements et de les afficher sous forme de card

const Locations = () => {
    return (
        <div className="locations">

            {/* permet de faire une liste de la base de données */}
            {records.map((record) => {
                const { id, cover, title } = record;

                // affiche la fiche logement sur la page d'accueil
                return (
                    <div className="fiche-locations" key={id}>
                        <Link to={{ pathname: "/Logement", search: "?_id="+id }}>
                            <img src={cover} alt={title} />
                            <h3>{title}</h3>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default Locations