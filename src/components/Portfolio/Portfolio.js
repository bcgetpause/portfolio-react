import React, { useEffect, useState } from 'react'
import './Portfolio.scss'
import ScrollMagic from "scrollmagic";
import {  TimelineMax } from "gsap"; // Also works with TweenLite and TimelineLite

export default function Portfolio() {

    const [controller] = useState(new ScrollMagic.Controller());

    useEffect(() => {
        const portfolioContainer = document.querySelector('.portfolio')
        const titrePortfolio = document.querySelector('.titre-port')
        const itemPortfolio = document.querySelectorAll('.vague1')

        const tlPortfolio = new TimelineMax();

        tlPortfolio
            .from(titrePortfolio, { y: -50, opacity: 0, duration: 0.5 })
            .staggerFrom(itemPortfolio, 1, { opacity: 0 }, 0.2, '-=0.5')

        new ScrollMagic.Scene({
            triggerElement: portfolioContainer,
            triggerHook: 0.5,
            reverse: true,
            duration: 250
        })
            .setTween(tlPortfolio)
            .addTo(controller)


        // Vague 2 

        const itemPortfolio2 = document.querySelectorAll('.vague2')

        const tlPortfolio2 = new TimelineMax();

        tlPortfolio2
            .staggerFrom(itemPortfolio2, 1, { opacity: 0 }, 0.2, '-=0.5')

        new ScrollMagic.Scene({
            triggerElement: itemPortfolio,
            triggerHook: 0.2,
            reverse: true,
            duration: 250
        })
            .setTween(tlPortfolio2)
            .addTo(controller)


        // Vague 3

        const itemPortfolio3 = document.querySelectorAll('.vague3')

        const tlPortfolio3 = new TimelineMax();

        tlPortfolio3
            .staggerFrom(itemPortfolio3, 1, { opacity: 0 }, 0.2, '-=0.5')

        new ScrollMagic.Scene({
            triggerElement: itemPortfolio2,
            triggerHook: 0.2,
            reverse: true,
            duration: 250
        })
            .setTween(tlPortfolio3)
            .addTo(controller)
            // eslint-disable-next-line
    }, [])

    return (
        <section className="portfolio" id="port">
            <h2 className="titre-port">Mon Portfolio</h2>
            <div className="cont-portfolio">
                <div className="item vague1">
                    <div className="cont-img-port">
                        <img src="ressources/bootstrap.jpg" alt="img portfolio" />
                    </div>
                    <h3>Mon fabuleux projet</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolore?</p>
                    <a href="https://codepen.io/your-work" className="btn-projets">Découvrez le projet</a>
                </div>

                <div className="item vague1">
                    <div className="cont-img-port">
                        <img src="ressources/console.jpg" alt="img portfolio" />
                    </div>
                    <h3>Mon fabuleux projet</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolore?</p>
                    <a href="https://codepen.io/your-work" className="btn-projets">Découvrez le projet</a>
                </div>

                <div className="item vague1">
                    <div className="cont-img-port">
                        <img src="ressources/animcss.jpg" alt="img portfolio" />
                    </div>
                    <h3>Mon fabuleux projet</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolore?</p>
                    <a href="https://codepen.io/your-work" className="btn-projets">Découvrez le projet</a>
                </div>


                <div className="item vague2">
                    <div className="cont-img-port">
                        <img src="ressources/bootstrapsite.jpg" alt="img portfolio" />
                    </div>
                    <h3>Mon fabuleux projet</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolore?</p>
                    <a href="https://codepen.io/your-work" className="btn-projets">Découvrez le projet</a>
                </div>


                <div className="item vague2">
                    <div className="cont-img-port">
                        <img src="ressources/flex.jpg" alt="img portfolio" />
                    </div>
                    <h3>Mon fabuleux projet</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolore?</p>
                    <a href="https://codepen.io/your-work" className="btn-projets">Découvrez le projet</a>
                </div>


                <div className="item vague2">
                    <div className="cont-img-port">
                        <img src="ressources/d3.jpg" alt="img portfolio" />
                    </div>
                    <h3>Mon fabuleux projet</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolore?</p>
                    <a href="https://codepen.io/your-work" className="btn-projets">Découvrez le projet</a>
                </div>


                <div className="item vague3">
                    <div className="cont-img-port">
                        <img src="ressources/Menus.jpg" alt="img portfolio" />
                    </div>
                    <h3>Mon fabuleux projet</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolore?</p>
                    <a href="https://codepen.io/your-work" className="btn-projets">Découvrez le projet</a>
                </div>


                <div className="item vague3">
                    <div className="cont-img-port">
                        <img src="ressources/projetsCars.jpg" alt="img portfolio" />
                    </div>
                    <h3>Mon fabuleux projet</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolore?</p>
                    <a href="https://codepen.io/your-work" className="btn-projets">Découvrez le projet</a>
                </div>
                <div className="item vague3">
                    <div className="cont-img-port">
                        <img src="ressources/form.jpg" alt="img portfolio" />
                    </div>
                    <h3>Mon fabuleux projet</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolore?</p>
                    <a href="https://codepen.io/your-work" className="btn-projets">Découvrez le projet</a>
                </div>
            </div>
        </section>
    )
}
