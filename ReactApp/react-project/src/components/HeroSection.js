import React from 'react'
import { Button } from './Button'
import '../App.css';
import './HeroSection.css'

function HeroSection() {
    return (
        <div className='hero-container'>
<<<<<<< HEAD
            <video src='./videos/video-1.mp4' muted autoPlay loop />
=======
            <video src='./videos/video-1.mp4' autoPlay loop />
>>>>>>> 87499b241f54b8a98f448b39f669976f1a2ce6e9
            <h1>THE NINJA CATS</h1> 
            <p>Are you ready to hire us for your next mission?</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline'
                buttonSize='btn--large'>GET STARTED</Button>
            </div>
        </div>
    )
}

export default HeroSection
