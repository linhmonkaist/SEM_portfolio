import React, { useState, useEffect } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Review.scss';

const Review = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [review, serReview] = useState([]);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const query = '*[_type == "review"]';

    client.fetch(query).then((data) => {
      serReview(data);
    });
  }, []);
  const groupedReview = [];
  for (let i= 0; i < review.length; i += 3){
    let row = [review[i]];
    if (review[i+1]) row.push(review[i+1]);  
    if (review[i+2]) row.push(review[i+2]);  
    groupedReview.push(row); 
  }
  console.log(groupedReview);
  return (
    <>
      {groupedReview.length && (
        <>
          <div className="app__review-portfolio">
          {groupedReview[currentIndex].map((item) => (
            item &&
            (<>
              <div className="app__review-item app__flex">
                <div className= "app__reivew-item-top">
                  <img src={urlFor(item.imageurl)} alt={item.name} />
                  <div className='app__review-item-header'>
                    <h4 className="bold-text">{item.name}</h4>
                    <p className= 'p-text'>{item.packet}</p>
                  </div>
                </div>
                
                <div className="app__review-content">
                  <p className="p-text">{item.feedback}</p>
                </div>
              </div>
            </>)
          ))}
          </div>
          <div className="app__review-btns app__flex">
            <div className="app__flex" onClick={() => handleClick(currentIndex === 0 ? groupedReview.length - 1 : currentIndex - 1)}>
              <HiChevronLeft />
            </div>
            <div className="app__flex" onClick={() => handleClick(currentIndex === groupedReview.length - 1 ? 0 : currentIndex + 1)}>
              <HiChevronRight />
            </div>
          </div>
        </>

      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Review, 'app__review'),
  'review',
  'app__graybg',
);