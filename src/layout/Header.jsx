import React from 'react';
import "../styles/header.scss";
import { Button } from '../components/Button';

export const Header = () => {
    return (
        <header className="header">
            <div className="header_container">
                <div className="header_logo">wds</div>
                <div className="header_points">
                    <div className="header_points-item">About</div>
                    <div className="header_points-item">Service</div>
                    <div className="header_points-item">Tech stack</div>
                    <div className="header_points-item">Contact</div>
                </div>
                <div className="header_btn">
                    <Button text="sign in"/>
                </div>
            </div>
        </header>
    )
}
