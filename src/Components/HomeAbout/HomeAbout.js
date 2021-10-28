import React from 'react'
import './HomeAbout.css'
import minus from '../../assets/minus.png'
import insure from '../../assets/insurance.png'
import irregular1 from '../../assets/slider1.jpg'
import irregular2 from '../../assets/login.jpg'
function HomeAbout() {
    return (
        <section className="home-abouts" >
            <div className="container">
              <div className="row insurance">
                <div className="col-md-5 saver">
                    <h6>About Us <span><img src={ minus } alt=""/></span></h6>
                    <h2 className="spFont">Super Delux Mansion of <br/><span>Gear House .Inc</span></h2>
                    <hr className="dropdown-divider bg-dark"/> 
                    <p className="text-muted">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore laborum natus rem iure omnis necessitatibus ea architecto quaerat dolores corrupti cupiditate aperiam perspiciatis nam consequuntur, facilis eum adipisci voluptas id!</p>
                    <div className="life justify-content-center">
                        <div className="safe text-center">
                            <img src={ insure } alt=""/>
                            <h6 className="text-muted">Safe Life</h6>
                        </div>
                       
                            <div className="safe text-center">
                                <img src={ insure } alt=""/>
                                <h6 className="text-muted">Safe Life</h6>
                            </div>
                        
                       
                            <div className="safe text-center">
                                <img src={ insure }alt=""/>
                                <h6 className="text-muted">Safe Life</h6>
                            </div>
                        
                    </div>
                </div>
                <div className="col-md-7">
                    <div className="irregular d-flex">
                        <div className="image1">
                            <img src={irregular1} className="type1" alt=""/>
                        </div>
                        <div className="image2">
                            <img src={irregular2} className="type2" alt=""/>
                        </div>
                    </div>
                    <div className="booking">
                      <img src={irregular1}  className="type1" alt=""/>                        
                    </div>
                </div>
              </div>
            </div>
          </section>   
    )
}

export default HomeAbout
