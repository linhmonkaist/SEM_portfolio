import React, { useState, useEffect} from 'react';
import { motion } from 'framer-motion';
import { NavLink } from "react-router-dom";

import { AppWrap, MotionWrap} from '../../wrapper';
import { urlFor, client } from '../../client';
import './Team.scss';

const Team = () => {
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1});
  const [team, setTeam] = useState([]);

  useEffect(() => {
    const query = '*[_type == "team"]';

    client.fetch(query).then((data) => {
      setTeam(data);
    });
  }, []);
  
  return (
    <>
      <h2 className= "head-text"><span> Đội ngũ SEM Scholars </span> </h2>
      <motion.div
        animate = {animateCard}
        transition={{duration: 0.5, delayChildren: 0.5}}
        className='app__team-portfolio'
      >
        {team.map((member, index) => (
          <NavLink className="nav-link" to={{ pathname: "/member" }}  state= {{member: member}}>
          <div className= 'app__team-item app__flex' key={index}>
            <div className = 'app__team-img app__flex'>
               <img src={urlFor(member.imgUrl)} alt={member.name} />
                <motion.div
                  whileHover={{ opacity: [0, 1] }}
                  transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                  className= " app__flex"
                >
                </motion.div>
            </div>

            <div className= 'app__team-content app__flex'>
                
                  <h4 className="bold-text">{member.name}</h4>
                
              <p className="p-text">{member.title}</p>
            </div>
          </div>
          </NavLink>
        ))}
      </motion.div>
    </>
  )
}
// export default AppWrap(Work, 'work'); 
export default AppWrap(
  MotionWrap(Team, 'app__team'),
  'team',
  'app__primarybg'
);