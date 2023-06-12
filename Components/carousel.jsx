import React, { useState } from 'react'
import chevronLeft from "../Assets/ChevronLeft.png"
import chevronRight from "../Assets/ChevronRight.png"
import "../Styles/Carousel.css"


function Carousel({pictures}) { //fonction qui attent un array avec les URL des images

    const [index, setIndex] = useState(0)  // constance qui sert  de compteur, initialisé à 0
    const totalPictures = pictures.length-1 // nombre max d'images

    if (index < 0) setIndex(totalPictures)  // si inférieur à zéro, on défini le nombre d'images maximum
    if (index > totalPictures) setIndex(0)  // si supérieur au maximum d'images dans l'array , alors on met à zéro
    return(
        <div className='carousel'>

            {/*affiche la première image*/}
            <div className='div-image'>  
                <img src={pictures[index]} className="classImage" key={"car-"+index} alt={"photo "+index} />
            </div>

            {/* gestion du cas ou il y a plus d'une image  */}
            {totalPictures > 0 && ( 
                <div> {/* les deux boutons permettent de voir toute les images du Carousel */}
                    <button onClick={() => setIndex(index - 1)}>{index}
                        <img src={chevronLeft} className='classChevronLeft' alt={'flèche gauche pour changer de photo '+index} />
                    </button>
                    <button onClick={() => setIndex(index + 1)}>{index}
                        <img src={chevronRight} className='classChevronRight' alt={'flèche droite pour changer de photo '+index} />
                    </button>
                </div>
            )}
            {totalPictures > 0 && (
                // compteur d'images qui ne s'affiche qu'en version Desktop et lorsqu'il y a plusieurs images
                <div className='div-compteur'> 
                    <p className='compteurImages'>
                        {index+1}/{totalPictures+1}
                    </p>
                </div>
            )}
        </div>
    )
}

export default Carousel