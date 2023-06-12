import React, { useState } from 'react'
import chevronUp from "../Assets/ChevronUp.png"
import chevronDown from "../Assets/ChevronDown.png"
import "../Styles/Collapse.css"



function Collapse({title, content}) {
    // défini le collapse par défaut comme fermé avec la valeur booléen false
    const [contentVisible, setContentVisible] = useState(false)

    // à chaque clic sur le collapse, ca inverse la valeur pour le ouvert/fermé
    const contentNow = () => { 
        setContentVisible(!contentVisible) // inverse la valeur actuelle
    }

    // défini les classes selon si c'est visible ou caché, meme chose pour le chevron
    const collapseContent = (contentVisible ? "visible" : "hidden") + " collapse"
    const collapseChevron = (contentVisible ? chevronUp : chevronDown)

    return (
        <div className='collapse'>

            {/* affiche le titre et le chevron */}
            <div className='collapse__header' onClick={contentNow}>
                <span>{title}</span>
                <div className="chevronValue">
                    <img src={collapseChevron} alt=""/>
                </div>
            </div>

            {/* affiche le contenu */}
            <div className={collapseContent}>
                <ul>{content}</ul>
            </div>
        </div>
    )
}

export default Collapse