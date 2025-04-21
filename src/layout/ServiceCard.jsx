import React, { useState } from 'react';
import "../styles/services-card.scss";
import { Button } from '../components/Button';

export const ServiceCard = ({ number, title, descr, fullDescr }) => {
    const [flipped, setFlipped] = useState(false);

    const toggleFlip = () => setFlipped(!flipped);

    return (
        <div className={`card ${flipped ? "flipped" : ""}`}>
            <div className="card-inner">
                <div className="card-front">
                    <h1 className="card-front-number">{number}</h1>
                    <h2>{title}</h2>
                    <span>{descr}</span>
                    {/* <Button text="more details" func={toggleFlip}/> */}
                </div>
                <div className="card-back">
                    <h2>{title}</h2>
                    <p>
                        {fullDescr}
                    </p>
                    <Button text="details"/>
                </div>
            </div>
        </div>
    )
}
