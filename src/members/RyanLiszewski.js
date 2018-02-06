import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../styles/RyanLiszewski.css'
import '../styles/CoffeeAnimation.css'

import LeftArrow from '../assets/left-arrow.png';

const RYAN_AVATAR = 'https://avatars3.githubusercontent.com/u/5275250?s=460&v=4'

export default class RyanLiszewski extends Component {
  render() {
    return (
      <div className="main-container-ryan">
        <div className="arrow-avatar-container">
            <Link to="/" className="back-arrow-container-ryan">
              <img className="back-arrow-icon" src={LeftArrow} />
            </Link>
            <div className="avatar-container-ryan">
              <img className="avatar-ryan" src={RYAN_AVATAR} />
          </div>
        </div>

        <div className="title-ryan">Ryan Liszewski</div>
        <div className="subtitle-ryan">Lover of coffee, coffee shops and more coffee.</div>

        <div className = "animation-container">
          <div class="coffee-bag-container">
            <div class="coffee-bag">
              <span class="mast"></span>
              <span class="bag-top"></span>
              <span class="bag-body"></span>
              <span class="logo">
                <span class="bean bean-one"></span>
                <span class="bean bean-two"></span>
              </span>
              <span class="info info-one"></span>
              <span class="info info-two"></span>
              <span class="info info-three"></span>
              <span class="bag-bottom"></span>
              
            </div> {/* ./coffee-bag */}
          </div> {/* ./coffee-bag-container  */}
          
          <span class="grounds-container">
          <span class="grounds grounds-one"></span>
          <span class="grounds grounds-two"></span>
          <span class="grounds grounds-three"></span>
          <span class="grounds grounds-four"></span>
          </span>
        
          <div class="filter"></div> 
          <span class="roasting-top"></span>
        
          <div class="roasting-body">
            <span class="handle-container">
              <span class="handle-one"></span>
              <span class="handle-two"></span>
            </span>
          </div>
        
        {/* <!-- the black part between the coffee pot and the filter --> */}
          <span class="screen"></span>
          
          <span class="water-attachment"></span>
          
          <span class="water-lid"></span>
          
          <span class="water-pot">
            <span class="water-pot-gloss"></span>
            <span class="fill-line fill-line-first"></span>
            <span class="fill-line fill-line-last"></span>
            <span class="water"></span>
          </span>
        
          <span class="warmer-plate"></span>
        
          <span class="warmer">
            <span class="warmer-accent accent-one"></span>
            <span class="warmer-accent accent-two"></span>
            <span class="warmer-accent accent-three"></span>
          </span>
        
          <span class="warmer-base"></span>
        
          <span class="coffee-pot-container">
        
          <span class="coffee-pot-top"></span>
          
          <span class="coffee-pot-glass-top"></span>
          
          <span class="coffee-pot-glass-connector"></span>
          
          <span class="coffee-pot-glass-base">
            <span class="coffee-pot-gloss"></span>
          </span>
          
          <span class="coffee-pot-handle-container">
            <span class="handle-top"></span>
            <span class="handle-bottom"></span>
          </span>
          
          <span class="coffee-drip"></span>
        
          <span class="drip-cover"></span>
          
          <span class="coffee"></span>
        
          </span>
          
          <span class="coffee-warmer-plate"></span>
          
          <span class="coffee-base-left-end"></span>
          
          <span class="coffee-maker-base"></span>
          
          <span class="control-panel">
            <span class="gauge-one"></span>
            <span class="gauge-two"></span>
          </span>
          
          <span class="coffee-base-right-end"></span>
          
          <span class="leg leg-one"></span>
          
          <span class="leg leg-two"></span>
		  
        </div> 
        <div className="links-container-ryan">
          <a href="https://github.com/ryanliszewski" className="link">
            <img className="links-icon" src="http://bogas04.github.io/img/github.svg" />
          </a>
          <a href="mailto:ryanliszewski@gmail.com?Subject=I%20would%20like%20to%20know%20more%20about%20MobileSpace!" target="_top" className="link">
            <img className="links-icon" src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png" />
          </a>
          <a href="https://www.linkedin.com/in/ryanliszewski" className = "link>">
            <img className="links-icon" src="http://www.iconninja.com/files/331/775/772/linkedin-website-logo-service-social-web-communication-icon.svg"/>
          </a> 
        </div>
      </div>
    );
  }
}