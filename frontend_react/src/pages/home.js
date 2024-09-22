import React from 'react';

import { Services, Header, Skills, Review, Mentees, Team, Contact } from '../container'
import { Navbar } from '../components'

const Home = () => {
    return (
        <div className = "app">
            <Header/>
            <Services/>
            <Team/>
            <Review/>
            <Mentees/>
            <Contact />
        </div>
    )
}

export default Home