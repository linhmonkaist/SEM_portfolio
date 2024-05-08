import React, { useState, useEffect} from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap} from '../../wrapper';
import { urlFor, client } from '../../client';
import './Mentees.scss';

const Mentees = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1});
  const [works, setWorks] = useState([]);
  const [filterWorks, setFilterWorks] = useState([]);
  const itemArray = ['All', 'Korea', 'US', 'Mobile App', 'React JS', ]; 

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWorks(data);
    });
  }, []);
  
  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{y: 100, opacity: 0}]);

    setTimeout(() => {
      setAnimateCard([{y: 0, opacity: 1}]);

      if(item === 'All'){
        setFilterWorks(works);
      } else {
        setFilterWorks(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  }
  return (
    <>
      <h2 className= "head-text"><span> Hall of Fame </span> </h2>
      <p className= "p-text-description">Thành tích của team SEM Scholars</p>
      <div className = 'app__mentees-filter'>
        {itemArray.map((item, index) => (
          <div 
          key = {index}
          onClick={() => handleWorkFilter(item)}
          className={`app__mentees-filter-item app__flex p-text ${activeFilter === item ? 'item-active':''}`}>
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate = {animateCard}
        transition={{duration: 0.5, delayChildren: 0.5}}
        className='app__mentees-portfolio'
      >
        {filterWorks.map((work, index) => (
          <div className= 'app__mentees-item app__flex' key={index}>
            <div className = 'app__mentees-img app__flex'>
               <img src={urlFor(work.imgUrl)} alt={work.name} />
                <motion.div
                  whileHover={{ opacity: [0, 1] }}
                  transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                  className= "app__mentees-hover app__flex"
                >

                </motion.div>
            </div>

            <div className= 'app__mentees-content app__flex'>
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>{work.description}</p>

              <div className="app__mentees-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  )
}
// export default AppWrap(Work, 'work'); 
export default AppWrap(
  MotionWrap(Mentees, 'app__mentees'),
  'mentees',
  'app__primarybg'
);