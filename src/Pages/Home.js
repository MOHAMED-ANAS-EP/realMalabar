import React from 'react'
import Banner from '../Components/Banner/Banner'
import CallToAction from '../Components/CallToAction/CallToAction'
import FindOut from '../Components/FindOut/FindOut'

import HomeAbout from '../Components/HomeAbout/HomeAbout'
import HomeGrid from '../Components/HomeGrid/HomeGrid'
import Properties from '../Components/Properties/Properties'


function Home() {
    return (
      <div>       
      
        <Banner/>
        <HomeAbout/>
        <section className="thoughts container-fluid bg-light">
        <Properties/>
        <div className="container">
          <div className="row">
            <HomeGrid/>
            <HomeGrid/>
            <HomeGrid/>
            <HomeGrid/>
          </div>
        </div>
        </section>
        <FindOut/>
        <CallToAction/>
     
      </div>
    )
}

export default Home
