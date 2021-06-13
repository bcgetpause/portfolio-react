import React, { useEffect } from 'react'
import './Langages.scss'
import { TimelineMax } from "gsap"; // Also works with TweenLite and TimelineLite

export default function Langages() {

    useEffect(() => {
        const sectionComp = document.querySelector('.section-langage');
        const titreComp = document.querySelector('.titre-langage');
        const allLabel = document.querySelectorAll('.label-langage')
        const allPourcent = document.querySelectorAll('.number-langage')
        const allBarres = document.querySelectorAll('.barre-langage')
        const allShadowBarres = document.querySelectorAll('.barre-grises-langage')

        const tlCompetences = new TimelineMax({
            scrollTrigger: {
                trigger: sectionComp,
                start: "top center", // when the top of the trigger hits the top of the viewport
                toggleActions: "play none none reverse"
            }
        });

        tlCompetences
            .from(titreComp, { opacity: 0, duration: 0.6 })
            .staggerFrom(allLabel, 0.5, { y: -50, opacity: 0 }, 0.1, '-=0.5')
            .staggerFrom(allPourcent, 0.5, { y: -10, opacity: 0 }, 0.1, '-=1')
            .staggerFrom(allShadowBarres, 0.5, { width: 0 }, 0.1, '-=1')
            .staggerFrom(allBarres, 0.5, { width: 0 }, 0.1, '-=0.5')

        // eslint-disable-next-line
    }, [])


    return (
        <section className="section-langage" >
            <h3 className="titre-langage">Langages</h3>
            <div className="grille-langages">
                <div className="range-langages">
                    <p className="label-langage">Java</p>
                    <p className="number-langage">90%</p>
                    <div className="barre-langage b1"></div>
                    <div className="barre-grises-langage"></div>
                </div>
                <div className="range-langages">
                    <p className="label-langage">TypeScript</p>
                    <p className="number-langage">75%</p>
                    <div className="barre-langage b2"></div>
                    <div className="barre-grises-langage"></div>
                </div>
                <div className="range-langages">
                    <p className="label-langage">HTML</p>
                    <p className="number-langage">70%</p>
                    <div className="barre-langage b3"></div>
                    <div className="barre-grises-langage"></div>
                </div>

                <div className="range-langages">
                    <p className="label-langage">CSS</p>
                    <p className="number-langage">80%</p>
                    <div className="barre-langage b4"></div>
                    <div className="barre-grises-langage"></div>
                </div>
                <div className="range-langages">
                    <p className="label-langage">Javascript</p>
                    <p className="number-langage">70%</p>
                    <div className="barre-langage b5"></div>
                    <div className="barre-grises-langage"></div>
                </div>
                <div className="range-langages">
                    <p className="label-langage">PhP</p>
                    <p className="number-langage">80%</p>
                    <div className="barre-langage b6"></div>
                    <div className="barre-grises-langage"></div>
                </div>
            </div>
        </section>
    )
}
