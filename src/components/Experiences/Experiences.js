import React, {useEffect} from 'react'
import './Experiences.scss'
import google from '../../ressources/google.svg'
import instagram from '../../ressources/instagram.svg'
import amazon from '../../ressources/amazon.svg'
import apple from '../../ressources/apple.svg'
import plane from '../../ressources/plane.svg'
import gsap from "gsap";

export default function Experiences() {

    useEffect(() => {
        const tl = gsap.timeline({
            // yes, we can add it to an entire timeline!
            scrollTrigger: {
                trigger: ".travail-exp",
                start: "top center", // when the top of the trigger hits the top of the viewport
            }
        });
        // add animations and labels to the timeline
        tl.from(".travail-exp", {opacity: 0});
    }, [])

    return (
        <section className="travail-exp" id="exp">
            <h2 className="titre-travail-exp">Mes expériences</h2>
            <div className="cont-exp-travail">
                <div className="barre-verticale">
                    <div className="boule-ico">
                        <img src={google} alt="icone gauche" />
                    </div>
                    <div className="boule-ico">
                        <img src={instagram} alt="icone gauche" />
                    </div>
                    <div className="boule-ico">
                        <img src={amazon} alt="icone gauche" />
                    </div>
                    <div className="boule-ico">
                        <img src={apple} alt="icone gauche" />
                    </div>
                    <div className="boule-ico">
                        <img src={plane} className="avion" alt="icone gauche" />
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
