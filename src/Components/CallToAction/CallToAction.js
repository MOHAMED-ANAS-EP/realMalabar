import React from 'react'
import './CallToAction.css'
import manImg from '../../assets/cnt.jpg'
import minus from '../../assets/minus.png' 
function CallToAction() {
    return (
        <section className="section-last">
        <div className="container">
          <div className="row master">
            <div className="col-md-5">
              <div className="lst-image" style={{ 
             backgroundImage: `url(${manImg})`}}>
              </div>                 
            </div>
            <div className="col-md-7 master-head">
             <h6>Call To Action <span className="px-2"><img src={minus} alt=""/></span> </h6>
             <h2 className="spFont">Contact With Our <br/> Certified Agent</h2>
             <h5 className="mobile"> 9447193424, 9447893307</h5>
             <div className="appointment-button">
              <a className="watsup"href="https://wa.me/9447193424"> </a>
               <a  href="tel:9447193424" className="calling"><i className="bi bi-telephone"></i>  Make a Call</a>
               <button className="apoint">Get Appointment</button>
             </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default CallToAction
