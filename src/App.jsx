import React from 'react'
import { Header } from './layout/Header'
import { Main } from './layout/Main'
import { Services } from './layout/Services'
import Stat from './layout/Stat'
import { Portfolio } from './layout/Portfolio'
import WhyUs from './layout/WhyUs'
import { Footer } from './layout/Footer'

export const App = () => {
    return (
        <>
            <Header/>
            <Main/>
            <Services/>
            <Stat/>
            <WhyUs/>
            <Portfolio/>
            <Footer/>
        </>
    )
}
