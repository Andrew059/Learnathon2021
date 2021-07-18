import React from 'react'
import { Button } from './Button'
import '../App.css';
import './HeroSection.css'

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src='./videos/video-1.mp4' muted autoPlay loop />
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
