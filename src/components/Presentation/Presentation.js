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
            <h2 className="titre-pres">Lorem ipsum dolor sit amet.</h2>
            <div className="container-presentation">
                <div className="fond-forme"></div>
                <div className="pres-gauche">
                    <h3>Laborum cumque aliquid ut pariatur, natus maxime.</h3>
                    <hr />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit dignissimos quisquam rerum aliquam quasi vitae nisi expedita debitis cupiditate asperiores optio eveniet labore, vel beatae!</p>
                    <br />
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi facere illum ullam exercitationem praesentium veniam?
                    </p>
                </div>
                <div className="pres-droite">
                    <ul className="liste-presentation">
                        <li className="item-liste i1">
                            <span className="chiffre-style">1.</span>
                            <p className="txt-liste">UX Design expert</p>
                        </li>
                        <li className="item-liste i2">
                            <span className="chiffre-style">2.</span>
                            <p className="txt-liste">Spécialiste UI</p>
                        </li>
                        <li className="item-liste i3">
                            <span className="chiffre-style">3.</span>
                            <p className="txt-liste">Développeur Back-end</p>
                        </li>
                        <li className="item-liste i4">
                            <span className="chiffre-style">4.</span>
                            <p className="txt-liste">Développeur Front-End</p>
                        </li>
                        <li className="item-liste i5">
                            <span className="chiffre-style">5.</span>
                            <p className="txt-liste">Développeur Full-Stack</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
