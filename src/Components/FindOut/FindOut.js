import React from 'react'
import './FindOut.css'
import handIcon from '../../assets/hand-gesture.png'
import minus from '../../assets/minus.png'
function FindOut() {
    return (
        <section className="thoughts-home container-fluid"  >
            <div className="mindset">
                <div className="contents text-center">
                    <h6><span className="px-2"><img src={minus} alt=""/></span>  Find Out  <span className="px-2"><img src={minus} alt=""/></span></h6>
                    <h2 className="spFont">How It Works</h2>
                    <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis molestias temporibus<br/> nesciunt  incidunt aliquam quasi quidem ipsum laboriosam deserunt officiis!</p>
                </div>
            </div>
            <div className="container text-center">
                <div className="visions-home">
                    <div className="mission-home text-center">
                        <div className="vision-icon1-home text-center">
                          <img src={handIcon} alt=""/>
                        </div>
                      <h4 className="spFont">Choose Property</h4>
                      <p className="text-muted">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, dignissimos!</p>
                    </div>
                    <div className="mission-home text-center">
                        <div className="vision-icon1-home">
                           <img src={handIcon} alt=""/>
                        </div>
                      <h4  className="spFont">Find A Good Slide</h4>
                      <p className="text-muted">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, dignissimos!</p>
                    </div>
                    <div className="mission-home text-center ">
                        <div className="vision-icon1-home">
                            <img src={handIcon} alt=""/>
                        </div>
                      <h4 className="spFont">Go $ Explore</h4>
                      <p className="text-muted">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, dignissimos!</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FindOut
