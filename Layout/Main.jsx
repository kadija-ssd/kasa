import React from 'react'
import "../Styles/Main.css"

// composant qui gère la marge gauche et droite de 100% sauf le Footer, et wrappe le contenu enfant
function Main({children}) {
    return (
        <div className='Main'>
            {children}
        </div>
    )
}

export default Main