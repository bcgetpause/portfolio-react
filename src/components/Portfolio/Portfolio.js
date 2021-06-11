import React, { useEffect } from 'react'
import './Portfolio.scss'
import {  TimelineMax } from "gsap"; // Also works with TweenLite and TimelineLite

export default function Portfolio() {


    useEffect(() => {
        const portfolioContainer = document.querySelector('.portfolio')
        const titrePortfolio = document.querySelector('.titre-port')
        const itemPortfolio = document.querySelectorAll('.vague1')

        const tlPortfolio = new TimelineMax({
            scrollTrigger: {
                trigger: ".portfolio",
                start: "top center", // when the top of the trigger hits the top of the viewport
                toggleActions: "play none none reverse"
            }
        });

        tlPortfolio
            .from(titrePortfolio, { y: -50, opacity: 0, duration: 0.5 })
            .staggerFrom(itemPortfolio, 1, { opacity: 0 }, 0.2, '-=0.5')

        // Vague 2 

        const itemPortfolio2 = document.querySelectorAll('.vague2')

        const tlPortfolio2 = new TimelineMax({
            scrollTrigger: {
                markers: false,
                trigger: itemPortfolio,
                start: "top center", // when the top of the trigger hits the top of the viewport
            }
        });

        tlPortfolio2
            .staggerFrom(itemPortfolio2, 1, { opacity: 0 }, 0.2, '-=0.5')

        // Vague 3

        const itemPortfolio3 = document.querySelectorAll('.vague3')

        const tlPortfolio3 = new TimelineMax({
            scrollTrigger: {
                markers: false,
                trigger: itemPortfolio2,
                start: "top center", // when the top of the trigger hits the top of the viewport
            }
        });

        tlPortfolio3
            .staggerFrom(itemPortfolio3, 1, { opacity: 0 }, 0.2, '-=0.5')
            // eslint-disable-next-line
    }, [])

    return (
        <section className="portfolio" id="port">
            <h2 className="titre-port">Mon Portfolio</h2>
            <div className="cont-portfolio">
                <div className="item vague1">
                    <div className="cont-img-port">
                        <img src="portfolio-react/ressources/bootstrap.jpg" alt="img portfolio" />
                    </div>
                    <h3>Mon fabuleux projet</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolore?</p>
                    <a href="https://codepen.io/your-work" className="btn-projets">Découvrez le projet</a>
                </div>

                <div className="item vague1">
                    <div className="cont-img-port">
                        <img src="portfolio-react/ressources/console.jpg" alt="img portfolio" />
                    </div>
                    <h3>Mon fabuleux projet</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolore?</p>
                    <a href="https://codepen.io/your-work" className="btn-projets">Découvrez le projet</a>
                </div>

                <div className="item vague1">
                    <div className="cont-img-port">
                        <img src="portfolio-react/ressources/animcss.jpg" alt="img portfolio" />
                    </div>
                    <h3>Mon fabuleux projet</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolore?</p>
                    <a href="https://codepen.io/your-work" className="btn-projets">Découvrez le projet</a>
                </div>


                <div className="item vague2">
                    <div className="cont-img-port">
                        <img src="portfolio-react/ressources/bootstrapsite.jpg" alt="img portfolio" />
                    </div>
                    <h3>Mon fabuleux projet</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolore?</p>
                    <a href="https://codepen.io/your-work" className="btn-projets">Découvrez le projet</a>
                </div>


                <div className="item vague2">
                    <div className="cont-img-port">
                        <img src="portfolio-react/ressources/flex.jpg" alt="img portfolio" />
                    </div>
                    <h3>Mon fabuleux projet</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolore?</p>
                    <a href="https://codepen.io/your-work" className="btn-projets">Découvrez le projet</a>
                </div>


                <div className="item vague2">
                    <div className="cont-img-port">
                        <img src="portfolio-react/ressources/d3.jpg" alt="img portfolio" />
                    </div>
                    <h3>Mon fabuleux projet</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolore?</p>
                    <a href="https://codepen.io/your-work" className="btn-projets">Découvrez le projet</a>
                </div>


                <div className="item vague3">
                    <div className="cont-img-port">
                        <img src="portfolio-react/ressources/Menus.jpg" alt="img portfolio" />
                    </div>
                    <h3>Mon fabuleux projet</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolore?</p>
                    <a href="https://codepen.io/your-work" className="btn-projets">Découvrez le projet</a>
                </div>


                <div className="item vague3">
                    <div className="cont-img-port">
                        <img src="portfolio-react/ressources/projetsCars.jpg" alt="img portfolio" />
                    </div>
                    <h3>Mon fabuleux projet</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolore?</p>
                    <a href="https://codepen.io/your-work" className="btn-projets">Découvrez le projet</a>
                </div>
                <div className="item vague3">
                    <div className="cont-img-port">
                        <img src="portfolio-react/ressources/form.jpg" alt="img portfolio" />
                    </div>
                    <h3>Mon fabuleux projet</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolore?</p>
                    <a href="https://codepen.io/your-work" className="btn-projets">Découvrez le projet</a>
                </div>
            </div>
        </section>
    )
}
