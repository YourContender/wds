import React from 'react';
import { Slider } from '../components/Slider';
import "../styles/portfolio.scss";

export const Portfolio = () => {
    return (
        <div className="portfolio">
            <div className="portfolio_container">
                <div className="portfolio_container-title">
                    <h1><span className="current">Our</span> projects :</h1>
                </div>

                <Slider/>
            </div>
        </div>
    )
}
