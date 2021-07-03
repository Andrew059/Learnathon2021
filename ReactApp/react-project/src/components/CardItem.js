import React from 'react'
import { Link } from 'react-router-dom'

function CardItem(props) {
    return (
        <div>
            <li className="cards__items">
                <Link className="cards__item__link" to={props.path}>
                    <figure className="cards__item__pic-wrap" data-category={props.label}>
                        <img 
                        src={props.src} 
                        alt="Ninja Cat Image"
                        className="cards__item__img"
                        />
                    </figure>
                    <div className="cards__item__info">
                        <h5 className="cards__item__text">{props.text}</h5>
                    </div>
                    <div>
                        <ul className="cards__item__name">
                            <li>{props.name}</li>
                            <li>{props.name2}</li>
                            <li>{props.name3}</li>
                            <li>{props.name4}</li>
                        </ul>
                        <ul className="cards__item__name">
                            <li>{props.name5}</li>
                            <li>{props.name6}</li>
                            <li>{props.name7}</li>
                        </ul>
                    </div>
                </Link>
            </li>
        </div>
    )
}

export default CardItem