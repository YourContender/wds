import React from 'react'
import { Header } from './layout/Header'
import { Main } from './layout/Main'
import { Services } from './layout/Services'
import Stat from './layout/Stat'
import { Portfolio } from './layout/Portfolio'

export const App = () => {
    return (
        <>
            <Header/>
            <Main/>
            <Services/>
            <Stat/>
            <Portfolio/>
        </>
    )
}
