import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@material-ui/core'
import bild1 from '../bilder/Bus.jpg'
import bild2 from '../bilder/Hotel.jpg'
import bild3 from '../bilder/Bahn.jpg'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './Diashow.css'

const bilder = [
    bild1, bild2, bild3
]

export default function Diashow() {
    return (
        <div className="slide-container">
            <Slide className="Slide">
                <div className="each-slide">
                    <img src={bilder[0]} width="100%"/>
                    {/* <div style={{'backgroundImage': `url(${bilder[0]})`}}>
                    <span>Slide 1</span>
                    </div> */}
                </div>
                <div className="each-slide">
                    <img src={bilder[1]} width="100%" />
                    {/* <div style={{'backgroundImage': `url(${bilder[1]})`}}>
                    <span>Slide 2</span>
                    </div> */}
                </div>
                <div className="each-slide">
                    <img src={bilder[2]} width="100%"/>

                </div>
            </Slide>
        </div>
    )
} 