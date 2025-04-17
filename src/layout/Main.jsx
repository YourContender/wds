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
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta qui ut eveniet maiores consequuntur et, 
                        porro modi ea deserunt suscipit. Quia molestiae velit sint cum doloremque sed. Cum, assumenda accusamus!
                        Aliquid odit ipsam fugiat facere labore repellat
                    </span>
                    <Button text="more details"/>
                </div>
                
            </div>
        </section>
    )
}
