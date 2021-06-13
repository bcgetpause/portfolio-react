import React from 'react'
import './Logiciels.scss'

export default function Logiciels() {
    return (
        <section className="section-logiciels" >
            <h3 className="titre-logiciels">Logiciels / IDEs</h3>
            <div className="grille-logiciels">
                <div className="range-logiciels">
                    <p className="label-logiciels">Eclipse / STS</p>
                    <p className="number-logiciels">80%</p>
                    <div className="barre-logiciels b1"></div>
                    <div className="barre-grises-logiciels"></div>
                </div>
                <div className="range-logiciels">
                    <p className="label-logiciels">Webstorm</p>
                    <p className="number-logiciels">75%</p>
                    <div className="barre-logiciels b2"></div>
                    <div className="barre-grises-logiciels"></div>
                </div>
                <div className="range-logiciels">
                    <p className="label-logiciels">Visual Code Studio</p>
                    <p className="number-logiciels">80%</p>
                    <div className="barre-logiciels b3"></div>
                    <div className="barre-grises-logiciels"></div>
                </div>

                <div className="range-logiciels">
                    <p className="label-logiciels">HeidiSQL</p>
                    <p className="number-logiciels">80%</p>
                    <div className="barre-logiciels b4"></div>
                    <div className="barre-grises-logiciels"></div>
                </div>
                <div className="range-logiciels">
                    <p className="label-logiciels">Docker</p>
                    <p className="number-logiciels">60%</p>
                    <div className="barre-logiciels b5"></div>
                    <div className="barre-grises-logiciels"></div>
                </div>
                <div className="range-logiciels">
                    <p className="label-logiciels">Kubernetes</p>
                    <p className="number-logiciels">10%</p>
                    <div className="barre-logiciels b6"></div>
                    <div className="barre-grises-logiciels"></div>
                </div>
            </div>
        </section>
    )
}
