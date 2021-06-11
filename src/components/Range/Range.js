import React, { useEffect, useState } from 'react'
import './Range.scss'
import ScrollMagic from "scrollmagic";
import {  TimelineMax } from "gsap"; // Also works with TweenLite and TimelineLite


export default function Range() {

    
    const [controller] = useState(new ScrollMagic.Controller());

    
    useEffect(() => {
        const sectionComp = document.querySelector('.section-range');
        const titreComp = document.querySelector('.titre-exp');
        const allLabel = document.querySelectorAll('.label-skill')
        const allPourcent = document.querySelectorAll('.number-skill')
        const allBarres = document.querySelectorAll('.barre-skill')
        const allShadowBarres = document.querySelectorAll('.barre-grises')

        const tlCompetences = new TimelineMax();

        tlCompetences
            .from(titreComp, { opacity: 0, duration: 0.6 })
            .staggerFrom(allLabel, 0.5, { y: -50, opacity: 0 }, 0.1, '-=0.5')
            .staggerFrom(allPourcent, 0.5, { y: -10, opacity: 0 }, 0.1, '-=1')
            .staggerFrom(allShadowBarres, 0.5, { width: 0 }, 0.1, '-=1')
            .staggerFrom(allBarres, 0.5, { width: 0 }, 0.1, '-=0.5')

        new ScrollMagic.Scene({
            triggerElement: sectionComp,
            reverse: true
        })
            .setTween(tlCompetences)
            .addTo(controller);
            // eslint-disable-next-line
    }, [])

    return (
        <section className="section-range" id="range">
            <h2 className="titre-exp">Mes compétences</h2>
            <div className="grille-skill">
                <div className="range-cont">
                    <p className="label-skill">JavaScript</p>
                    <p className="number-skill">90%</p>
                    <div className="barre-skill b1"></div>
                    <div className="barre-grises"></div>
                </div>
                <div className="range-cont">
                    <p className="label-skill">SEO</p>
                    <p className="number-skill">75%</p>
                    <div className="barre-skill b2"></div>
                    <div className="barre-grises"></div>
                </div>
                <div className="range-cont">
                    <p className="label-skill">UI / UX</p>
                    <p className="number-skill">70%</p>
                    <div className="barre-skill b3"></div>
                    <div className="barre-grises"></div>
                </div>

                <div className="range-cont">
                    <p className="label-skill">Node JS</p>
                    <p className="number-skill">80%</p>
                    <div className="barre-skill b4"></div>
                    <div className="barre-grises"></div>
                </div>
                <div className="range-cont">
                    <p className="label-skill">Wordpress</p>
                    <p className="number-skill">70%</p>
                    <div className="barre-skill b5"></div>
                    <div className="barre-grises"></div>
                </div>
                <div className="range-cont">
                    <p className="label-skill">React JS</p>
                    <p className="number-skill">80%</p>
                    <div className="barre-skill b6"></div>
                    <div className="barre-grises"></div>
                </div>
            </div>
        </section>
    )
}
