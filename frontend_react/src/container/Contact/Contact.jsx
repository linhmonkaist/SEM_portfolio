import React, { useState, useEffect } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import { images } from '../../constants';
import './Contact.scss';

const Contact = () => {
  console.log("go in contact")
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
  return (
    <>
   
<div class="app__flex">


  <footer
          class="text-center text-lg-start text-black"
          >
  
    <section class="app__flex">
      <div class="container text-center text-md-start mt-5">
   
        <div class="row mt-3">
      
          <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
        
            <h6 class="text-uppercase fw-bold">SEM Scholars</h6>
            <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                // style="width: 60px; background-color: #7c4dff; height: 2px"
                />
            <p>
              Here you can use rows and columns to organize your footer
              content. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit.
            </p>
          </div>
       

   
          <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
      
            <h6 class="text-uppercase fw-bold">Register</h6>
            <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                // style="width: 60px; background-color: #7c4dff; height: 2px"
                />
            <p>
              <a href="#!" class="text-black">For mentee</a>
            </p>
            <p>
              <a href="#!" class="text-black">For mentor</a>
            </p>
            <p>
              <a href="#!" class="text-black">Services information</a>
            </p>
          </div>
  

 
          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
       
            <h6 class="text-uppercase fw-bold">Useful links</h6>
            <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                // style="width: 60px; background-color: #7c4dff; height: 2px"
                />
            <p>
              <a href="#!" class="text-black">Your Account</a>
            </p>
            <p>
              <a href="#!" class="text-black">Become an Affiliate</a>
            </p>
            <p>
              <a href="#!" class="text-black">Shipping Rates</a>
            </p>
            <p>
              <a href="#!" class="text-black">Help</a>
            </p>
          </div>
  
          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          
            <h6 class="text-uppercase fw-bold">Contact</h6>
            <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                // style="width: 60px; background-color: #7c4dff; height: 2px"
                />
            <p><i class="fas fa-home mr-3"></i> New York, NY 10012, US</p>
            <p><i class="fas fa-envelope mr-3"></i> info@example.com</p>
            <p><i class="fas fa-phone mr-3"></i> + 01 234 567 88</p>
            <p><i class="fas fa-print mr-3"></i> + 01 234 567 89</p>
          </div>
        
        </div>
     
      </div>
    </section>
    
    <div
         class="text-center p-3"
        //  style="background-color: rgba(0, 0, 0, 0.2)"
         >
      © 2020 Copyright:
      <p class="text-black" >SEM Scholars - Scholarship Exploring with Mentors</p
        >
    </div>
  
  </footer>


</div>

      {/* <div className="app__contact-portfolio">
      <>
        <div className="app__contact-item app__flex">
          
            <img src={images.logo} alt="logo" />
            <div className='app__contact-item-header'>
              <h2 className="bold-text">SEM Scholars</h2>
            </div>
          </div>

        </div>
      </>
      <>
        <div className="app__contact-item app__flex">
        <h4 className="bold-text">Contact us</h4>
          <div className="app__review-content">
            <p className="p-text">Facebook page </p>
            <p className="p-text">Instagram </p>
            <p className="p-text">Threads</p>
            <p className="p-text">Tiktok</p>
            <p className="p-text">Email</p>
          </div>
        </div>
      </>
      <>
        <div className="app__contact-item app__flex">
          <h4 className="bold-text">Join us!</h4>
          <div className="app__review-content">

          </div>
        </div>
      </>
      </div> */}
    </>
  );
};

export default AppWrap(
  MotionWrap(Contact, 'app__contact'),
  'contact',
  'app__graybg',
);