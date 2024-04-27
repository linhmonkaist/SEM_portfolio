import React from 'react';

import { About, Footer, Header, Skills, Testimonial, Work, Team } from '../container'
import { Navbar } from '../components'

const Home = () => {
    return (
        <div className = "app">
            <Header/>
            <About/>
            <Team/>
            <Work/>
            <Skills/>
            <Testimonial/>
        </div>
    )
}

export default Home