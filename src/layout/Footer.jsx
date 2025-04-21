import React from 'react'
import { Button } from '../components/Button';
import "../styles/footer.scss";

export const Footer = () => {
    return (
        <div className="footer">
            <div className="footer_company">
                <div className="footer_company-name">
                    <span className='letter'>W</span>eb <span className='letter'>D</span>esign <span className='letter'>S</span>olution
                </div>
                <div className="footer_pages">
                    <div className="footer_pages-item">About</div>
                    <div className="footer_pages-item">Service</div>
                    <div className="footer_pages-item">Tech-stack</div>
                    <div className="footer_pages-item">Contact</div>
                </div>
                <div className="footer_connect">
                    <Button text="Contact us"/> 
                </div>
            </div>
        </div>
    )
}
