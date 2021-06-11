import React, { useEffect } from 'react'
import './NavBar.scss'

export default function NavBar() {

    useEffect(() => {
        const btnMenu = document.querySelector('.btn-rond-menu')
        const nav = document.querySelector('.nav-gauche');
        const allItemNav = document.querySelectorAll('.nav-menu-item');
        const ligne = document.querySelector('.cont-ligne');

        btnMenu.addEventListener('click', () => {

            ligne.classList.toggle('active')
            nav.classList.toggle('menu-visible')

        })
        if (window.matchMedia('(max-width: 1300px)')) {
            allItemNav.forEach(item => {
                item.addEventListener('click', () => {
                    nav.classList.toggle('menu-visible')
                    ligne.classList.toggle('active');
                })
            })
        }
    }, [])

    return (
        <>
            <div className="btn-rond-menu">
                <div className="cont-ligne">
                    <div className="ligne-unique"></div>
                </div>
            </div>

            <nav className="nav-gauche">

                <div className="blocs-menu">
                    <div className="cercle-portrait">
                        <img src="portfolio-react/ressources/reborn-sawada.jpg" alt="portrait img" />
                    </div>
                </div>

                <div className="blocs-menu">
                    <span className="nav-menu-item">
                        <a href="#accueil">
                            Accueil
                </a>
                    </span>
                </div>
                <div className="blocs-menu">
                    <span className="nav-menu-item">
                        <a href="#pres">
                            Présentation
                </a>
                    </span>
                </div>
                <div className="blocs-menu">
                    <span className="nav-menu-item">
                        <a href="#port">
                            Portfolio
                </a>
                    </span>
                </div>
                <div className="blocs-menu">
                    <span className="nav-menu-item">
                        <a href="#range">
                            Compétences
                </a>
                    </span>
                </div>
                <div className="blocs-menu">
                    <span className="nav-menu-item">
                        <a href="#contact">
                            Contact
                </a>
                    </span>
                </div>

                <div className="blocs-menu">
                    <div className="logo-cercle">
                        <a href="#contact">
                            <img src="portfolio-react/ressources/contact.svg" alt="logo contact" />
                        </a>
                    </div>
                </div>
            </nav>
        </>
    )
}
