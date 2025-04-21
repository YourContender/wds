import React, { useState } from 'react';
import '../styles/why-us.scss';
import { itemsForAboutUs } from '../data/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';

const WhyUs = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleItem = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="why-us">
            <div className="why-us__container">
                <h2 className="why-us__title"><span className="current">Why</span> choose us?</h2>
                <div className="accordion">
                {itemsForAboutUs.map((item, index) => (
                    <div
                        className={`accordion__item ${activeIndex === index ? 'active' : ''}`}
                        key={index}
                    >
                        <button className="accordion__header" onClick={() => toggleItem(index)}>
                            <span className="accordion__title">
                                {item.title}
                            </span>
                            <span className="accordion__icon">
                                {
                                    activeIndex === index ? 
                                        <FontAwesomeIcon 
                                            className="preview__container-left-block-descr-points-item-check" 
                                            icon={faAngleUp} 
                                        /> : 
                                        <FontAwesomeIcon 
                                            className="preview__container-left-block-descr-points-item-check" 
                                            icon={faAngleDown} 
                                        />
                                }
                            </span>
                        </button>
                        <div className="accordion__content">
                            <p>{item.content}</p>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
