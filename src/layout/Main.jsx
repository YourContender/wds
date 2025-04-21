import React from 'react'
import globe from "../assets/images/globe1.jpg";
import "../styles/main.scss";
import { Button } from '../components/Button';

export const Main = () => {
    return (
        <section className="main">
            <div className="main_container">
                <div className="main_image">
                    <div className="main_image-scroll">
                        <img src={globe} alt="globe" />
                    </div>
                </div>
                
                <div className="main_titles">
                    {/* <h1>WDS - outsource</h1> */}
                    <div className="main_titles-name">
                        <span className='letter'>W</span>eb <span className='letter'>D</span>esign <span className='letter'>S</span>olution
                    </div>
                    <span>
                        We design and develop custom digital products and provide scalable tech teams for startups and enterprises.
                        We work fast, communicate clearly, and focus on delivering real value.
                    </span>
                    <Button text="Discuss your project"/>
                </div>
                
            </div>
        </section>
    )
}
