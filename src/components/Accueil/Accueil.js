import React, { useEffect } from 'react'
import './Accueil.scss'
import Typewriter from 'typewriter-effect';
import gsap from "gsap"; // Also works with TweenLite and TimelineLite

export default function Accueil() {

    // Gestion du ScrollMagic + GSAP
    useEffect(() => {
        const navbar = document.querySelector('.nav-gauche');
        const titre = document.querySelector('h1');
        const btn = document.querySelectorAll('.btn-acc')
        const btnMedias = document.querySelectorAll('.media')
        const btnRondAccueil = document.querySelector('.btn-rond')

        const TL1 = gsap.timeline({ paused: true });
        TL1
            .to(navbar, { left: '0px', ease: "power3.easeOut", duration: 0.6 })
            .from(titre, { y: -50, opacity: 0, ease: "power3.easeOut", duration: 0.4 })
            .staggerFrom(btn, 1, { opacity: 0 }, 0.2, '-=0.30')
            .staggerFrom(btnMedias, 1, { opacity: 0 }, 0.2, '-=0.75')
            .from(btnRondAccueil, { y: -50, opacity: 0, ease: "power3.easeOut", duration: 0.4 }, '-=1')

        window.addEventListener('load', () => {
            TL1.play();
        })
    }, [])

    return (
        <section className="accueil" id="accueil">
            <h1>Bienvenue sur mon portfolio</h1>
            <Typewriter
                options={{
                    wrapperClassName: "txt-animation",
                    cursorClassName: "cursor-animation"
                }}
                onInit={(typewriter) => {
                    typewriter.pauseFor(1500)
                        .changeDelay(20)
                        .typeString('Moi c\'est Stefan Llobera')
                        .pauseFor(300)
                        .typeString('<strong>, Développeur Full-Stack</strong> !')
                        .pauseFor(1000)
                        .deleteChars(13)
                        .typeString('<span style="color: #27ae60;"> CSS</span> !')
                        .pauseFor(1000)
                        .deleteChars(5)
                        .typeString('<span style="color: #EA39ff;"> Spring Boot</span> !')
                        .pauseFor(1000)
                        .deleteChars(14)
                        .typeString('<span style="color: midnightblue;"> React</span> !')
                        .pauseFor(1000)
                        .deleteChars(8)
                        .typeString('<span style="color: red;"> Angular</span> !')
                        .pauseFor(1000)
                        .deleteChars(10)
                        .typeString('<span style="color: #ff6910;"> JavaScript</span> !')
                        .start();
                }}
            />
            <a href="#port" className="btn-acc btn-acc1">Portfolio</a>
            <a href="#range" className="btn-acc btn-acc2">Expériences</a>

            <div className="medias">
                
                <a href="https://www.linkedin.com/in/stefan-llobera-2192ab178/" target="blank">
                    <div className="media media2">
                        <img src="portfolio-react/ressources/linkedin.svg" alt="linkedin icone" className="icone-medias" />
                    </div>
                </a>

                <a href="https://github.com/bcgetpause" target="blank">
                    <div className="media media1">
                        <img src="portfolio-react/ressources/github.svg" alt="github icone" className="icone-medias" />
                    </div>
                </a>
                
                <a href="https://codepen.io/bcgetpause" target="blank">
                    <div className="media media2">
                        <img src="portfolio-react/ressources/codepen.svg" alt="codepen icone" className="icone-medias" />
                    </div>
                </a>
            </div>

            <a href="#pres">
                <div className="btn-rond">
                    <img src="portfolio-react/ressources/arrowDown.svg" alt="logo fleche bas" className="logo-btn-rond-acc" />
                </div>
            </a>
        </section>
    )
}
