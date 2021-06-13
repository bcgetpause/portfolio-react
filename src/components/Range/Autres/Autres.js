import React from 'react'
import './Autres.scss'

export default function Autres() {
    return (
        <section className="section-range" >
            <h3 className="titre-autres">Autres</h3>
            <div className="grille-autres">
                <div className="range-autres">
                    <p className="label-autres">GIT</p>
                    <p className="number-autres">90%</p>
                    <div className="barre-autres b1"></div>
                    <div className="barre-grises-autres"></div>
                </div>
                <div className="range-autres">
                    <p className="label-autres">SVN</p>
                    <p className="number-autres">75%</p>
                    <div className="barre-autres b2"></div>
                    <div className="barre-grises-autres"></div>
                </div>
                <div className="range-autres">
                    <p className="label-autres">MySQL</p>
                    <p className="number-autres">70%</p>
                    <div className="barre-autres b3"></div>
                    <div className="barre-grises-autres"></div>
                </div>

                <div className="range-autres">
                    <p className="label-autres">PostgreSQL</p>
                    <p className="number-autres">80%</p>
                    <div className="barre-autres b4"></div>
                    <div className="barre-grises-autres"></div>
                </div>
                <div className="range-autres">
                    <p className="label-autres">Agile</p>
                    <p className="number-autres">80%</p>
                    <div className="barre-autres b6"></div>
                    <div className="barre-grises-autres"></div>
                </div>
                <div className="range-autres">
                    <p className="label-autres">Cycle en V</p>
                    <p className="number-autres">80%</p>
                    <div className="barre-autres b6"></div>
                    <div className="barre-grises-autres"></div>
                </div>
                <div className="range-autres">
                    <p className="label-autres">Windows</p>
                    <p className="number-autres">70%</p>
                    <div className="barre-autres b5"></div>
                    <div className="barre-grises-autres"></div>
                </div>
                <div className="range-autres">
                    <p className="label-autres">Linux</p>
                    <p className="number-autres">80%</p>
                    <div className="barre-autres b6"></div>
                    <div className="barre-grises-autres"></div>
                </div>
            </div>
        </section>
    )
}
