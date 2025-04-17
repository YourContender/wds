import React from 'react';
import "../styles/button.scss";

export const Button = ({ text, func }) => {
    return (
        <div className="button-universal" onClick={() => func()}>
            {text}
        </div>
    )
}