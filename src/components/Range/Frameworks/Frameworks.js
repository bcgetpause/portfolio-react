import React from 'react'
import './Frameworks.scss'

export default function Frameworks() {
    return (
        <section className="section-frameworks" >
            <h3 className="titre-frameworks">Frameworks / Librairies</h3>
            <div className="grille-frameworks">
                <div className="range-frameworks">
                    <p className="label-frameworks">Angular</p>
                    <p className="number-frameworks">90%</p>
                    <div className="barre-frameworks b1"></div>
                    <div className="barre-grises-frameworks"></div>
                </div>
                <div className="range-frameworks">
                    <p className="label-frameworks">ReactJS</p>
                    <p className="number-frameworks">75%</p>
                    <div className="barre-frameworks b2"></div>
                    <div className="barre-grises-frameworks"></div>
                </div>
                <div className="range-frameworks">
                    <p className="label-frameworks">Bootstrap</p>
                    <p className="number-frameworks">70%</p>
                    <div className="barre-frameworks b3"></div>
                    <div className="barre-grises-frameworks"></div>
                </div>

                <div className="range-frameworks">
                    <p className="label-frameworks">PrimeNG</p>
                    <p className="number-frameworks">80%</p>
                    <div className="barre-frameworks b4"></div>
                    <div className="barre-grises-frameworks"></div>
                </div>
                <div className="range-frameworks">
                    <p className="label-frameworks">Spring BOOT</p>
                    <p className="number-frameworks">70%</p>
                    <div className="barre-frameworks b5"></div>
                    <div className="barre-grises-frameworks"></div>
                </div>
                <div className="range-frameworks">
                    <p className="label-frameworks">Laravel 5</p>
                    <p className="number-frameworks">80%</p>
                    <div className="barre-frameworks b6"></div>
                    <div className="barre-grises-frameworks"></div>
                </div>
            </div>
        </section>
    )
}
