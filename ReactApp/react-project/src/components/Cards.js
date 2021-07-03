import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
//to change
function Cards() {
    return (
        <div className="cards">
            <h1>Choose the best NINJA for your mission!</h1>
            <div className="cards__conatiner">
                <div className="cards__wrapper">
                <ul className="cards__items">
                   <CardItem
                       src= {require('../images/img-1.jpg').default}
                       text= 'Hi, my name is Hunter and sneak attacks are my favorite combat technique!'
                       label='Hunter'
                       path='/services'
                       name ='Strength: Mediocre'
                       name2 ='Dexterity: High'
                       name3 ='Intimidation: Very Low'
                       name4 ='Intelligence: High'
                       name5 ='Wisdom: Low'
                       name6 ='Athletics: High'
                       name7 ='Stealth: Very High'
                    />
                    <CardItem
                       src= {require('../images/img-2.jpg').default}
                       text= 'Hi, my name is Loki and I love learning new ninjutsu techniques!'
                       label='Loki'
                       path='/services'
                       name ='Strength: Extremely High'
                       name2 ='Dexterity: Mediocre'
                       name3 ='Intimidation: High'
                       name4 ='Intelligence: Mediocre'
                       name5 ='Wisdom: Low'
                       name6 ='Athletics: High'
                       name7 ='Stealth: High'
                    />
                    <CardItem
                       src= {require('../images/img-3.jpg').default}
                       text= 'Hi, my name is Stripes and I am a kickboxing enthusiast!'
                       label='Stripes'
                       path='/services'
                       name ='Strength: Mediocre'
                       name2 ='Dexterity: High'
                       name3 ='Intimidation: Mediocre'
                       name4 ='Intelligence: High'
                       name5 ='Wisdom: Low'
                       name6 ='Athletics: High'
                       name7 ='Stealth: High'
                    />
                    </ul>
                    <ul className="cards__items">
                    <CardItem
                       src= {require('../images/img-4.jpg').default}
                       text= 'Hello there, my name is Houdini and I bet you cannot find me in this picture!'
                       label='Houdini'
                       path='/services'
                       name ='Strength: Mediocre'
                       name2 ='Dexterity: Very High'
                       name3 ='Intimidation: Low'
                       name4 ='Intelligence: High'
                       name5 ='Wisdom: Low'
                       name6 ='Athletics: High'
                       name7 ='Stealth: Extremely High'
                    />
                    <CardItem
                       src= {require('../images/img-8.jpg').default}
                       text= 'Hi, my name is King and I am obsesssed with stealing food!'
                       label='King'
                       path='/services'
                       name ='Strength: High'
                       name2 ='Dexterity: High'
                       name3 ='Intimidation: Mediocre'
                       name4 ='Intelligence: High'
                       name5 ='Wisdom: High'
                       name6 ='Athletics: Mediocre'
                       name7 ='Stealth: Very High'
                    />
                    <CardItem
                       src= {require('../images/img-5.jpg').default}
                       text= 'Hello, my name is Sahara and I am an expert at high jumping!'
                       label='Sahara'
                       path='/services'
                       name ='Strength: High'
                       name2 ='Dexterity: High'
                       name3 ='Intimidation: High'
                       name4 ='Intelligence Mediocre'
                       name5 ='Wisdom: Low'
                       name6 ='Athletics: Very High'
                       name7 ='Stealth: High'
                    />
                </ul>
                </div>
            </div> 
        </div>
    )
}

export default Cards
