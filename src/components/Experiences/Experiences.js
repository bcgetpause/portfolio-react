import React from 'react'
import './Experiences.scss'

export default function Experiences() {
    return (
        <section className="travail-exp" id="exp">
            <h2 className="titre-travail-exp">Mes expériences</h2>
            <div className="cont-exp-travail">
                <div className="barre-verticale">
                    <div className="boule-ico">
                        <img src="ressources/google.svg" alt="icone gauche" />
                    </div>
                    <div className="boule-ico">
                        <img src="ressources/instagram.svg" alt="icone gauche" />
                    </div>
                    <div className="boule-ico">
                        <img src="ressources/amazon.svg" alt="icone gauche" />
                    </div>
                    <div className="boule-ico">
                        <img src="ressources/apple.svg" alt="icone gauche" />
                    </div>
                    <div className="boule-ico">
                        <img src="ressources/plane.svg" className="avion" alt="icone gauche" />
                    </div>
                </div>

                <div className="flex-cont-bloc-exp">
                    <div className="bloc bloc1">
                        <div className="contenu-bloc">
                            <p className="titre-section-bloc">Google, 2019</p>
                            <p className="txt-section">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In perferendis dignissimos doloribus quaerat corrupti facere ratione modi vel. Voluptatem minima facilis eaque eum quia voluptatibus dolorem minus incidunt repellendus culpa?</p>
                        </div>
                    </div>

                    <div className="bloc bloc2">
                        <div className="contenu-bloc">
                            <p className="titre-section-bloc">Instagram, 2017-2018</p>
                            <p className="txt-section">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, vel ipsam nulla aliquid quae beatae ut et cum libero molestiae?</p>
                        </div>
                    </div>

                    <div className="bloc bloc3">
                        <div className="contenu-bloc">
                            <p className="titre-section-bloc">Amazon, 2015-2016</p>
                            <p className="txt-section">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, vel ipsam nulla aliquid quae beatae ut et cum libero molestiae?</p>
                        </div>
                    </div>

                    <div className="bloc bloc4">
                        <div className="contenu-bloc">
                            <p className="titre-section-bloc">Apple, 2012-2014</p>
                            <p className="txt-section">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, vel ipsam nulla aliquid quae beatae ut et cum libero molestiae?</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
