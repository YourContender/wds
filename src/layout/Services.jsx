import React from 'react';
import "../styles/services.scss";
import { ServiceCard } from './ServiceCard';
import { advantages } from '../data/data';

export const Services = () => {
    return (
        <section className="services">
            <div className="services_container">
                <div className="services_title">
                    <h1><span className="current">Our</span> services :</h1>
                </div>
                <div className="services_list">
                    {
                        advantages.map(item => {
                            return (
                                <ServiceCard 
                                    key={item.id} 
                                    number={item.number}
                                    title={item.title}
                                    descr={item.descr}
                                    fullDescr={item.fullDescr}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}
