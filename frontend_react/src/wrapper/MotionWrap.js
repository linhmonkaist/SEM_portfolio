import React, { useState, useEffect} from 'react';
import { motion } from 'framer-motion';

export const MotionWrap = (Component, classNames) => function HOC() {
  return (
    <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1]}}
        transition={{ duration: 0.5}}
        className={`${classNames} app__flex`}
    >
        <Component/>
    </motion.div>
  )
}