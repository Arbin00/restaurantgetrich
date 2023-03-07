import React from 'react';
import {images,data} from '../../constants';
import { SubHeading,MenuItem } from '../../components';


const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id='contact'>
    <div className="app__wrapper_info">
      <SubHeading title="Contact"/>
      <h1 className='headtext__cormorant' style={{marginBottom:'3rem'}}>Find Us</h1>
      <div className="app__wrapper-content">
        <p className='p__opensans'>hajdkfan,dnf</p>
        <p className='p_cormorant' style={{color:'#DCCA87',margin:'2rem o'}}>Opening Hours</p>
        <p className='p__opensans'>Mon-fri</p>
        <p className='p__opensans'>Sat-sun</p>
      </div>
      <button className='custom__button' style={{marginTop:'2rem'}}>Visit Us</button>

    </div>
    <div className="app__wrapper_img">
      <img src={images.findus} alt="findus"/>
    </div>
 
  </div>
);

export default FindUs;
