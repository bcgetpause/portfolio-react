import React, { useEffect } from 'react'
import './Presentation.scss'
import { TimelineMax } from "gsap"; // Also works with TweenLite and TimelineLite

export default function Presentation() {

    useEffect(() => {
        const presentationContainer = document.querySelector('.presentation')
        const titrePres = document.querySelector('.titre-pres');
        const presGauche = document.querySelector('.pres-gauche')
        const listePres = document.querySelectorAll('.item-liste')

        const tlpres = new TimelineMax({
            scrollTrigger: {
                trigger: presentationContainer,
                start: "top center", // when the top of the trigger hits the center of the viewport
            }
        });

        tlpres
            .from(titrePres, { y: -200, opacity: 0, duration: 0.6 })
            .from(presGauche, { y: -20, opacity: 0, duration: 0.6 }, '-=0.5')
            .staggerFrom(listePres, 1, { opacity: 0 }, 0.2, '-=0.5')
        // eslint-disable-next-line
    }, [])

    return (
        <section className="presentation" id="pres">
            <h2 className="titre-pres">Parcours personnel</h2>
            <div className="container-presentation">
                <div className="fond-forme"></div>
                <div className="pres-gauche">
                    <h3>Cursus scolaire</h3>
                    <hr />
                    <ul className="liste-presentation">
                        <li className="item-liste i1">
                            <span className="chiffre-style">1. </span>
                            <p className="txt-liste">
                                Licence et Master
                            </p>
                            <div className="ntie-hover">
                                <p className="txt-liste">&nbsp;NTIE&nbsp;</p>
                                <span className="ntie-tooltip">Nouvelles Technologies Informatiques pour l'Entreprise</span>
                            </div>
                            <p className="txt-liste">en alternance (2007-2010)</p>
                        </li>
                        <li className="item-liste i2">
                            <span className="chiffre-style">2. </span>
                            <p className="txt-liste">DUT Informatique (2005-2007)</p>
                        </li>
                        <li className="item-liste i3">
                            <span className="chiffre-style">3. </span>
                            <p className="txt-liste">Baccalauréat scientifique (2004-2005)</p>
                        </li>
                    </ul>
                </div>
                <div className="pres-droite">
                    <h3>Formations</h3>
                    <hr />
                    <ul className="liste-presentation">
                        <li className="item-liste i1">
                            <span className="chiffre-style">1. </span>
                            <p className="txt-liste">Développement Front-End via la plateforme l'Ecole du Web (2020)</p>
                        </li>
                        <li className="item-liste i2">
                            <span className="chiffre-style">2. </span>
                            <p className="txt-liste">ReactJS via l'organisme Ib-formation (2020)</p>
                        </li>
                        <li className="item-liste i3">
                            <span className="chiffre-style">3. </span>
                            <p className="txt-liste">Docker/Kubernetes via l'organisme Themanis (2020)</p>
                        </li>
                        <li className="item-liste i4">
                            <span className="chiffre-style">4. </span>
                            <p className="txt-liste">Angular sur la plateforme Pluralsight (2019)</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
