import React from 'react'
import { useState, useEffect } from 'react';
import { urlFor, client } from '../../client';

import './Header.scss';
import { motion } from 'framer-motion'
import { AppWrap } from '../../wrapper';
import { images } from '../../constants'
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
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-infor"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>{filterWorks.length}+ </span>
            <div style={{ marginLeft: 20 }}></div>
            <p className="p-text">Successful Mentees</p>
            <h1 className="head-text"></h1>
          </div>
          <div className="badge-cmp app__flex">
            <span>16+ </span>
            <div style={{ marginLeft: 20 }}></div>
            <p className="p-text">Quốc gia</p>
            <h1 className="head-text"></h1>
          </div>
          <div className="tag-cmp app__flex">
            <p className="p-text">Web developer </p>
            <p className="p-text">Free lancer </p>
          </div>
        </div>

      </motion.div>
      {/* <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5}}
        className="app__header-img"
      >
        <img src= {images.profile} alt="profile_bg"/>
        <motion.img 
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          src= {images.circle}
          alt= "profile_circle"
          className= "overlay_circle"
        />
      </motion.div> */}
      {/* <motion.div 
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className='app__header-circles'
      >
        {[images.flutter, images.redux, images.sass].map((circle, index) => (
          <div className= "circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt= "circle" />
          </div>
        ))}
      </motion.div> */}
    </div>
  )
}
export default AppWrap(Header, 'home')