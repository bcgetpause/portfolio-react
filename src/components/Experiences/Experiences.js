import React, { useEffect } from 'react';
import './Experiences.scss';
import gsap from "gsap";
import * as dataCV from '../Datas/DataExperience';
import { TimelineMax } from "gsap"; // Also works with TweenLite and TimelineLite



export default function Experiences() {

    useEffect(() => {

        const tlLine = new TimelineMax({
            scrollTrigger: {
                markers: true,
                trigger: ".flex-cont-bloc-exp",
                start: "top center", // when the top of the trigger hits the top of the viewport
                toggleActions: "play none none reverse"
            }
        });

        tlLine
            .staggerFrom(".flex-cont-bloc-exp", 0.6, {opacity: 0, duration: 0.2 })

        const tlBlocOdd = new TimelineMax({
            scrollTrigger: {
                markers: true,
                trigger: ".flex-cont-bloc-exp",
                start: "top center", // when the top of the trigger hits the top of the viewport
                toggleActions: "play none none reverse"
            }
        });

        tlBlocOdd
            .staggerFrom(".bloc-odd", 0.6, { x: "9999", opacity: 0, duration: 0.2 })

        const tlBlocEven = new TimelineMax({
            scrollTrigger: {
                markers: true,
                trigger: ".flex-cont-bloc-exp",
                start: "top center", // when the top of the trigger hits the top of the viewport
                toggleActions: "play none none reverse"
            }
        });

        tlBlocEven
            .staggerFrom(".bloc-even", 0.6, { x: "-9999", opacity: 0, duration: 0.2 });

    }, [])


    const expCard = dataCV.LST_EXPERIENCES.map((exp, index) => (
        <div className={index % 2 === 0 ? "bloc bloc-odd" : "bloc bloc-even"} key={index}>
            <div className="contenu-bloc">
                <div className="header-exp">
                    <img src={exp.logo} alt="linkedin icone" className="logo-exp" />
                    <p className="titre-section-bloc">{exp.date + ': ' + exp.client}</p>
                </div>
                <div>
                    <span className="txt-titre">Poste :</span>
                    <p>{exp.poste}</p>
                </div>
                <br />
                <div className="txt-section">
                    <span className="txt-titre">Résumé :</span>
                    {exp.resume}
                </div>
                {exp.descriptif !== '' &&
                    <>
                        <br />
                        <div className="txt-desc">
                            <span className="txt-titre">Descriptif :</span>
                            {exp.descriptif}
                        </div>
                    </>
                }
                <br />
                <div>
                    <span className="txt-titre">Environnement technique :</span>
                    <p>{exp.environnement}</p>
                </div>
            </div>
        </div>
    ));

    return (
        <section className="travail-exp" id="exp">
            <h2 className="titre-travail-exp">Mes expériences</h2>
            <div className="cont-exp-travail">
                <div className="flex-cont-bloc-exp">
                    {expCard}
                </div>
            </div>
        </section>
    )
}
