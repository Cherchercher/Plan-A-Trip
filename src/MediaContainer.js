import React, { Component } from 'react';
import coverImage from './images/cover.jpg';
import SignUpForm from './subscribe.js';
import ScrollArea from 'react-scrollbar';

  
export default class MediaContainer extends Component {
  render() {
    return (  <ScrollArea
      speed={0.8}
      className="area"
      contentClassName="content"
      horizontal={false}
      >
      <div class="container">
          <img src={coverImage} className="Cover-image" alt="cover image" />   
          <div class="centered">
            <p1 class="intro"> Do you still go through 20 different websites to research logistics on flights, hotels, places to visit for your trip abroad?
                At Plan A Trip, we believe that travel planning should be fun and as easy as 1,2,3.
                We solve the complexetio of budget, scheduling, activity planning for you, so you enjoy your trip to the fullest.
            </p1>
            <p> Plan A Trip is the only online travel planner that connects the dots. </p>
            <p> Be informed. Explore. Have fun. </p>
            <p> Free Beta Version:	
            <SignUpForm />
            </p>
          </div>
      </div>
      </ScrollArea>
    );
  }
}

/*<p> Powered by AI, Plan A Trip features: </p>
<p>               One-stop travel planning </p>
<p>                 Real-time activity tracking and personalized recommendations  </p>

<p>
User Testimonies: Thanks to Plan A Trip, I don't need to go through 20 different websites to research logistics on flights, hotels, places to visit for my trip abroad.
                Plan A Trip is the only travel planner that connects the dots. 
                User Testimonies: With the day plan features in the Plan A Trip app, I can spend all my time enjoying my trip, without worrying where to go next.
                              I am always on top of my iteniry!

  <p> */