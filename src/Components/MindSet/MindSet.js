import React from 'react'
import './MindSet.css'
import minus from '../../assets/minus.png'
import goalIcon from '../../assets/goal.png'
import visionIcon from '../../assets/shared-vision.png'
import careerIcon from '../../assets/career.png'
function MindSet() {
    return (
        <section className="thoughts container-fluid bg-light">
    <div className="mindset">
        <div className="contents text-center">
            <h6><span className="px-2"><img src={minus} alt=""/></span>  Find Out  <span className="px-2"><img src={minus} alt=""/></span></h6>
            <h2 className="spFont" >Our Mindset</h2>
            <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis molestias temporibus nesciunt incidunt aliquam quasi quidem ipsum laboriosam deserunt officiis!</p>
        </div>
    </div>
    <div className="container text-center">
        <div className="visions d-flex flex-md-row flex-wrap justify-content-center">
            <div className="mission text-center">
                <div className="vision-icon1 text-center">
                  <img src={goalIcon} alt=""/>
                </div>
              <h4>Our Mision</h4>
              <p className="text-muted">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, dignissimos!</p>
            </div>
            <div className="mission text-center">
                <div className="vision-icon2">
                   <img src={visionIcon} alt=""/>
                </div>
              <h4>Our Vision</h4>
              <p className="text-muted">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, dignissimos!</p>
            </div>
            <div className="mission text-center ">
                <div className="vision-icon3">
                    <img src={careerIcon} alt=""/>
                </div>
              <h4>Our Goal</h4>
              <p className="text-muted">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, dignissimos!</p>
            </div>
        </div>
    </div>
</section>
    )
}

export default MindSet
