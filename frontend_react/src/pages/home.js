import React from 'react';

import { Services, Header, Skills, Review, Mentees, Team } from '../container'
import { Navbar } from '../components'

const Home = () => {
    return (
        <div className = "app">
            <Header/>
            <Services/>
            <Team/>
            <Mentees/>
            <Review/>
        </div>
    )
}

export default Home