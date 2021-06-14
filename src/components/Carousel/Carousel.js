import React, { useState, useEffect } from 'react'
import './Carousel.scss'
import { useSwipeable } from 'react-swipeable'
import flecheGauche from '../../ressources/chevron-left.svg'
import flecheDroite from '../../ressources/chevron-right.svg'
import { TimelineMax } from "gsap"; // Also works with TweenLite and TimelineLite

export const CarouselItem = ({ children, width, id }) => {
    return (
        <div id={id} className="carousel-item" style={{ width: width }}>{children}</div>
    )
}

export default function Carousel({ children, titre }) {
    const [activeIndex, setActiveIndex] = useState(0);

    // Methode pour redimensioner correctement la div pour afficher les indicateurs juste en dessous
    useEffect(() => {
        const elt = children[0]
        const inner = document.querySelector('.inner');
        inner.style.height = document.querySelector('#' + elt.props.id).offsetHeight + "px";
    // eslint-disable-next-line
    }, [])

    // Animation du titre
    useEffect(() => {
        const sectionComp = document.querySelector('.carousel');
        const titreComp = document.querySelector('.titre-exp');

        const tlCompetences = new TimelineMax({
            scrollTrigger: {
                trigger: sectionComp,
                start: "top center", // when the top of the trigger hits the top of the viewport
                toggleActions: "play none none reverse"
            }
        });

        tlCompetences
            .from(titreComp, { opacity: 0, duration: 0.3 })

        // eslint-disable-next-line
    }, [])

    const handlers = useSwipeable({
        onSwipedLeft: () => updateIndex(activeIndex + 1),
        onSwipedRight: () => updateIndex(activeIndex - 1),
        preventDefaultTouchmoveEvent: true,
        trackMouse: true
    })

    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = React.Children.count(children) - 1;
        } else if (newIndex >= React.Children.count(children)) {
            newIndex = 0;
        }
        const elt = children[newIndex]
        const inner = document.querySelector('.inner');
        inner.style.height = (document.querySelector('#' + elt.props.id).offsetHeight + 10) + "px";
        setActiveIndex(newIndex);
    }

    return (
        <div {...handlers} className="carousel">
            <h2 className="titre-exp">{titre}</h2>
            <div className="inner" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                {React.Children.map(children, (child, index) => {
                    return React.cloneElement(child, { width: "100%" });
                })}
            </div>
            <div onClick={() => { updateIndex(activeIndex - 1) }} className="indicators-prev">
                <img src={flecheGauche} alt="logo fleche gauche" className="logo-btn-rond-prev" />
            </div>
            <div className="indicators">
                {React.Children.map(children, (child, index) => {
                    return (
                        <button className={`nav-carousel ${index === activeIndex ? "active" : ""}`}
                            onClick={() => { updateIndex(index) }}></button>
                    );
                })}
            </div>
            <div onClick={() => { updateIndex(activeIndex + 1) }} className="indicators-next">
                <img src={flecheDroite} alt="logo fleche droite" className="logo-btn-rond-next" />
            </div>
        </div>
    )
}
