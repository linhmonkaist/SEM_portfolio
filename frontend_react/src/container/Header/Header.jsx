import React from 'react'
import { useState, useEffect } from 'react';
import { urlFor, client } from '../../client';

import './Header.scss';
import { motion } from 'framer-motion'
import { AppWrap } from '../../wrapper';
import { images } from '../../constants'
import myimage from '../../assets/about01.png'
// import { Mentees} from '../Mentees/Mentees'  

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

const Header = () => {
  const [filterWorks, setFilterWorks] = useState([]);

  useEffect(() => {
    const query = '*[_type == "mentees"]';

    client.fetch(query).then((data) => {
      setFilterWorks(data);
    });
  }, []);
  return (
    <div className='app__header'>
      <div class="container-fluid header p-0 mb-5">
        <div class="row g-0 align-items-center flex-column-reverse flex-lg-row">
          <div class="col-lg-6 p-5 wow fadeIn" data-wow-delay="0.1s">
            {/* <h1 class="display-4 text-black mb-5">Đội ngũ hướng dẫn học bổng hàng đầu</h1> */}
            <div style={{ fontFamily: "'Francois One', sans-serif" }}>
      <h1 class= "display-4 mb-5">Đội ngũ hướng dẫn học bổng hàng đầu</h1>
    </div>
            <div class="row g-4">
              <div class="col-sm-4">
                <div class="border-start border-light ps-4">
                  <h2 class="text-black mb-1" data-toggle="counter-up">46+</h2>
                  <p class="text-light mb-0">Suất học bổng được chinh phục</p>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="border-start border-light ps-4">
                  <h2 class="text-black mb-1" data-toggle="counter-up">43+</h2>
                  <p class="text-light mb-0">Trường đại học đã chinh phục</p>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="border-start border-light ps-4">
                  <h2 class="text-black mb-1" data-toggle="counter-up">10</h2>
                  <p class="text-light mb-0">Mentor hỗ trợ</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
            <img class="img-header" src={myimage} alt="" />
          </div>
        </div>  
      </div>
    </div>
  )
}
export default AppWrap(Header, 'home')