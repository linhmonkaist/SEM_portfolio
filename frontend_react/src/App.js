import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Member} from './container'
import { Navbar, ScrollToTop} from './components'
import { Home, ServicePage} from './pages'
import './App.scss'

const App = () => {
    return (
        <div className = "app">
            <BrowserRouter>
                <Navbar/>
                <ScrollToTop/>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/member" element={<Member />} />
                    <Route path="/service" element={<ServicePage />} />
                </Routes>
                {/* <Footer/> */}
            </BrowserRouter>
        </div>
    )
}

export default App