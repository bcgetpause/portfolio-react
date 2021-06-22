import React from 'react'
import './Range.scss'
import Carousel, { CarouselItem } from '../generics/Carousel/Carousel';
import Langages from './Langages/Langages';
import Frameworks from './Frameworks/Frameworks'
import Logiciels from './Logiciels/Logiciels';
import Autres from './Autres/Autres';


export default function Range() {



    return (
        <section id="range">
            <Carousel titre="Compétences">
                <CarouselItem id="lang">
                    <Langages></Langages>
                </CarouselItem>
                <CarouselItem id="frm">
                    <Frameworks></Frameworks>
                </CarouselItem>
                <CarouselItem id="log">
                    <Logiciels></Logiciels>
                </CarouselItem>
                <CarouselItem id="oth">
                    <Autres></Autres>
                </CarouselItem>
            </Carousel>
        </section>
    )
}
